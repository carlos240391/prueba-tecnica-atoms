import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
    render() {
    
    return (
      <Html lang="es">
        <Head>
          <script defer dangerouslySetInnerHTML={{
            __html:`
              window.onload = ()=>{
                setTimeout(()=>{
                  let fonts = document.createElement('link')
                  fonts.rel= "stylesheet"
                  fonts.href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;700;900&display=swap"
                  document.head.appendChild(fonts)
                },1000)
              }
            `
          }}>

          </script>
          <link rel="preconnect"
                href="https://fonts.gstatic.com"/> 
          {/*
          <link href={`https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;700;900&display=swap`}
                rel="stylesheet"/> */}
                
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument