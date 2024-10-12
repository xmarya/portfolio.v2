import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const WorkStateContext = createContext();

function WorkStateProvider({ children }) {
    const [workState, setWorkState] = useState("available");

    function changeWorkState() {
        setWorkState(current => current === "available" ? "busy" : "available");
    }
    
    return (
        <WorkStateContext.Provider value={{workState, changeWorkState}}>
            {children}
        </WorkStateContext.Provider>
    )
}

function useWorkStateContext() {
    const context = useContext(WorkStateContext);

    if(context === undefined) throw new Error("useWorkStateContext is being used out of its boundries");

    return context;
}

export {WorkStateProvider, useWorkStateContext};

