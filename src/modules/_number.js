module.exports = {
  /**
   * @description 获取15位以内的随机数
   * @param {Number} digits 位数
   * @template 2 两位数
   */
  getRandomNum: function (digits) {
      let overrideStr = "1";
      for (let i = 0; i < digits.length; i++) {
          overrideStr += 0;
      }
      return parseInt(parseFloat(Math.random().toFixed(digits)) * Number(overrideStr));
  }
}




