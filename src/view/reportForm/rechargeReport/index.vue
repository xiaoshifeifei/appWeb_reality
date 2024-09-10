<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <!-- <el-form-item label="ID">
          <el-input v-model="searchInfo.id" placeholder="ID" />
        </el-form-item>
        <el-form-item label="任务名">
          <el-input v-model="searchInfo.key" placeholder="任务名" />
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" icon="search" @click="onSubmit">
            {{ t("general.search") }}
          </el-button>
          <el-button icon="refresh" @click="onReset">
            {{ t("general.reset") }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="gva-table-box">
      <!-- <div class="gva-btn-list">
        <el-button type="primary" icon="plus" @click="openDialog('add')">
          {{ t("general.add") }}
        </el-button>
      </div> -->
      <el-table
        border
        :data="tableData"
        @sort-change="sortChange"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" align="center" width="60" />
        <el-table-column
          align="center"
          min-width="90"
          label="id"
          prop="accountId"
        >
        </el-table-column>

        <el-table-column
          align="center"
          label="用户名"
          min-width="150"
          prop="username"
        />

        <el-table-column
          align="center"
          label="手机号"
          min-width="170"
          prop="phone"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="邮箱"
          min-width="200"
          prop="email"
        >
        </el-table-column>

        <el-table-column align="center" label="状态" min-width="150">
          <template #default="scope">
            <el-switch
              v-model="scope.row.status"
              inline-prompt
              :active-value="0"
              :inactive-value="1"
              @change="
                () => {
                  switchStatus(scope.row);
                }
              "
            />
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          fixed="right"
          label="操作"
          min-width="200"
        >
          <!-- <template #default="scope">
            <el-button
           type="primary"
              size="small"
              @click="editTackFunc(scope.row)"
            >
               {{ t("general.edit") }}
            </el-button>
            <el-button
             type="danger"
              size="small"
              @click="deleteTackFunc(scope.row)"
            >
              {{ t("general.delete") }}
            </el-button>
          </template> -->
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
            <el-button @click="closeDialog">
              {{ t("general.close") }}
            </el-button>
            <el-button type="primary" @click="enterDialog">
              {{ t("general.confirm") }}
            </el-button>
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
        <el-form-item label="before" prop="before">
          <el-input-number v-model="form.before" autocomplete="off" />
        </el-form-item>
        <el-form-item label="desc" prop="desc">
          <el-input v-model="form.desc" autocomplete="off" />
        </el-form-item>
        <div style="padding-left: 40px; color: black; font-size: 16px">
          模版
        </div>
        <el-row class="w-full">
          <el-col :span="8">
            <el-form-item label="type" prop="complete">
              <el-select
                v-model="form.complete.type"
                style="width: 100%"
                placeholder="type"
              >
                <el-option
                  v-for="item in completeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="value">
              <el-input v-model="form.complete.value" autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="value2">
              <el-input v-model="form.complete.value2" autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="limit">
              <el-input v-model="form.complete.limit" autocomplete="off" />
            </el-form-item>
          </el-col>
        </el-row>

        <div style="padding-left: 40px; color: black; font-size: 16px">
          奖励
        </div>

        <el-row class="w-full">
          <el-col :span="8">
            <el-form-item label="type" prop="complete">
              <el-select
                v-model="form.award.type"
                style="width: 100%"
                placeholder="type"
              >
                <el-option
                  v-for="item in completeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="code">
              <el-input v-model="form.award.code" autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="num">
              <el-input v-model="form.award.num" autocomplete="off" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="解锁" prop="unlock">
          <el-input v-model="form.unlock.value" autocomplete="off" />
        </el-form-item>
        <el-form-item label="标签" prop="tag">
          <el-input v-model="form.tag" autocomplete="off" />
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
  
  <script setup>
import {
  getUserList,
  setUserInfo,
  deleteTack,
  updateTack,
  createTack,
  enterSyncApi,
} from "@/api/userInfo";
import { setUserAuthorities } from "@/api/user";
import { ref, watch } from "vue";
import { getAuthorityList } from "@/api/authority";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n"; // added by mohamed hassan to support multilanguage

const { t } = useI18n(); // added by mohamed hassan to support multilanguage
const router = useRouter();

defineOptions({
  name: "userInfo",
});

const apis = ref([]);
const form = ref({
  id: "",
  before: 0,
  desc: "",
  complete: {
    value: 0,
    value2: 0,
    limit: 0,
  },
  award: {
    code: "",
    num: 0,
  },
  unlock: "",
  tag: "",
});
const methodOptions = ref([
  {
    value: "POST",
    label: "创建",
    type: "success",
  },
  {
    value: "GET",
    label: "查看",
    type: "",
  },
  {
    value: "PUT",
    label: "更新",
    type: "warning",
  },
  {
    value: "DELETE",
    label: "删除",
    type: "danger",
  },
]);

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
const completeOptions = ref([
  { label: 101, value: 101 },
  { label: 102, value: 102 },
  { label: 103, value: 103 },
  { label: 104, value: 104 },
  { label: 105, value: 105 },
  { label: 106, value: 106 },
  { label: 107, value: 107 },
]);

watch(
  () => tableData.value,
  () => {
    setAuthorityIds();
  }
);
const setAuthorityIds = () => {
  tableData.value &&
    tableData.value.forEach((user) => {
      user.authorityIds =
        user.authorities &&
        user.authorities.map((i) => {
          return i.authorityId;
        });
    });
};
const authOptions = ref([]);
const setOptions = (authData) => {
  authOptions.value = [];
  setAuthorityOptions(authData, authOptions.value);
};
const tempAuth = {};
const changeAuthority = async (row, flag, removeAuth) => {
  if (flag) {
    if (!removeAuth) {
      tempAuth[row.ID] = [...row.authorityIds];
    }
    return;
  }
  await nextTick();
  const res = await setUserAuthorities({
    ID: row.ID,
    authorityIds: row.authorityIds,
  });
  if (res.code === 0) {
    ElMessage({ type: "success", message: "角色设置成功" });
  } else {
    if (!removeAuth) {
      row.authorityIds = [...tempAuth[row.ID]];
      delete tempAuth[row.ID];
    } else {
      row.authorityIds = [removeAuth, ...row.authorityIds];
    }
  }
};
// 初始化相关
const setAuthorityOptions = (AuthorityData, optionsData) => {
  AuthorityData &&
    AuthorityData.forEach((item) => {
      if (item.children && item.children.length) {
        const option = {
          authorityId: item.authorityId,
          authorityName: item.authorityName,
          children: [],
        };
        setAuthorityOptions(item.children, option.children);
        optionsData.push(option);
      } else {
        const option = {
          authorityId: item.authorityId,
          authorityName: item.authorityName,
        };
        optionsData.push(option);
      }
    });
};
const switchStatus = async (row) => {
  let myUserInfo = JSON.parse(JSON.stringify(row));

  let params = {
    accountId: myUserInfo.accountId,
    status: myUserInfo.status,
  };
  const res = await setUserInfo(params);
  if (res.code === 0) {
    ElMessage({
      type: "success",
      message: `${
        params.status === 0
          ? t("user.enabledSuccessfully")
          : t("user.disabledSuccessfully")
      }`,
    });
    await getTableData();
  }
};
const syncing = ref(false);

const enterSyncDialog = async () => {
  syncing.value = true;
  const res = await enterSyncApi(syncApiData.value);
  syncing.value = false;
  if (res.code === 0) {
    ElMessage({
      type: "success",
      message: res.msg,
    });
    syncApiFlag.value = false;
    getTableData();
  }
};
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
  const table = await getUserList({
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
const initPage = async () => {
  getTableData();
  const res = await getAuthorityList({
    page: 1,
    pageSize: 999,
  });
  setOptions(res.data.list);
};

initPage();

// 批量操作
const handleSelectionChange = (val) => {
  apis.value = val;
};

const syncApiData = ref({
  newApis: [],
  deleteApis: [],
  ignoreApis: [],
});

const syncApiFlag = ref(false);

// 弹窗相关
const apiForm = ref(null);
const initForm = () => {
  apiForm.value.resetFields();
  form.value = {
    id: "",
    before: 0,
    desc: "",
    complete: {
      value: 0,
      value2: 0,
      limit: 0,
    },
    award: {
      code: "",
      num: 0,
    },
    unlock: "",
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
function isJSON(str) {
  if (typeof str !== "string") {
    return false;
  } else {
    return true;
  }
}
const editTackFunc = async (row) => {
  let rows = JSON.parse(JSON.stringify(row));
  if (isJSON(rows.complete)) {
    rows.complete = JSON.parse(rows.complete)[0]
      ? JSON.parse(rows.complete)[0]
      : {};
  }
  if (isJSON(rows.award)) {
    rows.award = JSON.parse(rows.award)[0] ? JSON.parse(rows.award)[0] : {};
  }
  if (isJSON(rows.unlock)) {
    rows.unlock = JSON.parse(rows.unlock)[0] ? JSON.parse(rows.unlock)[0] : {};
  }
  form.value = rows;
  openDialog("edit");
};

const enterDialog = async () => {
  apiForm.value.validate(async (valid) => {
    if (valid) {
      form.value.complete = JSON.stringify([form.value.complete]);
      form.value.award = JSON.stringify([form.value.award]);
      form.value.unlock = JSON.stringify([form.value.unlock]);
      switch (type.value) {
        case "add":
          {
            form.value.id = Number(form.value.id);
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
</style>
  