import { useEffect, useState } from "react"
import React  from 'react'
import { prefix } from "@fortawesome/free-solid-svg-icons"

const PREFIX = 'codepen-clone-'

const LocalStorage = (key , initialvalue) => {

    const prefixKey = PREFIX + key;
    const [value, setvalue] = useState(() => {
        const jasonvalue = localStorage.getItem(prefixKey);

        if(jasonvalue != null ) return JSON.parse(jasonvalue);
        if (typeof initialvalue === 'function' ) return initialvalue();
        else  {
             return initialvalue
        }
    });




    useEffect(() => {
      localStorage.setItem(prefixKey , JSON.stringify(value));
    }, [prefixKey , value ])
    


  return  [value , setvalue];
  
}

export default LocalStorage