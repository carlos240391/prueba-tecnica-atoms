import React from 'react'
import Spiner from '../components/spiner/spiner'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = React.useState(true)
  React.useEffect(()=>{window.scrollTo(0,0)},[])
  React.useEffect(()=>{
    setTimeout(()=>{
      setLoad(false)
    },500)
  },[])

  if(load){
    return <Spiner/>
  }

  return (
    <>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
