import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import WorkoutDetails from '../component/WorkoutDetails'
import WorkoutForm from '../component/workoutForm'
import { fetchWorkouts, workoutData } from '../features/workoutSlice'
import { useSelector,useDispatch } from 'react-redux'

const Home = () => {
  // const [workouts,setWorkouts] = useState(null)
  const dispatch = useDispatch()

  const {workouts} = useSelector(workoutData)  

    useEffect(()=>{
    const fetchWorkout = async() =>{
      const response = await fetch('http://localhost:4000/api/workouts/')
      const data = await response.json()
      dispatch(fetchWorkouts(data))
    }
     fetchWorkout() 
  },[])  
  return (
    <div className='home'>
      <div className="workouts">
        {workouts?.map((workout)=>{
          return (
            <WorkoutDetails key={workout._id} workout={workout}/>
          )
        }) }
      </div>
      <WorkoutForm/>
    </div>
  )
}
 
export default Home 