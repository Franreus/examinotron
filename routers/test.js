const express = require('express')
const Test = require('../models/test')
const router = new express.Router()
const test = require('../models/test')

router.post('/test', async (req, res) => {
    const test = new test(req.body)
    let question = req.body.question
    let answer1 = req.body.answer1
    let answer2 = req.body.answer2
    let answer3 = req.body.answer3
    let answer4 = req.body.answer4
    let newtest = {question, answer1, answer2, answer3, answer4}

    try {
        await Test.save(newQuiz)
        // res.status(201).send(newtest)
        res.status(201).redirect("/")
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/test', async (req, res) => {
    try {
        const quizs = await test.find({})
        res.send(quizs)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/quizs/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const test = await test.findById(_id)

        if (!test) {
            return res.status(404).send()
        }

        res.send(test)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/quizs/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['question', 'answer1', 'answer2', 'answer3', 'answer4']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const test = await test.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!test) {
            return res.status(404).send()
        }

        res.send(test)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/quizs/:id', async (req, res) => {
    try {
        const test = await test.findByIdAndDelete(req.params.id)

        if (!test) {
            res.status(404).send()
        }

        res.send(test)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router