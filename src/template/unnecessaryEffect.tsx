import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"



export const UnnecessaryEffect = ()=>{
    const [msg,setMsg] = useState("")
    const [name,setName] = useState("")

    const onClick = ()=>{
        setName("steve")
    }

    // const helloMsg = `hello ${name}`;

    // 必要ないエフェクト
    useEffect(()=>{
        setMsg(`hello ${name}`)
        console.warn("必要ないエフェクト")
    },[name])

    return <div>
        <p>{msg}</p>
        <Button onClick={onClick}>change name</Button>
    </div>
}