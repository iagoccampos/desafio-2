import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CarrinhoService } from 'src/app/services/carrinho.service'
import { Produto, ProdutosService } from 'src/app/services/produtos.service'

@Component({
  selector: 'app-detalhamento-produto',
  templateUrl: './detalhamento-produto.component.html',
  styleUrls: ['./detalhamento-produto.component.scss']
})
export class DetalhamentoProdutoComponent {

  produto: Produto | null = null

  constructor(private produtosService: ProdutosService, private carrinhoService: CarrinhoService, private route: ActivatedRoute) {
    route.params.subscribe((val) => {
      this.produto = produtosService.getProduto(+val['id']) || null
    })
  }

  produtoInserido() {
    if (this.produto) {
      return this.carrinhoService.produtoInserido(this.produto?.id)
    }

    return true
  }

  adicionarOuRemover() {
    if (this.produtoInserido()) {
      this.removerProduto()
    } else {
      this.adicionarProduto()
    }
  }

  adicionarProduto() {
    if (this.produto) {
      this.carrinhoService.adicionarProduto(this.produto)
    }
  }

  removerProduto() {
    if (this.produto) {
      this.carrinhoService.removeProduto(this.produto.id)
    }
  }
}
