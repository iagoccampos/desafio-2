import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { ProductsComponent } from './components/products/products.component'
import { ProductComponent } from './components/product/product.component'
import { CadastroComponent } from './components/cadastro/cadastro.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CarrinhoComponent } from './components/carrinho/carrinho.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    CadastroComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
