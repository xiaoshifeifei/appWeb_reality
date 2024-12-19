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
// 支付渠道新增
export const addPaymentChannel = (data) => {
  return service({
    url: "/setup/addPaymentChannel",
    method: "post",
    data,
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
// 支付渠道删除
export const delPaymentChannel = (data) => {
  return service({
    url: "/setup/delPaymentChannel",
    method: "post",
    data,
  });
};
