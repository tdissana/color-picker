import { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return( <div className="color-picker-container">
                <h1>Color Picker</h1>

                <div className="color-picker-display" style={{backgroundColor: color}}>
                    <p>Selected Color: {color.toUpperCase()}</p>
                </div>

                <label htmlFor="color-picker-input">Select Color</label>
                <input className="color-picker-input" type="color" value={color} onChange={handleColorChange}/>

            </div>
    );
}

export default ColorPicker