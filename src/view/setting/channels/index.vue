<template>
  <div>
    <div class="gva-search-box">
      <el-form
        ref="searchForm"
        :inline="true"
        :model="searchInfo"
        label-width="60"
      >
        <el-form-item :label="t('tableColumn.id')">
          <el-input
            clearable
            v-model="searchInfo.id"
            :placeholder="t('tableColumn.id')"
            class="input_w"
          />
        </el-form-item>
        <el-form-item :label="t('tableColumn.code')">
          <el-input
            clearable
            v-model="searchInfo.code"
            :placeholder="t('tableColumn.code')"
            class="input_w"
          />
        </el-form-item>
        <el-form-item :label="t('tableColumn.status')">
          <el-select
            clearable
            v-model="searchInfo.status"
            :placeholder="t('tableColumn.placeholder')"
            class="input_w"
          >
            <el-option
              v-for="item in statusOption"
              :key="item.value"
              :label="t(`user.${item.label}`)"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

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
      <div class="gva-btn-list">
        <el-button type="primary" icon="plus" @click="openDialog('add')">
          {{ t("general.add") }}
        </el-button>
      </div>
      <el-table
        border
        :data="tableData"
        @selection-change="handleSelectionChange"
        highlight-current-row
        :header-cell-style="{
          backgroundColor: 'var(--el-tab-bgc)',
          Color: '#FFF',
        }"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          align="center"
          :label="t('tableColumn.id')"
          min-width="80"
          prop="id"
        />
        <el-table-column
          align="center"
          :label="t('tableColumn.merchantId')"
          min-width="110"
          prop="merchantId"
        />
        <el-table-column
          align="center"
          :label="t('tableColumn.apiKey')"
          min-width="200"
          prop="apiKey"
        />

        <el-table-column
          align="center"
          :label="t('tableColumn.code')"
          min-width="200"
          prop="code"
        />

        <el-table-column
          align="center"
          :label="t('tableColumn.url')"
          min-width="150"
          prop="url"
        />

        <el-table-column
          align="center"
          :label="t('tableColumn.createdAt')"
          min-width="180"
          prop="createdAt"
        >
          <template #default="scope">
            <div>
              {{ dataGet(scope.row.createdAt) }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.updatedAt')"
          min-width="180"
          prop="updatedAt"
        >
          <template #default="scope">
            <div>
              {{ dataGet(scope.row.updatedAt) }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.status')"
          min-width="70"
          prop="status"
        >
          <template #default="scope">
            <el-switch
              v-model="scope.row.status"
              inline-prompt
              :active-value="1"
              :inactive-value="0"
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
          :label="t('general.operations')"
          min-width="200"
        >
          <template #default="scope">
            <el-button
              type="primary"
              icon="edit"
              size="small"
              @click="editTackFunc(scope.row)"
            >
              {{ t("general.edit") }}
            </el-button>
            <el-button
              icon="delete"
              size="small"
              @click="deleteTackFunc(scope.row)"
            >
              {{ t("general.delete") }}
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
      size="50%"
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
        label-width="100px"
      >
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.code')" prop="code">
            <el-input v-model="form.code" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.merchantId')" prop="merchantId">
            <el-input v-model="form.merchantId" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.apiKey')" prop="apiKey">
            <el-input v-model="form.apiKey" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.url')" prop="url">
            <el-input v-model="form.url" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-form-item :label="t('tableColumn.status')" prop="status">
          <el-switch
            v-model="form.status"
            inline-prompt
            :active-value="1"
            :inactive-value="0"
          />
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
  
  <script setup>
import {
  getPaymentChannels,
  addPaymentChannel,
  editPaymentChannel,
  delPaymentChannel,
} from "@/api/payment";
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import SingleTime from "@/components/DataTime/singleTime.vue";
import dayjs from "dayjs";
import { useI18n } from "vue-i18n"; // added by mohamed hassan to support multilanguage
const { t } = useI18n(); // added by mohamed hassan to support multilanguage
const router = useRouter();

defineOptions({
  name: "channels",
});
const codeOptions = ref([]);
const value2 = ref("");
const apis = ref([]);
const form = ref({
  code: null,
  merchantId: null,
  apiKey: null,
  url: null,
  status: null,
});

const type = ref("");
const showTimeBo = ref(false);
const rules = ref({
  day: [{ required: true, message: "请输入天数", trigger: "blur" }],
  "award.code": [{ required: true, message: "请输入code", trigger: "blur" }],
  "award.num": [{ required: true, message: "请选输入数量", trigger: "blur" }],
});

const statusOption = ref([
  { label: "enable", value: 1 },
  { label: "disable", value: 0 },
]);

const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
const searchInfo = ref({
  id: null,
  code: null,
  status: null,
});
const closeTime = (val) => {
  showTimeBo.value = val;
};

const onReset = () => {
  searchInfo.value = {
    id: null,
    code: null,
    status: null,
  };
};
const dataGet = (dateStr) => {
  let date = new Date(dateStr);
  let formattedDate =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0") +
    " " +
    date.getHours().toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0") +
    ":" +
    date.getSeconds().toString().padStart(2, "0");
  return formattedDate;
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

const replaceEmptyStringsWithNull = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === "") {
      obj[key] = null;
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      replaceEmptyStringsWithNull(obj[key]);
    }
  });
  return obj;
};

// 查询
const getTableData = async () => {
  searchInfo.value = replaceEmptyStringsWithNull(searchInfo.value);
  const table = await getPaymentChannels({
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
};
initPage();
// 批量操作
const handleSelectionChange = (val) => {
  apis.value = val;
};

// 弹窗相关
const apiForm = ref(null);
const initForm = () => {
  apiForm.value.resetFields();
  form.value = {
    code: null,
    merchantId: null,
    apiKey: null,
    url: null,
    status: null,
  };
};

const dialogTitle = ref(t("general.add"));
const dialogFormVisible = ref(false);
const openDialog = (key) => {
  switch (key) {
    case "add":
      dialogTitle.value = t("general.add");
      break;
    case "edit":
      dialogTitle.value = t("general.edit");
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
            const res = await addPaymentChannel(form.value);
            if (res.code === 0) {
              ElMessage({
                type: "success",
                message: t("user.userAddedNote"),
                showClose: true,
              });
              getTableData();
              closeDialog();
            }
          }
          break;
        case "edit":
          {
            const res = await editPaymentChannel(form.value);
            if (res.code === 0) {
              ElMessage({
                type: "success",
                message: t("user.userEditedNote"),
                showClose: true,
              });
              getTableData();
              closeDialog();
            }
          }
          break;
        default:
          {
            ElMessage({
              type: "error",
              message: t("view.api.unknownOperation"),
              showClose: true,
            });
          }
          break;
      }
    }
  });
};
const switchStatus = async (row) => {
  let myUserInfo = JSON.parse(JSON.stringify(row));

  const res = await editPaymentChannel(myUserInfo);
  if (res.code === 0) {
    ElMessage({
      type: "success",
      message: `${
        myUserInfo.status === 1
          ? t("user.enabledSuccessfully")
          : t("user.disabledSuccessfully")
      }`,
    });
    getTableData();
  }
};

const deleteTackFunc = async (row) => {
  ElMessageBox.confirm(t("general.deleteConfirm"), t("general.hint"), {
    confirmButtonText: t("general.confirm"),
    cancelButtonText: t("general.cancel"),
    type: "warning",
  }).then(async () => {
    const res = await delPaymentChannel({ id: row.id });
    if (res.code === 0) {
      ElMessage({
        type: "success",
        message: t(`general.deleteSuccess`),
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
.warning {
  color: #dc143c;
}
.input_w {
  width: 200px !important;
}
</style>
  