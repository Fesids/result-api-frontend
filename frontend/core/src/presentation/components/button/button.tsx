import { PlusIcon } from "..";
import "./button-style.scss";

type Props = {
    content: string,
    onClick: ()=> void
}

const Button = ({content, onClick}: Props) =>{

    return (
        <div className="buttonContainer" onClick={onClick}>
            {window.innerWidth >= 696?<p>{content}</p>: ""}
            <PlusIcon/>
        </div>
    )
}

export default Button;