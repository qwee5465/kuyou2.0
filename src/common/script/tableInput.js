/*----------表格操作通用方法-----------*/
/**
 * 初始化表格输入框
 */
function init(className) {
  var trs = document.querySelectorAll(className + ' tbody tr');
  console.log(trs);
  for (var i = 0; i < trs.length; i++) {

  }
}

/**
 * 获取指定元素下是否有指定类型的元素
 */
function getElement(el) {
  var els = el.children;
  if (els.length > 0) {

  } else {
    return null;
  }
}

export default {
  init: init
}