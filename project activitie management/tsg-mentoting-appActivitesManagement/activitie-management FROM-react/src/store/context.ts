import { create } from "zustand";
import apiUrls from "./apiUrls.ts";
import task from "./task.ts";

type typeStore = {
  requestUserstoAssing: any;
  requestNewTask: boolean;
  edit: object;
  setEdit: (toEdit: object) => void;
  tasks: () => Promise<void>;
  sendRequestNewTask: (newTask: typeof task) => Promise<void>;
  setRequestNewTask: (state: boolean) => void;
};

export const useStore = create<typeStore>()((set) => ({
  requestNewTask: false,
  requestUserstoAssing: {},
  edit: {},

  setRequestNewTask: (state: boolean) => {
    set({ requestNewTask: state });
  },

  setEdit: (toEdit) => {
    set({ edit: toEdit });
  },

  tasks: async () => {
    try {
      const response = await fetch("http://localhost:4000/allActivities"); //http://192.168.1.38:4000/allActivities
      set({ requestUserstoAssing: response.json() });
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      set({ requestUserstoAssing: [] });
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
          set({ requestNewTask: await response.json() });

        } else {
          set({ requestNewTask: false });
          throw new Error("Something went wrong.");
        }
      })
        .catch((error) => { 
        });
  },
}));
