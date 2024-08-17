import React, { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";

import "react-color-palette/css";
import "../styles/editor.scss";
import DrawingPanel from "./DrawingPanel";

const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(32);
  const [panelHeight, setPanelHeight] = useState(32);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [color, setColor] = useColor("#589F7E");

  const initializeDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  };

  const onChangeColor = (color) => localStorage.setItem("color", color.hex);

  return (
    <div id="editor">
      <div>
        <h1>Pixel Editor</h1>
        {hideDrawingPanel && <h2>Enter Panel Dimension</h2>}
        {hideDrawingPanel && (
            <div id="options">
            <div className="option">
                <input
                type="number"
                className="panelInput"
                defaultValue={panelWidth}
                max={64}
                min={16}
                onChange={(e) => {
                    setPanelWidth(e.target.value);
                }}
                />
                <span>Width</span>
            </div>
            <div className="option">
                <input
                type="number"
                className="panelInput"
                defaultValue={panelHeight}
                max={64}
                min={16}
                onChange={(e) => {
                    setPanelHeight(e.target.value);
                }}
                />
                <span>Height</span>
            </div>
            </div>
        )}

        <button onClick={initializeDrawingPanel} className="button">
            {buttonText}
        </button>

        {hideOptions && (<ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} onChangeComplete={onChangeColor(color)} />)}
      </div>
      <div>
        {hideOptions && (<DrawingPanel width={panelWidth} height={panelHeight} color={color}/>)}
      </div>
    </div>
  );
};

export default Editor;
