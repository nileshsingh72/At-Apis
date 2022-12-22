const {Schema , model} = require("mongoose");

const TimerSchema = new mongoose.Schema({
userID : {
    type :Schema.Types.ObjectId,
    ref : 'user',
    required : true
},
 projectID : {
        type :Schema.Types.ObjectId,
        ref : 'project',
        required : true
    },
  date: { type: String, required: true },
  timerStart:{type : String , required:true},
  timerEnd:{type : String , required:true},
  totalTime : {type : String , required:true}
});

const Timer = mongoose.model("timer", TimerSchema);

module.exports = Timer;