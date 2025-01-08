<template>
  <div>
    <div class="gva-search-box">
      <el-form
        ref="searchForm"
        :inline="true"
        :model="searchInfo"
        label-width="125"
      >
        <el-form-item :label="t('tableColumn.channelCode')">
          <el-input
            clearable
            v-model="searchInfo.channelCode"
            :placeholder="t('tableColumn.channelCode')"
            class="input_w"
            @blur="searchChange"
          />
        </el-form-item>
        <el-form-item :label="t('tableColumn.transactionCode')">
          <el-input
            clearable
            v-model="searchInfo.transactionCode"
            :placeholder="t('tableColumn.transactionCode')"
            class="input_w"
            @blur="searchChange"
          />
        </el-form-item>
        <!-- <el-form-item :label="t('tableColumn.paymentCode')">
          <el-input
            clearable
            v-model="searchInfo.paymentCode"
            :placeholder="t('tableColumn.paymentCode')"
            class="input_w"
            @blur="searchChange"
          />
        </el-form-item> -->
        <el-form-item :label="t('tableColumn.transactionType')">
          <el-select
            clearable
            v-model="searchInfo.transactionType"
            :placeholder="t('tableColumn.placeholder')"
            class="input_w"
            @change="searchChange"
          >
            <el-option
              v-for="item in transactionOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="t('tableColumn.type')">
          <el-select
            clearable
            v-model="searchInfo.type"
            :placeholder="t('tableColumn.placeholder')"
            class="input_w"
            @change="searchChange"
          >
            <el-option
              v-for="item in accountTypeOption"
              :key="item.value"
              :label="t(`tableColumn.${item.label}`)"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="t('tableColumn.status')">
          <el-select
            clearable
            v-model="searchInfo.status"
            :placeholder="t('tableColumn.placeholder')"
            class="input_w"
            @change="searchChange"
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
      <!-- <div class="gva-btn-list">
        <el-button type="primary" icon="plus" @click="openDialog('add')">
          {{ t("general.add") }}
        </el-button>
      </div> -->
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
          :label="t('tableColumn.channelCode')"
          min-width="150"
          prop="channelCode"
        />

        <!-- <el-table-column
          align="center"
          :label="t('tableColumn.paymentCode')"
          min-width="200"
          prop="paymentCode"
        /> -->

        <el-table-column
          align="center"
          :label="t('tableColumn.transactionCode')"
          min-width="150"
          prop="transactionCode"
        />
        <el-table-column
          align="center"
          :label="t('tableColumn.transactionType')"
          min-width="150"
          prop="transactionType"
        />
        <el-table-column
          align="center"
          :label="t('tableColumn.type')"
          min-width="150"
          prop="type"
        >
          <template #default="scope">
            <div>
              {{
                scope.row.type === 1
                  ? t("tableColumn.recharge")
                  : scope.row.type === 2
                  ? t("tableColumn.drawMoney")
                  : scope.row.type
              }}
            </div>
          </template>
        </el-table-column>
        <!-- <el-table-column
          align="center"
          :label="t('tableColumn.createdAt')"
          min-width="150"
          prop="createdAt"
        >
          <template #default="scope">
            <div>
              {{ dataGet(scope.row.createdAt) }}
            </div>
          </template>
        </el-table-column> -->
        <el-table-column
          align="center"
          :label="t('tableColumn.status')"
          min-width="150"
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
            <!-- <el-button
              icon="delete"
              size="small"
              @click="deleteTackFunc(scope.row)"
            >
              {{ t("general.delete") }}
            </el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <!-- <div class="gva-pagination">
        <el-pagination
          :current-page="page"
          :page-size="pageSize"
          :page-sizes="[10, 30, 50, 100]"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </div> -->
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
        label-width="140px"
      >
        <el-col :span="18">
          <el-form-item
            :label="t('tableColumn.transactionCode')"
            prop="transactionCode"
          >
            <el-input
              v-model="form.transactionCode"
              disabled
              autocomplete="off"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item
            :label="t('tableColumn.paymentCode')"
            prop="paymentCode"
          >
            <el-input v-model="form.paymentCode" disabled autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item
            :label="t('tableColumn.transactionType')"
            prop="transactionType"
          >
            <el-input
              v-model="form.transactionType"
              disabled
              autocomplete="off"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.type')" prop="type">
            <el-input v-model="form.type" disabled autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item
            :label="t('tableColumn.channelCode')"
            prop="channelCode"
          >
            <el-select
              clearable
              v-model="form.channelCode"
              :placeholder="t('tableColumn.placeholder')"
            >
              <el-option
                v-for="item in codeOption"
                :key="item.value"
                :label="item.labe"
                :value="item.value"
              />
            </el-select>
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
import { getPaymentList, editPayment } from "@/api/payment";
import { getPaymentChannels } from "@/api/payment";
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";

import { useI18n } from "vue-i18n"; // added by mohamed hassan to support multilanguage
const { t } = useI18n(); // added by mohamed hassan to support multilanguage
const router = useRouter();

defineOptions({
  name: "payment",
});
const codeOptions = ref([]);
const apis = ref([]);
const form = ref({
  transactionCode: null,
  paymentCode: null,
  transactionType: null,
  type: null,
  channelCode: null,
  status: null,
});

const type = ref("");
const rules = ref({
  day: [{ required: true, message: "请输入天数", trigger: "blur" }],
  "award.code": [{ required: true, message: "请输入code", trigger: "blur" }],
  "award.num": [{ required: true, message: "请选输入数量", trigger: "blur" }],
});
const accountTypeOption = ref([
  { label: "recharge", value: 1 },
  { label: "drawMoney", value: 2 },
]);
const transactionOption = ref([
  { label: "EWALLET", value: "EWALLET" },
  { label: "QRIS", value: "QRIS" },
  { label: "VA", value: "VA" },
]);
const statusOption = ref([
  { label: "enable", value: 1 },
  { label: "disable", value: 0 },
]);
const codeOption = ref([]);

const page = ref(1);
const total = ref(0);
const pageSize = ref(10000);
const tableData = ref([]);
const searchInfo = ref({
  channelCode: null,
  transactionCode: null,
  paymentCode: null,
  transactionType: null,
  type: null,
  status: null,
});

const onReset = () => {
  searchInfo.value = {
    channelCode: null,
    transactionCode: null,
    paymentCode: null,
    transactionType: null,
    type: null,
    status: null,
  };
  onSubmit();
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
  pageSize.value = 10000;
  getTableData();
};
const searchChange = () => {
  onSubmit();
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

  const table = await getPaymentList({
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
const init = async () => {
  const table = await getPaymentChannels({
    page: page.value,
    pageSize: pageSize.value,
    status: 1,
  });
  if (table.code === 0) {
    table.data.list.forEach((item) => {
      codeOption.value.push({ label: item.code, value: item.code });
    });
  }
};
init();
// 批量操作
const handleSelectionChange = (val) => {
  apis.value = val;
};

// 弹窗相关
const apiForm = ref(null);
const initForm = () => {
  apiForm.value.resetFields();
  form.value = {
    transactionCode: null,
    paymentCode: null,
    transactionType: null,
    type: null,
    channelCode: null,
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
            const res = await day7SignAdd(form.value);
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
            const res = await editPayment(form.value);
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

  const res = await editPayment(myUserInfo);
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
    const res = await day7SignDel({ day: row.day });
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
.el-input-number {
  width: 50%;
}
.span1 {
  display: inline-block;
  width: 50%;
  text-align: right;
}
.span2 {
  display: inline-block;
  width: calc(49% - 8px);
  text-align: left;
  padding-left: 8px;
}
.span3 {
  font-weight: 700;
}
.span4 {
  display: block;
  border-bottom: 1px solid var(--border-color);
  width: 50%;
  margin: auto;
}
.spanCla {
  display: inline-block;
  margin-right: 20px;
}
.input_w {
  width: 200px !important;
}
</style>
  