/*----------表格操作通用方法-----------*/
/**
 * 初始化表格输入框
 */
function init(name) {
  var trs = $(name);
  var rowInputs = [];
  var inputRowIndex = 0;
  $.each(trs, function (i, obj) {
    var rowArray = [];
    var thisRowInputs = $(obj).find("input:not(:disabled):not(:hidden):not([readonly]),select:not(:disabled)");
    if (thisRowInputs.length == 0)
      return true;
    thisRowInputs.each(function (j) {
      $(this).attr("_r_", inputRowIndex).attr("_c_", j);
      rowArray.push({
        "c": j,
        "input": this
      });
      $(this).keydown(function (evt) {
        var r = $(this).attr("_r_");
        var c = $(this).attr("_c_");
        var ul = $('.ky-autocomplete-list:not(:hidden)');
        var tRow;
        if (evt.which == 38) { //上
          if (this.nodeName != "SELECT") {
            //ul存在的话
            if (ul.length == 0) {
              if (r == 0)
                return;
              r--; //向上一行

              tRow = rowInputs[r];
              if (c > tRow.length - 1) {
                c = tRow.length - 1;
              }
              $(rowInputs[r].data[c].input).focus();
              setTimeout(function () {
                $(rowInputs[r].data[c].input).select();
              }, 10);
            }
          }
        } else if (evt.which == 40) { //下
          if (this.nodeName != "SELECT") {
            if (ul.length == 0) {
              if (r == rowInputs.length - 1) { //已经是最后一行
                return;
              }
              r++;
              tRow = rowInputs[r];
              if (c > tRow.length - 1) {
                c = tRow.length - 1;
              }
              $(rowInputs[r].data[c].input).focus();
              setTimeout(function () {
                $(rowInputs[r].data[c].input).select();
              }, 10);
            }
          }
        } else if (evt.which == 37) { //左  
          if (this.nodeName == "SELECT") {
            evt.preventDefault();
          }
          if (r == 0 && c == 0) { //第一行第一个,则不执行操作
            return;
          }
          if (c == 0) { //某行的第一个,则要跳到上一行的最后一个,此处保证了r大于0
            r--;
            tRow = rowInputs[r];
            c = tRow.length - 1;
          } else { //否则只需向左走一个
            c--;
          }
          if (ul.length <= 0) {
            $(this).parent().parent().find("ul").hide();
          } else {
            ul.hide();
          }
          $(rowInputs[r].data[c].input).focus();
          setTimeout(function () {
            $(rowInputs[r].data[c].input).select();
          }, 10);
        } else if (evt.which == 39) { //右 
          if (this.nodeName == "SELECT") {
            evt.preventDefault();
          }
          tRow = rowInputs[r];
          if (r == rowInputs.length - 1 && c == tRow.length - 1) { //最后一个不执行操作
            return;
          }
          if (c == tRow.length - 1) { //当前行的最后一个,跳入下一行的第一个
            r++;
            c = 0;
          } else {
            c++;
          }
          if (ul.length <= 0) {
            $(this).parent().parent().find("ul").hide();
          } else {
            ul.hide();
          }
          $(rowInputs[r].data[c].input).focus();
          setTimeout(function () {
            $(rowInputs[r].data[c].input).select();
          }, 10);
        } else if (evt.which == 9) {
          if (ul.length <= 0) {
            $(this).parent().parent().find("ul").hide();
          } else {
            ul.hide();
          }
        }
      });
    });
    rowInputs.push({
      "length": thisRowInputs.length,
      "rowindex": inputRowIndex,
      "data": rowArray
    });

    inputRowIndex++;
  })
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