export class FailedToCreateError extends Error {
    constructor () {
      super(`Falha ou tentar criar uma nova disciplina! cheque os parâmetros inseridos ou se  adisciplina já existe`)
      this.name = 'FailedToCreateError'
    }
  }
  