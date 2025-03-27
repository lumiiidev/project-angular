import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviandoDatosService } from '../servicios/envido-datos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  readonly servicio = inject(EnviandoDatosService);
   
  usuarios: any[] = [];
  mensajeError:string = '';

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){

    this.servicio.obtenerUsuarios().subscribe({
      next: (response: any) => {
        this.usuarios = response.data;
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });

  }
  
  eliminarIP(id:number){

    if(id != 0 || id != null || id != undefined){
      if (confirm('¿Estás seguro de que deseas eliminar este usuario?')){
      this.servicio.eliminar(id).subscribe({
        next:(response:any)=>{
          alert('Usuario Eliminado')
          console.log('eliminar',response);
          this.obtenerUsuarios();
        },
        error:(response:any)=>{
          console.log('error',response);
          this.mensajeError = 'Ocurrió un error en el servidor';
        }
      });
    }   
  }
  }

}
