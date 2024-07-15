import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Lobby } from "./components/body/Lobby.tsx"
import HeadApp from "./components/head/HeadApp.tsx"
import {UserTasks}  from "./components/body/onSessionComponents/UserTasks.tsx"
import React from "react"



export const App = () => {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <HeadApp />
                    <Routes>
                        <Route path="/" element={ <Lobby />} />
                        <Route path="/user-task" element={ <UserTasks/>} />
                        
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}