<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item :label="t('tableColumn.phoneCode')">
          <el-select
            clearable
            v-model="searchInfo.code"
            :placeholder="t('tableColumn.placeholder')"
            class="input_w"
            @change="searchChange"
          >
            <el-option
              v-for="item in codeOption"
              :key="item.value"
              :label="item.label"
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
          :label="t('tableColumn.phoneCode')"
          prop="code"
        >
          <template #default="scope">
            <div>
              {{
                scope.row.code == "EMAIL"
                  ? "电子邮件"
                  : scope.row.code == "TELEGRAM"
                  ? "电报"
                  : scope.row.code == "WHATSAPP"
                  ? "智能手机"
                  : scope.row.code == "TWITTER"
                  ? "推特"
                  : scope.row.code
              }}
            </div>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          :label="t('tableColumn.contact')"
          prop="contact"
        >
        </el-table-column>

        <el-table-column
          align="center"
          :label="t('tableColumn.extra')"
          prop="extra"
        />
        <el-table-column
          align="center"
          :label="t('tableColumn.created')"
          min-width="150"
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
          min-width="150"
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
          fixed="right"
          :label="t('general.operations')"
          min-width="150"
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
          <el-form-item :label="t('tableColumn.phoneCode')" prop="code">
            <el-select
              clearable
              v-model="form.code"
              :placeholder="t('tableColumn.placeholder')"
              class="input_w"
              :disabled="type == 'edit'"
            >
              <el-option
                v-for="item in codeOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="18" v-if="form.code == 'EMAIL'">
          <el-form-item :label="t('tableColumn.email')" prop="email">
            <el-input v-model="form.email" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="18" v-if="form.code == 'TELEGRAM'">
          <el-form-item :label="t('tableColumn.TELEGRAM')" prop="telegram">
            <el-input v-model="form.telegram" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="18" v-if="form.code == 'WHATSAPP'">
          <el-form-item :label="t('tableColumn.WHATSAPP')" prop="whatsApp">
            <el-input v-model="form.whatsApp" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="18" v-if="form.code == 'TWITTER'">
          <el-form-item :label="t('tableColumn.TWITTER')" prop="twitter">
            <el-input v-model="form.twitter" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="18" style="margin-top: 20px">
          <el-form-item :label="t('tableColumn.extra')" prop="extra">
            <el-input
              v-model="form.extra"
              :rows="10"
              type="textarea"
              autocomplete="off"
              :placeholder="t('tableColumn.extra')"
            />
          </el-form-item>
        </el-col>
      </el-form>
    </el-drawer>
  </div>
</template>
  
  <script setup>
import {
  getContacts,
  addContact,
  editContact,
  delContact,
  getContactCodes,
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
  contact: null,
  extra: null,
});
const codeOption = ref([]);

const type = ref("");
const showTimeBo = ref(false);
const rules = ref({
  code: [{ required: true, message: "请请选择联系方式", trigger: "change" }],
  email: [
    { required: true, message: "邮箱不能为空", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "请输入有效的邮箱地址",
      trigger: "blur",
    },
  ],
  whatsApp: [
    { required: true, message: "手机号码不能为空", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (!phoneRegex.test(value)) {
          callback(new Error("请输入正确的手机号码"));
        }
        callback();
      },
      trigger: "blur",
    },
  ],
  telegram: [
    {
      required: true,
      message: "电报用户名不能为空",
      trigger: "blur",
    },
    {
      pattern: /^@[a-zA-Z0-9_]{5,32}$/,
      message:
        "请输入有效的电报用户名（以@开头，长度为5到32个字符，只允许字母、数字和下划线）",
      trigger: "blur",
    },
  ],
  twitter: [
    {
      required: true,
      message: "Twitter 用户名不能为空",
      trigger: "blur",
    },
    {
      pattern: /^@[a-zA-Z0-9_]{1,15}$/,
      message:
        "请输入有效的 Twitter 用户名（以@开头，长度为1到15个字符，只允许字母、数字和下划线）",
      trigger: "blur",
    },
  ],
});

const page = ref(1);
const total = ref(0);
const pageSize = ref(1000);
const tableData = ref([]);
const searchInfo = ref({});
const closeTime = (val) => {
  showTimeBo.value = val;
};

const searchChange = () => {
  onSubmit();
};

const onReset = () => {
  searchInfo.value = {};
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
  pageSize.value = 1000;
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

const getCodeS = async () => {
  const table = await getContactCodes({
    page: page.value,
    pageSize: 10000,
  });
  if (table.code === 0) {
    // codeOption.value = table.data;
    table.data.forEach((item) => {
      if (item == "EMAIL") {
        codeOption.value.push({
          value: "EMAIL",
          label: "电子邮件",
        });
      } else if (item == "TELEGRAM") {
        codeOption.value.push({
          value: "TELEGRAM",
          label: "电报",
        });
      } else if (item == "WHATSAPP") {
        codeOption.value.push({
          value: "WHATSAPP",
          label: "智能手机",
        });
      } else if (item == "TWITTER") {
        codeOption.value.push({
          value: "TWITTER",
          label: "推特",
        });
      } else {
        codeOption.value.push({
          value: item,
          label: item,
        });
      }
    });
  }
};
// 查询
const getTableData = async () => {
  // searchInfo.value = replaceEmptyStringsWithNull(searchInfo.value);
  const table = await getContacts({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  });
  if (table.code === 0) {
    tableData.value = table.data;
    // total.value = table.data.total;
    // page.value = table.data.page;
    // pageSize.value = table.data.pageSize;
  }
};
const initPage = async () => {
  getCodeS();
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
    contact: null,
    extra: null,
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
  if (rows.code == "EMAIL") {
    rows.email = rows.contact;
  } else if (rows.code == "TELEGRAM") {
    rows.telegram = rows.contact;
  } else if (rows.code == "WHATSAPP") {
    rows.whatsApp = rows.contact;
  } else if (rows.code == "TWITTER") {
    rows.twitter = rows.contact;
  }
  form.value = rows;
  openDialog("edit");
};

const enterDialog = async () => {
  apiForm.value.validate(async (valid) => {
    if (valid) {
      if (form.value.code == "EMAIL") {
        form.value.contact = form.value.email;
      } else if (form.value.code == "TELEGRAM") {
        form.value.contact = form.value.telegram;
      } else if (form.value.code == "WHATSAPP") {
        form.value.contact = form.value.whatsApp;
      } else if (form.value.code == "TWITTER") {
        form.value.contact = form.value.twitter;
      }

      switch (type.value) {
        case "add":
          {
            const dataBoj = {
              code: form.value.code,
              contact: form.value.contact,
              extra: form.value.extra,
            };
            const res = await addContact(dataBoj);
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
            const dataBoj = {
              id: form.value.id,
              code: form.value.code,
              contact: form.value.contact,
              extra: form.value.extra,
            };
            const res = await editContact(dataBoj);
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
    const res = await delContact({ id: row.id });
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
  