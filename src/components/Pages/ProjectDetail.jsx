export default function ProjectDetail({ data }) {
    return (
        <div className="projects p-4">
           <h2>Project Title: {data.title}</h2>
           <p>Description: {data.desc}</p>
           <a href={data.deployUrl}>
             <img src={data.imgUrl} alt="" />
           </a>
        </div>
    )
}

