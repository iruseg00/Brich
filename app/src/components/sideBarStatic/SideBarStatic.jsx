import pc from "../../assets/images/pc.svg";
import style from "./style.module.scss";

function SideBarStatic()
{
    return (
        <div className={style.container}>
            <img className={style.pc} src={pc} alt="pc"/>
        </div>
    );
}

export default SideBarStatic;