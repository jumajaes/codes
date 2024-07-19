interface iTask {
    id: number;
    name: string,
    expirationdate: string,
    priority: string,
    description:  string,
    assignedto: string,
    state: string
}

const task:iTask = {
    name: "",
    expirationdate: "",
    priority: "",
    description: "",
    assignedto: "",
    state: "",
    id: 0,
}

export default task;