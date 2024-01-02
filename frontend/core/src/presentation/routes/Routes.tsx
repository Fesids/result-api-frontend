import "../styles/router.scss"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultErrorPage from "../pages/error/defaultErrorPage";
import { MakeBimesterGrade } from "../../main/factories/pages/bimester-grade-factory";
import Modal from "../components/modal/modal";


export const routes = createBrowserRouter(

    [
        {
            path: "",
            element: <MakeBimesterGrade />,
            errorElement: <DefaultErrorPage/>
        }

    ]
)

export const Router = () =>{

    return(
        <div className="routerContainer">
            <RouterProvider router={routes}/>
        </div>
    )
}