import { useState } from 'react'
import './App.css'
import Qualifications from './components/qualifications/qualifications'
import Jobs from './components/jobs/jobs'
function App() {
const [qualifications, setQualifications ] = useState(['XE coding boot-camp', 'worked in teams in different  work environments', 'leadership training'])

  return (
    <>
      <Qualifications pikachu={qualifications}/>
    </>
  )
}
function AppOne() {
   const [ jobs, setJobs ] = useState(['team member', 'project leader', 'project supervisor'])

 return (
  <>
    <Jobs Toyota={jobs}/>
  </>
 )
}

export default App; AppOne
