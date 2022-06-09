import { Component, OnInit } from '@angular/core'
import { AutenticacaoService } from 'src/app/services/autenticacao.service'
import { CarrinhoService } from 'src/app/services/carrinho.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private carrinhoService: CarrinhoService, private autenticacaoService: AutenticacaoService) { }

  totalDeItens() {
    return this.carrinhoService.totalDeItens()
  }

  getValorTotal() {
    return this.carrinhoService.calculaTotal()
  }

  dadosUsuario() {
    return this.autenticacaoService.usuarioEmail()
  }

  logout() {
    this.autenticacaoService.logoff()
  }

  usuarioLogado() {
    return this.autenticacaoService.usuarioLogado()
  }
}
