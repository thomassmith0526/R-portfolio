const Jobs =({ Toyota }) => {
    return (
        <div>
            Jobs
            <ul>
                {Toyota.map((jobs, i) =>(
                    <li key={i}>{jobs}</li>
                ))}
            </ul>
        </div>
    )
};

export default Jobs;