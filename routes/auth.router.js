const express = require('express');


const signupHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");

const router = express.Router();

router.route("/register")//local:3500/api/auth/register
    .post(signupHandler);

router.route("/login")
    .post(loginHandler);

module.exports = router;