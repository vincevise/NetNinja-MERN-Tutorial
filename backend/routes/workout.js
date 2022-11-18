const express = require('express')
const { createWorkout, getAllWorkout, getWorkout, deleteWorkout, updateWorkout } = require('../controller/workoutController')
const Workout = require('../models/WorkoutModel')
const router = express.Router()

// GET all workouts
router.get('/',getAllWorkout)

// GET a single workout
router.get('/:id',getWorkout)

// POST a new workout
router.post('/',createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id',updateWorkout)
 

module.exports = router