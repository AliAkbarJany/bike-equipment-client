import React, { useEffect, useState } from 'react';

import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    // const [purchase,setPurchase]=useState(null)

    useEffect(() => {
        fetch('https://bike-equipments-server.onrender.com/tools')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTools(data)
            })
    }, [])
    return (
        <div className='my-12'>
            <h2 className='text-4xl text-center text-green-500 font-bold py-4'>All Tools :{tools.length}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                        // setPurchase={setPurchase}
                    ></Tool>)
                }
            </div>
            
            
        </div>
    );
};

export default Tools;