import { useEffect, useState } from "react";

function Data() {
    const [userdata,setUserData] = useState([])
    useEffect(()=>{
        fetch("/api/data").then((result)=>{
            return result.json()
        }).then((data)=>{
            console.log(data)
            setUserData(data)
        })
    })
    return ( 
        <>
        <h1>Data</h1>
        {
            userdata.map((value)=>(
                <ul key={value.id}>
                    <li>{value.name}</li>
                </ul>
            ))
        }
        </>
     );
}

export default Data;