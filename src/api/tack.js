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
  return service({
    url: "/config/virtualItem/list",
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

// @Tags Api
// @Summary 更新api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.CreateApiParams true "更新api"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /api/updateApi [post]
export const updateApi = (data) => {
  return service({
    url: "/api/updateApi",
    method: "post",
    data,
  });
};

// @Tags Api
// @Summary 更新api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.CreateApiParams true "更新api"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /api/setAuthApi [post]
export const setAuthApi = (data) => {
  return service({
    url: "/api/setAuthApi",
    method: "post",
    data,
  });
};

// @Tags Api
// @Summary 获取所有的Api 不分页
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /api/getAllApis [post]
export const getAllApis = (data) => {
  return service({
    url: "/api/getAllApis",
    method: "post",
    data,
  });
};

// @Tags SysApi
// @Summary 删除选中Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "ID"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /api/deleteApisByIds [delete]
export const deleteApisByIds = (data) => {
  return service({
    url: "/api/deleteApisByIds",
    method: "delete",
    data,
  });
};

// FreshCasbin
// @Tags      SysApi
// @Summary   刷新casbin缓存
// @accept    application/json
// @Produce   application/json
// @Success   200   {object}  response.Response{msg=string}  "刷新成功"
// @Router    /api/freshCasbin [get]
export const freshCasbin = () => {
  return service({
    url: "/api/freshCasbin",
    method: "get",
  });
};

export const syncApi = () => {
  return service({
    url: "/api/syncApi",
    method: "get",
  });
};

export const getApiGroups = () => {
  return service({
    url: "/api/getApiGroups",
    method: "get",
  });
};

export const ignoreApi = (data) => {
  return service({
    url: "/api/ignoreApi",
    method: "post",
    data,
  });
};

export const enterSyncApi = (data) => {
  return service({
    url: "/api/enterSyncApi",
    method: "post",
    data,
  });
};
