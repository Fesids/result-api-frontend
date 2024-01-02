import { GradeValidator } from "../protocols/grade-validator";

export class GradeValidatorAdpter implements GradeValidator{
    isValid (grade: number) : boolean{
        const isGradeValid = grade >= 0 && grade <= 10;
        return isGradeValid;
    }
    
}