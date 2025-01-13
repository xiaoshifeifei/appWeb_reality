<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item :label="t('tableColumn.redemptionCode')">
          <el-input
            clearable
            v-model="searchInfo.code"
            :placeholder="t('tableColumn.redemptionCode')"
            class="input_w"
            @blur="searchChange($event, 'code')"
          />
        </el-form-item>
        <el-form-item :label="t('tableColumn.redemptionType')">
          <el-select
            clearable
            v-model="searchInfo.type"
            :placeholder="t('tableColumn.placeholder')"
            class="input_w"
            @change="searchChange"
          >
            <el-option
              v-for="item in typeOption"
              :key="item.value"
              :label="item.label"
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
          :label="t('tableColumn.redemptionCode')"
          prop="code"
        >
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.redemptionType')"
          prop="type"
        >
          <template #default="scope">
            <div>
              {{ scope.row.type == "NORMAL" ? "普通礼品码" : scope.row.type }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.betRequiredMultiple')"
          prop="betRequiredMultiple"
        >
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.bonusAmount')"
          prop="bonusAmount"
        />

        <el-table-column
          align="center"
          :label="t('tableColumn.count')"
          prop="count"
        >
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.remainCount')"
          prop="remainCount"
        >
        </el-table-column>

        <el-table-column
          align="center"
          :label="t('tableColumn.created')"
          min-width="120"
          prop="createdAt"
        >
          <template #default="scope">
            <div>{{ dataGet(scope.row.createdAt) }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.expired')"
          min-width="120"
          prop="expiredAt"
        >
          <template #default="scope">
            <div>{{ dataGet(scope.row.expiredAt) }}</div>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          :label="t('tableColumn.status')"
          prop="status"
        >
          <template #default="scope">
            <el-switch
              v-model="scope.row.status"
              inline-prompt
              :active-value="1"
              :inactive-value="2"
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
              size="small"
              icon="edit"
              @click="editTackFunc(scope.row)"
            >
              {{ t("general.edit") }}
            </el-button>
            <!-- <el-button
              size="small"
              icon="delete"
              @click="deleteTackFunc(scope.row)"
            >
              {{ t("general.delete") }}
            </el-button> -->
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
      size="40%"
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
        <el-col :span="18" v-if="type === 'edit'">
          <el-form-item :label="t('tableColumn.redemptionCode')" prop="code">
            <el-input
              disabled
              v-model="form.code"
              autocomplete="off"
              :placeholder="t('tableColumn.code')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18" v-if="type === 'add'">
          <el-form-item :label="t('tableColumn.redemptionType')" prop="type">
            <el-select
              clearable
              v-model="form.type"
              :placeholder="t('tableColumn.placeholder')"
              class="input_w"
            >
              <el-option
                v-for="item in typeOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="18" v-if="type === 'add'">
          <el-form-item :label="t('tableColumn.count')" prop="count">
            <el-input
              v-model="form.count"
              autocomplete="off"
              @input="form.count = form.count.replace(/[^\d]/g, '')"
              :placeholder="t('tableColumn.count')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18" v-if="type === 'add'">
          <el-form-item
            :label="t('tableColumn.bonusAmount')"
            prop="bonusAmount"
          >
            <el-input
              v-model="form.bonusAmount"
              autocomplete="off"
              @input="
                form.bonusAmount = form.bonusAmount.replace(/[^\d|\.]/g, '')
              "
              :placeholder="t('tableColumn.bonusAmount')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18" v-if="type === 'add'">
          <el-form-item
            :label="t('tableColumn.betRequiredMultiple')"
            prop="betRequiredMultiple"
          >
            <el-input
              v-model="form.betRequiredMultiple"
              autocomplete="off"
              @input="
                form.betRequiredMultiple = form.betRequiredMultiple.replace(
                  /[^\d|\.]/g,
                  ''
                )
              "
              :placeholder="t('tableColumn.betRequiredMultiple')"
            />
          </el-form-item>
        </el-col>
        <el-form-item
          :label="t('tableColumn.status')"
          prop="status"
          v-if="type === 'edit'"
        >
          <el-switch
            v-model="form.status"
            inline-prompt
            :active-value="1"
            :inactive-value="2"
          />
        </el-form-item>

        <SingleTime
          style="margin-left: 50px"
          v-model="valueExpired"
          :title="t('tableColumn.expired')"
          :values="form.expiredAt"
          @closeTime="closeTime"
        ></SingleTime>
      </el-form>
    </el-drawer>
  </div>
</template>
  
  <script setup>
import {
  getRedemptionCodes,
  virtualItemDel,
  editRedemptionCode,
  addRedemptionCode,
  getRedemptionCodeTypes,
} from "@/api/tack";
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import SingleTime from "@/components/DataTime/singleTime.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n"; // added by mohamed hassan to support multilanguage
const { t } = useI18n(); // added by mohamed hassan to support multilanguage
const router = useRouter();

defineOptions({
  name: "notice",
});
const valueExpired = ref("");
const apis = ref([]);
const form = ref({
  code: null,
  type: null,
  count: null,
  betRequiredMultiple: null,
  bonusAmount: null,
  status: null,
});
const statusOption = ref([
  { label: "enable", value: 1 },
  { label: "disable", value: 2 },
]);
const typeOption = ref([]);

const type = ref("");
const rules = ref({
  count: [{ required: true, message: "请输入可兑换次数", trigger: "blur" }],
  type: [{ required: true, message: "请选择兑换类型", trigger: "change" }],
  bonusAmount: [{ required: true, message: "请输入奖金金额", trigger: "blur" }],
  betRequiredMultiple: [
    { required: true, message: "请输入流水倍数", trigger: "blur" },
  ],
});
const showTimeBo = ref(false);

const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
const searchInfo = ref({});

const onReset = () => {
  searchInfo.value = {};
  onSubmit();
};
// 搜索
const closeTime = (val) => {
  showTimeBo.value = val;
};
const searchChange = (e, params) => {
  if (params && e.target.value == "") {
    searchInfo.value[params] = null;
  }
  onSubmit();
};
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
const switchStatus = async (row) => {
  const res = await editRedemptionCode(row);
  if (res.code === 0) {
    ElMessage({
      type: "success",
      message: `${
        row.status === 1
          ? t("user.enabledSuccessfully")
          : t("user.disabledSuccessfully")
      }`,
    });
    getTableData();
  } else {
    getTableData();
  }
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

const handleCurrentChange = (val) => {
  page.value = val;
  getTableData();
};
const getCode = async () => {
  const table = await getRedemptionCodeTypes({
    page: page.value,
    pageSize: 10000,
  });
  if (table.code === 0) {
    // typeOption.value = table.data;
    table.data.forEach((item) => {
      if (item == "NORMAL") {
        typeOption.value.push({
          label: "普通礼品码",
          value: "NORMAL",
        });
      } else {
        typeOption.value.push({
          label: item,
          value: item,
        });
      }
    });
  }
};
getCode();
// 查询
const getTableData = async () => {
  const table = await getRedemptionCodes({
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

const syncApiData = ref({
  newApis: [],
  deleteApis: [],
  ignoreApis: [],
});

// 弹窗相关
const apiForm = ref(null);
const initForm = () => {
  apiForm.value.resetFields();
  form.value = {
    code: null,
    type: null,
    count: null,
    betRequiredMultiple: null,
    bonusAmount: null,
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
      if (valueExpired.value) {
        form.value.expiredAt = valueExpired.value;
      }
      form.value.count = Number(form.value.count);
      switch (type.value) {
        case "add":
          {
            const res = await addRedemptionCode(form.value);
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
            const res = await editRedemptionCode(form.value);
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
    const res = await virtualItemDel({ code: row.code });
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
.input_w {
  width: 190px !important;
}
</style>
  