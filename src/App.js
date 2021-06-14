import React, { useState } from 'react';
import Modal from '../src/component/Modal'

const OPENMODAL = {
    position: 'relative',
    left:'40%',
    top: '10em',
}

const BUTTON = {
    position: 'relative',
    width: '10em',
    height: '5em',
    cursor: 'pointer',
    border:'0.4em solid #ff1493',
    borderRadius: '1em',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif-medium',
    fontSize: '1em'
}
export default function App(){

    const [modal, setModal] = useState(false);

    return(
        <>
            <div style={OPENMODAL}>
                <button style={BUTTON} onClick={()=> setModal(true)}>Open Modal</button>
                <Modal open={modal} onClose={() => setModal(false)}></Modal>
            </div>
        
        </>
    )
}

