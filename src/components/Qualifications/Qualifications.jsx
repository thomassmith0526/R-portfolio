const Qualifications = ({ pikachu}) => {
    // console.log(props)
return (
    <div>
         Qualifications
         <ul>
         {pikachu.map((qualification, i) => (
            <li key={i}>{qualification}</li>
         ))}            
         </ul>
    </div>
)
};

export default Qualifications;