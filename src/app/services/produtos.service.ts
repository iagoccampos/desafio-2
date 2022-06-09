import { Injectable } from '@angular/core'

export interface Produto {
  produto: string
  valor: number
  id: number
  tipo: 'alimentacao' | 'limpeza'
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: Produto[] = [
    { tipo: 'alimentacao', produto: 'Suco', valor: 2.50, id: 1 },
    { tipo: 'alimentacao', produto: 'Biscoito', valor: 2.99, id: 2 },
    { tipo: 'alimentacao', produto: 'Bolo', valor: 9.99, id: 3 },
    { tipo: 'limpeza', produto: 'Detergente', valor: 2.50, id: 4 },
    { tipo: 'limpeza', produto: 'Sabão', valor: 2.99, id: 5 },
    { tipo: 'limpeza', produto: 'Pano', valor: 9.99, id: 6 }
  ]

  constructor() { }

  getProdutos() {
    return this.produtos
  }

  getProduto(id: number) {
    return this.produtos.find((el) => {
      return el.id === id
    })
  }

  cadastraProduto(produto: Produto) {
    produto.id = this.generateId()
    this.produtos.push(produto)
    console.log(this.produtos)
  }

  private generateId() {
    return Math.floor((Math.random()) * 1000000)
  }
}
