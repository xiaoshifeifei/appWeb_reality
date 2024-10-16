<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item :label="t('tableColumn.accountId')">
          <el-input
            clearable
            v-model="searchInfo.accountId"
            :placeholder="t('tableColumn.accountId')"
          />
        </el-form-item>
        <el-form-item
          :label="t('tableColumn.placeholder') + t('tableColumn.time')"
        >
          <el-date-picker
            :style="{ width: '300px' }"
            v-model="value2"
            type="daterange"
            unlink-panels
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :shortcuts="shortcuts"
          />
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
      <el-table
        border
        ref="multipleTable"
        :data="tableData"
        @selection-change="handleSelectionChange"
        highlight-current-row
        :header-cell-style="{
          backgroundColor: '#217E8C',
          Color: '#FFF',
        }"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          align="center"
          min-width="120"
          :label="t('tableColumn.days')"
          prop="day"
        >
          <template #default="scope">
            <div>
              {{ dataGet(scope.row.day) }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="left"
          :label="t('tableColumn.items')"
          min-width="400"
          prop="items"
        >
          <template #default="scope">
            {{ scope.row.items }}
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          min-width="90"
          :label="t('tableColumn.bet')"
          prop="bet"
        >
        </el-table-column>
        <el-table-column
          align="center"
          min-width="90"
          :label="t('tableColumn.win')"
          prop="win"
        >
        </el-table-column>

        <el-table-column
          align="center"
          min-width="150"
          :label="t('tableColumn.winLoss')"
          prop="winLoss"
        >
          <template #default="scope">
            <div style="color: rgb(255, 0, 0)">
              {{ scope.row.winLoss }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          fixed="right"
          :label="t('general.operations')"
          min-width="100"
        >
          <template #default="scope">
            <el-button type="primary" size="small" @click="seeFunc(scope.row)">
              {{ t("general.see") }}
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
      size="100%"
      append-to-body
      :before-close="closeDialog"
      :show-close="false"
    >
      <template #header>
        <div class="flex justify-between items-center">
          <span class="text-lg">{{ dialogTitle }}</span>
          <div>
            <el-button @click="closeDialog">
              {{ t("components.commandMenu.close") }}
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
        <el-row class="w-full">
          <el-col :span="12">
            <el-form-item :label="t('tableColumn.days')">
              <el-input v-model="form.day" readonly autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="t('tableColumn.bet')">
              <el-input v-model="form.bet" readonly autocomplete="off" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="w-full">
          <el-col :span="12">
            <el-form-item :label="t('tableColumn.win')">
              <el-input v-model="form.win" readonly autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="t('tableColumn.winLoss')">
              <el-input v-model="form.winLoss" readonly autocomplete="off" />
            </el-form-item>
          </el-col>
        </el-row>
        <template v-for="(item, key, index) in form.items" :key="index">
          <div class="nameKey">{{ key }}：</div>
          <div class="temple">
            <div v-for="(item1, key1, index1) in item" :key="index1">
              <div v-if="key1 !== 'origins'" class="temp1">
                <el-form-item :label="t(`tableColumn.${key1}`)">
                  <el-input v-model="item[key1]" readonly autocomplete="off" />
                </el-form-item>
              </div>
            </div>
          </div>
          <div class="origin">
            <div v-for="(item1, key1, index1) in item" :key="index1">
              <div v-if="key1 === 'origins'">
                <!-- <div class="nameKey1 pose">
                  {{ t(`tableColumn.${key1}`) }}：
                </div> -->
                <el-table
                  :data="item[key1]"
                  border
                  style="width: 600px; margin-top: 20px"
                >
                  <el-table-column
                    prop="name"
                    align="center"
                    :label="t(`tableColumn.${key1}`)"
                    width="200"
                  />
                  <el-table-column
                    prop="in"
                    align="center"
                    :label="t(`tableColumn.in`)"
                    width="200"
                  />
                  <el-table-column
                    prop="out"
                    align="center"
                    :label="t(`tableColumn.out`)"
                    width="200"
                  />
                </el-table>
                <!-- <div v-for="(item2, key2, index2) in item[key1]" :key="index2">
                  <div class="nameKey1" v-if="key2 === 'level'">
                    {{ t(`tableColumn.levels`) }}：
                  </div>
                  <div class="nameKey1" v-else>
                    {{ t(`tableColumn.${key2}`) }}：
                  </div>
                  <div class="temple">
                    <div
                      v-for="(item3, key3, index3) in item[key1][key2]"
                      :key="index3"
                    >
                      <div class="temp1">
                        <el-form-item :label="t(`tableColumn.${key3}`)">
                          <el-input
                            v-model="item[key1][key2][key3]"
                            readonly
                            autocomplete="off"
                          />
                        </el-form-item>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </template>
      </el-form>
    </el-drawer>
  </div>
</template>
  
  <script setup>
import { getItemOriginInOut } from "@/api/userInfo";
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import dayjs from "dayjs";
import { useI18n } from "vue-i18n"; // added by mohamed hassan to support multilanguage
const { t } = useI18n(); // added by mohamed hassan to support multilanguage
const router = useRouter();
const route = useRoute();

defineOptions({
  name: "userInfo",
});

const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
const searchInfo = ref({});
const dialogTitle = ref("详情");
const form = ref({});
const dialogFormVisible = ref(false);

const value2 = ref("");
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

const handleDateChange = (params, index) => {
  if (index === 0) {
    const isoDate = dayjs(params).format("YYYY-MM-DDTHH:mm:ssZ");
    searchInfo.value.start = isoDate;
  } else if (index === 1) {
    let date = new Date(params);
    let formattedDate =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0") +
      " " +
      "23" +
      ":" +
      "59" +
      ":" +
      "59";
    const dataTime = new Date(formattedDate).getTime();
    const myTime = new Date(dataTime);
    const isoDate = dayjs(myTime).format("YYYY-MM-DDTHH:mm:ssZ");
    searchInfo.value.end = isoDate;
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
    " ";
  return formattedDate;
};

const seeFunc = async (row) => {
  let rows = JSON.parse(JSON.stringify(row));
  rows.day = dataGet(rows.day);
  for (let key in rows.items) {
    for (let key1 in rows.items[key]) {
      if (typeof rows.items[key][key1] === "object") {
        const obj1 = Object.keys(rows.items[key][key1]);
        const obj2 = Object.values(rows.items[key][key1]);
        const obj3 = obj1.map((item, index) => {
          obj2[index].name = t(`tableColumn.${item}`);
          return obj2[index];
        });
        rows.items[key][key1] = obj3;
      }
    }
  }

  form.value = rows;
  dialogFormVisible.value = true;
};
const closeDialog = () => {
  initForm();
  dialogFormVisible.value = false;
};
const apiForm = ref(null);
const initForm = () => {
  apiForm.value.resetFields();
  form.value = {};
};
const onReset = () => {
  searchInfo.value = {};
  value2.value = "";
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
  // getTableData();
};

const handleCurrentChange = (val) => {
  page.value = val;
  // getTableData();
};

// 查询
const getTableData = async () => {
  if (value2.value && value2.value.length) {
    value2.value.forEach((item, index) => {
      handleDateChange(item, index);
    });
  } else {
    searchInfo.value.start = null;
    searchInfo.value.end = null;
    return ElMessage.warning(
      t("tableColumn.placeholder") + t("tableColumn.time")
    );
  }

  const table = await getItemOriginInOut({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  });
  if (table.code === 0) {
    tableData.value = table.data;
    total.value = table.data.total;
    page.value = table.data.page;
    pageSize.value = table.data.pageSize;
  }
};
const init = async () => {
  const end = new Date();
  const start = new Date();
  start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
  value2.value = [start, end];
  getTableData();
};
init();
// 批量操作
const handleSelectionChange = (val) => {
  if (val.length > 0) {
    let arr = [];
    val.forEach((item) => {
      arr.push(item.accountId);
    });
  }
};
const multipleTable = ref(null);

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 0) {
    return "";
  } else {
    return "warnBg";
  }
};
</script>
<style scoped lang="scss">
.gva-table-box {
  :deep(.el-table tr th .cell) {
    color: #fff !important;
  }
  :deep(.el-table .warnBg) {
    background-color: #c7e4ea;
    color: #000;
  }
  :deep(.el-table__body tr:hover > td) {
    background-color: #6dc58b !important;
  }
  :deep(.el-table__body tr.current-row > td) {
    background-color: #6dc58b !important;
  }
}
</style>
  
  <style scoped lang="scss">
.warning {
  color: #dc143c;
}
.myForm {
  width: 70%;
  padding-bottom: 50px;
  margin: auto;
}
.nameKey {
  color: #000;
  font-weight: 700;
  font-size: 16px;
  margin: 20px 0;
}
.nameKey1 {
  color: #999;
  font-weight: 600;
  font-size: 14px;
  // margin: 10px 0;
}
.temple {
  display: flex;
  justify-content: flex-start;
}

.temp1 {
  width: 100%;
}
.origin {
  width: calc(100% - 50px);
  padding-left: 50px;
  margin-bottom: 30px;
}
.pose {
  // margin-left: -50px;
  color: #666;
}
</style>
  