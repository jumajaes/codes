interface iTask {
    id: number;
    name: string,
    expirationdate: string,
    priority: "medium" | "low" | "high" | "",
    description:  string,
    assignedto: string,
    state: "canceled" | "completed" | "expirated" | "active" | ""
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