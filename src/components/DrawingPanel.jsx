import React, { useCallback, useRef } from 'react'
import Row from './Row';
import { toPng } from 'html-to-image';

import "../styles/drawingPanel.scss"

const DrawingPanel = ({ width, height, color }) => {

  const ref = useRef(null);
  let rows = [];
  
  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} color={color}/>)
  }

  const handleDownload = useCallback(() => {
    if (ref.current === null) {
        return
      }
  
      toPng(ref.current, { cacheBust: true, })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = 'pixel-art.png'
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        }, [ref])
  })


  return (
    <div id="drawingPanel">
        <div ref={ref} id="pixels">{rows}</div>
        <button onClick={handleDownload} className="button button-canva">Export as PNG</button>
    </div>
  )
}

export default DrawingPanel