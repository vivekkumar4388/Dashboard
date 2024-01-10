import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import User from "./models/User.js";
dotenv.config();
const PORT = process.env.PORT || 9000;
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
//app.use("/client", clientRoutes);
//app.use("/management", managementRoutes);
// mongoose.connect("mongodb+srv://4388vivek:paparanjit@cluster0.5sv8qgo.mongodb.net/MERN")
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,

}).then(() => {
    app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
}).catch((err) => console.log(`${err} did not connect to server`));



app.get('/getAuthorList', async (req, res) => {

    const page = req.query.page - 1;
    const limit = req.query.limit;
    const skip = page * limit;

    let authors = [];
    const cursor = await User.find();
    res.status(200).json(cursor);
})

app.get('/getCountry', async (req, res) => {
    let country = [];
    const cursor = await User.find({});
    res.json(cursor);
})

app.get('/getlikelihood', async (req, res) => {
    try {
        const result = await User.aggregate([{
            $group: {
                _id: '$likelihood', count: { $sum: 1 }

            }
        }]);

        res.status(200).json(result);
    } catch (e) {
        console.log(e);
    }


})
app.get('/getintensity', async (req, res) => {
    try {
        const result = await User.aggregate([{
            $group: {
                _id: '$intensity', count: { $sum: 1 }

            }
        }]);

        res.status(200).json(result);
    } catch (e) {
        console.log(e);
    }


})
app.get('/getTopic', async (req, res) => {
    try {
        const result = await User.aggregate([{
            $group: {
                _id: '$topic', count: { $sum: 1 }
            }
        }]);

        res.status(200).json(result);
    } catch (e) {
        console.log(e);
    }


})

app.get('/getregion', async (req, res) => {
    try {
        const result = await User.aggregate([{
            $group: {
                _id: '$region', count: { $sum: 1 }
            }
        }]);

        res.status(200).json(result);
    } catch (e) {
        console.log(e);
    }


})
