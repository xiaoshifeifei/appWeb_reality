<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item :label="t('tableColumn.taskCode')">
          <el-select
            clearable
            v-model="searchInfo.code"
            :placeholder="t('tableColumn.placeholder')"
            style="width: 300px"
            @change="searchChange"
          >
            <el-option
              v-for="item in statusOption"
              :key="item.value"
              :label="item.label"
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
          :label="t('tableColumn.taskCode')"
          min-width="280"
          prop="code"
        >
          <template #default="scope">
            <div>
              {{
                scope.row.code == "SEVEN_DAY_LOGIN"
                  ? "七日登录"
                  : scope.row.code == "DAILY_SPIN_TIMES"
                  ? "每日任务: spin times"
                  : scope.row.code == "DAILY_MEGA_WIN_TIMES"
                  ? "每日任务: mega win times"
                  : scope.row.code == "DAILY_BIG_WIN_TIMES"
                  ? "每日任务: big win times"
                  : scope.row.code == "DAILY_BET_AMOUNT_ADD"
                  ? "每日任务: bet amount add"
                  : scope.row.code == "DAILY_SINGLE_SPIN_WIN_TIMES"
                  ? "每日任务: single spin win times"
                  : scope.row.code
              }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.betRequiredMultiple')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.betRequiredMultiple">
              {{ scope.row.config.betRequiredMultiple }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowMin"
          align="center"
          :label="t('tableColumn.min')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.min">
              {{ scope.row.config.min }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowMax"
          align="center"
          :label="t('tableColumn.max')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.max">
              {{ scope.row.config.max }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowRequiredTimes"
          align="center"
          :label="t('tableColumn.requiredTimes')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.requiredTimes">
              {{ scope.row.config.requiredTimes }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowMultiple"
          align="center"
          :label="t('tableColumn.multiple')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.multiple">
              {{ scope.row.config.multiple }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowRequiredAmount"
          align="center"
          :label="t('tableColumn.requiredAmount')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.requiredAmount">
              {{ scope.row.config.requiredAmount }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowRequiredWinAmount"
          align="center"
          :label="t('tableColumn.requiredWinAmount')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.requiredWinAmount">
              {{ scope.row.config.requiredWinAmount }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowBonus"
          align="center"
          :label="t('tableColumn.bonus')"
          min-width="400"
          prop="config"
        >
          <template #default="scope">
            <span v-for="(item, index) in scope.row.config.bonus" :key="index">
              <span class="span3">{{ item }}</span>
              <span
                class="span4"
                v-if="
                  scope.row.config.bonus.length > 1 &&
                  scope.row.config.bonus.length - 1 > index
                "
              >
                ,
              </span>
            </span>
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
        label-width="140px"
      >
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.taskCode')" prop="code">
            <el-select
              clearable
              :disabled="type == 'edit'"
              v-model="form.code"
              :placeholder="t('tableColumn.placeholder')"
              style="width: 50%"
            >
              <el-option
                v-for="item in statusOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="18">
          <el-form-item
            :label="t('tableColumn.betRequiredMultiple')"
            prop="config.betRequiredMultiple"
          >
            <el-input
              v-model="form.config.betRequiredMultiple"
              autocomplete="off"
              @input="
                form.config.betRequiredMultiple =
                  form.config.betRequiredMultiple.replace(/[^\d|\.]/g, '')
              "
              :placeholder="t('tableColumn.betRequiredMultiple')"
            />
          </el-form-item>
        </el-col>
        <el-col
          :span="18"
          v-if="form.config.min || form.code != 'SEVEN_DAY_LOGIN'"
        >
          <el-form-item :label="t('tableColumn.min')" prop="config">
            <el-input
              v-model="form.config.min"
              autocomplete="off"
              @input="
                form.config.min = form.config.min.replace(/[^\d|\.]/g, '')
              "
              @change="
                handleChange(
                  form.config.min,
                  index,
                  'v4',
                  undefined,
                  'min',
                  true
                )
              "
              :placeholder="t('tableColumn.min')"
            />
          </el-form-item>
        </el-col>
        <el-col
          :span="18"
          v-if="form.config.max || form.code != 'SEVEN_DAY_LOGIN'"
        >
          <el-form-item :label="t('tableColumn.max')" prop="config">
            <el-input
              v-model="form.config.max"
              autocomplete="off"
              @input="
                form.config.max = form.config.max.replace(/[^\d|\.]/g, '')
              "
              @change="
                handleChange(
                  form.config.max,
                  index,
                  'v4',
                  undefined,
                  'max',
                  true
                )
              "
              :placeholder="t('tableColumn.max')"
            />
          </el-form-item>
        </el-col>
        <el-col
          :span="18"
          v-if="
            form.config.requiredTimes ||
            form.code == 'DAILY_SPIN_TIMES' ||
            form.code == 'DAILY_MEGA_WIN_TIMES' ||
            form.code == 'DAILY_BIG_WIN_TIMES' ||
            form.code == 'DAILY_SINGLE_SPIN_WIN_TIMES'
          "
        >
          <el-form-item :label="t('tableColumn.requiredTimes')" prop="config">
            <el-input
              v-model="form.config.requiredTimes"
              autocomplete="off"
              @input="
                form.config.requiredTimes = form.config.requiredTimes.replace(
                  /[^\d|\.]/g,
                  ''
                )
              "
              :placeholder="t('tableColumn.requiredTimes')"
            />
          </el-form-item>
        </el-col>
        <el-col
          :span="18"
          v-if="
            form.config.multiple ||
            form.code == 'DAILY_MEGA_WIN_TIMES' ||
            form.code == 'DAILY_BIG_WIN_TIMES'
          "
        >
          <el-form-item
            :label="t('tableColumn.multiple')"
            prop="config.multiple"
          >
            <el-input
              v-model="form.config.multiple"
              autocomplete="off"
              @input="
                form.config.multiple = form.config.multiple.replace(
                  /[^\d|\.]/g,
                  ''
                )
              "
              :placeholder="t('tableColumn.multiple')"
            />
          </el-form-item>
        </el-col>
        <el-col
          :span="18"
          v-if="
            form.config.requiredAmount || form.code == 'DAILY_BET_AMOUNT_ADD'
          "
        >
          <el-form-item
            :label="t('tableColumn.requiredAmount')"
            prop="config.requiredAmount"
          >
            <el-input
              v-model="form.config.requiredAmount"
              autocomplete="off"
              @input="
                form.config.requiredAmount = form.config.requiredAmount.replace(
                  /[^\d|\.]/g,
                  ''
                )
              "
              @change="
                handleChange(
                  form.config.requiredAmount,
                  index,
                  'v4',
                  undefined,
                  'requiredAmount',
                  true
                )
              "
              :placeholder="t('tableColumn.requiredAmount')"
            />
          </el-form-item>
        </el-col>
        <el-col
          :span="18"
          v-if="
            form.config.requiredWinAmount ||
            form.code == 'DAILY_SINGLE_SPIN_WIN_TIMES'
          "
        >
          <el-form-item
            :label="t('tableColumn.requiredWinAmount')"
            prop="config.requiredWinAmount"
          >
            <el-input
              v-model="form.config.requiredWinAmount"
              autocomplete="off"
              @input="
                form.config.requiredWinAmount =
                  form.config.requiredWinAmount.replace(/[^\d|\.]/g, '')
              "
              @change="
                handleChange(
                  form.config.requiredWinAmount,
                  index,
                  'v4',
                  undefined,
                  'requiredWinAmount',
                  true
                )
              "
              :placeholder="t('tableColumn.requiredWinAmount')"
            />
          </el-form-item>
        </el-col>

        <div v-if="form.code == 'SEVEN_DAY_LOGIN'">
          <template v-for="(item, index) in form.config.bonus" :key="index">
            <el-row class="w-full">
              <el-col :span="20" v-if="item || type !== null">
                <el-form-item
                  :label="'num' + (index + 1)"
                  :prop="`config.bonus.${index}.num`"
                  :rules="rules['config.bonus.num']"
                >
                  <el-input
                    style="width: 50%"
                    v-model="form.config.bonus[index]"
                    autocomplete="off"
                    @input="item = item.replace(/[^\d|\.]/g, '')"
                    @change="handleChange(item, index, 'v4', undefined, 'num')"
                  />
                  <el-button
                    style="margin-left: 20px"
                    icon="delete"
                    @click="delItem(index)"
                  >
                    {{ t("general.delete") }}
                  </el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <el-form-item>
            <el-button type="warning" icon="plus" @click="addItem()">
              {{ t("general.add") }}
            </el-button>
          </el-form-item>
        </div>

        <el-form-item
          :label="t('tableColumn.status')"
          prop="status"
          v-if="type === 'edit'"
        >
          <el-switch
            v-model="form.status"
            inline-prompt
            style="
              --el-switch-on-color: #d4af37;
              --el-switch-off-color: #ff4949;
            "
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
  getMissionConfig,
  virtualItemDel,
  editOrNewMissionConfig,
  getMissionCodes,
} from "@/api/tack";
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import SingleTime from "@/components/DataTime/singleTime.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n"; // added by mohamed hassan to support multilanguage
const { t } = useI18n(); // added by mohamed hassan to support multilanguage
const router = useRouter();

defineOptions({
  name: "config",
});
const valueExpired = ref("");
const apis = ref([]);
const form = ref({
  code: null,
  config: {
    betRequiredMultiple: null,
    min: null,
    max: null,
    requiredTimes: null,
    multiple: null,
    requiredAmount: null,
    requiredWinAmount: null,
    bonus: [""],
  },
  status: null,
  expiredAt: null,
});
const statusOption = ref([]);
const tableDataShowMax = ref(false);
const tableDataShowBonus = ref(false);
const tableDataShowMin = ref(false);
const tableDataShowRequiredTimes = ref(false);
const tableDataShowMultiple = ref(false);
const tableDataShowRequiredAmount = ref(false);
const tableDataShowRequiredWinAmount = ref(false);

const type = ref("");
const rules = ref({
  content: [{ required: true, message: "请输入content", trigger: "blur" }],
  loop: [{ required: true, message: "请输入循环次数", trigger: "blur" }],
  loopInterval: [
    { required: true, message: "请输入循环间隔", trigger: "blur" },
  ],
});
const showTimeBo = ref(false);
const addItem = () => {
  form.value.config.bonus.push("");
};

const searchChange = () => {
  onSubmit();
};

const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
const searchInfo = ref({});

const onReset = () => {
  searchInfo.value = {};
  if (statusOption.value && statusOption.value.length) {
    searchInfo.value.code = statusOption.value[0].value;
  }
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
const delItem = (index) => {
  form.value.config.bonus.splice(index, 1);
};

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val;
  getTableData();
};
const switchStatus = async (row) => {
  if (row.config.bonus != null && row.config.bonus.length) {
    row.config.bonus.map((item, index) => {
      if (row.code == "SEVEN_DAY_LOGIN") {
        row.config.bonus[index] = row.config.bonus[index] + "";
        if (row.config.bonus[index].indexOf("B") !== -1) {
          const newStr = row.config.bonus[index].replace("B", "");
          row.config.bonus[index] = String(Number(newStr) * 1000000000);
        } else if (row.config.bonus[index].indexOf("M") !== -1) {
          const newStr = row.config.bonus[index].replace("M", "");
          row.config.bonus[index] = String(Number(newStr) * 1000000);
        } else if (row.config.bonus[index].indexOf("K") !== -1) {
          const newStr = row.config.bonus[index].replace("K", "");
          row.config.bonus[index] = String(Number(newStr) * 1000);
        } else {
          row.config.bonus[index] = String(Number(row.config.bonus[index]));
        }
      }
    });
  }
  const res = await editOrNewMissionConfig(row);
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
const getTableData = async () => {
  if (!searchInfo.value.code) {
    return ElMessage.warning(
      t("tableColumn.placeholder") + t("tableColumn.code")
    );
  }
  const table = await getMissionConfig({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  });
  if (table.code === 0) {
    tableData.value = [table.data];
    tableData.value.map((item, index) => {
      if (item.config.bonus != null && item.config.bonus.length > 0) {
        item.config.bonus.map((item2, index2) => {
          if (item.code == "SEVEN_DAY_LOGIN") {
            item2 = handleChange(item2, index2, "v4", true, "");
          }
        });
      }
      if (item.config && item.config.min) {
        item.config.min = handleChange(
          item.config.min,
          0,
          "v4",
          true,
          "min",
          true
        );
      }
      if (item.config && item.config.max) {
        item.config.max = handleChange(
          item.config.max,
          0,
          "v4",
          true,
          "max",
          true
        );
      }
      if (item.config && item.config.requiredAmount) {
        item.config.requiredAmount = handleChange(
          item.config.requiredAmount,
          0,
          "v4",
          true,
          "requiredAmount",
          true
        );
      }
      if (item.config && item.config.requiredWinAmount) {
        item.config.requiredWinAmount = handleChange(
          item.config.requiredWinAmount,
          0,
          "v4",
          true,
          "requiredWinAmount",
          true
        );
      }
    });
    if (table.data.config.max) {
      tableDataShowMax.value = true;
    } else {
      tableDataShowMax.value = false;
    }
    if (table.data.config.min) {
      tableDataShowMin.value = true;
    } else {
      tableDataShowMin.value = false;
    }
    if (table.data.config.requiredTimes) {
      tableDataShowRequiredTimes.value = true;
    } else {
      tableDataShowRequiredTimes.value = false;
    }
    if (table.data.config.multiple) {
      tableDataShowMultiple.value = true;
    } else {
      tableDataShowMultiple.value = false;
    }
    if (table.data.config.requiredAmount) {
      tableDataShowRequiredAmount.value = true;
    } else {
      tableDataShowRequiredAmount.value = false;
    }
    if (table.data.config.requiredWinAmount) {
      tableDataShowRequiredWinAmount.value = true;
    } else {
      tableDataShowRequiredWinAmount.value = false;
    }
    if (table.data.config.bonus) {
      tableDataShowBonus.value = true;
    } else {
      tableDataShowBonus.value = false;
    }

    // total.value = table.data.total;
    // page.value = table.data.page;
    // pageSize.value = table.data.pageSize;
  }
};
const init = async () => {
  const table = await getMissionCodes({
    page: page.value,
    pageSize: 1000,
  });
  if (table.code === 0) {
    // statusOption.value = table.data;
    table.data.forEach((item) => {
      if (item == "SEVEN_DAY_LOGIN") {
        statusOption.value.push({
          value: "SEVEN_DAY_LOGIN",
          label: "七日登录",
        });
      } else if (item == "DAILY_SPIN_TIMES") {
        statusOption.value.push({
          value: "DAILY_SPIN_TIMES",
          label: "每日任务: spin times",
        });
      } else if (item == "DAILY_MEGA_WIN_TIMES") {
        statusOption.value.push({
          value: "DAILY_MEGA_WIN_TIMES",
          label: "每日任务: mega win times",
        });
      } else if (item == "DAILY_BIG_WIN_TIMES") {
        statusOption.value.push({
          value: "DAILY_BIG_WIN_TIMES",
          label: "每日任务: big win times",
        });
      } else if (item == "DAILY_BET_AMOUNT_ADD") {
        statusOption.value.push({
          value: "DAILY_BET_AMOUNT_ADD",
          label: "每日任务: bet amount add",
        });
      } else if (item == "DAILY_SINGLE_SPIN_WIN_TIMES") {
        statusOption.value.push({
          value: "DAILY_SINGLE_SPIN_WIN_TIMES",
          label: "每日任务: single spin win times",
        });
      } else {
        statusOption.value.push({
          value: item,
          label: item,
        });
      }
    });
    if (statusOption.value && statusOption.value.length) {
      searchInfo.value.code = statusOption.value[0].value;
      getTableData();
    }
  }
};

init();
const handleChange = (number, index, params, params2, params3, params4) => {
  if (number) {
    number = Number(number);
  } else {
    return;
  }
  if (params4) {
    if (params == "v4") {
      if (number >= 1000000000) {
        if (params2) {
          return number / 1000000000 + "B";
        } else {
          return (form.value.config[params3] = number / 1000000000 + "B");
        }
      } else if (number >= 1000000) {
        if (params2) {
          return number / 1000000 + "M";
        } else {
          return (form.value.config[params3] = number / 1000000 + "M");
        }
      } else if (number >= 1000) {
        if (params2) {
          return number / 1000 + "K";
        } else {
          return (form.value.config[params3] = number / 1000 + "K");
        }
      } else {
        if (params2) {
          return number.toString();
        } else {
          return (form.value.config[params3] = number.toString());
        }
      }
    }
  } else {
    if (params == "v4") {
      if (number >= 1000000000) {
        if (params2) {
          return number / 1000000000 + "B";
        } else {
          return (form.value.config.bonus[index] = number / 1000000000 + "B");
        }
      } else if (number >= 1000000) {
        if (params2) {
          return number / 1000000 + "M";
        } else {
          return (form.value.config.bonus[index] = number / 1000000 + "M");
        }
      } else if (number >= 1000) {
        if (params2) {
          return number / 1000 + "K";
        } else {
          return (form.value.config.bonus[index] = number / 1000 + "K");
        }
      } else {
        if (params2) {
          return number.toString();
        } else {
          return (form.value.config.bonus[index] = number.toString());
        }
      }
    }
  }
};

// 查询

// getTableData();
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
    config: {
      betRequiredMultiple: null,
      min: null,
      max: null,
      requiredTimes: null,
      multiple: null,
      requiredAmount: null,
      requiredWinAmount: null,
      bonus: [""],
    },
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
const removeNullValues = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key] !== null) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

const enterDialog = async () => {
  apiForm.value.validate(async (valid) => {
    if (valid) {
      if (valueExpired.value) {
        form.value.expiredAt = valueExpired.value;
      }
      if (form.value.config.requiredTimes) {
        form.value.config.requiredTimes = Number(
          form.value.config.requiredTimes
        );
      }

      if (
        form.value.config.bonus != null &&
        form.value.config.bonus.length &&
        form.value.code == "SEVEN_DAY_LOGIN"
      ) {
        form.value.config.bonus.map((item, index) => {
          if (form.value.code == "SEVEN_DAY_LOGIN") {
            form.value.config.bonus[index] =
              form.value.config.bonus[index] + "";
            if (form.value.config.bonus[index].indexOf("B") !== -1) {
              const newStr = form.value.config.bonus[index].replace("B", "");
              form.value.config.bonus[index] = String(
                Number(newStr) * 1000000000
              );
            } else if (form.value.config.bonus[index].indexOf("M") !== -1) {
              const newStr = form.value.config.bonus[index].replace("M", "");
              form.value.config.bonus[index] = String(Number(newStr) * 1000000);
            } else if (form.value.config.bonus[index].indexOf("K") !== -1) {
              const newStr = form.value.config.bonus[index].replace("K", "");
              form.value.config.bonus[index] = String(Number(newStr) * 1000);
            } else {
              form.value.config.bonus[index] = String(
                Number(form.value.config.bonus[index])
              );
            }
          }
        });
      }
      if (form.value.config && form.value.config.min) {
        form.value.config.min = form.value.config.min + "";
        if (form.value.config.min.indexOf("B") !== -1) {
          const newStr = form.value.config.min.replace("B", "");
          form.value.config.min = String(Number(newStr) * 1000000000);
        } else if (form.value.config.min.indexOf("M") !== -1) {
          const newStr = form.value.config.min.replace("M", "");
          form.value.config.min = String(Number(newStr) * 1000000);
        } else if (form.value.config.min.indexOf("K") !== -1) {
          const newStr = form.value.config.min.replace("K", "");
          form.value.config.min = String(Number(newStr) * 1000);
        } else {
          form.value.config.min = String(Number(form.value.config.min));
        }
      }
      if (form.value.config && form.value.config.max) {
        form.value.config.max = form.value.config.max + "";
        if (form.value.config.max.indexOf("B") !== -1) {
          const newStr = form.value.config.max.replace("B", "");
          form.value.config.max = String(Number(newStr) * 1000000000);
        } else if (form.value.config.max.indexOf("M") !== -1) {
          const newStr = form.value.config.max.replace("M", "");
          form.value.config.max = String(Number(newStr) * 1000000);
        } else if (form.value.config.max.indexOf("K") !== -1) {
          const newStr = form.value.config.max.replace("K", "");
          form.value.config.max = String(Number(newStr) * 1000);
        } else {
          form.value.config.max = String(Number(form.value.config.max));
        }
      }
      if (form.value.config && form.value.config.requiredAmount) {
        form.value.config.requiredAmount =
          form.value.config.requiredAmount + "";
        if (form.value.config.requiredAmount.indexOf("B") !== -1) {
          const newStr = form.value.config.requiredAmount.replace("B", "");
          form.value.config.requiredAmount = String(
            Number(newStr) * 1000000000
          );
        } else if (form.value.config.requiredAmount.indexOf("M") !== -1) {
          const newStr = form.value.config.requiredAmount.replace("M", "");
          form.value.config.requiredAmount = String(Number(newStr) * 1000000);
        } else if (form.value.config.requiredAmount.indexOf("K") !== -1) {
          const newStr = form.value.config.requiredAmount.replace("K", "");
          form.value.config.requiredAmount = String(Number(newStr) * 1000);
        } else {
          form.value.config.requiredAmount = String(
            Number(form.value.config.requiredAmount)
          );
        }
      }
      if (form.value.config && form.value.config.requiredWinAmount) {
        form.value.config.requiredWinAmount =
          form.value.config.requiredWinAmount + "";
        if (form.value.config.requiredWinAmount.indexOf("B") !== -1) {
          const newStr = form.value.config.requiredWinAmount.replace("B", "");
          form.value.config.requiredWinAmount = String(
            Number(newStr) * 1000000000
          );
        } else if (form.value.config.requiredWinAmount.indexOf("M") !== -1) {
          const newStr = form.value.config.requiredWinAmount.replace("M", "");
          form.value.config.requiredWinAmount = String(
            Number(newStr) * 1000000
          );
        } else if (form.value.config.requiredWinAmount.indexOf("K") !== -1) {
          const newStr = form.value.config.requiredWinAmount.replace("K", "");
          form.value.config.requiredWinAmount = String(Number(newStr) * 1000);
        } else {
          form.value.config.requiredWinAmount = String(
            Number(form.value.config.requiredWinAmount)
          );
        }
      }
      form.value.config = removeNullValues(form.value.config);
      switch (type.value) {
        case "add":
          {
            form.value.status = 1;
            if (form.value.code != "SEVEN_DAY_LOGIN") {
              form.value.config.bonus = null;
            }
            const res = await editOrNewMissionConfig(form.value);
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
            const res = await editOrNewMissionConfig(form.value);
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
}
.spanCla {
  display: inline-block;
  margin-right: 20px;
}
</style>
  