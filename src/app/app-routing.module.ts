import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const router: Routes = [
  {
    path: '' , redirectTo:'/conta',pathMatch:'full'
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule)
  },
  {
    path: 'principal',
    loadChildren:() => import('./principal/principal.module').then(m => m.PrincipalModule)
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(router)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
