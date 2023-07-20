import "../../App.css";
import logoPicture from "../../assets/logoColor.svg";

function Logo() {
    return (
        <img src={logoPicture} alt="Logo Kasa" className="logo"/>
    )
}

export default Logo;