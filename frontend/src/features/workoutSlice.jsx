import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    workouts : []
}

export const workoutSlice = createSlice({
    name:'workouts',
    initialState,
    reducers:{
        fetchWorkouts:(state,action) => { 
            state.workouts = action.payload
        },
        createWorkout:(state,action) =>{
            console.log(action.payload)
            
            state.workouts.unshift(action.payload)  
        },
        deleteWorkout:(state,action)=>{
            state.workouts = state.workouts.filter((x)=>x._id !== action.payload)
        }
    }
})

export const workoutData = (state) => state.workouts

export const {fetchWorkouts,createWorkout,deleteWorkout} = workoutSlice.actions

export default workoutSlice.reducer

  