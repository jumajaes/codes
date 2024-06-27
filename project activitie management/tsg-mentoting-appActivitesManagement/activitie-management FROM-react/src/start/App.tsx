import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Lobby } from "./components/body/Lobby"
import HeadApp from "./components/head/HeadApp"
import { UserTasks } from "./components/body/onSessionComponents/UserTasks"



export const App = () => {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <HeadApp />
                    <Routes>
                        <Route path="/" element={ <Lobby />} />
                        <Route path="/user:" element={ <UserTasks/>} />
                        
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}