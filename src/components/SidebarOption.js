import React from "react";

const SidebarOption = ( {title, Icon} ) => {
    return ( 
        <div className="list">
            <div className="list__sidebarOption">
                {Icon && <Icon />}
                { Icon ? <h4>{title}</h4> : <p>{title}</p>}
            </div> 
        </div>       
     );
}
 
export default SidebarOption;