import { Component, OnInit } from '@angular/core'
import { Produto, ProdutosService } from 'src/app/services/produtos.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  alimentacao: Produto[] = []
  limpeza: Produto[] = []
  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.alimentacao = this.produtosService.getProdutosAlimentacao()
    this.limpeza = this.produtosService.getProdutosLimpeza()
  }
}
