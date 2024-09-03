import { useState } from 'react';
import ProjectDetail from './ProjectDetail';

const projects = [
    {
        title: "Green Acres",
        desc: "This was a project that a group of us did in class. We where able to create a web site for the owner of a lawn that will let them put in new clients in to a database while being able to assign different task and employees to the job. You also can update and add employees and jobs from the website and add the new job to your google calendar.",
        imgUrl: "https://www.lushome.com/wp-content/uploads/2014/03/backyard-designs-landscaping-ideas-green-grass-flowers-12.jpg",
        deployUrl: "https://github.com/thomassmith0526/Project2",
    },
    {
        title: "SQL",
        desc: "This show that I was able to create a database where you can add employees with different managers. You can also update and delete everything in the database ",
        imgUrl: "https://cdn.corporatefinanceinstitute.com/assets/database-1024x703.jpeg",
        deployUrl: "https://github.com/thomassmith0526/SQL"
    },
    {
        title: "Weather",
        desc: "With this app you can get the weather for the day and 5 days out.",
        imgUrl: "https://www.noaa.gov/sites/default/files/styles/square_width_650/public/2021-02/FocusArea__Weather-02.jpg?h=5dc006f5&itok=20VGa8_F",
        deployUrl: "https://github.com/thomassmith0526/ts-weather"
    },
]

export default function ProjectList() {
    // define some data --> STATE
    const [allProjects, setAllProjects] = useState(projects);

    return (
        <div>
           {allProjects.map((proj) => (
                <ProjectDetail data={proj}/>
           ))}
        </div>
    )
}

