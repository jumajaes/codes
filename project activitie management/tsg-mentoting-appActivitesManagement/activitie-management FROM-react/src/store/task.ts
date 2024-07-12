interface iTask {
    id: number;
    name: string,
    expirationdate: string,
    priority: "medium" | "low" | "high" | "",
    description:  string,
    assignedto: number,
    state: "canceled" | "completed" | "expirated" | "active" | ""
}

const task:iTask = {
    name: "",
    expirationdate: "",
    priority: "",
    description: "",
    assignedto: 0,
    state: "",
    id: 0,
}

export default task;