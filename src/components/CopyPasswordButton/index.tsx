import React from "react";
import "./styles.css";

const CopyPasswordButton = ({ password }) => {

    const copyPasswordToClipboard = () => {
        navigator.clipboard.writeText(password); //copia o texto
    }

    return (
        <div className="actions">
            <button className="copy-password-to-clipobard" onClick={copyPasswordToClipboard}> Copiar para área de transferência</button>
        </div>
    )
};

export default CopyPasswordButton;