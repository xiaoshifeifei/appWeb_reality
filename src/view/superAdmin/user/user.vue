<template>
  <div>
    <warning-bar :title="t('authority.authorityNote')" />
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button type="primary" icon="plus" @click="addUser">{{
          t("user.addUser")
        }}</el-button>
      </div>
      <el-table
        :data="tableData"
        row-key="ID"
        highlight-current-row
        :header-cell-style="{
          backgroundColor: 'var(--el-tab-bgc)',
          Color: '#FFF',
        }"
        :row-class-name="tableRowClassName"
      >
        <el-table-column align="left" :label="t('user.avatar')" min-width="75">
          <template #default="scope">
            <CustomPic style="margin-top: 8px" :pic-src="scope.row.headerImg" />
          </template>
        </el-table-column>
        <el-table-column align="left" label="ID" min-width="50" prop="ID" />
        <el-table-column
          align="left"
          :label="t('user.userName')"
          min-width="150"
          prop="userName"
        />
        <el-table-column
          align="left"
          :label="t('user.nickName')"
          min-width="150"
          prop="nickName"
        />
        <el-table-column
          align="left"
          :label="t('user.phone')"
          min-width="180"
          prop="phone"
        />
        <el-table-column
          align="left"
          :label="t('user.email')"
          min-width="180"
          prop="email"
        />
        <el-table-column
          align="left"
          :label="t('user.userRole')"
          min-width="200"
        >
          <template #default="scope">
            <el-cascader
              v-model="scope.row.authorityIds"
              :options="authOptions"
              :show-all-levels="false"
              collapse-tags
              :props="{
                multiple: true,
                checkStrictly: true,
                label: 'authorityName',
                value: 'authorityId',
                disabled: 'disabled',
                emitPath: false,
              }"
              :clearable="false"
              @visible-change="
                (flag) => {
                  changeAuthority(scope.row, flag, 0);
                }
              "
              @remove-tag="
                (removeAuth) => {
                  changeAuthority(scope.row, false, removeAuth);
                }
              "
            />
          </template>
        </el-table-column>
        <el-table-column align="left" :label="t('user.enable')" min-width="150">
          <template #default="scope">
            <el-switch
              v-model="scope.row.enable"
              inline-prompt
              :active-value="1"
              :inactive-value="2"
              @change="
                () => {
                  switchEnable(scope.row);
                }
              "
            />
          </template>
        </el-table-column>

        <el-table-column
          :label="t('general.operations')"
          min-width="250"
          fixed="right"
        >
          <template #default="scope">
            <el-button
              type="success"
              size="small"
              icon="magic-stick"
              @click="resetPasswordFunc(scope.row)"
              >{{ t("user.resetPassword") }}</el-button
            >
            <el-button
              type="primary"
              size="small"
              icon="edit"
              @click="openEdit(scope.row)"
              >{{ t("general.edit") }}</el-button
            >
            <el-button
              size="small"
              icon="delete"
              @click="deleteUserFunc(scope.row)"
              >{{ t("general.delete") }}</el-button
            >
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
      v-model="addUserDialog"
      size="60%"
      :show-close="false"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <template #header>
        <div class="flex justify-between items-center">
          <span class="text-lg">{{ t("user.user") }}</span>
          <div>
            <el-button @click="closeAddUserDialog">{{
              t("general.close")
            }}</el-button>
            <el-button type="primary" @click="enterAddUserDialog">{{
              t("general.confirm")
            }}</el-button>
          </div>
        </div>
      </template>

      <el-form
        ref="userForm"
        :rules="rules"
        :model="userInfo"
        label-width="120px"
      >
        <el-form-item
          v-if="dialogFlag === 'add'"
          :label="t('user.userName')"
          prop="userName"
        >
          <el-input v-model="userInfo.userName" />
        </el-form-item>
        <el-form-item
          v-if="dialogFlag === 'add'"
          :label="t('user.password')"
          prop="password"
        >
          <el-input v-model="userInfo.password" />
        </el-form-item>
        <el-form-item :label="t('user.nickName')" prop="nickName">
          <el-input v-model="userInfo.nickName" />
        </el-form-item>
        <el-form-item :label="t('user.phone')" prop="phone">
          <el-input v-model="userInfo.phone" />
        </el-form-item>
        <el-form-item :label="t('user.email')" prop="email">
          <el-input v-model="userInfo.email" />
        </el-form-item>
        <el-form-item :label="t('user.userRole')" prop="authorityId">
          <el-cascader
            v-model="userInfo.authorityIds"
            style="width: 100%"
            :options="authOptions"
            :show-all-levels="false"
            :props="{
              multiple: true,
              checkStrictly: true,
              label: 'authorityName',
              value: 'authorityId',
              disabled: 'disabled',
              emitPath: false,
            }"
            :clearable="false"
          />
        </el-form-item>
        <el-form-item :label="t('user.enable')" prop="disabled">
          <el-switch
            v-model="userInfo.enable"
            inline-prompt
            :active-value="1"
            :inactive-value="2"
          />
        </el-form-item>
        <el-form-item :label="t('user.avatar')" label-width="80px">
          <SelectImage v-model="userInfo.headerImg" />
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script setup>
import {
  getUserList,
  setUserAuthorities,
  register,
  deleteUser,
} from "@/api/user";

import { getAuthorityList } from "@/api/authority";
import CustomPic from "@/components/customPic/index.vue";
import WarningBar from "@/components/warningBar/warningBar.vue";
import { setUserInfo, resetPassword } from "@/api/user.js";

import { nextTick, ref, watch } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import SelectImage from "@/components/selectImage/selectImage.vue";
import { useI18n } from "vue-i18n"; // added by mohamed hassan to support multilanguage

const { t } = useI18n(); // added by mohamed hassan to support multilanguage

defineOptions({
  name: "User",
});

const path = ref(import.meta.env.VITE_BASE_API + "/");
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

const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
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
  });
  if (table.code === 0) {
    tableData.value = table.data.list;
    total.value = table.data.total;
    page.value = table.data.page;
    pageSize.value = table.data.pageSize;
  }
};

watch(
  () => tableData.value,
  () => {
    setAuthorityIds();
  }
);

const initPage = async () => {
  getTableData();
  const res = await getAuthorityList({ page: 1, pageSize: 999 });
  setOptions(res.data.list);
};

initPage();

const resetPasswordFunc = (row) => {
  ElMessageBox.confirm(t("user.resetPasswordConfrim"), t("general.warning"), {
    confirmButtonText: t("general.confirm"),
    cancelButtonText: t("general.cancel"),
    type: "warning",
  }).then(async () => {
    const res = await resetPassword({
      ID: row.ID,
    });
    if (res.code === 0) {
      ElMessage({
        type: "success",
        message: res.msg,
      });
    } else {
      ElMessage({
        type: "error",
        message: res.msg,
      });
    }
  });
};
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

const chooseImg = ref(null);
const openHeaderChange = () => {
  chooseImg.value.open();
};

const authOptions = ref([]);
const setOptions = (authData) => {
  authOptions.value = [];
  setAuthorityOptions(authData, authOptions.value);
};

const backNickName = ref("");
const openEidt = (row) => {
  if (tableData.value.some((item) => item.editFlag)) {
    ElMessage(t("user.anotherUserEdit"));
    return;
  }
  backNickName.value = row.nickName;
  row.editFlag = true;
};

const enterEdit = async (row) => {
  const res = await setUserInfo({ nickName: row.nickName, ID: row.ID });
  if (res.code === 0) {
    ElMessage({
      type: "success",
      message: t("general.setupSuccess"),
    });
  }
  backNickName.value = ref("");
  row.editFlag = false;
};

const closeEdit = (row) => {
  row.nickName = backNickName.value;
  backNickName.value = "";
  row.editFlag = false;
};

const deleteUserFunc = async (row) => {
  ElMessageBox.confirm(t("general.deleteConfirm"), t("general.hint"), {
    confirmButtonText: t("general.confirm"),
    cancelButtonText: t("general.cancel"),
    type: "warning",
  }).then(async () => {
    const res = await deleteUser({ id: row.ID });
    if (res.code === 0) {
      ElMessage.success(t("general.deleteSuccess"));
      await getTableData();
    }
  });
};

// 弹窗相关
const userInfo = ref({
  userName: "",
  password: "",
  nickName: "",
  headerImg: "",
  authorityId: "",
  authorityIds: [],
  enable: 1,
});

const rules = ref({
  userName: [
    { required: true, message: t("user.userNameNote"), trigger: "blur" },
    { min: 5, message: t("user.userNameLenNote"), trigger: "blur" },
  ],
  password: [
    { required: true, message: t("user.passwordNote"), trigger: "blur" },
    { min: 6, message: t("user.passwordLenNote"), trigger: "blur" },
  ],
  nickName: [
    { required: true, message: t("user.nickNameNote"), trigger: "blur" },
  ],
  phone: [
    {
      pattern: /^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/,
      message: t("user.enterPhoneNoNote"),
      trigger: "blur",
    },
  ],
  email: [
    {
      pattern: /^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,
      message: t("user.enterEmailNote"),
      trigger: "blur",
    },
  ],
  authorityId: [
    { required: true, message: t("user.userRoleNote"), trigger: "blur" },
  ],
});
const userForm = ref(null);
const enterAddUserDialog = async () => {
  userInfo.value.authorityId = userInfo.value.authorityIds[0];
  userForm.value.validate(async (valid) => {
    if (valid) {
      const req = {
        ...userInfo.value,
      };
      if (dialogFlag.value === "add") {
        const res = await register(req);
        if (res.code === 0) {
          ElMessage({ type: "success", message: t("user.userAddedNote") });
          await getTableData();
          closeAddUserDialog();
        }
      }
      if (dialogFlag.value === "edit") {
        const res = await setUserInfo(req);
        if (res.code === 0) {
          ElMessage({ type: "success", message: t("user.userEditedNote") });
          await getTableData();
          closeAddUserDialog();
        }
      }
    }
  });
};

const addUserDialog = ref(false);
const closeAddUserDialog = () => {
  userForm.value.resetFields();
  userInfo.value.headerImg = "";
  userInfo.value.authorityIds = [];
  addUserDialog.value = false;
};

const dialogFlag = ref("add");

const addUser = () => {
  addUserDialog.value = true;
  dialogFlag.value = "add";
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
    ElMessage({ type: "success", message: t("user.roleSetNote") });
  } else {
    if (!removeAuth) {
      row.authorityIds = [...tempAuth[row.ID]];
      delete tempAuth[row.ID];
    } else {
      row.authorityIds = [removeAuth, ...row.authorityIds];
    }
  }
};

const openEdit = (row) => {
  dialogFlag.value = "edit";
  userInfo.value = JSON.parse(JSON.stringify(row));
  addUserDialog.value = true;
};

const switchEnable = async (row) => {
  userInfo.value = JSON.parse(JSON.stringify(row));
  await nextTick();
  const req = {
    ...userInfo.value,
  };
  const res = await setUserInfo(req);
  if (res.code === 0) {
    ElMessage({
      type: "success",
      message: `${
        req.enable === 2
          ? t("user.disabledSuccessfully")
          : t("user.enabledSuccessfully")
      }`,
    });
    await getTableData();
    userInfo.value.headerImg = "";
    userInfo.value.authorityIds = [];
  }
};
const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 0) {
    return "";
  } else {
    return "warnBg";
  }
};
</script>


<style lang="scss">
.header-img-box {
  @apply w-52 h-52 border border-solid border-gray-300 rounded-xl flex justify-center items-center cursor-pointer;
}
</style>
