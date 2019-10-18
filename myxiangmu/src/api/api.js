import httpAxios from './http'
//登录
export const Logins = (params) => httpAxios.post('/login', params);
//注册
export const Regirsts = (params) => httpAxios.post("/register", params);
//获取所有用户投票接口
export const allVote = (params) => httpAxios.get("/vote/allVote", { params })
    //添加发布接口
export const newvote = (params) => httpAxios.post("/vote/newvote", params)