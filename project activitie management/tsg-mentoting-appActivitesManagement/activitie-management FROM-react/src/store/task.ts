interface iTask {

    constructor(),
    id: number,
    name: string,
    expirationdate: string,
    priority: string,
    description:  string,
    assignedto: string,
    state: string
}

const task:iTask = {

    constructor(){
        console.log("hola edit")
    },
    name: "",
    expirationdate: new Date().toISOString().split(".")[0],
    priority: "",
    description: "",
    assignedto: "",
    state: "",
    id: 0,
}

export default task;