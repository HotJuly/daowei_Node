import $ from './jquery-1.12.3';
import template from './template';

$.get('http://localhost:3000/service',(data)=>{
    console.log(data);
    var li=template("merchantLi",{list:data});
    $('#ulactivety').append(li);
})
