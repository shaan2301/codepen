import React, { Component , useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt , faExpandAlt } from '@fortawesome/free-solid-svg-icons'



const Editor = ({ displayName , language , value , onChange }) => {

function handelChange(editor,data,value) {
onChange(value);
}

const [open, setopen] = useState(true);


    return (
        <div className= {`editor-container  ${open ? '' : 'colapsed' } ` } >

            <div className='editor-title'>{displayName}

                <button

                type='button'
                className='expand-colapsed-btn'
                onClick={() => setopen(prev => !prev)}
                >

                   <FontAwesomeIcon icon  ={open ? faCompressAlt  : faExpandAlt } /> 
                </button>

            </div>

            <ControlledEditor 
            onBeforeChange={handelChange}
            value = {value}
            className = 'code-mirror-wrapper'
            options = {{
                lineWrapping : true,
                lint : true,
                mode : language,
                theme : 'material',
                lineNumbers : true


            }}


            />


        </div>
    )
}

export default Editor