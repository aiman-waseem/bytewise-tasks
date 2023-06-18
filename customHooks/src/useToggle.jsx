

// export const useToggle = (initialState= false) =>{}

import { useState } from "react";

export function useToggle(initialVal= false) {
    const[isVisible, setisVisible]= useState(initialVal)

    function toggle(){
        console.log(isVisible)
        setisVisible(!isVisible)
    };

    //   const toggle =()=>{
    //       setisVisible((yes)=>!yes)
    // }
    return [isVisible,toggle];
}