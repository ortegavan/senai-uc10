import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/produto';

@Component({
    selector: 'app-produtos',
    templateUrl: './produtos.component.html',
    styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

    produtos = [] as Produto[]

    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
        this.carregarProdutos()
    }

    carregarProdutos(): void {
        this.produtoService.getProdutos().subscribe((produtosRecebidos: Produto[]) => {
            this.produtos = produtosRecebidos
        })
    }
}
