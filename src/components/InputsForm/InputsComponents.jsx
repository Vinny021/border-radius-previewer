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
    const [measurement, setMeasurement] = useState('px');

    const handleChange = (event, newMeasurement) => {
      setMeasurement(newMeasurement);
    };

    return(
        <div>
          <div className='InputRow'>
            <div style={{marginLeft: 0,marginRight: 'auto'}} className='RadiusInputs'>
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
            {/* <div style={{marginLeft: 'auto',marginRight: 0}} className='RadiusInputs'>
              <div className='Inputs'>
                <p>Top-Left</p>
                <input type="number" />
              </div>
              <div className='Inputs'>
                <p>Top-Right</p>
                <input type="number" />
              </div>
              <div className='Inputs'>
                <p>Bottom-Left</p>
                <input type="number" />
              </div>
              <div className='Inputs'>
                <p>Bottom-Right</p>
                <input type="number" />
              </div>
            </div> */}
          </div>
          <BoxPreviewer topLeft={topLeft} topRight={topRight} bottomLeft={bottomLeft} bottomRight={bottomRight} measurement={measurement}/>
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
        </div>
    );
}

export default InputsForm;
