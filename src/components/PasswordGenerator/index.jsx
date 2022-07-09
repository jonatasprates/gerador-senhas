import { useState, useEffect } from "react";
import PasswordBox from "../PasswordBox";

import "./styles.css";

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(8);
    const [digitLength, setDigitLength] = useState(2);
    const [symbolLength, setSymbolLength] = useState(2);

    useEffect(() => {
        const draftPassword = [];

        draftPassword.push(...Array.from({ length: digitLength }, randomDigit));
        draftPassword.push(...Array.from({ length: symbolLength }, randomSymbol));
        draftPassword.push(...Array.from({ length: passwordLength }, randomLetter));

        setPassword(
            draftPassword
            .slice(0, passwordLength)
            .sort(() => Math.random() - 0.5) // 0.00 -> 1.00 / -0.5 -> +0.5
            .join("")
        );
    }, [passwordLength, digitLength, symbolLength]);

    const randomDigit = () => {
        const digits = "0123456789";

        return digits[Math.floor(Math.random() * digits.length)];
    }

    const randomSymbol = () => {
        const symbols = "#$&(+,./;?@[]^{}";

        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    const randomLetter = () => {
        const letters = "abcdefghijklmnopqrstuvwxyz";

        const letter = letters[Math.floor(Math.random() * letters.length)];

        return Math.random() >= 0.5 ? letter : letter.toUpperCase();
    }
    
    return (
        <>
            <div className="slider">
                <label htmlFor="password-length">Tamanho</label>
                <input 
                    type="range" 
                    id="password-length" 
                    min={4} 
                    max={64} 
                    value={passwordLength}
                    onChange={({ target })=> setPasswordLength(parseInt(target.value))}
                />   
                <span>{passwordLength}</span>
            </div>

            <div className="slider">
                <label htmlFor="digit-length">Digitos</label>
                <input 
                    type="range" 
                    id="digit-length" 
                    min={0} 
                    max={10} 
                    value={digitLength}
                    onChange={({ target })=> setDigitLength(parseInt(target.value))}
                />   
                <span>{digitLength}</span>
            </div>

            <div className="slider">
                <label htmlFor="symbol-length">Símbolos</label>
                <input 
                    type="range" 
                    id="symbol-length" 
                    min={0} 
                    max={10} 
                    value={symbolLength}
                    onChange={({ target })=> setSymbolLength(parseInt(target.value))}
                />   
                <span>{symbolLength}</span>
            </div>

           <PasswordBox password={password} />
        </>
    )
        
};

export default PasswordGenerator;