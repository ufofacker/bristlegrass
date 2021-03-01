module.exports = {
  /**
   * @description 引用类型深拷贝
   * @param {*} data 对象/数组
   * @template [{
   *      "id": 0,
   *      "name": "root",
   *      "parentId": null,
   *      "children": [{
   *          "id": 1,
   *          "label": "中国",
   *          "parentId": 0,
   *          "children": [{
   *              "id": 2,
   *              "label": "陕西省",
   *              "parentId": 1
   *           }]
   *
   *       }]
   *  }]
   */
  deepCopy: function (obj) {
    let newData = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          newData[key] = deepCopy(obj[key]);
        } else {
          newData[key] = obj[key];
        }
      }
    }
    return newData;
  },
  /**
   * @description 生成单例
   * @param {Function} fn
   */
  getSingle: function (fn) {
    let result;
    return function () {
      if (!result) {
        result = new fn(arguments);
      }
      return result;
    };
  },
};
