import React from "react";

function Alert(props) {

    const firstCap = (word) => {
        let capWord = word.toLowerCase();
        return capWord.charAt(0).toUpperCase() + capWord.slice(1);
    }

  return (
    props.alert && <div class={`alert alert-${props.alert.typeAl} alert-dismissible fade show`} role="alert">
        <strong>{firstCap(props.alert.typeAl)}</strong>: {props.alert.msg}.
    </div>
);
}

export default Alert;
