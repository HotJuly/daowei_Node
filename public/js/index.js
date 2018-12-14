import $ from './jquery-1.12.3';
import template from './template';

$.get('http://localhost:3000/home',(data)=>{
    var navLi=template("navLi",{data})
    $('#navUl').append(navLi);
    var box=template("box",{data})
    $('#boxs').append(box);
})
