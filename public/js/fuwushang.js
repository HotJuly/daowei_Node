import $ from './jquery-1.12.3';
import template from './template';

window.page = 0;
var result=[];
let detail;

$.get('/src/template/fuwushang-template.html', (data) => {
    detail = data;
    
    $.get('http://localhost:3000/comment', (data) => {
        let pageup=$('.pageup');
        let pagedown=$('.pagedown');
        let commentDiv=$('#commentDiv');
        let render = template.compile(detail);
        var data1 = data.map((item)=>{
            item.star=new Array(item.star);
            item.createtime=new Date(item.createtime).Format("M月d h:m:s");
            return item;
        });
        while(data1.length>0){
          result.push(data1.splice(0,10))
        }
        let dt = render({
            list: result[page]
        })
        commentDiv.append(dt);
        let nums=template('num',{numList:new Array(result.length)});
        $('#showPage').append(nums)
        let num=$('.num');
        num.eq(page).addClass('acv');
        num.click(function (event) {
          num.removeClass('acv');
          $(this).addClass('acv');
          page=event.target.innerText-1;
          update(commentDiv,render,pageup,pagedown);
        })
        pageup.click(function () {
          if (page > 0) {
              page--;
          }
          num.removeClass('acv').eq(page).addClass('acv');
          update(commentDiv,render,pageup,pagedown);
        });

        pagedown.click(function () {
            if (page < result.length-1) {
                page++;
            }
            num.removeClass('acv').eq(page).addClass('acv');
            update(commentDiv,render,pageup,pagedown);
        });
    })
})

function update(commentDiv,render,pageup,pagedown){
    let dt = render({
      list: result[page]
    })
    commentDiv.html("");
    commentDiv.append(dt);
    if(page>0){
      pageup.removeClass('greycolor')
    }else{
      if(!pageup.hasClass('greycolor')){
        pageup.addClass('greycolor')
      }
    }
    if(page<result.length-1){
        pagedown.removeClass('greycolor')
    }else{
      if(!pagedown.hasClass('greycolor')){
        pagedown.addClass('greycolor')
      }
    }
}



Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  