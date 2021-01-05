const express = require('express')
const app = express()
const port = 5000
const {User} =require("./models/User");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());




const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kangsan:1q2w3e4r@boilerplate.zhyvn.mongodb.net/<dbname>?retryWrites=true&w=majority',

{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false}
).then(()=>console.log('MongoDB Connected...')).catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/register', (req,res)=> {
    //회원가입할떄 필요할 정보를 고객으로부터 가져오면 이것을 데이터베이스에 넣음
 
    const user =  new User(req.body)
    
    user.save((err,userInfo)=> {
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success: true
        })
    })



})
