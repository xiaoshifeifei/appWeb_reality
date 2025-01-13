<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item :label="t('tableColumn.id')">
          <el-input
            clearable
            v-model="searchInfo.id"
            :placeholder="t('tableColumn.id')"
            class="input_w"
            @blur="searchChange"
          />
        </el-form-item>
        <el-form-item :label="t('tableColumn.channelCode')">
          <el-input
            clearable
            v-model="searchInfo.channelCode"
            :placeholder="t('tableColumn.channelCode')"
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
          :label="t('tableColumn.channelCode')"
          min-width="110"
          prop="channelCode"
        />
        <!-- <el-table-column
          align="center"
          :label="t('tableColumn.paymentCode')"
          min-width="180"
          prop="paymentCode"
        >
        </el-table-column> -->

        <el-table-column
          align="center"
          :label="t('tableColumn.giftRatio')"
          min-width="100"
          prop="giftRatio"
        />
        <el-table-column
          align="center"
          :label="t('tableColumn.rake')"
          min-width="100"
          prop="rake"
        />

        <el-table-column
          align="center"
          :label="t('tableColumn.maxAmount')"
          min-width="100"
          prop="max"
        />

        <el-table-column
          align="center"
          :label="t('tableColumn.minAmount')"
          min-width="100"
          prop="min"
        />

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
        label-width="120px"
      >
        <el-col :span="18" v-if="type == 'edit'">
          <el-form-item :label="t('tableColumn.id')" prop="id">
            <el-input disabled v-model="form.id" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item
            :label="t('tableColumn.channelCode')"
            prop="channelCode"
          >
            <el-input v-model="form.channelCode" autocomplete="off" />
          </el-form-item>
        </el-col>
        <!-- <el-col :span="18">
          <el-form-item
            :label="t('tableColumn.paymentCode')"
            prop="paymentCode"
          >
            <el-input v-model="form.paymentCode" autocomplete="off" />
          </el-form-item>
        </el-col> -->
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.giftRatio')" prop="giftRatio">
            <el-input
              v-model="form.giftRatio"
              @input="form.giftRatio = form.giftRatio.replace(/[^\d|\.]/g, '')"
              autocomplete="off"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.rake')" prop="rake">
            <el-input
              v-model="form.rake"
              @input="form.rake = form.rake.replace(/[^\d|\.]/g, '')"
              autocomplete="off"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.maxAmount')" prop="max">
            <el-input
              v-model="form.max"
              @input="form.max = form.max.replace(/[^\d|\.]/g, '')"
              @change="handleChange(form.max, 0, 'v4', undefined, 'max')"
              autocomplete="off"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.minAmount')" prop="min">
            <el-input
              v-model="form.min"
              @input="form.min = form.min.replace(/[^\d|\.]/g, '')"
              @change="handleChange(form.min, 0, 'v4', undefined, 'min')"
              autocomplete="off"
            />
          </el-form-item>
        </el-col>
      </el-form>
    </el-drawer>
  </div>
</template>
  
  <script setup>
import {
  getPaymentDepositRechargeAmounts,
  addPaymentDepositRechargeAmount,
  editPaymentDepositRechargeAmount,
  delPaymentDepositRechargeAmount,
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
  channelCode: null,
  paymentCode: null,
  giftRatio: null,
  rake: null,
  max: null,
  min: null,
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
const pageSize = ref(100);
const tableData = ref([]);
const searchInfo = ref({
  id: null,
  channelCode: null,
  paymentCode: null,
});
const closeTime = (val) => {
  showTimeBo.value = val;
};
const searchChange = () => {
  onSubmit();
};
const onReset = () => {
  searchInfo.value = {
    id: null,
    channelCode: null,
    paymentCode: null,
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
  pageSize.value = 100;
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
  const table = await getPaymentDepositRechargeAmounts({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  });
  if (table.code === 0) {
    tableData.value = table.data.list;
    tableData.value.map((item, index) => {
      item.min = handleChange(item.min, index, "v4", true, "min");
      item.max = handleChange(item.max, index, "v4", true, "max");
    });
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
    channelCode: null,
    paymentCode: null,
    giftRatio: null,
    rake: null,
    max: null,
    min: null,
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
      if (form.value.min) {
        form.value.min = form.value.min + "";
        if (form.value.min.indexOf("B") !== -1) {
          const newStr = form.value.min.replace("B", "");
          form.value.min = Number(newStr) * 1000000000;
        } else if (form.value.min.indexOf("M") !== -1) {
          const newStr = form.value.min.replace("M", "");
          form.value.min = Number(newStr) * 1000000;
        } else if (form.value.min.indexOf("K") !== -1) {
          const newStr = form.value.min.replace("K", "");
          form.value.min = Number(newStr) * 1000;
        } else {
          form.value.min = Number(form.value.min);
        }
      }
      if (form.value.max) {
        form.value.max = form.value.max + "";
        if (form.value.max.indexOf("B") !== -1) {
          const newStr = form.value.max.replace("B", "");
          form.value.max = Number(newStr) * 1000000000;
        } else if (form.value.max.indexOf("M") !== -1) {
          const newStr = form.value.max.replace("M", "");
          form.value.max = Number(newStr) * 1000000;
        } else if (form.value.max.indexOf("K") !== -1) {
          const newStr = form.value.max.replace("K", "");
          form.value.max = Number(newStr) * 1000;
        } else {
          form.value.max = Number(form.value.max);
        }
      }
      switch (type.value) {
        case "add":
          {
            const res = await addPaymentDepositRechargeAmount(form.value);
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
            const res = await editPaymentDepositRechargeAmount(form.value);
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

const deleteTackFunc = async (row) => {
  ElMessageBox.confirm(t("general.deleteConfirm"), t("general.hint"), {
    confirmButtonText: t("general.confirm"),
    cancelButtonText: t("general.cancel"),
    type: "warning",
  }).then(async () => {
    const res = await delPaymentDepositRechargeAmount({ id: row.id });
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
const handleChange = (number, index, params, params2, params3) => {
  if (number) {
    number = Number(number);
  } else {
    return;
  }
  if (params == "v4") {
    if (number >= 1000000000) {
      if (params2) {
        return number / 1000000000 + "B";
      } else {
        return (form.value[params3] = number / 1000000000 + "B");
      }
    } else if (number >= 1000000) {
      if (params2) {
        return number / 1000000 + "M";
      } else {
        return (form.value[params3] = number / 1000000 + "M");
      }
    } else if (number >= 1000) {
      if (params2) {
        return number / 1000 + "K";
      } else {
        return (form.value[params3] = number / 1000 + "K");
      }
    } else {
      if (params2) {
        return number.toString();
      } else {
        return (form.value[params3] = number.toString());
      }
    }
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
  