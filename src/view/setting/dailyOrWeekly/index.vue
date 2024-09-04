<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item label="日/周">
          <el-select v-model="searchInfo.type" clearable placeholder="请选择">
            <el-option
              v-for="item in methodOptions"
              :key="item.value"
              :label="`${item.label}`"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" icon="search" @click="onSubmit">
            查询
          </el-button>
          <el-button icon="refresh" @click="onReset"> 重置 </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button type="primary" icon="plus" @click="openDialog('add')">
          新增
        </el-button>
      </div>
      <el-table
        border
        :data="tableData"
        @sort-change="sortChange"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="60" />
        <el-table-column align="center" min-width="90" label="id" prop="id">
          <template #default="scope">
            <el-link type="primary" @click="clickBetDetail(scope.row.id)">{{
              scope.row.id
            }}</el-link>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="desc"
          min-width="150"
          prop="desc"
        />

        <el-table-column
          align="center"
          label="模版"
          min-width="170"
          prop="complete"
        >
          <template #default="scope">
            <div>{{ scope.row.complete }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="奖励"
          min-width="200"
          prop="award"
        >
          <template #default="scope">
            <div>{{ scope.row.award }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="unlock"
          min-width="150"
          prop="unlock"
        >
          <template #default="scope">
            <div>{{ scope.row.unlock }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="标签"
          min-width="150"
          prop="tag"
        />
        <el-table-column
          align="center"
          label="before"
          min-width="150"
          prop="before"
        />
        <el-table-column align="center" fixed="right" label="操作" width="200">
          <template #default="scope">
            <!-- <el-button
              icon="edit"
              type="primary"
              link
              @click="editTackFunc(scope.row)"
            >
              编辑
            </el-button> -->
            <el-button
              icon="delete"
              type="primary"
              link
              @click="deleteTackFunc(scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="gva-pagination">
        <el-pagination
          :current-page="page"
          :page-size="pageSize"
          :page-sizes="[10, 30, 50, 100]"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </div>
    </div>

    <el-drawer
      v-model="dialogFormVisible"
      size="40%"
      :before-close="closeDialog"
      :show-close="false"
    >
      <template #header>
        <div class="flex justify-between items-center">
          <span class="text-lg">{{ dialogTitle }}</span>
          <div>
            <el-button @click="closeDialog"> 取 消 </el-button>
            <el-button type="primary" @click="enterDialog"> 确 定 </el-button>
          </div>
        </div>
      </template>
      <el-form
        class="myForm"
        ref="apiForm"
        :model="form"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="ID" prop="id">
          <el-input v-model="form.id" autocomplete="off" />
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script setup>
import {
  dailyOrWeeklyGet,
  dailyOrWeeklyDel,
  dailyOrWeeklyAdd,
} from "@/api/tack";
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();

defineOptions({
  name: "dailyOrWeekly",
});

const apis = ref([]);
const form = ref({
  id: "",
});
const methodOptions = ref([
  {
    value: "daily",
    label: "日常任务",
  },
  {
    value: "weekly",
    label: "周常任务",
  },
]);

const type = ref("");
const rules = ref({
  id: [{ required: true, message: "请输入id", trigger: "blur" }],
  desc: [{ required: true, message: "请输入desc", trigger: "blur" }],
  complete: [{ required: true, message: "请选择请求方式", trigger: "blur" }],
  award: [{ required: true, message: "请输入api介绍", trigger: "blur" }],
});

const page = ref(1);
const total = ref(0);
const pageSize = ref(9999);
const tableData = ref([]);
const searchInfo = ref({ type: "日常任务" });

const onReset = () => {
  searchInfo.value = { type: "日常任务" };
};
// 搜索

const onSubmit = () => {
  page.value = 1;
  pageSize.value = 9999;

  getTableData();
};

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val;
  // getTableData();
};

const handleCurrentChange = (val) => {
  page.value = val;
  // getTableData();
};

// 查询
const getTableData = async () => {
  if (searchInfo.value.type == "日常任务") {
    searchInfo.value.type = "daily";
  }
  const table = await dailyOrWeeklyGet({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  });
  if (table.code === 0) {
    tableData.value = table.data;
    total.value = table.data.total;
    page.value = table.data.page;
    pageSize.value = table.data.pageSize;
  }
};

getTableData();
// 批量操作
const handleSelectionChange = (val) => {
  apis.value = val;
};

// 弹窗相关
const apiForm = ref(null);
const initForm = () => {
  apiForm.value.resetFields();
  form.value = {
    id: "",
  };
};

const dialogTitle = ref("新增");
const dialogFormVisible = ref(false);
const openDialog = (key) => {
  switch (key) {
    case "add":
      dialogTitle.value = "新增";
      break;
    case "edit":
      dialogTitle.value = "编辑";
      break;
    default:
      break;
  }
  type.value = key;
  dialogFormVisible.value = true;
};
const closeDialog = () => {
  initForm();
  dialogFormVisible.value = false;
};
const clickBetDetail = (id) => {
  let query = {};
  query["id"] = id;
  router.push({ name: "taskDetails", query });
};

const enterDialog = async () => {
  apiForm.value.validate(async (valid) => {
    if (valid) {
      switch (type.value) {
        case "add":
          {
            form.value.id = Number(form.value.id);
            form.value.type = searchInfo.value.type;
            const res = await dailyOrWeeklyAdd(form.value);
            if (res.code === 0) {
              ElMessage({
                type: "success",
                message: res.msg,
                showClose: true,
              });
            }
            getTableData();
            closeDialog();
          }
          break;
        default:
          {
            ElMessage({
              type: "error",
              message: "未知操作",
              showClose: true,
            });
          }
          break;
      }
    }
  });
};

const deleteTackFunc = async (row) => {
  ElMessageBox.confirm("此操作将永久删除任务, 是否继续?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    const res = await dailyOrWeeklyDel({
      id: row.id,
      type: searchInfo.value.type,
    });
    if (res.code === 0) {
      ElMessage({
        type: "success",
        message: "删除成功!",
      });
      getTableData();
    }
  });
};
</script>

<style scoped lang="scss">
.warning {
  color: #dc143c;
}
</style>
