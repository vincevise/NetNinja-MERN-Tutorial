const { default: mongoose } = require('mongoose')
const Workout = require('../models/WorkoutModel')

// get all workouts
const getAllWorkout = async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)

}

// get a single workout
const getWorkout = async(req,res)=>{

    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    try{
        const workout = await Workout.findById(id)
        if(!workout){
            return res.status(404).json({error:'No such workout'})
        }
        res.status(200).json(workout)
    }catch(error){
        res.status(500).json({error:error})
    }
}


// create new workout
const createWorkout = async (req,res)=>{
    const {title,load,reps} = req.body
    
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error})
    }
}

// delete a workout
const deleteWorkout = async (req,res)=>{

    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    try{
        const workout = await Workout.findByIdAndDelete(id)
        if(!workout){
            return res.status(404).json({error:'workout not found'})
        }
        res.status(200).json(workout)
    }catch(error){
        res.status(500).json({error:error})
    }
}

// update workout
const updateWorkout = async(req,res)=>{

    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
      
    try{
        const workout = await Workout.findByIdAndUpdate(
            id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        )
        if(!workout){
            return res.status(404).json({error:'workout not found'})
        }
        res.status(200).json(workout)
    }catch(error){
        res.status(500).json({error:error})
    }
}


module.exports = {
    createWorkout,
    getAllWorkout,  getWorkout,
    deleteWorkout,
    updateWorkout
}