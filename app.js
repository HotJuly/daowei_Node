const express=require('express');
const router=require('./router');

let app=express();

app.use(express.static('public'));
app.use(router);


app.listen('3000',()=>{
    console.log('服务器启动成功');
})