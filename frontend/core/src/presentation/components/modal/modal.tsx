import { ResultModel } from "../../../domain/models";
import { AddResult } from "../../../domain/usecases";
import { ModalHeader } from "./header";
import { ModalSubjectList } from "./list";
import styles from "./modal.module.scss";

type Props = {
    isOpen: boolean,
    close: () => void,
    bimester: number,
    subjects: ResultModel[],
    addResult: AddResult

}

const Modal = ({isOpen, close, bimester, subjects, addResult}: Props) =>{

    if(isOpen){
        return (
        <div className={styles.modalWrap}>
            <div className={styles.modal}>
                <div className={styles.content}>
                    <ModalHeader bimester={bimester} onClick={close}/>
                    <p className={styles.title}>Disciplina</p>
                    <ModalSubjectList data={subjects} bimester={bimester} addResult={addResult}/>
                </div>
            </div>
        </div>
        )
    }

    return null

}


export default Modal;