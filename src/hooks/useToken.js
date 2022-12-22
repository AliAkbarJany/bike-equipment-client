import { useEffect, useState } from "react"


const useToken=user=>{
    const [token,setToken]=useState('')
    useEffect(()=>{
        console.log('user inside usetoken',user)
        const email=user?.user?.email
        console.log('email inside useToken', email)
        const currentUser={email:email}
        console.log('current email',currentUser)
        
        if(email){
            fetch(`https://bike-equipments-server.onrender.com/customer/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('data in token',data)
                const accessToken=data.token
                localStorage.setItem('accessToken',accessToken)
                setToken(accessToken)
            })
        }
    },[user])
    return [token]
}
export default useToken;