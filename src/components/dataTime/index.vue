<template>
  <el-form-item :label="t('tableColumn.placeholder') + t('tableColumn.time')">
    <el-date-picker
      v-if="showTime"
      :style="{ width: '300px' }"
      v-model="value2"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      @change="change"
      :default-time="defaultTime"
    />
    <el-date-picker
      v-else
      :style="{ width: '300px' }"
      v-model="value2"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      @change="change"
      :default-time="defaultTime"
    />
  </el-form-item>
</template>
<script setup>
import { ref, watch } from "vue";
import dayjs from "dayjs";
import { useI18n } from "vue-i18n"; // added by mohamed hassan to support multilanguage
const { t } = useI18n(); // added by mohamed hassan to support multilanguage

defineOptions({
  name: "dataTime",
});
const defaultTime = [
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59, 999),
];
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  showTime: {
    type: Boolean,
    default: false,
  },
});

const value2 = ref("");

const change = () => {
  const timeData = value2.value.map((item) => {
    const isoDate = dayjs(item).format("YYYY-MM-DDTHH:mm:ssZ");
    return isoDate;
  });
  emits("update:modelValue", timeData);
};

watch(() => {
  if (props.showTime) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const isoDate = now.toISOString();
    const now2 = new Date();
    now2.setHours(23, 59, 59, 999);
    const isoDate2 = now2.toISOString();
    const isoArr = [isoDate, isoDate2];
    const timeData = isoArr.map((item) => {
      const isoDate = dayjs(item).format("YYYY-MM-DDTHH:mm:ssZ");
      return isoDate;
    });
    value2.value = timeData;
    emits("update:modelValue", timeData);
  }
});
</script>
  <style scoped lang="scss">
</style>
    