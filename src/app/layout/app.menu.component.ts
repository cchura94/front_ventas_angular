import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                    { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: ['/admin/perfil'] }
                ]
            },
            {
                label: 'Gestión Productos',
                items: [
                    { label: 'Categorias', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/categoria'] },
                    { label: 'Productos', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/producto'] }
                ]
            },
            {
                label: 'Gestión Pedidos',
                items: [
                    { label: 'Nuevo Pedido', icon: 'pi pi-fw pi-cart', routerLink: ['/admin/pedido/nuevo'], badge: 'NEW' },
                    { label: 'Lista Pedidos', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido'] },
                ]
            },
            {
                label: 'Usuarios',
                items: [
                    { label: 'Clientes', icon: 'pi pi-fw pi-prime', routerLink: ['/admin/cliente'] },
                    { label: 'Usuarios', icon: 'pi pi-fw pi-desktop', routerLink: ['/admin/usuarios'] },
                ]
            },
            
        ];
    }
}
