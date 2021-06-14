import React from 'react';


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    width: '2em',
    height:'1em',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '10em',
    border:'0.4em solid #ff1493',
    borderRadius: '1em',
    
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
   
  }

  const ONCLOSE = {
    position: 'relative',
    cursor: 'pointer',
    width: '7em',
    left: '5em',
    top:'2em',
    bottom:'-3em',
    height: '3em',
    backgroundColor: 'black',
    color: '#fff',
    borderRadius: '0.5em',
    fontFamily: 'sans-serif-medium',
 }
const TEXT = {
    position:'relative',
    width: '15em',
    top: '-2em',
    left: '-5em',
    fontFamily: 'sans-serif-medium',
    fontSize: '1.5em'


}



export default function Modal({open, onClose}){
    if (!open) return null

    return(
        <>
            <div style={OVERLAY_STYLES}>
                <div style={MODAL_STYLES}>
                <h2 style={TEXT} > Modal Exemple App </h2>
                        <button style={ONCLOSE} onClick={onClose}>CLOSE</button>
                   
                </div>
            </div>
        </>
    )
}