import './BoxPreviewer.css'

function BoxPreviewer(props){
    const normalBorderRadius = `${props.topLeft}${props.measurement} ${props.topRight}${props.measurement} ${props.bottomLeft}${props.measurement} ${props.bottomRight}${props.measurement}`
    const elipticalBorderRadius = `/ ${props.eTopLeft}${props.measurement} ${props.eTopRight}${props.measurement} ${props.eBottomLeft}${props.measurement} ${props.eBottomRight}${props.measurement}`;

    const borderRadiusFinal = props.showEliptical ? normalBorderRadius+elipticalBorderRadius : normalBorderRadius;
    
    return(
        <div className="Box" 
            style={{
                borderRadius: borderRadiusFinal
            }}/>
    );
}

export default BoxPreviewer;