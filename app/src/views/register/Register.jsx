import { useLocation } from "react-router-dom";
import SideBarStatic from "../../components/sideBarStatic/SideBarStatic";
import RegisterForma from "../../components/registerForma/RegisterForma";
import style from "./style.module.scss";

function Register()
{
    const location = useLocation();
    location.state = { prevState: location.pathname };
    return (
        <div className={style.wrapper}>
            <SideBarStatic/>
            <div className={style.container}>
                <h1 className={style.title}>РЕГИСТРАЦИЯ</h1>
                <RegisterForma/>
            </div>
        </div>
    );
}

export default Register;
