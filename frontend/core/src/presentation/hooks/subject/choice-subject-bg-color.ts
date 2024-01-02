import styles from "../../styles/color.module.scss"



type StyleBg = {
    backgroundColor: string
}


export const color = (color: string ): StyleBg => ({
   backgroundColor: color
})

const choiceBgColor = (subject: string): StyleBg =>{
    if(subject == "Artes"){
        return color(styles.artBg)
    } else if (subject == "Geografia"){
        return color(styles.geoBg)
    }
    else if(subject == "Sociologia"){
        return color(styles.socioBg)
    }
    else if(subject == "Biologia"){
        return color(styles.bioBg)
    }
    else{
        return {backgroundColor: "none"}
    }
}

export default choiceBgColor