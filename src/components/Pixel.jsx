import React, { useState } from 'react'
import "../styles/pixel.scss"

const Pixel = ({ color }) => {

  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  const applyColor = () => {
    setPixelColor(color.hex);
    setCanChangeColor(false);
  }

  const changeColorOnHover = () => {
    setOldColor(pixelColor);
    setPixelColor(color.hex);
  }

  const resetColor = () => {
    if (canChangeColor) {
        setPixelColor(oldColor);
    }

    setCanChangeColor(true);
  }
    
  return (
    <div className="pixel" onClick={applyColor} onMouseEnter={changeColorOnHover} onMouseLeave={resetColor} style={{ backgroundColor: pixelColor }}></div>
  )
}

export default Pixel