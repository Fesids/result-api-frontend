import { Bimester, Subject} from "../enums";

export interface RetrieveByBiAndSubject {
    retrive(bimester: Bimester, subject: Subject):Promise<boolean>
}