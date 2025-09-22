import { Injectable } from '@angular/core';
import { MenuInterface } from '../interfaces/menu-interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu:MenuInterface[] = [
    {title:'Clientes',icon:'client',url:'clients'},
    {title:'Facturas',icon:'invoice',url:'invoices'},
    {title: 'Posts', icon: 'invoice', url: 'posts' }

  ]

  getMenu(){
    return [...this.listMenu]
  }

  getMenuByUrl(url:string){
    return this.listMenu.find(
      (menu)=> {
        menu.url.toLowerCase() === url.toLowerCase()
      }
    ) as MenuInterface
  }
}
