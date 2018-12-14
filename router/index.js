const express=require('express');
const router=express.Router();

const index = require('../data/index.json');
const comment = require('../data/comment.json');
const item = require('../data/item.json');
const service = require('../data/service.json');

router.get('/home',(req,res)=>{
    res.send(index);
})
router.get('/comment',(req,res)=>{
    res.send(comment);
})
router.get('/item',(req,res)=>{
    res.send(item);
})
router.get('/service',(req,res)=>{
    res.send(service);
})

module.exports=router;