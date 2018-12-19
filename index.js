// 1.获取元素
var table = document.querySelector('table');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');

// 2.给按钮注册事件
btn1.onclick = function () {
    table.className = 'pf1';
};
btn2.onclick = function () {
    table.className = 'pf2';
};