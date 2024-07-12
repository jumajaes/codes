import { create } from 'zustand'
import apiUrls from './apiUrls.ts';
import task from "./task.ts"

type typeStore = {
  // finished: boolean,
  requestNewTask?: JSON;
  //changeFinishedState: () => void;

  sendRequestNewTask: (newTask: typeof task) => Promise<void>;

}

export const useStore = create<typeStore>()((set) => (
  {
    requestNewTask: JSON,

    // finished: false,

    // changeFinishedState: () => set((state) => ({ finished: !state.finished})),
    sendRequestNewTask: async (newTask) => {

      console.log(typeof newTask.name)
      console.log(typeof newTask.expirationDate)
      console.log(typeof newTask.priority)
      console.log(typeof newTask.description)
      console.log(typeof newTask.assignedto)
      console.log(typeof newTask.description)

      // try {



      //   const response = await fetch(apiUrls.setNewActivitie, {

      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(newTask),
      //   }

      //   );

      //   set({ requestNewTask: await response.json() })

      // } catch (Exeption: any) {
      //   console.log(Exeption)
      // }
    }
  }
)


);
