import { Outlet } from "react-router-dom";
import Nav from './components/Nav'

function App() {
    return (
        <>
        <Nav />
        <Outlet />
        </>
    );
 }   
// const [qualifications, setQualifications ] = useState(['XE coding boot-camp', 'worked in teams in different  work environments', 'leadership training'])

//   return (
//     <>
//       <Qualifications pikachu={qualifications}/>
//     </>
//   )
// }
// function AppOne() {
//    const [ jobs, setJobs ] = useState(['team member', 'project leader', 'project supervisor'])

//  return (
//   <>
//     <Jobs Toyota={jobs}/>
//   </>
//  )


export default App;
