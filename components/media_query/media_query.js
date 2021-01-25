import React from 'react';

const MediaQuery = ({ query, children }) => {

    const [point, setPoint] = React.useState(false)

    const breakpoint = React.useCallback(()=>{
        if(typeof window !== 'undefined'){
            if(window.matchMedia(query).matches){
                setPoint(true)
            }else{
                setPoint(false)
            }
        }
    },[query])

    React.useEffect(()=>{
        breakpoint()
        window.addEventListener('resize', breakpoint)
        return ()=> window.removeEventListener('resize', breakpoint)
    },[breakpoint])

    if(!point){
        return null
    }

    return (
        <>
            { children }
        </>
    );
};

export default MediaQuery;