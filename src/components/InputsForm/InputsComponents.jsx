import './InputsForm.css'
import {useState} from 'react';
import BoxPreviewer from '../BoxPreviewer/BoxPreviewerComponent'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function InputsForm() {
    const [topLeft, setTopLeft] = useState(10);
    const [topRight, setTopRight] = useState(10);
    const [bottomLeft, setBottomLeft] = useState(10);
    const [bottomRight, setBottomRight] = useState(10);
    const [eTopLeft, setETopLeft] = useState(10);
    const [eTopRight, setETopRight] = useState(10);
    const [eBottomLeft, setEBottomLeft] = useState(10);
    const [eBottomRight, setEBottomRight] = useState(10);
    const [showEliptical, setShowEliptical] = useState(false);
    const [measurement, setMeasurement] = useState('px');

    const handleChange = (event, newMeasurement) => {
      setMeasurement(newMeasurement);
    };

    const copyCss = () => {
      const normalBR = `${topLeft}${measurement} ${topRight}${measurement} ${bottomLeft}${measurement} ${bottomRight}${measurement}`;
      const elipticalBR = `/ ${eTopLeft}${measurement} ${eTopRight}${measurement} ${eBottomLeft}${measurement} ${eBottomRight}${measurement}`

      const finalBR = showEliptical ? normalBR+elipticalBR : normalBR;

      var css = 
      `.Box {
        min-height: 10rem;
        min-width: 10rem;
        background-color: #61dafb;
        border-radius: ${finalBR}
      }`

      navigator.clipboard.writeText(css);
    }

    const checkUncheck = () => {
      setShowEliptical(!showEliptical);
    }

    return(
        <div>
          <h5 style={{fontSize:'x-small'}}>Modificar pontos elipticos
            <input type="checkbox" checked={showEliptical?'checked':''} onClick={checkUncheck} onChange={checkUncheck}></input>
          </h5>
          <div className='InputRow'>
            <div style={{marginLeft: showEliptical?0:'auto',marginRight: 'auto'}} className='RadiusInputs'>
              <div className='Inputs'>
                <p>Top-Left</p>
                <input type="number" value={topLeft} onChange={(event)=>{event.target.value === '' || event.target.value < 0? setTopLeft(0) : setTopLeft(event.target.value)}}/>
              </div>
              <div className='Inputs'>
                <p>Top-Right</p>
                <input type="number" value={topRight} onChange={(event)=>{event.target.value === '' || event.target.value < 0? setTopRight(0) : setTopRight(event.target.value)}}/>
              </div>
              <div className='Inputs'>
                <p>Bottom-Left</p>
                <input type="number" value={bottomLeft} onChange={(event)=>{event.target.value === '' || event.target.value < 0? setBottomLeft(0) : setBottomLeft(event.target.value)}}/>
              </div>
              <div className='Inputs'>
                <p>Bottom-Right</p>
                <input type="number" value={bottomRight} onChange={(event)=>{event.target.value === '' || event.target.value < 0? setBottomRight(0) : setBottomRight(event.target.value)}}/>
              </div>
            </div>
            {showEliptical &&
            <div style={{marginLeft: 'auto',marginRight: 0}} className='RadiusInputs'>
              <div className='Inputs'>
                <p>E-Top-Left</p>
                <input type="number" value={eTopLeft} onChange={(event)=>{event.target.value === '' || event.target.value < 0? setETopLeft(0) : setETopLeft(event.target.value)}}/>
              </div>
              <div className='Inputs'>
                <p>E-Top-Right</p>
                <input type="number" value={eTopRight} onChange={(event)=>{event.target.value === '' || event.target.value < 0? setETopRight(0) : setETopRight(event.target.value)}}/>
              </div>
              <div className='Inputs'>
                <p>E-Bottom-Left</p>
                <input type="number" value={eBottomLeft} onChange={(event)=>{event.target.value === '' || event.target.value < 0? setEBottomLeft(0) : setEBottomLeft(event.target.value)}}/>
              </div>
              <div className='Inputs'>
                <p>E-Bottom-Right</p>
                <input type="number" value={eBottomRight} onChange={(event)=>{event.target.value === '' || event.target.value < 0? setEBottomRight(0) : setEBottomRight(event.target.value)}}/>
              </div>
            </div>}
          </div>
          <BoxPreviewer topLeft={topLeft} topRight={topRight} bottomLeft={bottomLeft} bottomRight={bottomRight} measurement={measurement} showEliptical={showEliptical} eTopLeft={eTopLeft} eTopRight={eTopRight} eBottomLeft={eBottomLeft} eBottomRight={eBottomRight}/>
          
          <ToggleButtonGroup
            style={{marginTop:'1rem', backgroundColor:'white'}}
            color="primary"
            value={measurement}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton style={{width:'3rem'}} value="px">Px</ToggleButton>
            <ToggleButton style={{width:'3rem'}} value="%">%</ToggleButton>
          </ToggleButtonGroup>
          
          <button className='copyButton' onClick={copyCss}>Copiar Código</button>
        </div>
    );
}

export default InputsForm;
