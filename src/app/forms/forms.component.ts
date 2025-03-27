import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnviandoDatosService } from '../servicios/envido-datos.service';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-forms',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  readonly servicio = inject(EnviandoDatosService);

  nombreValor:string = '';
  areaValor:string = '';
  ip_address:string = '';

  mensajeError:string = '';

  clickValor(){
    console.log('enviando',this.nombreValor);
    console.log('enviando',this.areaValor);
    console.log('enviando',this.ip_address);

    let datos:any = {
      name: this.nombreValor,
      area: this.areaValor,
      ip_address: this.ip_address
    };

    this.servicio.enviar(datos).subscribe({
      next:(response:any)=>{
        console.log('next',response);
      },
      error:(response:any)=>{
        console.log('error',response);
        this.mensajeError = 'Ocurrió un error en el servidor';
      }
    });
  }
}
