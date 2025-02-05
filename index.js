// https://github.com/ujjwalpathaak/CompilerConnect-API/blob/main/controllers/cpp/cpp.controller.js
// https://github.com/Harsh9307/AlgoCode-Backend

const express=require('express');
const adminRoutes=require("./routes/adminRoutes");
const app=express()

app.use(express.json());
app.use("/admin",adminRoutes);

app.listen(8080,()=>{
    console.log("server running at 8080");
})