const express = require("express")
const app = express()
const mongoose = require('mongoose')
const foodModel = require('./models/food')

app.use(express.json())

mongoose.connect("mongodb+srv://VictorBarbosa:HnuxaDB8cPWnc$KI5VdD@merncrud.ietem.mongodb.net/food?retryWrites=true&w=majority", {
    useNewUrlParser: true, //Esconde essa senha aqui do link
})

app.get('/', async (req,res) => {
    const food = new foodModel({foodName: "Banana", daysSinceIAte: 3})

    try {
        await food.save()
        res.send("inserted data")
    } catch(err) {
        console.log(err)
    }
})


app.listen(3001, () => {
    console.log("Good to go at 3001")
})