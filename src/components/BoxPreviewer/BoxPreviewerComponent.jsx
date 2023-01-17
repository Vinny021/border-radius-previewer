import './BoxPreviewer.css'

function BoxPreviewer(props){
    return(
        <div className="Box" 
            style={{
                borderRadius: `${props.topLeft}${props.measurement} ${props.topRight}${props.measurement} ${props.bottomLeft}${props.measurement} ${props.bottomRight}${props.measurement}`
            }}/>
    );
}

export default BoxPreviewer;