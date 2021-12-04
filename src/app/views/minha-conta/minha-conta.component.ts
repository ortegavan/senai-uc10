import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-minha-conta',
    templateUrl: './minha-conta.component.html',
    styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

    constructor(private router: Router, private usuarioService: UsuarioService) { }

    ngOnInit(): void {
    }

    usuarioLogin = new Usuario();
    usuarioCadastro = new Usuario();
    mensagemLogin = "";
    mensagemCadastro = "";

    blocklist: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", ";", "--"]

    onSubmitLogin(): void {
        this.blocklist.forEach(palavra => {
            if (this.usuarioLogin.email.toLowerCase().includes(palavra)) {
                this.mensagemLogin = "Dados inválidos.";
                return;
            }
        })

        this.usuarioService.logar(this.usuarioLogin).subscribe((response) => {
            this.router.navigateByUrl("/");
        }, (error) => {
            this.mensagemLogin = error.error;
        })
    }

    onSubmitCadastro(): void {
        this.blocklist.forEach(palavra => {
            if (this.usuarioCadastro.email.toLowerCase().includes(palavra) ||
                this.usuarioCadastro.name.toLowerCase().includes(palavra)) {
                this.mensagemCadastro = "Dados inválidos.";
                return;
            }
        })

        this.usuarioService.cadastrar(this.usuarioCadastro).subscribe((response) => {
            this.mensagemCadastro = "Cadastro efetuado com sucesso! Efetue seu login ao lado.";
        }, (error) => {
            this.mensagemCadastro = error.error;
        })
    }
}