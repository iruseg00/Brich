import { Link, useLocation } from "react-router-dom";
import SideBarStatic from "../../components/sideBarStatic/SideBarStatic";
import LoginForma from "../../components/loginForma/LoginForma";
import style from "./style.module.scss";

function Login()
{
    const location = useLocation();
    location.state = { prevState: location.pathname };
    return (
        <div className={style.container}>
            <SideBarStatic/>
            <div className={style.container_right}>
                <h1 className={style.title}>ТЕСТИРОВАНИЕ ЮЗАБИЛИТИ СИСТЕМЫ</h1>
                <LoginForma/>
                <div>
                    <span className={style.register}>Ещё не зарегистрировались? </span>
                    <Link className={style.link} to={"/register"}>Регистрация</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;