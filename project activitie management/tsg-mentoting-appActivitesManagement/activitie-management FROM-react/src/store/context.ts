import { create } from "zustand";
import apiUrls from "./apiUrls.ts";
import task from "./task.ts";

type typeStore = {

  requestTask:any
  requestNewTask: any
  
  tasks:() => Promise<void>
    sendRequestNewTask: (newTask: typeof task) => Promise<void>

};

export const useStore = create<typeStore>()((set) => ({
  requestNewTask: {},
  requestTask:{},

  tasks : async () => {
    try {
      const response = await fetch("http://localhost:4000/allActivities");
      set({ requestTask: response.json() });
    } catch (error) {
      console.error("Error al obtener productos:", error);
      set({ requestNewTask: []  });
    }
  },

  sendRequestNewTask: async (newTask) => {
   
    fetch(apiUrls.setNewActivitie, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then(async (response) => {                      
        if (response.ok) {
          console.log('Request successful', await response.json())
          set({ requestNewTask:  response });
        }

        throw new Error('Something went wrong.');
      })
      .catch(error => {});
  },
}));
