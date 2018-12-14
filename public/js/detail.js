import $ from './jquery-1.12.3';
import template from './template';

$.get('/src/template/detail-template.html',(data)=>{
    let detail=data;
    $.get('http://localhost:3000/item',(data)=>{
        var render=template.compile(detail);
        let result=data[0];
        var dt=render(result)
        $('.service-center').append(dt);
    })
})
