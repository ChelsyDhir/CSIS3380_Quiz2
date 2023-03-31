const express = require('express');
const mongoose = require('mongoose');

app = express();
port = process.env.port || 7000

mongoose.connect('mongodb+srv://chelsy:12345@nodeexpress-jwt-test.63qan.mongodb.net/Exam');
mongoose.connect('mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exam');

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    sid: {type: Number, required: true}
});

const Quiz = mongoose.model("Quiz", schema);
app.get('/', (req, res) => {
    
    data = new Quiz({
        name: "Chelsy",
        sid: 300342149
    });

    data.save();
    console.log("Data added successfully!");
    res.send("Data added successfully!")
})


app.listen(port, () => {
    console.log("App is listening at port");
})