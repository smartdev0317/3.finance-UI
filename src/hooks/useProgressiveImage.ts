import React, {useEffect, useState} from "react";

const useProgressiveImage = (src : any) => {  
    const [sourceLoaded, setSourceLoaded] = useState(null)
  
    useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => setSourceLoaded(src)
    }, [src])
  
    return sourceLoaded 
}

export default useProgressiveImage