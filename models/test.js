const mongoose = require('mongoose')

const Test = mongoose.model('Test', {
    id: {
        type: Number,
        required: true
    },
   
    Question: {
        type: String,
		required: true,
		trim: true
		
    },
    answer1: {
        type: String,
        required: true,
		trim: true
	},
	answer2: {
        type: String,
        required: false,
		trim: true
    },

    answer3: {
        type: String,
        required: false,
		trim: true
    },

    answer4: {
        type: String,
        required: false,
		trim: true
    }
})

module.exports = Test