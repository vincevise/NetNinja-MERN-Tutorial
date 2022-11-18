import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { createWorkout } from '../features/workoutSlice'

const WorkoutForm = () => {

    const dispatch = useDispatch()

    const initialValue = {
        title:'',
        load:'',
        reps:''
    }
    const [details,setDetails] = useState(initialValue)
    const [error,setError] = useState(null)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(details.title !== '' && 
            details.load !== '' &&
            details.reps !== ''){
                const workout = details
                
                // console.log(workout)
                const response = await fetch('http://localhost:4000/api/workouts/',{
                    method:'POST',
                    body:JSON.stringify(workout),
                    headers:{
                        'Content-Type' : 'application/json'
                    }
                }) 
                const json = await response.json()
                
                if(!response.ok){
                    setError(json.error)
                    console.log('not ok')
                }
                if(response.ok){
                    dispatch(createWorkout(json))
                    setError(null)
                    setDetails(initialValue)
                    // console.log('new workout added',json)
                }
        }else{
            setError('Please fill all the details')
        } 
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a new workout</h3>

        <label>Exercise Title:</label>
        <input 
            type="text"
            name='title'
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})} 
            value={details.title}
        />

        <label>Load (in kg):</label>
        <input 
            type="number"
            name='load'
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})} 
            value={details.load}
        />

        <label>Reps:</label>
        <input 
            type="number"
            name='reps' 
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
            value={details.reps} 
        />
        <button>Add Workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm