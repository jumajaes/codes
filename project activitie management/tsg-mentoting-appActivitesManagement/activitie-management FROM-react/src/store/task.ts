interface iTask {

    id: number,
    name: string,
    expirationdate: string,
    priority: string,
    description:  string,
    assignedto: string,
    state: string,
    isEdit: boolean,
    isCreate: boolean
}

const task:iTask = {

 
    name: "",
    expirationdate: new Date().toISOString().split(".")[0],
    priority: "medium",
    description: "",
    assignedto: "",
    state: "active",
    id: 0,
    isEdit: false,
    isCreate:false
}

export default task;