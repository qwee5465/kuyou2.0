/**----------项目全局监听-----------**/

/**
 * 唯一暴露在外的初始化方法
 */
function init() {
  tableRowClickEvent();
}
/**
 * 监听ky-table里的tbody tr 点击事件
 */
function tableRowClickEvent() {
  $("body").on("click", ".ky-table tbody tr", function () {
    $(this).addClass('current').siblings().removeClass('current');
  })
}

export default {
  init: init
}
