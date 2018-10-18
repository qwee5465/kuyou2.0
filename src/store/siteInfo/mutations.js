export default {
    // 站点信息
    siteInfo(state, msg) {
        state.siteInfo = msg;
        return state;
    },
    // 修改站点信息
    updateSiteInfo(state, msg) {
        state.updateSiteInfo = msg;
        return state;
    }
};
