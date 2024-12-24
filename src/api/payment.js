import service from "@/utils/request";

// 获取支付列表
export const getPaymentList = (params) => {
  return service({
    url: "/setup/getPayments",
    method: "get",
    params,
  });
};

// 支付设置修改
export const editPayment = (data) => {
  return service({
    url: "/setup/editPayment",
    method: "post",
    data,
  });
};
// 获取支付渠道列表
export const getPaymentChannels = (params) => {
  return service({
    url: "/setup/getPaymentChannels",
    method: "get",
    params,
  });
};

// 支付渠道修改
export const editPaymentChannel = (data) => {
  return service({
    url: "/setup/editPaymentChannel",
    method: "post",
    data,
  });
};

// 获取金额配置列表
export const getPaymentRechargeAmounts = (params) => {
  return service({
    url: "/setup/getPaymentRechargeAmounts",
    method: "get",
    params,
  });
};
// 金额配置新增
export const addPaymentRechargeAmount = (data) => {
  return service({
    url: "/setup/addPaymentRechargeAmount",
    method: "post",
    data,
  });
};
// 金额配置编辑
export const editPaymentRechargeAmount = (data) => {
  return service({
    url: "/setup/editPaymentRechargeAmount",
    method: "post",
    data,
  });
};

// 金额配置删除
export const delPaymentRechargeAmount = (data) => {
  return service({
    url: "/setup/delPaymentRechargeAmount",
    method: "post",
    data,
  });
};
