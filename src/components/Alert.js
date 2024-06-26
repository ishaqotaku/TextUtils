import React from "react";

function Alert(props) {

    const firstCap = (word) => {
        let capWord = word.toLowerCase();
        return capWord.charAt(0).toUpperCase() + capWord.slice(1);
    }

  return (
    <div style={{height : '50px'}}>
        {props.alert && <div class={`alert alert-${props.alert.typeAl} alert-dismissible fade show`} role="alert">
            <strong>{firstCap(props.alert.typeAl)}</strong>: {props.alert.msg}.
        </div>}
    </div>
);
}

export default Alert;
