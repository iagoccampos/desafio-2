import { Injectable } from '@angular/core'

export interface Produto {
  produto: string
  valor: number
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  alimentacao: Produto[] = [
    { produto: 'Suco', valor: 2.50 },
    { produto: 'Biscoito', valor: 2.99 },
    { produto: 'Bolo', valor: 9.99 }
  ]

  limpeza: Produto[] = [
    { produto: 'Detergente', valor: 2.50 },
    { produto: 'Sabão', valor: 2.99 },
    { produto: 'Pano', valor: 9.99 }
  ]

  constructor() { }

  getProdutosAlimentacao() {
    return this.alimentacao
  }

  getProdutosLimpeza() {
    return this.limpeza
  }

  cadastraAlimento(produto: Produto) {
    this.alimentacao.push(produto)
  }

  cadastrarLimpeza(produto: Produto) {
    this.limpeza.push(produto)
  }
}
