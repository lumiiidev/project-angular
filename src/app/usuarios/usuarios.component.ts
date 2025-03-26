import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviandoDatosService } from '../servicios/envido-datos.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  readonly servicio = inject(EnviandoDatosService);

  usuarios: any[] = [];

  ngOnInit(): void {
    this.servicio.obtenerUsuarios().subscribe({
      next: (response: any) => {
        this.usuarios = response.data;
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }
}
