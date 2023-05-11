const express = require('express');
const { QuizModel } = require('../model/quiz.model');
const user = express.Router();

user.get('/', async(req,res)=>{
    try {
        const data = await QuizModel.find();
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send({'msg':'data is not available for dashboard'})
    }
})

user.post('/', async(req,res)=>{
    const body = req.body;
    try {
        const data = new QuizModel(body);
        await data.save();
        res.status(200).send('data is stored')
    } catch (error) {
        res.status(400).send({'msg':'data is not available to post'})
    }
})

user.patch('/:_id', async(req,res)=>{
    const body = req.body;
    const id= req.params;
    console.log(body, id);
    try {
        const data = await QuizModel.findByIdAndUpdate(id, body, {new:true});
        
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({'msg':'data is not available to patch'})
    }
})


user.delete('/:_id', async(req,res)=>{
    const id= req.params;
    console.log( id);
    try {
        const data = await QuizModel.findByIdAndDelete(id, null, {new:true});
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({'msg':'data is not available to delete'})
    }
})

module.exports = {user}

