import styles from "./chart.module.scss"


interface Props{  
    bgColor : string
}
const Chart = ({bgColor}: Props) =>{

    return(
       
        <div className={styles.chart} style={{backgroundColor: bgColor}}>

        </div>
    )
}

export default Chart;