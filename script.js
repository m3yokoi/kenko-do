"use strict";

const btn = document.querySelector('.js-btn');
const menuPanel = document.querySelector('.gnav');


//クリックでメニューボタンの切り替えとメニューの出し入れ
btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menuPanel.classList.toggle('open');
});

