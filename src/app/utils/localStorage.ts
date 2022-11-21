export class LocalStorageUtils{

  public obterUsuario ():string{
    return JSON.parse(localStorage.getItem('sistema.usuario')!);
  }

  public salvarDadosUsuario( response: any):void{
    this.salvarTokenUsuario(response.token);
    this.salvarDadosUsuarioToken(response.nome);
  }

  public salvarTokenUsuario(response: string):void{
    localStorage.setItem('sistema.token',response)
  }

  public salvarDadosUsuarioToken(response:string):void{
    localStorage.setItem('sistema.usuario',response);
  }

  public obterTokenUsuario():string{
    return JSON.parse(localStorage.getItem('usuario.token')!);
  }

}
