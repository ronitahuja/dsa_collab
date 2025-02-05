const express=require('express');
const router=express.Router();
const adminController=require('../controllers/adminController');

router.get('/room',adminController.getRoom);

module.exports=router;