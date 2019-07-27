// let hello = ()=>{
//     console.log("hello world!");
// }

// module.exports = hello;
// module.exports 适用于仅有一个对象或函数输出时，可以直接导出对象或函数

exports.hi = ()=>{
    console.log("hi you");
}

exports.hey = ()=>{
    console.log("hey man");
}

// exports 适用于需要导出多个对象或函数的情况，导出整个模块，对象或函数作为模块的属性来引用