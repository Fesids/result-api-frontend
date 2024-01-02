import {Router} from "express"
import { createResultController, deleteResult, listResults } from "../factories/resultFact";


const route = Router();

route.post("", createResultController)
route.get("", listResults)
route.delete("/:id", deleteResult)

export const resultRoute = route;