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

// 获取充值配置列表
export const getPaymentDepositRechargeAmounts = (params) => {
  return service({
    url: "/setup/getPaymentDepositRechargeAmounts",
    method: "get",
    params,
  });
};
// 充值配置新增
export const addPaymentDepositRechargeAmount = (data) => {
  return service({
    url: "/setup/addPaymentDepositRechargeAmount",
    method: "post",
    data,
  });
};
// 充值配置编辑
export const editPaymentDepositRechargeAmount = (data) => {
  return service({
    url: "/setup/editPaymentDepositRechargeAmount",
    method: "post",
    data,
  });
};

// 充值配置删除
export const delPaymentDepositRechargeAmount = (data) => {
  return service({
    url: "/setup/delPaymentDepositRechargeAmount",
    method: "post",
    data,
  });
};

// 获取取款配置列表
export const getPaymentWithdrawRechargeAmounts = (params) => {
  return service({
    url: "/setup/getPaymentWithdrawRechargeAmounts",
    method: "get",
    params,
  });
};
// 取款配置新增
export const addPaymentWithdrawRechargeAmount = (data) => {
  return service({
    url: "/setup/addPaymentWithdrawRechargeAmount",
    method: "post",
    data,
  });
};
// 取款配置编辑
export const editPaymentWithdrawRechargeAmount = (data) => {
  return service({
    url: "/setup/editPaymentWithdrawRechargeAmount",
    method: "post",
    data,
  });
};

// 取款配置删除
export const delPaymentWithdrawRechargeAmount = (data) => {
  return service({
    url: "/setup/delPaymentWithdrawRechargeAmount",
    method: "post",
    data,
  });
};

// 获取客服列表code
export const getContactCodes = (params) => {
  return service({
    url: "/setup/getContactCodes",
    method: "get",
    params,
  });
};
// 获取客服列表
export const getContacts = (params) => {
  return service({
    url: "/setup/getContacts",
    method: "get",
    params,
  });
};
// 客服配置新增
export const addContact = (data) => {
  return service({
    url: "/setup/addContact",
    method: "post",
    data,
  });
};
// 客服配置编辑
export const editContact = (data) => {
  return service({
    url: "/setup/editContact",
    method: "post",
    data,
  });
};

// 客服配置删除
export const delContact = (data) => {
  return service({
    url: "/setup/delContact",
    method: "post",
    data,
  });
};
