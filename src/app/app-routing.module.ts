import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './pages/inicial/inicial.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ParceriasComponent } from './pages/parcerias/parcerias.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { LoginComponent } from './pages/login/login.component';
import { EventoDetalheComponent } from './pages/evento-detalhe/evento-detalhe.component';
import { CadastroEventoComponent } from './pages/cadastro-evento/cadastro-evento.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


const routes: Routes = [
  { path: 'cadastro-evento', component: CadastroEventoComponent },
  { path: 'eventos/:id', component: EventoDetalheComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicial', component: InicialComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'parcerias', component: ParceriasComponent },
  { path: 'eventos', component: EventosComponent },
  { path: '', redirectTo: '/inicial', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
