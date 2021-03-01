module.exports = {
  /**
   * @description 插入排序
   * @param {Array} data 
   * @param {Boolean} reverse 
   * @template [15,55,24,88,17]
   */
  insertSort: function (data, reverse) {
      if (data.length < 2) {
          return data;
      }
      for (let i = 1; i < data.length; i++) {
          for (let j = i; j > 0; j--) {
              if (data[j] < data[j - 1]) {
                  let temp = data[j - 1];
                  data[j - 1] = data[j];
                  data[j] = temp;
              }
          }
      }
      return !reverse ? data : data.reverse();
  },
  /**
   * @description 冒泡排序
   * @param {Array} data 
   * @param {Boolean} reverse 
   * @template [15,55,24,88,17]
   */
  bubbleSort: function (data, reverse) {
      for (let i = 0; i < data.length - 1; i++) {
          for (let j = 0; j < data.length - i - 1; j++) {
              let numSender = data[j];
              if (!reverse && data[j] > data[j + 1]) {
                  data[j] = data[j + 1];
                  data[j + 1] = numSender;
              } else if (reverse && data[j] < data[j + 1]) {
                  data[j] = data[j + 1];
                  data[j + 1] = numSender;
              }
          }
      }
  },
  /**
   * @description 快速排序
   * @param {Array} data 
   * @param {Boolean} reverse 
   * @template [15,55,24,88,17]
   */
  quickSort: function (data, reverse) {
      if (data.length < 2) {
          return data;
      }
      let basicIndex = Math.floor(data.length / 2);
      let basicItem = data.splice(basicIndex, 1)[0];
      let left = [];
      let right = [];
      for (let i = 0; i < data.length; i++) {
          if (data[i] < basicItem) {
              left.push(data[i]);
          } else if (data[i] > basicItem) {
              right.push(data[i]);
          }
      }
      if (reverse) {
          return quickSort(left).concat([basicItem], quickSort(right)).reverse();
      } else {
          return quickSort(left).concat([basicItem], quickSort(right));
      }
  }
}