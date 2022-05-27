import { Component, OnInit } from '@angular/core'
import { CarrinhoService } from 'src/app/services/carrinho.service'
import { Produto } from 'src/app/services/produtos.service'

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {

  constructor(public carrinhoService: CarrinhoService) { }

  remover(produto: Produto) {
    this.carrinhoService.removeProduto(produto)
  }

}
