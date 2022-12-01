import './Reviwall.css'
import { useState, useEffect } from "react";

const Reviwall=()=>{
    const [See,setSee]=useState(false);
    return(
        <div >
            <button onClick={()=>setSee(!See)}>{ See ? <p>close</p>:<p>Read Review</p>}</button>
       { See &&
       <div className='rev'>
        <div>
            <div className='review-block'>
                <h3>Reviews so far</h3>
                <div className='match-detail-block'>
                    {/* <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/> */}
                
                </div>
            </div>
            <button className="button" onClick={()=>setSee(!See)}>close</button>
        </div>
        </div>
        }
        </div>
    );
}
export default Reviwall;


// import React from 'react'
// import ReactDom from 'react-dom'

// const MODAL_STYLES = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#FFF',
//   padding: '50px',
//   zIndex: 1000
// }

// const OVERLAY_STYLES = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, .7)',
//   zIndex: 1000
// }

// export default function Modal({ open, children, onClose }) {
//   if (!open) return null

//   return ReactDom.createPortal(
//     <>
//       <div style={OVERLAY_STYLES} />
//       <div style={MODAL_STYLES}>
//         <button onClick={onClose}>Close Modal</button>
//         {children}
//       </div>
//     </>,
//     document.getElementById('portal')
//   )
// }