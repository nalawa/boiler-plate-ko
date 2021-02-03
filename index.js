const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require('./config/key');

// application/x-www-form-urlencoded 분석해서 가져올수 있게 해옴
app.use(bodyParser.urlencoded({extended: true}));

//application/json 분석해서 가져올수 있게 해주기 위해 넣음
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World! 새해복많이 받으세여 ㅋㅋㅋ'))

app.post('/register', (req, res) => {

    //회원 가입할 때 필요한 정보들을 클라이언트에서 가져오면
    //그것들을 데이터 베이스에 넣어준다

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            sucess: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
