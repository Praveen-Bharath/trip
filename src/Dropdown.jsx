import { useState } from "react";

function Dropdown ({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Single-way Trip','Round Trip'];
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) =>
            setIsActive(!isActive)}>
                {selected}
                <span className="fa fa-caret-down" aria-hidden="true"></span>
                </div>
                {isActive && (
            <div className="dropdown-content" >
                {options.map((options) => ( 
                 <div 
                    onClick={(e) => {
                     setSelected(options);
                     setIsActive(false);
                 }}
                 className="dropdown-item">
                {options}
                </div>
                ))}
        </div>
    )}
        </div>
    );
    
}

function Location(){
    return(
<div>
<div className="location_container">
    <div id="from">
        From Location : 
    <input className="fromLocation" type="text"></input>
    <br/><br/>
    <div id="to">
        To Location : 
    <input className="fromLocation" type="text"></input>
    <br/>    <br/>
    <div id="date">
        Date of Travel : 
    <input className="fromLocation" type="datetime-local"></input>
    <br/>    <br/>
    <div id="button">
        <button id="btn" type="submit">Book Now</button>
    </div>
</div>
</div>
</div>
</div>
</div>
    );
}

export {Dropdown,Location};