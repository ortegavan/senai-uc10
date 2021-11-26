import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    url = "http://localhost:3000/";

    constructor(private httpClient: HttpClient) { }

    logar(usuario: Usuario): Observable<any> {
        return this.httpClient.post(this.url + "login", JSON.stringify(usuario), {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
            observe: "response"
        })
    } 

    cadastrar(usuario: Usuario): Observable<any> {
        return this.httpClient.post(this.url + "register", JSON.stringify(usuario), {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
            observe: "response"
        })
    } 
}