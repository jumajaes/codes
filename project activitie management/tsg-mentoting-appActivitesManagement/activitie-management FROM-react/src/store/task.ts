interface iTask {
    name: string,
    expirationDate: Date,
    priority: "medium" | "low" | "high",
    description:  string,
    assignedto: number,
    state: "active"
}

export const task: iTask = {
    name: " ",
    expirationDate: new Date(),
    priority: "medium",
    description: " ",
    assignedto: 0,
    state: "active"
}