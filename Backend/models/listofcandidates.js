const mongoose = require('mongoose');

let Listofcan = new mongoose.Schema({
    candidates_username: {
        type: String
    },
    candidates_email: {
        type: String
    },
    interviewer_email :{
        type: String
    },
    start_time:{
    	type:String
    },
    end_time:{
    	type:String
    },
});

module.exports = mongoose.model('Listofcan', Listofcan);