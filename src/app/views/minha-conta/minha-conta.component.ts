import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
    selector: 'app-minha-conta',
    templateUrl: './minha-conta.component.html',
    styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    usuarioModel = new Usuario("", "", "")

    onSubmitLogin(): void {
        console.log(this.usuarioModel)
    }

    onSubmitCadastro(): void {
        console.log(this.usuarioModel)
    }
}
