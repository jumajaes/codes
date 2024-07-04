import { create } from 'zustand'
import apiUrls from './apiUrls.ts';


type typeStore = {
    finished: boolean,
    requestNewTask?: JSON;
    changeFinishedState: () => void;

    sendRequestNewTask: (newTask:object) => Promise<void>;

  }

export const useStore = create<typeStore>()((set) => ({
    requestNewTask: JSON,
    finished: false,
    changeFinishedState: () => set((state) => ({ finished: !state.finished})),
    sendRequestNewTask: async(newTask:object) => {
      const response = await fetch(apiUrls.setNewActivitie,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask), 
    } );
    set({requestNewTask : await response.json()})  
}}));