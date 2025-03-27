import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const routes: Routes = [
    { path:'usuarios/crear', component:FormsComponent },
    { path: 'usuarios/editar/:id', component:FormsComponent },
    { path: 'usuarios', component: UsuariosComponent }
];