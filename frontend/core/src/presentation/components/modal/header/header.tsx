import styles from "./header.module.scss"
import { CloseIcon } from "../.."

type Props = {
    onClick: () => void,
    bimester: number
}

const Header = ({bimester, onClick}: Props) =>{

    return(
        <div className={styles.modalHeader}>
            <h2>Bimestre {bimester}</h2>
            <div className={styles.closeWrap} onClick={onClick}><CloseIcon/></div>
        </div>
    )
}

export default Header