import { useEffect, useState } from "react"

const useAdmin=(user)=>{
    console.log(user)
    const [admin,setAdmin]=useState(false)
    useEffect(()=>{
        const email=user?.email
        
        if(email){
            fetch(`https://guarded-caverns-84789.herokuapp.com/admin/${email}`,{
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
               
                setAdmin(data.admin)
            })
        }
    },[user])
    return[admin]
}
export default useAdmin