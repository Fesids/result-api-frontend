import styles from "../../styles/color.module.scss"



type ChartBg = {
    backgoundColor: string
}


export const color = (color: string ): ChartBg => ({
    backgoundColor: color
})

const choiceChartColor = (grade: number): ChartBg =>{
    if(grade >=0 && grade <= 6){
        return color(styles.negativeGr)
    } else if (grade > 6 && grade <= 8){
        return color(styles.mediumGr)
    }
    else {
        return color(styles.positiveGr)
    }
}

export default choiceChartColor