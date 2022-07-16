const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const foodModel = require('./models/food')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://VictorBarbosa:HnuxaDB8cPWnc$KI5VdD@merncrud.ietem.mongodb.net/food?retryWrites=true&w=majority", {
    useNewUrlParser: true, //Esconde essa senha aqui do link
})

app.post('/insert', async (req,res) => {

    const foodName = req.body.foodName
    const days = req.body.days

    const food = new foodModel({foodName: foodName, daysSinceIAte: days})

    try {
        await food.save()
        res.send("inserted data")
    } catch(err) {
        console.log(err)
    }
})

app.get('/read', async (req, res) => {
    foodModel.find({}, (err, result) => {
        if(err) {
            res.send(err)
        }

        res.send(result)
    })
})

app.listen(3001, () => {
    console.log("Good to go at 3001")
})