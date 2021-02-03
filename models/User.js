const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
       // trim: true,  // 스페이스를 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {         // 관리자 역할과 같은 ..
        type: Number,
        default: 0
    },
    image: String,
    token: {        // 토큰으로 유효성을 관리한다
        type: String
    },
    tokenExp: {     // 토큰으로 만료 ..
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }