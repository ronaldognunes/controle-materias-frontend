import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { BaseService } from "src/app/services/base-service";
import { Usuario } from "../model/usuario";



@Injectable()
export class ContaService extends BaseService{

  constructor(private http:HttpClient){
    super();
  }

  registarUsuario(usuario:Usuario ):Observable<Usuario>{
    let response = this.http
    .post(this.urlApi + 'Usuario/efetuar-login',usuario,this.obterAuthHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError));
    return response;
  }

  login(usuario :Usuario) : Observable<Usuario>{
    let response = this.http
    .post(this.urlApi + 'Usuario/efetuar-login',usuario,this.obterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError));
    return response;

  }
}
