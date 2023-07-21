import React , {useState , useEffect} from 'react'
import Editor from './Editor'
import LocalStorage from '../hook/LocalStorage';

const App = () => {

  const [html, sethtml] = LocalStorage("html", "");
  const [css, setcss] = LocalStorage("css" , "");
  const [javascript, setjavascript] = LocalStorage("js" , "");
  const [srcDoc, setsrcDoc] = useState("");

  useEffect(() => {
   const timeout = setTimeout(() => {

    setsrcDoc( `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${javascript}</script>
    </html>
    `)
    
   }, 300);
  
    return () => clearTimeout(timeout);
  }, [html , css , javascript])
  




  return (
    <>
      <div className='pane top-pane' >

        <Editor language= "xml"
          displayName= "HTML" 
          value= {html} 
          onChange = {sethtml}  

          />
        <Editor

         language= "css"
          displayName= "CSS" 
          value= {css} 
          onChange = {setcss}  

         />
        <Editor

           language= "javascript"
          displayName= "JS" 
          value= {javascript} 
          onChange = {setjavascript}  
        
         />

      </div>

      <div className='pane'>

        <iframe 
        srcDoc= {srcDoc}
        title='output'
          sandbox='allow-scripts'
          width="100%"
          height="100%"

        />

      </div>
    </>
  )
}

export default App