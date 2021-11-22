import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    url = "http://localhost:3000/produtos"
    httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) }

    constructor(private httpCliente: HttpClient) { }

    getProdutos(): Observable<Produto[]> {
        return this.httpCliente.get<Produto[]>(this.url)
    }
}
