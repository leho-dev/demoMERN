import { useEffect } from "react";
import "./App.css";
import Signup from "./pages/Signup";

function App() {
    useEffect(() => {
        console.log(import.meta.env.VITE_DEMO_VALUE);
    }, []);

    return (
        <>
            <Signup />
        </>
    );
}

export default App;
