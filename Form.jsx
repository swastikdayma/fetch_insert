import { useState } from "react";

function Form() {
    const [name,setNAme] = useState("")
    const [message,setMessage] = useState("")

    function handleForm(e){
        e.preventDefault()
        let formdata = {name}
        fetch("/api/insert",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((result)=>{
            return result.json()
        }).then((data)=>{
            console.log(data)
            setMessage(data.Message)
        })
    }

    return ( 
        <>


        {message}
        <form onSubmit={handleForm}>
            <input type="text"
            value={name}
            onChange={(e)=>{setNAme(e.target.value)}}
            />
            <button>Submit</button>
        </form>

        </>
     );
}

export default Form;