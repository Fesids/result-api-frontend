import { ChartIcon } from ".."
import { ResultModel } from "../../../domain/models"
import "./subject-style.scss"
import { choiceChartColor, choiceGradeColor, choiceSubjectBgColor } from "../../hooks"


type Props = {
    data: ResultModel
}


const Subject = ({data}: Props) =>{


    return(
        <div className="subjectWrap" style={choiceSubjectBgColor(data.disciplina)}>
            <div className="subjectContainer">
                <div className="info">
                    <h2 className="subjectName">{data.disciplina}</h2>
                    <p className="creationDate">{data.criadoEm.toString().slice(0,10).replaceAll("-", "/").split("/").reverse().join("/")}</p>
                </div>
                <div className="gradeWrap">
                    <div className="gradeContainer" style={choiceGradeColor(data.nota)}>
                        <ChartIcon bgColor={choiceChartColor(data.nota).backgoundColor}/>
                        <p className="grade">Nota: {data.nota}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Subject;