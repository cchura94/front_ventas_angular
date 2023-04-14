import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListaPedidoComponent } from './components/pedido/lista-pedido/lista-pedido.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { 
        path: '',
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'categoria',
        component: CategoriaComponent
      },
      {
        path: 'producto',
        component: ProductoComponent
      },
      {
        path: 'pedido',
        component: ListaPedidoComponent
      },
      {
        path: 'pedido/nuevo',
        component: NuevoPedidoComponent
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
