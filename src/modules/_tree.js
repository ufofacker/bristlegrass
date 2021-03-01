module.exports = {
  /**
   * @description 对象数组转换成多叉树
   * @param {*} data 对象数组
   * @param {*} parentId 根节点的parentId
   * @template [
   *  {
   *      "id": 0,
   *      "name": "root",
   *      "parentId": null
   *  },
   *   {
   *      "id": 1,
   *      "name": "中国",
   *      "parentId": 0
   *   },
   *   {
   *       "id": 2,
   *       "name": "陕西省",
   *       "parentId": 1
   *   }
   * ]
   */
  convertToTreeData: function (data, parentId) {
      const result = [];
      let temp = [];
      for (let i = 0; i < data.length; i++) {
          if (data[i].parentId === parentId) {
              const node = {
                  id: data[i].id,
                  label: data[i].name,
                  parentId: data[i].parentId
              }
              temp = this.convertToTreeData(data, data[i].id)
              if (temp.length > 0) {
                  node.children = temp
              }
              result.push(node)
          }
      }
      return result
  },
  /**
   * @description 多叉树转换成对象数组
   * @param {*} data 对象数组
   * @param {*} parentId 根节点的parentId
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
  convertTreeToFlatData: function (data, list) {
      for (let i = 0; i < data.length; i++) {
          let node = {
              id: data[i].id,
              label: data[i].label,
              parentId: data[i].parentId
          };
          if (data[i].children) {
              this.convertTreeToFlatData(data[i].children, list);
          }
          list.push(node);
      }
      return list;
  }
}