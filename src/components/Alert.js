import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
            props.alert && 
            (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            <button type="button" className="close" aria-label="Close" onClick={props.closeAlert}><span aria-hidden="true">&times;</span></button>
        </div>)
        )
}

export default Alert

/* //if props.alert is not null then do second div part. Thi happens because all the JSX will be converted to JS calls */
