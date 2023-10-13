import React, {useState} from "react";

export const One = () =>
{
   const [studentNames,setStudentName] = useState(["john","Ben"])
    return   (
        <>
        <ul>
        {
            studentNames.map(e => <li key = {e} >{e}</li>)
        }
        </ul>
        </>
        
       
    )
}
