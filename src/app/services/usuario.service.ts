import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    url = "http://localhost:3000/usuarios";
    httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) }

    constructor(private httpClient: HttpClient) { }

    getUsuarios(): Observable<Usuario[]> {
        return this.httpClient.get<Usuario[]>(this.url)
    }
}