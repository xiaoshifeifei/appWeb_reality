<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item :label="t('tableColumn.senderName')">
          <el-input
            clearable
            v-model="searchInfo.sender"
            :placeholder="t('tableColumn.senderName')"
            style="width: 200px"
            @blur="searchChange($event, 'senderName')"
          />
        </el-form-item>
        <el-form-item :label="t('tableColumn.receivers')">
          <el-select
            clearable
            multiple
            collapse-tags
            v-model="searchInfo.receiver"
            :placeholder="t('tableColumn.receivers')"
            style="width: 200px"
            @change="searchChange"
          >
            <el-option
              v-for="item in selectData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="t('tableColumn.typeCode')">
          <el-select
            clearable
            v-model="searchInfo.typeCode"
            :placeholder="t('tableColumn.typeCode')"
            style="width: 200px"
            @change="searchChange"
          >
            <el-option
              v-for="item in typeCodeData"
              :key="item"
              :label="item"
              :value="item"
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
          {{ t("tableColumn.sendAnEmail") }}
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
        <el-table-column type="selection" align="center" width="60" />
        <el-table-column
          align="center"
          :label="t('tableColumn.id')"
          min-width="100"
          prop="id"
        />
        <el-table-column
          align="center"
          :label="t('tableColumn.senderName')"
          min-width="100"
          prop="sender"
        />
        <el-table-column
          align="center"
          :label="t('tableColumn.receivers')"
          min-width="100"
          prop="receiver"
        >
          <template #default="scope">
            {{ scope.row.receiver == 0 ? "" : scope.row.receiver }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.typeCode')"
          min-width="140"
          prop="typeCode"
        />
        <el-table-column
          align="center"
          :label="t('tableColumn.title')"
          min-width="100"
          prop="content"
        >
          <template #default="scope">
            <div>{{ scope.row.content.title }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.content')"
          min-width="100"
          prop="content"
        >
          <template #default="scope">
            <div>{{ scope.row.content.content }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.betRequiredMultiple')"
          min-width="100"
          prop="content"
        >
          <template #default="scope">
            <div>{{ scope.row.content.betRequiredMultiple }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.amount')"
          min-width="100"
          prop="content"
        >
          <template #default="scope">
            <div>{{ scope.row.content.amount }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.created')"
          min-width="200"
          prop="createdAt"
        >
          <template #default="scope">
            <div>{{ dataGet(scope.row.createdAt) }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.expired')"
          min-width="200"
          prop="expiredAt"
        >
          <template #default="scope">
            <div>{{ dataGet(scope.row.expiredAt) }}</div>
          </template>
        </el-table-column>
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
      v-if="sendMailVisible"
      v-model="sendMailVisible"
      size="50%"
      :before-close="closeMail"
      :show-close="false"
    >
      <template #header>
        <div class="flex justify-between items-center">
          <span class="text-lg">{{ dialogTitle }}</span>
          <div>
            <el-button @click="closeMail"> {{ t("general.close") }}</el-button>
            <el-button type="primary" @click="enterMail">
              {{ t("general.confirm") }}
            </el-button>
          </div>
        </div>
      </template>

      <el-form
        class="myForm"
        ref="mailForm"
        :model="formMail"
        :rules="rulesMail"
        label-width="180px"
      >
        <el-row class="w-full">
          <el-col :span="18" v-if="type === 'edit'">
            <el-form-item :label="t('tableColumn.id')" prop="id">
              <el-input
                :disabled="type === 'edit'"
                v-model="formMail.id"
                autocomplete="off"
                :placeholder="t('tableColumn.id')"
              />
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item :label="t('tableColumn.senderName')" prop="sender">
              <el-input
                v-model="formMail.sender"
                autocomplete="off"
                :placeholder="t('tableColumn.senderName')"
              />
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item :label="t('tableColumn.typeCode')" prop="typeCode">
              <el-select
                clearable
                v-model="formMail.typeCode"
                :placeholder="t('tableColumn.typeCode')"
              >
                <el-option
                  v-for="item in typeCodeData"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col
            :span="18"
            v-if="
              formMail.typeCode == 'MAIL_NORMAL' && formMail.typeCode != null
            "
          >
            <el-form-item :label="t('tableColumn.receivers')" prop="receivers">
              <el-select
                clearable
                filterable
                multiple
                collapse-tags
                v-model="formMail.receivers"
                style="width: 100%"
                :placeholder="t('general.pleaseSelect')"
              >
                <el-option
                  v-for="item in selectData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.title')" prop="content.title">
            <el-input
              v-model="formMail.content.title"
              autocomplete="off"
              :placeholder="t('tableColumn.title')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item
            :label="t('tableColumn.content')"
            prop="content.content"
          >
            <el-input
              v-model="formMail.content.content"
              autocomplete="off"
              :placeholder="t('tableColumn.content')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.amount')" prop="content.amount">
            <el-input
              v-model="formMail.content.amount"
              autocomplete="off"
              @input="
                formMail.content.amount = formMail.content.amount.replace(
                  /[^\d|\.]/g,
                  ''
                )
              "
              :placeholder="t('tableColumn.amount')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item
            :label="t('tableColumn.betRequiredMultiple')"
            prop="content.betRequiredMultiple"
          >
            <el-input
              v-model="formMail.content.betRequiredMultiple"
              autocomplete="off"
              @input="
                formMail.content.betRequiredMultiple =
                  formMail.content.betRequiredMultiple.replace(/[^\d|\.]/g, '')
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
            v-model="formMail.status"
            inline-prompt
            :active-value="1"
            :inactive-value="2"
          />
        </el-form-item>

        <SingleTime
          style="margin-left: 110px"
          v-model="valueExpired"
          :title="t('tableColumn.expired')"
          :values="formMail.expiredAt"
          @closeTime="closeTime"
        ></SingleTime>
      </el-form>
    </el-drawer>
  </div>
</template>

<script setup>
import {
  getMails,
  InboxDel,
  sendMail,
  editMail,
  virtualItemGetList,
  getMailTypeCodes,
} from "@/api/tack";
import { getAccountList } from "@/api/userInfo";
import { ref } from "vue";
import DataTime from "@/components/DataTime/index.vue";
import SingleTime from "@/components/DataTime/singleTime.vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import dayjs from "dayjs";
import { useI18n } from "vue-i18n"; // added by mohamed hassan to support multilanguage
const { t } = useI18n(); // added by mohamed hassan to support multilanguage
const router = useRouter();

defineOptions({
  name: "goodsConfiguration",
});

const apis = ref([]);
const mySender = ref(0);
const paramsValue = ref(false);
const form = ref({
  content: null,
  loop: null,
  loopInterval: null,
  status: null,
  expiredAt: null,
});
const value2 = ref([]);
const valueExpired = ref("");
const type = ref("");
const rules = ref({
  code: [{ required: true, message: "请输入code", trigger: "blur" }],
  desc: [{ required: true, message: "请输入desc", trigger: "blur" }],
  expired: [{ required: true, message: "请选择过期时间", trigger: "blur" }],
  "items.code": [{ required: true, message: "请输入code", trigger: "blur" }],
  "items.num": [{ required: true, message: "请输入数量", trigger: "blur" }],
  "content.lang": [{ required: true, message: "请选择语言", trigger: "blur" }],
  "content.title": [{ required: true, message: "请输入标题", trigger: "blur" }],
  "content.message": [
    { required: true, message: "请输入内容", trigger: "blur" },
  ],
});
const sendMailVisible = ref(false);
const codeOptions = ref([]);
const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
const tableUser = ref([]);
const searchInfo = ref({});
const showTimeBo = ref(false);
const completeOptions = ref([
  { label: "EN", value: "en" },
  { label: "CN", value: "cn" },
  { label: "ID", value: "id" },
  { label: "JA", value: "ja" },
  { label: "KM", value: "km" },
  { label: "KO", value: "ko" },
  { label: "MS", value: "ms" },
  { label: "MY", value: "my" },
  { label: "PT", value: "pt" },
  { label: "TH", value: "th" },
  { label: "VI", value: "vi" },
]);
const statusOption = ref([
  { label: "enable", value: 1 },
  { label: "disable", value: 2 },
]);
const selectData = ref([]);
const typeCodeData = ref([]);

const formMail = ref({
  receivers: [],
  expiredAt: null,
  sender: null,
  typeCode: null,
  content: {
    title: null,
    content: null,
    amount: null,
    betRequiredMultiple: null,
  },
});
const shortcuts = [
  {
    text: "Today",
    value: () => {
      const end = new Date();
      const start = new Date();
      return [start, end];
    },
  },
  {
    text: "Yesterday",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24);
      end.setTime(end.getTime() - 3600 * 1000 * 24);
      return [start, end];
    },
  },

  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];
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

const addItem = () => {
  formMail.value.items.push({
    code: "",
    num: null,
  });
};

const closeTime = (val) => {
  showTimeBo.value = val;
};

const delItem = (index) => {
  formMail.value.items.splice(index, 1);
};
let addSz = 0;
const addContent = () => {
  addSz++;
  let obj = {
    lang: "en",
    title: "",
    message: "",
  };
  objectPush(formMail.value.content, "en" + addSz, obj);
};
function objectPush(obj, key, value) {
  obj[key] = value;
}

// 示例使用

const delContent = (index) => {
  delete formMail.value.content[index];
};
const closeMail = () => {
  initMailForm();
  sendMailVisible.value = false;
};
const rulesMail = ref({
  sender: [{ required: true, message: "请输入发件人名称", trigger: "blur" }],
  typeCode: [{ required: true, message: "请选择邮件类型", trigger: "change" }],
  receivers: [{ required: true, message: "请选择收件人", trigger: "change" }],
  "content.title": [
    { required: true, message: "请输入title", trigger: "blur" },
  ],
  "content.content": [
    { required: true, message: "请输入content", trigger: "blur" },
  ],
  "content.amount": [
    { required: true, message: "请输入amount", trigger: "blur" },
  ],
  "content.betRequiredMultiple": [
    { required: true, message: "请输入betRequiredMultiple", trigger: "blur" },
  ],
  expiredAt: [{ required: true, message: "请选择过期时间", trigger: "blur" }],
});
const handleChange = (number, index, params, params2) => {
  if (params == "v4") {
    if (number >= 1000000000) {
      if (params2) {
        return number / 1000000000 + "B";
      } else {
        return (formMail.value.items[index].num = number / 1000000000 + "B");
      }
    } else if (number >= 1000000) {
      if (params2) {
        return number / 1000000 + "M";
      } else {
        return (formMail.value.items[index].num = number / 1000000 + "M");
      }
    } else if (number >= 1000) {
      if (params2) {
        return number / 1000 + "K";
      } else {
        return (formMail.value.items[index].num = number / 1000 + "K");
      }
    } else {
      if (params2) {
        return number.toString();
      } else {
        return (formMail.value.items[index].num = number.toString());
      }
    }
  }
};

const init = async () => {
  const table = await getAccountList({
    page: 1,
    pageSize: 1000000,
    ...searchInfo.value,
  });
  if (table.code === 0) {
    table.data.list.forEach((item) => {
      selectData.value.push({
        label: item.username || item.nickname,
        value: item.accountId,
      });
    });
  }
  const table1 = await getMailTypeCodes({
    page: 1,
    pageSize: 1000000,
  });
  if (table1.code === 0) {
    typeCodeData.value = table1.data;
  }
};

init();

const enterMail = async () => {
  mailForm.value.validate(async (valid) => {
    if (valid) {
      if (valueExpired.value) {
        formMail.value.expiredAt = valueExpired.value;
      }
      if (formMail.value.content && formMail.value.content.amount) {
        formMail.value.content.amount = Number(formMail.value.content.amount);
      }
      switch (type.value) {
        case "add":
          {
            const res = await sendMail(formMail.value);
            if (res.code === 0) {
              ElMessage({
                type: "success",
                message: t("user.enabledSuccessfully"),
                showClose: true,
              });
            }
            closeMail();
            getTableData();
          }
          break;
        case "edit":
          {
            const res = await editMail(formMail.value);
            if (res.code === 0) {
              ElMessage({
                type: "success",
                message: t("user.userEditedNote"),
                showClose: true,
              });
              closeMail();
              getTableData();
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
const searchChange = (e, params) => {
  if (params && e.target.value == "") {
    searchInfo.value[params] = null;
  }
  onSubmit();
};
const onReset = () => {
  searchInfo.value = {};
  value2.value = [];
  paramsValue.value = true;
  onSubmit();
};

// 搜索

const onSubmit = () => {
  page.value = 1;
  pageSize.value = 100000;
  getTableData();
};

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val;
  getTableData();
};
const switchStatus = async (row) => {
  const res = await editMail(row);
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
// 弹窗相关
const mailForm = ref(null);
const initMailForm = () => {
  mailForm.value.resetFields();
  formMail.value = {
    receivers: [],
    expiredAt: null,
    sender: null,
    typeCode: null,
    content: {
      title: null,
      content: null,
      amount: null,
      betRequiredMultiple: null,
    },
  };
};

const handleCurrentChange = (val) => {
  page.value = val;
  getTableData();
};

// 查询
const getTableData = async () => {
  const table = await getMails({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  });
  if (table.code === 0) {
    table.data.list.map((item, index) => {
      if (item.items != null && item.items.length > 0) {
        item.items.map((item2, index2) => {
          item2.num = handleChange(item2.num, index2, "v4", true);
        });
      }
    });
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
    code: "",
    desc: "",
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
  sendMailVisible.value = true;
};
const closeDialog = () => {
  initForm();
  dialogFormVisible.value = false;
};
const formKey = ref("");
const editTackFunc = async (row) => {
  formMail.value = row;
  sendMailVisible.value = true;
  type.value = "edit";
};

const deleteTackFunc = async (row) => {
  ElMessageBox.confirm(t("general.deleteConfirm"), t("general.hint"), {
    confirmButtonText: t("general.confirm"),
    cancelButtonText: t("general.cancel"),
    type: "warning",
  }).then(async () => {
    const res = await InboxDel({ id: row.id });
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
  width: 80%;
  margin: auto;
}
.textSpan {
  word-break: break-all;
  text-align: left;
}
</style>
