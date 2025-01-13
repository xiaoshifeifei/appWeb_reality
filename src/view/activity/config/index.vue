<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item :label="t('tableColumn.hdCode')">
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
          type="expand"
          v-if="tableDataShowExpand"
          min-width="80"
          label="展开"
        >
          <template #default="props">
            <el-table
              :data="[props.row.config.megaWheel]"
              :border="childBorder"
              style="width: 1180px; margin-left: 90px"
              :header-cell-style="{
                backgroundColor: 'var(--el-tab-bgc-q)',
                Color: '#FFF',
              }"
            >
              <el-table-column
                min-width="280"
                align="center"
                :label="t('tableColumn.hdCode')"
                prop="code"
              />
              <el-table-column
                min-width="200"
                align="center"
                :label="t('tableColumn.betRequiredMultiple')"
                prop="betRequiredMultiple"
              />
              <el-table-column
                min-width="200"
                align="center"
                :label="t('tableColumn.requiredTimes')"
                prop="requiredTimes"
              />
              <el-table-column
                :label="t('tableColumn.bonus')"
                align="center"
                min-width="400"
                prop="bonus"
              >
                <template #default="scope">
                  <div v-for="(item, index) in scope.row.bonus" :key="index">
                    <div
                      v-for="(item1, key, index1) in item"
                      :key="index1"
                      class="spanCla"
                    >
                      <span>{{ t(`tableColumn.${key}`) }}: </span>
                      <span class="span3">{{ item1 }}</span>
                    </div>
                    <span
                      class="span4"
                      v-if="
                        scope.row.bonus.length > 1 &&
                        scope.row.bonus.length - 1 > index
                      "
                    >
                    </span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :label="t('tableColumn.hdCode')"
          min-width="280"
          prop="code"
        >
          <template #default="scope">
            <div>
              {{
                scope.row.code == "DAILY_WHOOSH"
                  ? "每日轮盘"
                  : scope.row.code == "BIND_PHONE_NUMBER"
                  ? "绑定手机号"
                  : scope.row.code == "DAILY_DEPOSIT_FIRST"
                  ? "每日首次充值"
                  : scope.row.code == "ONCE_DEPOSIT_FIRST"
                  ? "三挡充值1"
                  : scope.row.code == "ONCE_DEPOSIT_SECOND"
                  ? "三挡充值2"
                  : scope.row.code == "ONCE_DEPOSIT_THIRD"
                  ? "三挡充值3"
                  : scope.row.code == "TIMED_REWARD_INSTANT_BONUS"
                  ? "Instant Bonus定时领取"
                  : scope.row.code == "TIMED_REWARD_TURBO_BONUS"
                  ? "Turbo Bonus定时领取"
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
          v-if="tableDataShowBonusAmount"
          align="center"
          :label="t('tableColumn.bonusAmount')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.bonusAmount">
              {{ scope.row.config.bonusAmount }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowGiftAmountMultiple"
          align="center"
          :label="t('tableColumn.giftAmountMultiple')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.giftAmountMultiple">
              {{ scope.row.config.giftAmountMultiple }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowDepositAmount"
          align="center"
          :label="t('tableColumn.depositAmount')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.depositAmount">
              {{ scope.row.config.depositAmount }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowGiftAmount"
          align="center"
          :label="t('tableColumn.giftAmount')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.giftAmount">
              {{ scope.row.config.giftAmount }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowInterval"
          align="center"
          :label="t('tableColumn.interval')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.interval">
              {{ scope.row.config.interval }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="tableDataShowMinDepositAmount"
          align="center"
          :label="t('tableColumn.minDepositAmount')"
          min-width="200"
          prop="config"
        >
          <template #default="scope">
            <div v-if="scope.row.config.minDepositAmount">
              {{ scope.row.config.minDepositAmount }}
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
            <div v-for="(item, index) in scope.row.config.bonus" :key="index">
              <div
                v-for="(item1, key, index1) in item"
                :key="index1"
                class="spanCla"
              >
                <span>{{ t(`tableColumn.${key}`) }}: </span>
                <span class="span3">{{ item1 || "0" }}</span>
              </div>
              <span
                class="span4"
                v-if="
                  scope.row.config.bonus.length > 1 &&
                  scope.row.config.bonus.length - 1 > index
                "
              >
              </span>
            </div>
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
        label-width="120px"
      >
        <el-col :span="18">
          <el-form-item :label="t('tableColumn.code')" prop="code">
            <el-input
              disabled
              v-model="form.code"
              autocomplete="off"
              :placeholder="t('tableColumn.code')"
            />
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
        <el-col :span="18" v-if="form.code == '绑定手机号'">
          <el-form-item
            :label="t('tableColumn.bonusAmount')"
            prop="config.bonusAmount"
          >
            <el-input
              v-model="form.config.bonusAmount"
              autocomplete="off"
              @input="
                form.config.bonusAmount = form.config.bonusAmount.replace(
                  /[^\d|\.]/g,
                  ''
                )
              "
              @change="
                handleChange1(
                  form.config.bonusAmount,
                  0,
                  'v4',
                  undefined,
                  'bonusAmount'
                )
              "
              :placeholder="t('tableColumn.bonusAmount')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18" v-if="form.code == '每日首次充值'">
          <el-form-item
            :label="t('tableColumn.giftAmountMultiple')"
            prop="config.giftAmountMultiple"
          >
            <el-input
              v-model="form.config.giftAmountMultiple"
              autocomplete="off"
              @input="
                form.config.giftAmountMultiple =
                  form.config.giftAmountMultiple.replace(/[^\d|\.]/g, '')
              "
              :placeholder="t('tableColumn.giftAmountMultiple')"
            />
          </el-form-item>
        </el-col>
        <el-col
          :span="18"
          v-if="
            form.code == '三挡充值1' ||
            form.code == '三挡充值2' ||
            form.code == '三挡充值3'
          "
        >
          <el-form-item
            :label="t('tableColumn.depositAmount')"
            prop="config.depositAmount"
          >
            <el-input
              v-model="form.config.depositAmount"
              autocomplete="off"
              @input="
                form.config.depositAmount = form.config.depositAmount.replace(
                  /[^\d|\.]/g,
                  ''
                )
              "
              @change="
                handleChange1(
                  form.config.depositAmount,
                  0,
                  'v4',
                  undefined,
                  'depositAmount'
                )
              "
              :placeholder="t('tableColumn.depositAmount')"
            />
          </el-form-item>
        </el-col>
        <el-col
          :span="18"
          v-if="
            form.code == '三挡充值1' ||
            form.code == '三挡充值2' ||
            form.code == '三挡充值3'
          "
        >
          <el-form-item
            :label="t('tableColumn.giftAmount')"
            prop="config.giftAmount"
          >
            <el-input
              v-model="form.config.giftAmount"
              autocomplete="off"
              @input="
                form.config.giftAmount = form.config.giftAmount.replace(
                  /[^\d|\.]/g,
                  ''
                )
              "
              @change="
                handleChange1(
                  form.config.giftAmount,
                  0,
                  'v4',
                  undefined,
                  'giftAmount'
                )
              "
              :placeholder="t('tableColumn.giftAmount')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="18" v-if="form.code == '每日首次充值'">
          <el-form-item
            :label="t('tableColumn.minDepositAmount')"
            prop="config.minDepositAmount"
          >
            <el-input
              v-model="form.config.minDepositAmount"
              autocomplete="off"
              @input="
                form.config.minDepositAmount =
                  form.config.minDepositAmount.replace(/[^\d|\.]/g, '')
              "
              @change="
                handleChange1(
                  form.config.minDepositAmount,
                  0,
                  'v4',
                  undefined,
                  'minDepositAmount'
                )
              "
              :placeholder="t('tableColumn.minDepositAmount')"
            />
          </el-form-item>
        </el-col>
        <el-col
          :span="18"
          v-if="
            form.code == 'Instant Bonus定时领取' ||
            form.code == 'Turbo Bonus定时领取'
          "
        >
          <el-form-item
            :label="t('tableColumn.interval')"
            prop="config.interval"
          >
            <el-input
              v-model="form.config.interval"
              autocomplete="off"
              @input="
                form.config.interval = form.config.interval.replace(
                  /[^\d|\.]/g,
                  ''
                )
              "
              :placeholder="t('tableColumn.interval')"
            />
          </el-form-item>
        </el-col>

        <div
          v-if="
            form.config.bonus &&
            form.config.bonus.length &&
            form.code == '每日轮盘'
          "
        >
          <template v-for="(item, index) in form.config.bonus" :key="index">
            <el-row class="w-full">
              <el-col :span="6" v-if="item.min || type !== null">
                <el-form-item
                  :label="t('tableColumn.min')"
                  :prop="`config.bonus.${index}.min`"
                  :rules="rules['config.bonus.min']"
                >
                  <el-input
                    style="width: 100%"
                    v-model="item.min"
                    autocomplete="off"
                    @input="item.min = item.min.replace(/[^\d|\.]/g, '')"
                    @change="
                      handleChange(item.min, index, 'v4', undefined, 'min')
                    "
                  />
                </el-form-item>
              </el-col>
              <el-col :span="6" v-if="item.max || type !== null">
                <el-form-item
                  :label="t('tableColumn.max')"
                  :prop="`config.bonus.${index}.max`"
                  :rules="rules['config.bonus.max']"
                >
                  <el-input
                    style="width: 100%"
                    v-model="item.max"
                    autocomplete="off"
                    @input="item.max = item.max.replace(/[^\d|\.]/g, '')"
                    @change="
                      handleChange(item.max, index, 'v4', undefined, 'max')
                    "
                  />
                </el-form-item>
              </el-col>
              <el-col :span="9" v-if="item.weight || type !== null">
                <el-form-item
                  :label="t('tableColumn.weight')"
                  :prop="`config.bonus.${index}.weight`"
                  :rules="rules['config.bonus.weight']"
                >
                  <el-input
                    style="width: 50%"
                    v-model="item.weight"
                    autocomplete="off"
                    @input="item.weight = item.weight.replace(/[^\d|\.]/g, '')"
                    @change="
                      handleChange(
                        item.weight,
                        index,
                        'v4',
                        undefined,
                        'weight'
                      )
                    "
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
            <el-button type="primary" icon="plus" @click="addItem()">
              {{ t("general.add") }}
            </el-button>
          </el-form-item>
        </div>
        <div
          v-if="
            form.config.bonus &&
            form.config.bonus.length &&
            (form.code == 'Instant Bonus定时领取' ||
              form.code == 'Turbo Bonus定时领取')
          "
        >
          <template v-for="(item, index) in form.config.bonus" :key="index">
            <el-row class="w-full">
              <el-col :span="6" v-if="item.max || type !== null">
                <el-form-item
                  :label="t('tableColumn.bonusAmount')"
                  :prop="`config.bonus.${index}.bonusAmount`"
                  :rules="rules['config.bonus.bonusAmount']"
                >
                  <el-input
                    style="width: 100%"
                    v-model="item.bonusAmount"
                    autocomplete="off"
                    @input="
                      item.bonusAmount = item.bonusAmount.replace(
                        /[^\d|\.]/g,
                        ''
                      )
                    "
                    @change="
                      handleChange(
                        item.bonusAmount,
                        index,
                        'v4',
                        undefined,
                        'bonusAmount'
                      )
                    "
                  />
                </el-form-item>
              </el-col>
              <el-col :span="9" v-if="item.weight || type !== null">
                <el-form-item
                  :label="t('tableColumn.weight')"
                  :prop="`config.bonus.${index}.weight`"
                  :rules="rules['config.bonus.weight']"
                >
                  <el-input
                    style="width: 50%"
                    v-model="item.weight"
                    autocomplete="off"
                    @input="item.weight = item.weight.replace(/[^\d|\.]/g, '')"
                    @change="
                      handleChange(
                        item.weight,
                        index,
                        'v4',
                        undefined,
                        'weight'
                      )
                    "
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
            <el-button type="primary" icon="plus" @click="addItemQ()">
              {{ t("general.add") }}
            </el-button>
          </el-form-item>
        </div>
        <div v-if="form.code == 'Turbo Bonus定时领取'">
          <el-col :span="18">
            <el-form-item :label="t('tableColumn.code')" prop="code">
              <el-input
                disabled
                v-model="form.config.megaWheel.code"
                autocomplete="off"
                :placeholder="t('tableColumn.code')"
              />
            </el-form-item>
          </el-col>

          <el-col :span="18">
            <el-form-item
              :label="t('tableColumn.betRequiredMultiple')"
              prop="config.betRequiredMultiple"
            >
              <el-input
                v-model="form.config.megaWheel.betRequiredMultiple"
                autocomplete="off"
                @input="
                  form.config.megaWheel.betRequiredMultiple =
                    form.config.megaWheel.betRequiredMultiple.replace(
                      /[^\d|\.]/g,
                      ''
                    )
                "
                :placeholder="t('tableColumn.betRequiredMultiple')"
              />
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item
              :label="t('tableColumn.requiredTimes')"
              prop="requiredTimes"
            >
              <el-input
                v-model="form.config.megaWheel.requiredTimes"
                autocomplete="off"
                @input="
                  form.config.megaWheel.requiredTimes =
                    form.config.megaWheel.requiredTimes.replace(/[^\d|\.]/g, '')
                "
                :placeholder="t('tableColumn.requiredTimes')"
              />
            </el-form-item>
          </el-col>
          <div>
            <template
              v-for="(item, index) in form.config.megaWheel.bonus"
              :key="index"
            >
              <el-row class="w-full">
                <el-col :span="6" v-if="item.bonusAmount || type !== null">
                  <el-form-item
                    :label="t('tableColumn.bonusAmount')"
                    :prop="`config.bonus.${index}.bonusAmount`"
                    :rules="rules['config.bonus.bonusAmount']"
                  >
                    <el-input
                      style="width: 100%"
                      v-model="item.bonusAmount"
                      autocomplete="off"
                      @input="
                        item.bonusAmount = item.bonusAmount.replace(
                          /[^\d|\.]/g,
                          ''
                        )
                      "
                      @change="
                        handleChange2(
                          item.bonusAmount,
                          index,
                          'v4',
                          undefined,
                          'bonusAmount'
                        )
                      "
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="9" v-if="item.weight || type !== null">
                  <el-form-item
                    :label="t('tableColumn.weight')"
                    :prop="`config.bonus.${index}.weight`"
                    :rules="rules['config.bonus.weight']"
                  >
                    <el-input
                      style="width: 50%"
                      v-model="item.weight"
                      autocomplete="off"
                      @input="
                        item.weight = item.weight.replace(/[^\d|\.]/g, '')
                      "
                      @change="
                        handleChange2(
                          item.weight,
                          index,
                          'v4',
                          undefined,
                          'weight'
                        )
                      "
                    />
                    <el-button
                      style="margin-left: 20px"
                      icon="delete"
                      @click="delItemQ(index)"
                    >
                      {{ t("general.delete") }}
                    </el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </template>
            <el-form-item>
              <el-button type="primary" icon="plus" @click="addItemQ()">
                {{ t("general.add") }}
              </el-button>
            </el-form-item>
          </div>
        </div>

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
  getActivityConfig,
  virtualItemDel,
  editOrNewActivityConfig,
  sendAnnouncement,
  getActivityCodes,
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
const childBorder = ref(true);
const form = ref({
  code: null,
  config: {
    betRequiredMultiple: null,
    bonusAmount: null,
    giftAmountMultiple: null,
    giftAmount: null,
    depositAmount: null,
    minDepositAmount: null,
    bonus: [
      {
        min: 0,
        max: 0,
        weight: 0,
      },
    ],
    megaWheel: {
      requiredTimes: null,
      bonus: [],
      code: "TIMED_REWARD_TURBO_BONUS",
      betRequiredMultiple: null,
    },
  },
  status: null,
  expiredAt: null,
});
const statusOption = ref([]);
const tableDataShowBonusAmount = ref(false);
const tableDataShowGiftAmountMultiple = ref(false);
const tableDataShowDepositAmount = ref(false);
const tableDataShowGiftAmount = ref(false);
const tableDataShowBonus = ref(false);
const tableDataShowInterval = ref(false);
const tableDataShowExpand = ref(false);
const tableDataShowMinDepositAmount = ref(false);

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
  form.value.config.bonus.push({
    min: null,
    max: null,
    weight: null,
  });
};
const addItemQ = () => {
  form.value.config.megaWheel.bonus.push({
    bonusAmount: null,
    weight: null,
  });
};

const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
const searchInfo = ref({});
const searchChange = () => {
  onSubmit();
};
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
const delItemQ = (index) => {
  form.value.config.megaWheel.bonus.splice(index, 1);
};

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val;
  getTableData();
};
const switchStatus = async (row) => {
  if (row.config.bonus != null && row.config.bonus.length) {
    row.config.bonus.map((item, index) => {
      if (row.code == "DAILY_WHOOSH") {
        item.min = item.min + "";
        if (item.min.indexOf("B") !== -1) {
          const newStr = item.min.replace("B", "");
          item.min = Number(newStr) * 1000000000;
        } else if (item.min.indexOf("M") !== -1) {
          const newStr = item.min.replace("M", "");
          item.min = Number(newStr) * 1000000;
        } else if (item.min.indexOf("K") !== -1) {
          const newStr = item.min.replace("K", "");
          item.min = Number(newStr) * 1000;
        } else {
          item.min = Number(item.min);
        }
        item.max = item.max + "";
        if (item.max.indexOf("B") !== -1) {
          const newStr = item.max.replace("B", "");
          item.max = Number(newStr) * 1000000000;
        } else if (item.max.indexOf("M") !== -1) {
          const newStr = item.max.replace("M", "");
          item.max = Number(newStr) * 1000000;
        } else if (item.max.indexOf("K") !== -1) {
          const newStr = item.max.replace("K", "");
          item.max = Number(newStr) * 1000;
        } else {
          item.max = Number(item.max);
        }
      }
      if (
        row.code == "TIMED_REWARD_INSTANT_BONUS" ||
        row.code == "TIMED_REWARD_TURBO_BONUS" ||
        row.code == "TIMED_REWARD_MEGA_WHEEL"
      ) {
        item.bonusAmount = item.bonusAmount + "";
        if (item.bonusAmount.indexOf("B") !== -1) {
          const newStr = item.bonusAmount.replace("B", "");
          item.bonusAmount = Number(newStr) * 1000000000;
        } else if (item.bonusAmount.indexOf("M") !== -1) {
          const newStr = item.bonusAmount.replace("M", "");
          item.bonusAmount = Number(newStr) * 1000000;
        } else if (item.bonusAmount.indexOf("K") !== -1) {
          const newStr = item.bonusAmount.replace("K", "");
          item.bonusAmount = Number(newStr) * 1000;
        } else {
          item.bonusAmount = Number(item.bonusAmount);
        }
      }

      item.weight = item.weight + "";
      if (item.weight.indexOf("B") !== -1) {
        const newStr = item.weight.replace("B", "");
        item.weight = Number(newStr) * 1000000000;
      } else if (item.weight.indexOf("M") !== -1) {
        const newStr = item.weight.replace("M", "");
        item.weight = Number(newStr) * 1000000;
      } else if (item.weight.indexOf("K") !== -1) {
        const newStr = item.weight.replace("K", "");
        item.weight = Number(newStr) * 1000;
      } else {
        item.weight = Number(item.weight);
      }
    });
  }
  if (
    row.config.megaWheel &&
    row.config.megaWheel.bonus != null &&
    row.config.megaWheel.bonus.length
  ) {
    row.config.megaWheel.bonus.map((item, index) => {
      item.bonusAmount = item.bonusAmount + "";
      if (item.bonusAmount.indexOf("B") !== -1) {
        const newStr = item.bonusAmount.replace("B", "");
        item.bonusAmount = Number(newStr) * 1000000000;
      } else if (item.bonusAmount.indexOf("M") !== -1) {
        const newStr = item.bonusAmount.replace("M", "");
        item.bonusAmount = Number(newStr) * 1000000;
      } else if (item.bonusAmount.indexOf("K") !== -1) {
        const newStr = item.bonusAmount.replace("K", "");
        item.bonusAmount = Number(newStr) * 1000;
      } else {
        item.bonusAmount = Number(item.bonusAmount);
      }

      item.weight = item.weight + "";
      if (item.weight.indexOf("B") !== -1) {
        const newStr = item.weight.replace("B", "");
        item.weight = Number(newStr) * 1000000000;
      } else if (item.weight.indexOf("M") !== -1) {
        const newStr = item.weight.replace("M", "");
        item.weight = Number(newStr) * 1000000;
      } else if (item.weight.indexOf("K") !== -1) {
        const newStr = item.weight.replace("K", "");
        item.weight = Number(newStr) * 1000;
      } else {
        item.weight = Number(item.weight);
      }
    });
  }
  if (row.config.minDepositAmount) {
    row.config.minDepositAmount = countData(row.config.minDepositAmount);
  }
  if (row.config.depositAmount) {
    row.config.depositAmount = countData(row.config.depositAmount);
  }
  if (row.config.giftAmount) {
    row.config.giftAmount = countData(row.config.giftAmount);
  }
  const res = await editOrNewActivityConfig(row);
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
  const table = await getActivityConfig({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  });
  if (table.code === 0) {
    tableData.value = [table.data];
    tableData.value.map((item, index) => {
      if (item.config.bonus != null && item.config.bonus.length > 0) {
        item.config.bonus.map((item2, index2) => {
          if (item.code == "DAILY_WHOOSH") {
            item2.min = handleChange(item2.min, index2, "v4", true, "min");
            item2.max = handleChange(item2.max, index2, "v4", true, "max");
          } else if (
            item.code == "TIMED_REWARD_INSTANT_BONUS" ||
            item.code == "TIMED_REWARD_TURBO_BONUS" ||
            item.code == "TIMED_REWARD_MEGA_WHEEL"
          ) {
            item2.bonusAmount = handleChange(
              item2.bonusAmount,
              index2,
              "v4",
              true,
              "bonusAmount"
            );
          }

          item2.weight = handleChange(
            item2.weight,
            index2,
            "v4",
            true,
            "weight"
          );
        });
      }
      if (
        item.config.megaWheel &&
        item.config.megaWheel.bonus != null &&
        item.config.megaWheel.bonus.length > 0
      ) {
        item.config.megaWheel.bonus.map((item2, index2) => {
          item2.bonusAmount = handleChange(
            item2.bonusAmount,
            index2,
            "v4",
            true,
            "bonusAmount"
          );

          item2.weight = handleChange(
            item2.weight,
            index2,
            "v4",
            true,
            "weight"
          );
        });
      }
      if (item.config.minDepositAmount) {
        item.config.minDepositAmount = handleChange(
          item.config.minDepositAmount,
          index,
          "v4",
          true,
          "minDepositAmount"
        );
      }
      if (item.config.depositAmount) {
        item.config.depositAmount = handleChange(
          item.config.depositAmount,
          index,
          "v4",
          true,
          "depositAmount"
        );
      }
      if (item.config.giftAmount) {
        item.config.giftAmount = handleChange(
          item.config.giftAmount,
          index,
          "v4",
          true,
          "giftAmount"
        );
      }
      if (item.config.bonusAmount) {
        item.config.bonusAmount = handleChange(
          item.config.bonusAmount,
          index,
          "v4",
          true,
          "bonusAmount"
        );
      }
    });
    if (table.data.config.bonusAmount) {
      tableDataShowBonusAmount.value = true;
    } else {
      tableDataShowBonusAmount.value = false;
    }
    if (table.data.config.giftAmountMultiple) {
      tableDataShowGiftAmountMultiple.value = true;
    } else {
      tableDataShowGiftAmountMultiple.value = false;
    }
    if (table.data.config.depositAmount) {
      tableDataShowDepositAmount.value = true;
    } else {
      tableDataShowDepositAmount.value = false;
    }
    if (table.data.config.giftAmount) {
      tableDataShowGiftAmount.value = true;
    } else {
      tableDataShowGiftAmount.value = false;
    }
    if (table.data.config.interval) {
      tableDataShowInterval.value = true;
    } else {
      tableDataShowInterval.value = false;
    }
    if (table.data.config.minDepositAmount) {
      tableDataShowMinDepositAmount.value = true;
    } else {
      tableDataShowMinDepositAmount.value = false;
    }
    if (table.data.config.bonus) {
      tableDataShowBonus.value = true;
    } else {
      tableDataShowBonus.value = false;
    }

    if (table.data.code == "TIMED_REWARD_TURBO_BONUS") {
      tableDataShowExpand.value = true;
    } else {
      tableDataShowExpand.value = false;
    }
  }
};
const init = async () => {
  const table = await getActivityCodes({
    page: page.value,
    pageSize: 1000,
  });
  if (table.code === 0) {
    // statusOption.value = table.data;
    table.data.forEach((item) => {
      if (item == "DAILY_WHOOSH") {
        statusOption.value.push({
          value: "DAILY_WHOOSH",
          label: "每日轮盘",
        });
      } else if (item == "BIND_PHONE_NUMBER") {
        statusOption.value.push({
          value: "BIND_PHONE_NUMBER",
          label: "绑定手机号",
        });
      } else if (item == "DAILY_DEPOSIT_FIRST") {
        statusOption.value.push({
          value: "DAILY_DEPOSIT_FIRST",
          label: "每日首次充值",
        });
      } else if (item == "ONCE_DEPOSIT_FIRST") {
        statusOption.value.push({
          value: "ONCE_DEPOSIT_FIRST",
          label: "三挡充值1",
        });
      } else if (item == "ONCE_DEPOSIT_SECOND") {
        statusOption.value.push({
          value: "ONCE_DEPOSIT_SECOND",
          label: "三挡充值2",
        });
      } else if (item == "ONCE_DEPOSIT_THIRD") {
        statusOption.value.push({
          value: "ONCE_DEPOSIT_THIRD",
          label: "三挡充值3",
        });
      } else if (item == "TIMED_REWARD_INSTANT_BONUS") {
        statusOption.value.push({
          value: "TIMED_REWARD_INSTANT_BONUS",
          label: "Instant Bonus定时领取",
        });
      } else if (item == "TIMED_REWARD_TURBO_BONUS") {
        statusOption.value.push({
          value: "TIMED_REWARD_TURBO_BONUS",
          label: "Turbo Bonus定时领取",
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
        return (form.value.config.bonus[index][params3] =
          number / 1000000000 + "B");
      }
    } else if (number >= 1000000) {
      if (params2) {
        return number / 1000000 + "M";
      } else {
        return (form.value.config.bonus[index][params3] =
          number / 1000000 + "M");
      }
    } else if (number >= 1000) {
      if (params2) {
        return number / 1000 + "K";
      } else {
        return (form.value.config.bonus[index][params3] = number / 1000 + "K");
      }
    } else {
      if (params2) {
        return number.toString();
      } else {
        return (form.value.config.bonus[index][params3] = number.toString());
      }
    }
  }
};
const handleChange1 = (number, index, params, params2, params3) => {
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
};
const handleChange2 = (number, index, params, params2, params3) => {
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
        return (form.value.config.megaWheel.bonus[index][params3] =
          number / 1000000000 + "B");
      }
    } else if (number >= 1000000) {
      if (params2) {
        return number / 1000000 + "M";
      } else {
        return (form.value.config.megaWheel.bonus[index][params3] =
          number / 1000000 + "M");
      }
    } else if (number >= 1000) {
      if (params2) {
        return number / 1000 + "K";
      } else {
        return (form.value.config.megaWheel.bonus[index][params3] =
          number / 1000 + "K");
      }
    } else {
      if (params2) {
        return number.toString();
      } else {
        return (form.value.config.megaWheel.bonus[index][params3] =
          number.toString());
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
      bonusAmount: null,
      giftAmountMultiple: null,
      giftAmount: null,
      depositAmount: null,
      bonus: [],
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
  row.config.bonus.map((item) => {
    console.log("item.weight", item.weight);
    if (!item.weight) {
      item.weight = "0";
    }
    return { min: item.min, max: item.max, weight: item.weight };
  });

  let rows = JSON.parse(JSON.stringify(row));
  if (rows.code == "DAILY_WHOOSH") {
    rows.code = "每日轮盘";
  } else if (rows.code == "BIND_PHONE_NUMBER") {
    rows.code = "绑定手机号";
  } else if (rows.code == "DAILY_DEPOSIT_FIRST") {
    rows.code = "每日首次充值";
  } else if (rows.code == "ONCE_DEPOSIT_FIRST") {
    rows.code = "三挡充值1";
  } else if (rows.code == "ONCE_DEPOSIT_SECOND") {
    rows.code = "三挡充值2";
  } else if (rows.code == "ONCE_DEPOSIT_THIRD") {
    rows.code = "三挡充值3";
  } else if (rows.code == "TIMED_REWARD_INSTANT_BONUS") {
    rows.code = "Instant Bonus定时领取";
  } else if (rows.code == "TIMED_REWARD_TURBO_BONUS") {
    rows.code = "Turbo Bonus定时领取";
  }
  form.value = rows;
  openDialog("edit");
};
const countData = (num) => {
  num = num + "";
  if (num.indexOf("B") !== -1) {
    const newStr = num.replace("B", "");
    return (num = Number(newStr) * 1000000000);
  } else if (num.indexOf("M") !== -1) {
    const newStr = num.replace("M", "");
    return (num = Number(newStr) * 1000000);
  } else if (num.indexOf("K") !== -1) {
    const newStr = num.replace("K", "");
    return (num = Number(newStr) * 1000);
  } else {
    return (num = Number(num));
  }
};

const enterDialog = async () => {
  apiForm.value.validate(async (valid) => {
    if (valid) {
      if (form.value.code) {
        if (form.value.code == "每日轮盘") {
          form.value.code = "DAILY_WHOOSH";
        } else if (form.value.code == "绑定手机号") {
          form.value.code = "BIND_PHONE_NUMBER";
        } else if (form.value.code == "每日首次充值") {
          form.value.code = "DAILY_DEPOSIT_FIRST";
        } else if (form.value.code == "三挡充值1") {
          form.value.code = "ONCE_DEPOSIT_FIRST";
        } else if (form.value.code == "三挡充值2") {
          form.value.code = "ONCE_DEPOSIT_SECOND";
        } else if (form.value.code == "三挡充值3") {
          form.value.code = "ONCE_DEPOSIT_THIRD";
        } else if (form.value.code == "Instant Bonus定时领取") {
          form.value.code = "TIMED_REWARD_INSTANT_BONUS";
        } else if (form.value.code == "Turbo Bonus定时领取") {
          form.value.code = "TIMED_REWARD_TURBO_BONUS";
        }
      }
      if (valueExpired.value) {
        form.value.expiredAt = valueExpired.value;
      }
      if (form.value.config.minDepositAmount) {
        form.value.config.minDepositAmount = countData(
          form.value.config.minDepositAmount
        );
      }
      if (form.value.config.bonusAmount) {
        form.value.config.bonusAmount = countData(
          form.value.config.bonusAmount
        );
      }
      if (form.value.config.depositAmount) {
        form.value.config.depositAmount = countData(
          form.value.config.depositAmount
        );
      }
      if (form.value.config.giftAmount) {
        form.value.config.giftAmount = countData(form.value.config.giftAmount);
      }
      if (form.value.config.interval) {
        form.value.config.interval = Number(form.value.config.interval);
      }
      if (
        form.value.config.megaWheel &&
        form.value.config.megaWheel.bonus != null &&
        form.value.config.megaWheel.bonus.length
      ) {
        form.value.config.megaWheel.bonus.map((item, index) => {
          item.bonusAmount = item.bonusAmount + "";
          if (item.bonusAmount.indexOf("B") !== -1) {
            const newStr = item.bonusAmount.replace("B", "");
            item.bonusAmount = Number(newStr) * 1000000000;
          } else if (item.bonusAmount.indexOf("M") !== -1) {
            const newStr = item.bonusAmount.replace("M", "");
            item.bonusAmount = Number(newStr) * 1000000;
          } else if (item.bonusAmount.indexOf("K") !== -1) {
            const newStr = item.bonusAmount.replace("K", "");
            item.bonusAmount = Number(newStr) * 1000;
          } else {
            item.bonusAmount = Number(item.bonusAmount);
          }

          item.weight = item.weight + "";
          if (item.weight.indexOf("B") !== -1) {
            const newStr = item.weight.replace("B", "");
            item.weight = Number(newStr) * 1000000000;
          } else if (item.weight.indexOf("M") !== -1) {
            const newStr = item.weight.replace("M", "");
            item.weight = Number(newStr) * 1000000;
          } else if (item.weight.indexOf("K") !== -1) {
            const newStr = item.weight.replace("K", "");
            item.weight = Number(newStr) * 1000;
          } else {
            item.weight = Number(item.weight);
          }
        });
      }
      if (form.value.config.bonus != null && form.value.config.bonus.length) {
        form.value.config.bonus.map((item, index) => {
          if (form.value.code == "DAILY_WHOOSH") {
            item.min = item.min + "";
            if (item.min.indexOf("B") !== -1) {
              const newStr = item.min.replace("B", "");
              item.min = Number(newStr) * 1000000000;
            } else if (item.min.indexOf("M") !== -1) {
              const newStr = item.min.replace("M", "");
              item.min = Number(newStr) * 1000000;
            } else if (item.min.indexOf("K") !== -1) {
              const newStr = item.min.replace("K", "");
              item.min = Number(newStr) * 1000;
            } else {
              item.min = Number(item.min);
            }
            item.max = item.max + "";
            if (item.max.indexOf("B") !== -1) {
              const newStr = item.max.replace("B", "");
              item.max = Number(newStr) * 1000000000;
            } else if (item.max.indexOf("M") !== -1) {
              const newStr = item.max.replace("M", "");
              item.max = Number(newStr) * 1000000;
            } else if (item.max.indexOf("K") !== -1) {
              const newStr = item.max.replace("K", "");
              item.max = Number(newStr) * 1000;
            } else {
              item.max = Number(item.max);
            }
          }
          if (
            form.value.code == "TIMED_REWARD_INSTANT_BONUS" ||
            form.value.code == "TIMED_REWARD_TURBO_BONUS" ||
            form.value.code == "TIMED_REWARD_MEGA_WHEEL"
          ) {
            item.bonusAmount = item.bonusAmount + "";
            if (item.bonusAmount.indexOf("B") !== -1) {
              const newStr = item.bonusAmount.replace("B", "");
              item.bonusAmount = Number(newStr) * 1000000000;
            } else if (item.bonusAmount.indexOf("M") !== -1) {
              const newStr = item.bonusAmount.replace("M", "");
              item.bonusAmount = Number(newStr) * 1000000;
            } else if (item.bonusAmount.indexOf("K") !== -1) {
              const newStr = item.bonusAmount.replace("K", "");
              item.bonusAmount = Number(newStr) * 1000;
            } else {
              item.bonusAmount = Number(item.bonusAmount);
            }
          }

          item.weight = item.weight + "";
          if (item.weight.indexOf("B") !== -1) {
            const newStr = item.weight.replace("B", "");
            item.weight = Number(newStr) * 1000000000;
          } else if (item.weight.indexOf("M") !== -1) {
            const newStr = item.weight.replace("M", "");
            item.weight = Number(newStr) * 1000000;
          } else if (item.weight.indexOf("K") !== -1) {
            const newStr = item.weight.replace("K", "");
            item.weight = Number(newStr) * 1000;
          } else {
            item.weight = Number(item.weight);
          }
        });
      }
      console.log("form.value", form.value);
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
            const res = await editOrNewActivityConfig(form.value);
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
  display: block;
  border-bottom: 1px solid var(--border-color);
  width: 50%;
  margin: auto;
}
.spanCla {
  display: inline-block;
  margin-right: 20px;
}
</style>
  