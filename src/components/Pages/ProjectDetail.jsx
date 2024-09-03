export default function ProjectDetail({ data }) {
    return (
        <div>
           <h2>Project Title: {data.title}</h2>
           <p>Description: {data.desc}</p>
           <a href={data.deployUrl}>
             <img src={data.imgUrl} alt="" />
           </a>
        </div>
    )
}

