interface iTask {
    name: string,
    expirationDate: string,
    priority: "medium" | "low" | "high",
    description:  string,
    assing: string;
}

export const task: iTask = {
    name: "",
    expirationDate: "",
    priority: "medium",
    description:  "",
    assing: ""
}