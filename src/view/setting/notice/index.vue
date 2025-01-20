<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
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
          <el-button type="warning" icon="search" @click="onSubmit">
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
        <el-button type="warning" icon="plus" @click="openDialog('add')">
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
          min-width="200"
          prop="id"
        >
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.NoticeContent')"
          min-width="200"
          prop="content"
        />

        <el-table-column
          align="center"
          :label="t('tableColumn.loop')"
          min-width="200"
          prop="loop"
        >
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.loopInterval')"
          min-width="200"
          prop="loopInterval"
        >
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
              style="
                --el-switch-on-color: #d4af37;
                --el-switch-off-color: #ff4949;
              "
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
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.NoticeContent')" prop="content">
            <el-input
              v-model="form.content"
              :rows="10"
              type="textarea"
              autocomplete="off"
              :placeholder="t('tableColumn.NoticeContent')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.loop')" prop="loop">
            <el-input
              v-model="form.loop"
              autocomplete="off"
              @input="form.loop = form.loop.replace(/[^\d]/g, '')"
              :placeholder="t('tableColumn.loop')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item
            :label="t('tableColumn.loopInterval')"
            prop="loopInterval"
          >
            <el-input
              v-model="form.loopInterval"
              autocomplete="off"
              @input="
                form.loopInterval = form.loopInterval.replace(/[^\d]/g, '')
              "
              :placeholder="t('tableColumn.loopInterval')"
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
  getAnnouncements,
  virtualItemDel,
  editAnnouncement,
  sendAnnouncement,
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
  content: null,
  loop: null,
  loopInterval: null,
  status: null,
  expiredAt: null,
});
const statusOption = ref([
  { label: "enable", value: 1 },
  { label: "disable", value: 2 },
]);

const type = ref("");
const rules = ref({
  content: [{ required: true, message: "请输入content", trigger: "blur" }],
  loop: [{ required: true, message: "请输入循环次数", trigger: "blur" }],
  loopInterval: [
    { required: true, message: "请输入循环间隔", trigger: "blur" },
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
const searchChange = () => {
  onSubmit();
};

// 搜索
const closeTime = (val) => {
  showTimeBo.value = val;
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
  const res = await editAnnouncement(row);
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

// 查询
const getTableData = async () => {
  const table = await getAnnouncements({
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
    content: null,
    loop: null,
    loopInterval: null,
    status: null,
    expiredAt: null,
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
      form.value.loop = Number(form.value.loop);
      form.value.loopInterval = Number(form.value.loopInterval);
      switch (type.value) {
        case "add":
          {
            const res = await sendAnnouncement(form.value);
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
            const res = await editAnnouncement(form.value);
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
</style>
  