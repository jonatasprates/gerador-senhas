import "./styles.css";

const PasswordBox = ( {password} ) => {
    return (
        <div className="password-box">
            <p>{password}</p>
        </div>
    )
};

export default PasswordBox;