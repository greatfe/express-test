"use strict";

const home = (req, res) => {
    res.render("home/index");
    //res.send("여기는 루트입니다.")
    //res.send("index.html 파일 내용을 그대로 넣어도 된다.")
};

const login = (req, res) => {
    res.render("home/login");
    //res.send("여기는 루트입니다.")
    //res.send("index.html 파일 내용을 그대로 넣어도 된다.")
};


module.exports = {
    home,
    login
};