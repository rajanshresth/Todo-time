import React, { useState } from 'react'


function Time():any{
    let time:string =new Date().toLocaleTimeString();
    const [currentTime,setCurrentTime] = useState(time);
    const UpdateTime = ()=>{
        time=new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    
    setInterval(UpdateTime,1000);

return (
    <div>
        <h1 className="text-5xl flex justify-center items-center">
            {currentTime}
        </h1>
    </div>
)
}

export default Time