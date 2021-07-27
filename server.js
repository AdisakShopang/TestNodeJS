// import { aaa } from './addData.js';
const upsertFn = require('./addData.js');
const {queryFn, queryUserById} = require('./readData.js');
const deleteFn = require('./deleteData.js');

// import * as aaa from './addData.js';

//ทำการ import express เข้ามาใช้งาน โดยสร้างตัวแปร express ขึ้นมาเพื่อรับค่า
const express = require('express')
const bodyParser = require('body-parser');

//ทำการสร้าง Instance ของ express และสร้างตัวแปร app ขึ้นมาเพื่อรับค่า
const app = express()
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    express.urlencoded({
      extended: false
    })
  )

  app.use(express.json())

//สร้างตัวแปร PORT ขึ้นมารับค่า port ในกรณีที่เราได้กำหนดไว้ใน environment ของเครื่อง
//แต่ถ้าไม่ได้กำหนดไว้ เราจะใช้ค่า 8080 แทน
const PORT = process.env.PORT || 8080

//สร้าง route ขึ้นมา 1 ตัว โดยกำหนดให้ path คือ / หรือ index ของ host นั่นเอง
//จากนั้นให้กำหนด response แสดงคำว่า Hello World

app.post('/', (req, res) => res.send('Hello World'))
app.post('/sho', (req, res) => {
    // console.log(req);
    
    var tempParam = req.query.name;
    console.log(tempParam);

    console.log(req.body);
    console.log(req.params);
    console.log(req.query.body);
    const temp = req.body.firstname;
    
    return res.send('SHO123:'+temp + 'tempParam:'+tempParam);
})

app.post('/callAddData', async (req, res) => {
    // console.log(''upsertFn);
    await upsertFn();
    // var message:string = "success callAddData" ;
    var message = "success callAddData" ;
    return res.send(message);
})

app.post('/callreadData', async (req, res) => {
  // console.log(''queryFn);
  await queryFn();
  return res.send("success callreadData");
})

app.post('/callQueryUserById', async (req, res) => {
  // console.log(''queryFn);
  let response = await queryUserById();
  return res.send(response);
})

app.post('/callDeleteData', async (req, res) => {
  // console.log(''queryFn);
  await deleteFn();
  return res.send("success callDeleteData");
})

//run web server ที่เราสร้างไว้ โดยใช้ PORT ที่เรากำหนดไว้ในตัวแปร PORT
app.listen(PORT, () => {
    //หากทำการ run server สำเร็จ ให้แสดงข้อความนี้ใน cmd หรือ terminal
    console.log(`Server is running on port : ${PORT}`)
})
//ทำการ export app ที่เราสร้างขึ้น เพื่อให้สามารถนำไปใช้งานใน project อื่นๆ 
//เปรียบเสมือนเป็น
module.exports = app