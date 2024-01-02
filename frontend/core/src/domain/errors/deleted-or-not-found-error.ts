export class DeletedOrNotFoundError extends Error {
    constructor (id: string) {
      super(`O objeto de "${id}" não pode ser encontrado ou já foi excluído!`)
      this.name = 'DeletedOrNotFoundError'
    }
  }
  