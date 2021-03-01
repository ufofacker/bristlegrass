module.exports = {
  /**
   * @description 获取数据类型
   * @param {Any} data 
   */
  getType: function (data) {
    return Object.prototype.toString.call(data)
  }
}




