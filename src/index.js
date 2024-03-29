const _number = require('./modules/_number')
const _string = require('./modules/_string')
const _array = require('./modules/_array')
const _object = require('./modules/_object')
const _function = require('./modules/_function')
const _tree = require('./modules/_tree')
const _dom = require('./modules/_dom')
const _sort = require('./modules/_sort')
const _regexp = require('./modules/_regexp')
const _global = require('./modules/_global')
module.exports = {
    _number,//数字类型数据算法集合
    _string,//字符串类型数据算法集合
    _array,//数组操作算法集合
    _object,//对象操作算法集合
    _function,//方法相关操作
    _tree,//树结构数据操作算法集合
    _dom,//Dom操作相关方法集合
    _sort,//排序算法集合
    _regexp,//正则表达式集合
    _global//通用方法集合
}




