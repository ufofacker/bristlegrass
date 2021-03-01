module.exports = {
  /**
   * @description 找元素的第n级父元素
   * @param {Element} ele 当前元素 
   * @param {Number} deep 父元素层级 
   */
  getParentsByDeep: function(ele, deep) {
    while (ele && deep) {
        ele = ele.parentElement ? ele.parentElement : ele.parentNode;
        deep--;
    }
    return ele;
  },
  /**
   * @description 判断元素有没有子元素
   * @param {Element} ele 当前元素 
   */
  hasChildren: function(ele) {
    let children = ele.childNodes,
        len = children.length;
    for (let i = 0; i < len; i++) {
        if (children[i].nodeType === 1) {
            return true;
        }
    }
    return false;
  }
}




