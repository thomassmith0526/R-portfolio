import { Outlet } from "react-router-dom";
import Nav from './components/Nav'

function App() {
    console.log({Nav})
    return (
        <>
        <Nav />
        <Outlet />
        </>
    );
 }   



export default App;
