interface iTask {
    name: string,
    expirationDate?: Date,
    priority?: "medium" | "low" | "high",
    description:  string,
    assignedto: number
}

export const task: iTask = {
    name: "",
    expirationDate: undefined,
    priority: undefined,
    description: "",
    assignedto: 0
}