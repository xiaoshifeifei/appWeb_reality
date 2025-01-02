import service from "@/utils/request";
// 获取任务列表
export const getTackList = (params) => {
  return service({
    url: "/config/mission/list",
    method: "get",
    params,
  });
};
// 任务新增
export const createTack = (data) => {
  return service({
    url: "/config/mission/add",
    method: "post",
    data,
  });
};
// 任务编辑
export const updateTack = (data) => {
  return service({
    url: "/config/mission/edit",
    method: "post",
    data,
  });
};
// 任务删除
export const deleteTack = (data) => {
  return service({
    url: "/config/mission/del",
    method: "post",
    data,
  });
};

// 获取日常/周常列表
export const dailyOrWeeklyGet = (params) => {
  return service({
    url: "/config/mission/dailyOrWeeklyGet",
    method: "get",
    params,
  });
};
// 日常/周常新增
export const dailyOrWeeklyAdd = (data) => {
  return service({
    url: "/config/mission/dailyOrWeeklyAdd",
    method: "post",
    data,
  });
};
// 日常/周常删除
export const dailyOrWeeklyDel = (data) => {
  return service({
    url: "/config/mission/dailyOrWeeklyDel",
    method: "post",
    data,
  });
};

// 物品配置列表
export const virtualItemGetList = (params) => {
  // return service({
  //   url: "/config/virtualItem/list",
  //   method: "get",
  //   params,
  // });
};
// 兑换码列表
export const getRedemptionCodes = (params) => {
  return service({
    url: "/setup/getRedemptionCodes",
    method: "get",
    params,
  });
};
// 获取兑换码类型
export const getRedemptionCodeTypes = (params) => {
  return service({
    url: "/setup/getRedemptionCodeTypes",
    method: "get",
    params,
  });
};
//兑换码新增
export const addRedemptionCode = (data) => {
  return service({
    url: "/setup/addRedemptionCode",
    method: "post",
    data,
  });
};
//兑换码编辑
export const editRedemptionCode = (data) => {
  return service({
    url: "/setup/editRedemptionCode",
    method: "post",
    data,
  });
};

// 公告列表
export const getAnnouncements = (params) => {
  return service({
    url: "/setup/getAnnouncements",
    method: "get",
    params,
  });
};
// 公告新增
export const sendAnnouncement = (data) => {
  return service({
    url: "/setup/sendAnnouncement",
    method: "post",
    data,
  });
};
// 公告新增
export const editAnnouncement = (data) => {
  return service({
    url: "/setup/editAnnouncement",
    method: "post",
    data,
  });
};
// 活动配置列表
export const getActivityConfig = (params) => {
  return service({
    url: "/setup/getActivityConfig",
    method: "get",
    params,
  });
};
// 活动配置修改
export const editActivityConfig = (data) => {
  return service({
    url: "/setup/editActivityConfig",
    method: "post",
    data,
  });
};
// 活动code获取
export const getActivityCodes = (params) => {
  return service({
    url: "/setup/getActivityCodes",
    method: "get",
    params,
  });
};
// 物品配置新增
export const virtualItemAdd = (data) => {
  return service({
    url: "/config/virtualItem/add",
    method: "post",
    data,
  });
};

// 物品配置修改
export const virtualItemEdit = (data) => {
  return service({
    url: "/config/virtualItem/edit",
    method: "post",
    data,
  });
};
// 物品配置删除
export const virtualItemDel = (data) => {
  return service({
    url: "/config/virtualItem/del",
    method: "post",
    data,
  });
};

// 商场配置列表
export const mallProductGetList = (params) => {
  return service({
    url: "/config/mallProduct/list",
    method: "get",
    params,
  });
};

// 商场配置新增
export const mallProductAdd = (data) => {
  return service({
    url: "/config/mallProduct/add",
    method: "post",
    data,
  });
};

// 商场配置修改
export const mallProductEdit = (data) => {
  return service({
    url: "/config/mallProduct/edit",
    method: "post",
    data,
  });
};
// 商场配置删除
export const mallProductDel = (data) => {
  return service({
    url: "/config/mallProduct/del",
    method: "post",
    data,
  });
};

// 7天签到列表
export const day7SignGetList = (params) => {
  return service({
    url: "/config/day7Sign/list",
    method: "get",
    params,
  });
};

// 7天签到新增
export const day7SignAdd = (data) => {
  return service({
    url: "/config/day7Sign/add",
    method: "post",
    data,
  });
};

// 7天签到修改
export const day7SignEdit = (data) => {
  return service({
    url: "/config/day7Sign/edit",
    method: "post",
    data,
  });
};

// 7天签到删除
export const day7SignDel = (data) => {
  return service({
    url: "/config/day7Sign/del",
    method: "post",
    data,
  });
};

// 定时签到列表
export const timedRewardGetList = (params) => {
  return service({
    url: "/config/timedReward/list",
    method: "get",
    params,
  });
};

// 定时签到新增
export const timedRewardAdd = (data) => {
  return service({
    url: "/config/timedReward/add",
    method: "post",
    data,
  });
};

// 定时签到修改
export const timedRewardEdit = (data) => {
  return service({
    url: "/config/timedReward/edit",
    method: "post",
    data,
  });
};

// 定时签到删除
export const timedRewardDel = (data) => {
  return service({
    url: "/config/timedReward/del",
    method: "post",
    data,
  });
};

// 群发邮件列表
export const systemInboxGetList = (params) => {
  return service({
    url: "/app/inbox/systemInboxList",
    method: "get",
    params,
  });
};

// 群发邮件修改
export const systemInboxEdit = (data) => {
  return service({
    url: "/app/inbox/systemInboxEdit",
    method: "post",
    data,
  });
};

// 群发邮件删除
export const systemInboxDel = (data) => {
  return service({
    url: "/app/inbox/systemInboxDel",
    method: "post",
    data,
  });
};

// 邮件列表
export const getMails = (params) => {
  return service({
    url: "/setup/getMails",
    method: "get",
    params,
  });
};
// 邮件创建
export const sendMail = (data) => {
  return service({
    url: "/setup/sendMail",
    method: "post",
    data,
  });
};
//邮件修改
export const editMail = (data) => {
  return service({
    url: "/setup/editMail",
    method: "post",
    data,
  });
};

// 个人邮件修改
export const InboxEdit = (data) => {
  return service({
    url: "/app/inbox/edit",
    method: "post",
    data,
  });
};
// 获取商城订单列表
export const getMallOrderList = (params) => {
  return service({
    url: "/app/mallOrder/list",
    method: "get",
    params,
  });
};

// 个人邮件删除
export const InboxDel = (data) => {
  return service({
    url: "/app/inbox/del",
    method: "post",
    data,
  });
};

// 获取用户留存列表
export const getSiteDayRetained = (params) => {
  return service({
    url: "/statistics/getSiteDayRetained",
    method: "get",
    params,
  });
};
