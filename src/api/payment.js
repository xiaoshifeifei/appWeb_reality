import service from "@/utils/request";

// 获取用户列表
export const getPaymentList = (params) => {
  return service({
    url: "/setup/getPayments",
    method: "get",
    params,
  });
};
