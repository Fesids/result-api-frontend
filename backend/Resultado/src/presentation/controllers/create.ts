import { Subject } from "../../domain/enums";
import { AddResult } from "../../domain/usecases";
import { RetrieveByBiAndSubject } from "../../domain/usecases/retrive-by-bi-and-discipline";
import { MissingParamError } from "../errors";
import { GradeNotValidError } from "../errors/grade-not-valid-error";
import { badRequest, created, ok, serverError } from "../helpers/http-helpers";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { GradeValidator } from "../protocols/grade-validator";

export class CreateResultController implements Controller{

    constructor(
        private readonly addResult: AddResult, 
        private readonly gradeValidator: GradeValidator,
        private readonly retrieveByBiAndSubject: RetrieveByBiAndSubject
        
    ){}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse>{
        try{

            // validando parâmetros obrigatórios
            const requiredFields = ['bimestre', 'disciplina']
            const subjectAvailable = Object.keys(Subject);

            

            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                  return badRequest(new MissingParamError(field).message)
                }
              }

            
           

            const { bimestre, disciplina, nota } = httpRequest.body
            let dateNow = new Date()
            let attDate = new Date()

            subjectAvailable.forEach((k) => {
                if(disciplina !== k) {
                    return badRequest("Disciplina desconhecida ou não disponível")
                }
            })

            const subjectExists = await this.retrieveByBiAndSubject.retrive(bimestre, disciplina);
            if(subjectExists){
                return badRequest(`A disciplina ${disciplina} já está cadastrada para o ${bimestre} bimestre`)
            }
            
            // validando nota
            if(!this.gradeValidator.isValid(nota)){
                return badRequest(new GradeNotValidError(nota).message);
            }

            const result = await this.addResult.add({
                bimestre: bimestre,
                disciplina: disciplina, 
                nota: nota,
                criadoEm: dateNow,
                atualizadoEm: attDate

            })
            return created(result);

        } catch(err: any){
            console.log(err)
            return serverError(err);
        }
    }
}