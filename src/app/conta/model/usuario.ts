export interface Usuario{
  id: number,
  nome:string,
  email:string,
  senha:string,
  confirmacaoSenha:string,
  perfil:number,
  token:string,
  dataCadastro:Date
}
