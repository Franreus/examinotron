const express = require('express')
const Film = require('../models/films')
const router = new express.Router()

router.get('/films', async (req, res) => {
    try {
        const films = await Film.find({})
        if (!films) return res.status(404).send()
        return res.send(films)
    } catch (e) {
        return res.status(500).send()
    }
})

router.get('/films/:id', async (req, res) => {
    try {
        const test = await Film.findById(req.params.id)
        if (!test) return res.status(404).send()
        return res.send(test)
    } catch (e) {
        return res.status(500).send()
    }
})

router.post('/films', async (req, res) => {
	try {
		const oldFilm = await Film.find({"id":req.body['id']})
		if(oldFilm.length > 0)	return res.send('Film already exists')
		const test = new Film(req.body)
		await test.save()
		res.status(201).send('Film Added')
	} catch (e){
		return res.status(400).send(e)
	}
	
})

router.patch('/films/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['author']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' })
	try{
        const test = await Film.findByIdAndUpdate(req.params.id,req.body)
		if (!test) return res.status(404).send()
        return res.send(test)
	}catch{
		return res.status(500).send()
	}
})

router.delete('/films/:id', async (req, res) => {
    try {
        const test = await Film.findByIdAndDelete(req.params.id)
        if (!test) return res.status(404).send()
        return res.send(test)
    } catch (e) {
        return res.status(500).send()
    }
})

module.exports = router