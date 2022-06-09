import { Injectable } from '@angular/core'
import { Produto } from './produtos.service'

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinho: Produto[] = []

  constructor() { }

  // getItens() {
  //   return this.carrinho
  // }

  produtoInserido(id: number) {
    return !!this.carrinho.find((el) => {
      return el.id === id
    })
  }

  adicionarProduto(produto: Produto) {
    if (this.produtoInserido(produto.id)) {
      return
    }

    this.carrinho.push(produto)
  }

  removeProduto(id: number) {
    const index = this.carrinho.findIndex((el) => el.id === id)

    if (index != -1) {
      this.carrinho.splice(index, 1)
    }
  }

  totalDeItens() {
    return this.carrinho.length
  }

  calculaTotal() {
    let total = 0

    this.carrinho.forEach((el) => {
      total += el.valor
    })

    return total
  }
}
