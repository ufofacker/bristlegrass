module.exports = {
  /**
   * @description 函数防抖
   * @param {Function} fn
   * @param {Number} wait
   */
  debounce: function (fn, wait) {
    let timeout = null;
    return function () {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(fn, wait);
    };
  },
  /**
   * @description 函数节流
   * @param {Function} fn
   * @param {Number} wait
   */
  throttle: function (fn, wait) {
    let timer;
    return () => {
      if (timer) {
        return;
      }
      timer = setTimeout(() => {
        fn();
        timer = null;
      }, wait);
    };
  },
};
