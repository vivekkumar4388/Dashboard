
import mongoose from "mongoose";

var Userschema = new mongoose.Schema({
    end_year: {
        type: String,
    },
    intensity: {
        type: Number,
    },
    likelihood: {
        type: String
    },
    topic: {
        type: String
    },
    insight: {
        type: String
    },
    url: {
        type: String
    },
    region: {
        type: String
    },
    start_year: {
        type: Number
    },
    impact: {
        type: String
    },
    added: {
        type: String
    },
    published: {
        type: String
    },
    country: {
        type: String
    },
    relevance: {
        type: Number
    },
    region: {
        type: String
    },
    source: {
        type: String
    },
    title: {
        type: String
    },
    likelihood: {
        type: Number
    },
})
var User = mongoose.model("mydata", Userschema, 'mydata');


export default User;