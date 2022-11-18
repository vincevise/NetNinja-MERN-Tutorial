import React from 'react'
import { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux'
import { deleteWorkout } from '../features/workoutSlice'

const WorkoutDetails = ({workout}) => {

  const dispatch = useDispatch()
  const [error,setError] = useState(null)
  const handleClick = async () =>{
    
    const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`,{
      method:'DELETE'
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      console.log('not ok')
    }
    if(response.ok){
      dispatch(deleteWorkout(workout._id))
      setError(null)
      console.log('delete workout', json)
    }
  }
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong> {workout.load}</p>
        <p><strong>Reps: </strong> {workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}><AiFillDelete/></span>
    </div>
  )
}

export default WorkoutDetails