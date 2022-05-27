import { Injectable } from '@angular/core'
import { Produto } from './produtos.service'

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinho: Produto[] = [{ produto: 'água', valor: 1 }, { produto: 'água', valor: 10 }]

  constructor() { }

  // getItens() {
  //   return this.carrinho
  // }

  adicionarProduto(produto: Produto) {
    this.carrinho.push(produto)
  }

  removeProduto(produto: Produto) {
    const index = this.carrinho.findIndex((el) => el.produto === produto.produto)

    if (index != -1) {
      this.carrinho.splice(index, 1)
    }
  }

  calculaTotal() {
    let total = 0

    this.carrinho.forEach((el) => {
      total += el.valor
    })

    return total
  }
}
