interface iTask {

    
    name: string,
    expirationDate: Date,
    priority: "medium" | "low" | "high" | "",
    description:  string,
    assignedto: number,
    state: "canceled" | "completed" | "expirated" | "active" | ""
}

const task:iTask = {
    
    name: "",
    expirationDate: new Date(),
    priority: "",
    description: "",
    assignedto: 0,
    state: "",
}

export default task;