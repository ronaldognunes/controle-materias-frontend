import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { LocalStorageUtils } from "../utils/localStorage";

export abstract class BaseService{
  protected urlApi = environment.urlApi;
  public localStorage = new LocalStorageUtils();

  protected obterHeaderJson(){
    return {
      headers: new HttpHeaders(
        {'Content-type':'application/json'}
      )
    }
  }

  protected obterAuthHeaderJson(){
    return {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.localStorage.obterTokenUsuario()}`,
      })
    };
  }

  protected extractData(response: any) {
    return response.result || {};
  }

  protected serviceError(response:Response | any){
    let customError: string[] = [];
    let customResponse = { error: { errors:<any>[] }};

    if (response instanceof HttpErrorResponse){
        if(response.statusText === 'Unknown Error'){
          customError.push('Ocorreu erro Desconhecido.');
          response.error.erros = customError;
        }
    }
    if (response.status === 500){
      customError.push("Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.");
      customResponse.error.errors = customError;
    }

    return throwError(response);

  }
}
