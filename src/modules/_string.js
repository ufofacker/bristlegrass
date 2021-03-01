module.exports = {
  /**
   * @description 获取url中的参数
   */
  getParamByUrl: function () {
    let _href = window.location.href;
    let args = _href.split("?");
    if (args[0] === _href) {
      return "";
    }
    let _hrefList = args[1].split("#")[0].split("&");
    let obj = {};
    for (let i = 0; i < _hrefList.length; i++) {
      _hrefList[i] = _hrefList[i].split("=");
      obj[_hrefList[i][0]] = _hrefList[i][1];
    }
    return obj;
  },
};
