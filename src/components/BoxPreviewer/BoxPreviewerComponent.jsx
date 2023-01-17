import { useState } from 'react';
import './BoxPreviewer.css'

function BoxPreviewer(){
    const [topLeft, setTopLeft] = useState(10);
    const [topRight, setTopRight] = useState(10);
    const [bottomLeft, setBottomLeft] = useState(10);
    const [bottomRight, setBottomRight] = useState(10);

    return(
        <div className="Box" 
            style={{
                borderRadius: `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`
            }}/>
    );
}

export default BoxPreviewer;