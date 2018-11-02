import api from "@/api/ajax.js";
export default {
    // 站点信息
    siteInfo({ state, commit }, params) {
        api.siteInfo(params).then((msg) => {
            commit('siteInfo', msg)
        })
    },
    // 修改站点信息
    updateSiteInfo({ state, commit }, params) {
        api.updateSiteInfo(params).then((msg) => {
            commit('updateSiteInfo', msg)
        })
    }
};
