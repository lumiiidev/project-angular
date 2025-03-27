import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnviandoDatosService } from '../servicios/envido-datos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forms',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  readonly servicio = inject(EnviandoDatosService);

  @Input() id!: number;

  nombreValor:string = '';
  areaValor:string = '';
  ip_address:string = '';

  mensajeError:string = '';



  ngOnInit(): void {
    if(this.id){
      this.servicio.mostrarUsuario(this.id).subscribe({
        next:(response:any)=>{
          console.log('mostrarUsuario',response);
          this.nombreValor=response.data.name;
          this.areaValor=response.data.area;
          this.ip_address=response.data.ip_address;
        },
        error:(response:any)=>{
          console.log('error',response);
          this.mensajeError = 'Ocurrió un error en el servidor';
        }
      });
    }
  }
  clickValor(){
    console.log('enviando',this.nombreValor);
    console.log('enviando',this.areaValor);
    console.log('enviando',this.ip_address);

    let datos:any = {
      name: this.nombreValor,
      area: this.areaValor,
      ip_address: this.ip_address
    };
    if(this.id){
      this.servicio.editar(this.id, datos).subscribe({
        next:(response:any)=>{
          console.log('editar',response);
          alert('Se guardaron los datos correctamente')
        },
        error:(response:any)=>{
          console.log('error',response);
          this.mensajeError = 'Ocurrió un error en el servidor';
        }
      });
    }else{
      this.servicio.enviar(datos).subscribe({
        next:(response:any)=>{
          console.log('next',response);
          alert('Se agregó usuario correctamente')
        },
        error:(response:any)=>{
          console.log('error',response);
          this.mensajeError = 'Ocurrió un error en el servidor';
        }
      });
    }    
  }

  eliminarIP(){

    if(this.id != 0 || this.id != null || this.id != undefined){
      if (confirm('¿Estás seguro de que deseas eliminar este usuario?')){
      this.servicio.eliminar(this.id).subscribe({
        next:(response:any)=>{
          alert('Usuario Eliminado')
          console.log('eliminar',response);
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
