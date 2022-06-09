import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AutenticacaoComponent } from './components/autenticacao/autenticacao.component'
import { CadastroComponent } from './components/cadastro/cadastro.component'
import { CarrinhoComponent } from './components/carrinho/carrinho.component'
import { DetalhamentoProdutoComponent } from './components/detalhamento-produto/detalhamento-produto.component'
import { ProductsComponent } from './components/products/products.component'
import { LogadoGuard } from './services/logado.guard'

const routes: Routes = [
  { path: 'login', component: AutenticacaoComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'cadastro', component: CadastroComponent, canActivate: [LogadoGuard] },
  { path: 'carrinho', component: CarrinhoComponent, canActivate: [LogadoGuard] },
  { path: 'detalhamento/:id', component: DetalhamentoProdutoComponent, canActivate: [LogadoGuard] },
  { path: '**', redirectTo: 'produtos' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
