import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HeaderComponent } from './views/header/header.component';
import { BannerComponent } from './views/banner/banner.component';
import { BeneficiosComponent } from './views/beneficios/beneficios.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { FooterComponent } from './views/footer/footer.component';
import { MinhaContaComponent } from './views/minha-conta/minha-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    HeaderComponent,
    BannerComponent,
    BeneficiosComponent,
    ProdutosComponent,
    FooterComponent,
    MinhaContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
