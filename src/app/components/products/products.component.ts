import { Component, OnInit } from '@angular/core'
import { Produto, ProdutosService } from 'src/app/services/produtos.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  produtos: Produto[] = []
  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getProdutos()
  }

  getProdutosAlimentaca() {
    return this.produtos.filter((el) => {
      return el.tipo === 'alimentacao'
    })
  }

  getProdutosLimpeza() {
    return this.produtos.filter((el) => {
      return el.tipo === 'limpeza'
    })
  }
}
