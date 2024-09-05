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
        highlight-current-row
        :header-cell-style="{
          backgroundColor: '#217E8C',
          Color: '#FFF',
        }"
        :row-class-name="tableRowClassName"
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
              <el-input-number
                :disabled="type === 'edit'"
                :min="0"
                v-model="form.id"
                autocomplete="off"
              />
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
        <template v-for="(item, index) in form.complete" :key="index">
          <el-row class="w-full">
            <el-col :span="12" v-if="item.type || type !== null">
              <el-form-item
                label="type"
                :prop="`complete.${index}.type`"
                :rules="rules['complete.type']"
              >
                <el-input-number
                  :min="0"
                  v-model="item.type"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.value || type !== null">
              <el-form-item label="value">
                <el-input-number
                  :min="0"
                  v-model="item.value"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.code || type !== null">
              <el-form-item label="code">
                <el-input v-model="item.code" autocomplete="off" />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.game">
              <el-form-item label="game">
                <el-input v-model="item.game" autocomplete="off" />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.mode || type !== null">
              <el-form-item label="mode">
                <el-input v-model="item.mode" autocomplete="off" />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.limit || type !== null">
              <el-form-item label="limit">
                <el-input-number
                  :min="0"
                  v-model="item.limit"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.initialize || type !== null">
              <el-form-item label="initialize">
                <el-input v-model="item.initialize" autocomplete="off" />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.value2 || type !== null">
              <el-form-item label="value2">
                <el-input-number
                  :min="0"
                  v-model="item.value2"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </template>
        <div style="padding: 0 0 20px 40px; color: black; font-size: 16px">
          奖励
        </div>
        <template v-for="(item, index) in form.award" :key="index">
          <el-row class="w-full">
            <el-col :span="12" v-if="item.type || type !== null">
              <el-form-item
                label="type"
                :prop="`award.${index}.type`"
                :rules="rules['award.type']"
              >
                <el-input-number
                  :min="0"
                  v-model="item.type"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.id || type !== null">
              <el-form-item label="id">
                <el-input-number
                  :min="0"
                  v-model="item.id"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.code || type !== null">
              <el-form-item label="code">
                <el-input :min="0" v-model="item.code" autocomplete="off" />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.num || type !== null">
              <el-form-item label="num">
                <el-input-number
                  :min="0"
                  v-model="item.num"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </template>
        <div style="padding: 0 0 20px 40px; color: black; font-size: 16px">
          解锁
        </div>
        <template v-for="(item, index) in form.unlock" :key="index">
          <el-row class="w-full">
            <el-col :span="12" v-if="item.type || type !== null">
              <el-form-item
                label="type"
                :prop="`unlock.${index}.type`"
                :rules="rules['unlock.type']"
              >
                <el-input-number
                  :min="0"
                  v-model="item.type"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" v-if="item.level || type !== null">
              <el-form-item label="level" prop="unlock">
                <el-input-number
                  :min="0"
                  v-model="item.level"
                  autocomplete="off"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </template>
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
  id: null,
  before: null,
  desc: "",
  complete: [
    {
      type: null,
      value: null,
      code: "",
      game: "",
      mode: "",
      limit: null,
      initialize: "",
      value2: null,
    },
  ],
  award: [
    {
      type: null,
      id: null,
      code: "",
      num: null,
    },
  ],
  unlock: [
    {
      type: null,
      level: null,
    },
  ],
  tag: "",
});

const type = ref("");
const rules = ref({
  id: [{ required: true, message: "请输入id", trigger: "blur" }],
  "complete.type": [
    { required: true, message: "请输入模板类型", trigger: "blur" },
  ],
  "award.type": [
    { required: true, message: "请输入奖励类型", trigger: "blur" },
  ],
  "unlock.type": [{ required: true, message: "请输入类型", trigger: "blur" }],
});

const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
const searchInfo = ref({});

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
const clickBetDetail = (id) => {
  let query = {};
  query["id"] = id;
  router.push({ name: "taskDetails", query });
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
    id: null,
    before: null,
    desc: "",
    complete: [
      {
        type: null,
        value: null,
        code: "",
        game: "",
        mode: "",
        limit: null,
        initialize: "",
        value2: null,
      },
    ],
    award: [
      {
        type: null,
        id: null,
        code: "",
        num: null,
      },
    ],
    unlock: [
      {
        type: null,
        level: null,
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

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 0) {
    return "";
  } else {
    return "warnBg";
  }
};
</script>
<style scoped lang="scss">
:deep(.el-table td.el-table__cell div) {
  color: #000;
}
:deep(.el-table tr th .cell) {
  color: #fff !important;
}
:deep(.el-table .warnBg) {
  background-color: #c7e4ea;
  color: #000;
}
:deep(.el-table__body tr:hover > td) {
  background-color: #6dc58b !important;
}
:deep(.el-table__body tr.current-row > td) {
  background-color: #6dc58b !important;
}
</style>

<style scoped lang="scss">
.warning {
  color: #dc143c;
}
.el-input-number {
  width: 50%;
}
</style>



