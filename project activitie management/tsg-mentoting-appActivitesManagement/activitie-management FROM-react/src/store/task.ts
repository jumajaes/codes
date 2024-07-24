interface iTask {

    constructor(),
    id: number,
    name: string,
    expirationdate: string,
    priority: string,
    description:  string,
    assignedto: string,
    state: string,
    isEdit: boolean
}

const task:iTask = {

    constructor(){
        console.log("hola edit")
    },
    name: "",
    expirationdate: new Date().toISOString().split(".")[0],
    priority: "medium",
    description: "",
    assignedto: "",
    state: "active",
    id: 0,
    isEdit: false
}

export default task;