import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Routine {
    id : string,
    name : string,
    frequency : "daily" | "weekly",
    completedDates : string[],
    createdAt : string,
}

interface RoutineState {
    routines : Routine[],
    addRoutine : (name : string , frequency :  "weekly" | "daily") => void,
    removeRoutine : (id : string) => void,
    toggleRoutine : (id : string , date : string) => void, 
}



const useRoutineStore = create<RoutineState>()(persist((set)=>{
    return {
        routines : [],
        addRoutine : (name,frequency) => set((state)=>{
            return {
                routines : [...state.routines,{
                    id : Date.now().toString(),
                    name,
                    frequency,
                    completedDates : [],
                    createdAt : new Date().toISOString()
                }]
            }
        }),
        removeRoutine : (id) => set((state)=> ({
            routines : state.routines.filter((routine)=> routine.id !== id)
        })),
        toggleRoutine : (id,date) => set((state)=>({
            routines : state.routines.map((routine)=> routine.id === id ? {
                    ...routine,
                    completedDates : routine.completedDates.includes(date) ? (routine.completedDates.filter((d)=> d !== date)) : ([...routine.completedDates,date])
            } : routine)     
        }))
    }
},{
    name : "routine-local",
}))


export default useRoutineStore;