'use strict';

// let _animated = [
//     'computer',
//     'shadow',
//     'hole',
//     'code-cover-screen'
// ].map((id) => document.getElementById(id));

let getById = (id) => document.getElementById(id)

let _animated = [
    getById('computer'),
    getById('shadow'),
    getById('hole'),
    getById('code-cover-screen')
];

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    _animated.forEach(function(el){
        el.style.animation = 'none'; 
        setTimeout(() => {
            el.style.animation = '';
          }, 10);
     });    
});