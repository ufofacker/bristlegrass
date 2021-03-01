module.exports = {
  /**
   * @description 数组去重
   * @param {Array} data
   * @template [15,55,24,88,17]
   */
  removeDistinct: function (data) {
    let obj = {};
    let resArray = [];
    for (let item of data) {
      if (!obj[item]) {
        resArray.push(item);
        obj[item] = item;
      }
    }
    return resArray;
  },
};
