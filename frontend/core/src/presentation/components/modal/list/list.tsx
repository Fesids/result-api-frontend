import { useState } from "react"
import { ResultModel } from "../../../../domain/models"
import { ModalSubject } from "../item"
import styles from "./list-style.module.scss"
import { AddResult } from "../../../../domain/usecases"


const subjects = [
    "Biologia",
    "Artes",
    "Geografia", 
    "Sociologia"
]

type Props = {
    data: ResultModel[],
    bimester: number,
    addResult: AddResult
}

const List = ({data, bimester, addResult}: Props) =>{

    const availableSubjects = subjects.filter(item => {
        return !data.some(obj => {
            return item == obj.disciplina
        })
    })
    const min = 0;
    const max = 10;

    const [grade, setGrade] = useState<any>();
    const [subject, setSubject] = useState("");
    
  
    const handleChange = (event:any) => {
      const value = Math.max(min, Math.min(max, Number(event.target.value))).toPrecision(2);
      setGrade(value);
    };

    const getSubjectName = (subject:string, e:any) =>{
       
        e.target.classList.add(styles.focus)

        setSubject(subject)
    }

    
    const createResult = () =>{
        addResult.add({bimestre: bimester, disciplina: subject, nota: grade})
        .then(response => console.log(response))
    }

    return(
        <div>
            <div className={styles.modalSubjectList}>
                {availableSubjects.length?availableSubjects.map(item => <ModalSubject data={item} onClick={getSubjectName} key={item}/>): <p>Nenhuma matéria disponível para adição.</p>}
            </div>
            <div className={styles.grade}>
                <p>Nota</p>
                {<input type="number" min="0" max="10" value={grade} onChange={(e) => handleChange(e)}/>}
                
            </div>
            
            <div className={styles.buttonWrap}>
                <button onClick={createResult}>
                    Confirmar
                </button>
            </div>
        </div>
        
    )
}

export default List;