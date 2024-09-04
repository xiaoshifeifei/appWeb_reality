<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item label="ID">
          <el-input v-model="searchInfo.id" placeholder="ID" />
        </el-form-item>
        <el-form-item label="任务名">
          <el-input v-model="searchInfo.key" placeholder="任务名" />
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
            <el-button
              icon="edit"
              type="primary"
              link
              @click="editTackFunc(scope.row)"
            >
              编辑
            </el-button>
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
      v-if="dialogFormVisible"
      v-model="dialogFormVisible"
      size="60%"
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
        <el-row class="w-full">
          <el-col :span="12">
            <el-form-item label="ID" prop="id">
              <el-input-number :min="0" v-model="form.id" autocomplete="off" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row class="w-full">
          <el-col :span="12">
            <el-form-item label="before" prop="before">
              <el-input-number
                :min="0"
                v-model="form.before"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="desc" prop="desc">
          <el-input v-model="form.desc" autocomplete="off" />
        </el-form-item>
        <div style="padding: 0 0 20px 40px; color: black; font-size: 16px">
          模版
        </div>
        <el-row class="w-full">
          <el-col :span="12" v-if="form.complete[0].type || type === 'add'">
            <el-form-item label="type" prop="complete">
              <el-input-number
                :min="0"
                v-model="form.complete[0].type"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" v-if="form.complete[0].value || type === 'add'">
            <el-form-item label="value">
              <el-input-number
                :min="0"
                v-model="form.complete[0].value"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" v-if="form.complete[0].code || type === 'add'">
            <el-form-item label="code">
              <el-input v-model="form.complete[0].code" autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="12" v-if="form.complete[0].game">
            <el-form-item label="game">
              <el-input v-model="form.complete[0].game" autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="12" v-if="form.complete[0].mode || type === 'add'">
            <el-form-item label="mode">
              <el-input v-model="form.complete[0].mode" autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="12" v-if="form.complete[0].limit || type === 'add'">
            <el-form-item label="limit">
              <el-input-number
                :min="0"
                v-model="form.complete[0].limit"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col
            :span="12"
            v-if="form.complete[0].initialize || type === 'add'"
          >
            <el-form-item label="initialize">
              <el-input
                v-model="form.complete[0].initialize"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" v-if="form.complete[0].value2 || type === 'add'">
            <el-form-item label="value2">
              <el-input-number
                :min="0"
                v-model="form.complete[0].value2"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <div style="padding: 0 0 20px 40px; color: black; font-size: 16px">
          奖励
        </div>
        <el-row class="w-full">
          <el-col :span="12" v-if="form.award[0].type || type === 'add'">
            <el-form-item label="type" prop="award">
              <el-input-number
                :min="0"
                v-model="form.award[0].type"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" v-if="form.award[0].id || type === 'add'">
            <el-form-item label="id">
              <el-input-number
                :min="0"
                v-model="form.award[0].id"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" v-if="form.award[0].code || type === 'add'">
            <el-form-item label="code">
              <el-input
                :min="0"
                v-model="form.award[0].code"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" v-if="form.award[0].num || type === 'add'">
            <el-form-item label="num">
              <el-input-number
                :min="0"
                v-model="form.award[0].num"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <div style="padding: 0 0 20px 40px; color: black; font-size: 16px">
          解锁
        </div>
        <el-row class="w-full">
          <el-col :span="12" v-if="form.unlock[0].type || type === 'add'">
            <el-form-item label="type" prop="unlock">
              <el-input-number
                :min="0"
                v-model="form.unlock[0].type"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" v-if="form.unlock[0].level || type === 'add'">
            <el-form-item label="level" prop="unlock">
              <el-input-number
                :min="0"
                v-model="form.unlock[0].level"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="标签" prop="tag">
          <el-input v-model="form.tag" autocomplete="off" />
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script setup>
import { getTackList, deleteTack, updateTack, createTack } from "@/api/tack";
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();

defineOptions({
  name: "tack",
});

const apis = ref([]);
const form = ref({
  id: 0,
  before: 0,
  desc: "",
  complete: [
    {
      type: 0,
      value: 0,
      code: "",
      game: "",
      mode: "",
      limit: 0,
      initialize: "",
      value2: 0,
    },
  ],
  award: [
    {
      type: 0,
      id: 0,
      code: "",
      num: 0,
    },
  ],
  unlock: [
    {
      type: 0,
      level: 0,
    },
  ],
  tag: "",
});

const type = ref("");
const rules = ref({
  id: [{ required: true, message: "请输入id", trigger: "blur" }],
  desc: [{ required: true, message: "请输入desc", trigger: "blur" }],
  complete: [{ required: true, message: "请选择类型", trigger: "blur" }],
  award: [{ required: true, message: "请选择类型", trigger: "blur" }],
});

const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
const searchInfo = ref({});

const clickBetDetail = (id) => {
  let query = {};
  query["id"] = id;
  router.push({ name: "taskDetails", query });
};

const onReset = () => {
  searchInfo.value = {};
};
// 搜索

const onSubmit = () => {
  page.value = 1;
  pageSize.value = 10;
  getTableData();
};

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val;
  getTableData();
};

const handleCurrentChange = (val) => {
  page.value = val;
  getTableData();
};

// 查询
const getTableData = async () => {
  const table = await getTackList({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  });
  if (table.code === 0) {
    tableData.value = table.data.list;
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
    id: 0,
    before: 0,
    desc: "",
    complete: [
      {
        type: 0,
        value: 0,
        code: "",
        game: "",
        mode: "",
        limit: 0,
        initialize: "",
        value2: 0,
      },
    ],
    award: [
      {
        type: 0,
        id: 0,
        code: "",
        num: 0,
      },
    ],
    unlock: [
      {
        type: 0,
        level: 0,
      },
    ],
    tag: "",
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

const editTackFunc = async (row) => {
  let rows = JSON.parse(JSON.stringify(row));
  form.value = rows;
  openDialog("edit");
};

const enterDialog = async () => {
  apiForm.value.validate(async (valid) => {
    if (valid) {
      switch (type.value) {
        case "add":
          {
            const res = await createTack(form.value);
            if (res.code === 0) {
              ElMessage({
                type: "success",
                message: "添加成功",
                showClose: true,
              });
            }
            getTableData();
            closeDialog();
          }
          break;
        case "edit":
          {
            const res = await updateTack(form.value);
            if (res.code === 0) {
              ElMessage({
                type: "success",
                message: "编辑成功",
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
    const res = await deleteTack({ id: row.id });
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
.el-input-number {
  width: 50%;
}
</style>
