import { create } from "zustand";

export interface Routine {
    id : string,
    name : string,
    frequency : "daily" | "weekly",
    completedDates : string[],
    createdAt : string,
}

interface routineState {
    routines : Routine[]
}



const useRoutineStore = create<routineState>()(()=>{
    return {
        routines : []
    }
})


export default useRoutineStore;