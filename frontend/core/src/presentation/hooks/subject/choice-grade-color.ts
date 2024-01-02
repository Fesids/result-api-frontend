import styles from "../../styles/color.module.scss"



type GradeBg = {
    color: string
}


export const color = (color: string ): GradeBg => ({
    color: color
})

const choiceGradeColor = (grade: number): GradeBg =>{
    if(grade >=0 && grade <= 6){
        return color(styles.negativeGr)
    } else if (grade > 6 && grade <= 8){
        return color(styles.mediumGr)
    }
    else {
        return color(styles.positiveGr)
    }
}

export default choiceGradeColor