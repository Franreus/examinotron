const express = require('express')
const Test = require('../models/tests')
const router = new express.Router()

router.get('/tests', async (req, res) => {
    try {
        const tests = await Test.find({})
        if (!tests) return res.status(404).send()
        return res.send(tests)
    } catch (e) {
        return res.status(500).send()
    }
})

router.get('/tests/:id', async (req, res) => {
    try {
        const test = await Test.findById(req.params.id)
        if (!test) return res.status(404).send()
        return res.send(test)
    } catch (e) {
        return res.status(500).send()
    }
})

router.post('/tests', async (req, res) => {
	try {
		const oldFilm = await Test.find({"id":req.body['id']})
		if(oldFilm.length > 0)	return res.send('Test already exists')
		const test = new Test(req.body)
		await test.save()
		res.status(201).send('Test Added')
	} catch (e){
		return res.status(400).send(e)
	}
	
})

router.patch('/tests/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['author']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' })
	try{
        const test = await Test.findByIdAndUpdate(req.params.id,req.body)
		if (!test) return res.status(404).send()
        return res.send(test)
	}catch{
		return res.status(500).send()
	}
})

router.delete('/tests/:id', async (req, res) => {
    try {
        const test = await Test.findByIdAndDelete(req.params.id)
        if (!test) return res.status(404).send()
        return res.send(test)
    } catch (e) {
        return res.status(500).send()
    }
})

module.exports = router