const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try {

        const email = await userModel.findOne({ email: req.body.email });

        if (email) {
            return res.send({
                data: null,
                message: "Email already extis..!",
                status: false
            })
        }

        const password = await bcrypt.hash(req.body.password, 10);

        const data = await userModel.create({ ...req.body, password })
        return res.send({
            data: data,
            message: "User created successfully..!",
            status: true
        })

    } catch (e) {
        return res.send({
            data: null,
            message: "Something went wrong..!",
            status: false
        })
    }
}

const login = async (req, res) => {
    const email = await userModel.findOne({ email: req.body.email });

    if (!email) {
        return res.send({
            data: null,
            message: "user not found",
            status: false
        })
    }

    const matchPassword = await bcrypt.compare(req.body.password, email.password);

    if (matchPassword) {
        const token = await jwt.sign({ _id: email._id, name: email.name, email: email.email }, 'screct_key');

        console.log(token);
        console.log(email);
        return res.send({
            message: "Login successfully",
            data: token,
            status: true
        })
    }

    return res.send({
        message: "Invalid Password",
        data: null,
        status: false
    })

}
const dataFetch = async (req, res) => {
    try {
        const data = await userModel.find({}, { password: 0, _id: 0 }).sort({ name: 1 });
        return res.send({
            data: data,
            message: "Data fetched successfully..!",
            status: true
        })
    } catch (error) {
        return res.send({
            data: null,
            message: "Something went wrong..!",
            status: false
        })
    }
}

const detelteAll = async (req, res) => {
    try {
        const data = await userModel.deleteMany();
        return res.send({
            data: null,
            message: "All Data deleted successfully",
            status: true
        })
    } catch (err) {
        return res.send({
            data: null,
            message: "Something went wrong..!",
            status: false
        })
    }
}



module.exports = {
    signup,
    dataFetch,
    detelteAll,
    login,
}