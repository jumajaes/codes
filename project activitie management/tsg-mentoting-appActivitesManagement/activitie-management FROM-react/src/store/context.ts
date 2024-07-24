import { create } from "zustand";
import apiUrls from "./apiUrls.ts";
import task from "./task.ts";

type typeStore = {
  requestUserstoAssing: any;
  requestNewTask: boolean;
  editStore: boolean;
  setEdit: () => void;
  tasks: () => Promise<void>;
  sendRequestNewTask: (newTask: typeof task) => Promise<void>;
  setRequestNewTask: (state: boolean) => void;
  sendNewState : (id, state) => Promise<void>;
};

export const useStore = create<typeStore>()((set) => ({
  requestNewTask: false,
  requestUserstoAssing: {},
  editStore: false,

  setRequestNewTask: (state: boolean) => {
    set({ requestNewTask: state });
  },

  setEdit: () => {
    set({ editStore: false });
  },

  tasks: async () => {
    try {
      const response = await fetch("http://10.99.77.147:4000/allActivities"); //http://192.168.1.38:4000/allActivities
      set({ requestUserstoAssing: response.json() });
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      set({ requestUserstoAssing: [] });
    }
  },

  sendRequestNewTask: async (newTask) => {
    newTask.name = newTask.name.trim()
    newTask.description = newTask.description.trim()
    fetch(apiUrls.setNewActivitie, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then(async (response) => {
        if (response.ok) {
          set({ requestNewTask: await response.json() });
          set({ editStore: false });
        } else {
          set({ requestNewTask: false });
        }
      })
      .catch((error) => {});
  },

  sendNewState: async (id, state) => {
    fetch(`http://10.99.77.147:4000/updateStateActivitie/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: state
    })
      .then(async (response) => {
        if (response.ok) {
          console.log(true);
        } else {
          console.log(false);
        }
      })
      .catch((error) => { console.log(error)});
  },
}));
