import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { MinhaContaComponent } from './views/minha-conta/minha-conta.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "contato", component: ContatoComponent },
    { path: "minha-conta", component: MinhaContaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
