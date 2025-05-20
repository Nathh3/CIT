export interface Transportista {
  id: number;
  nombre: string;
  email: string;
  telefono: number;
  tipoCamion: string;
  capacidad: number;
  comestibles: boolean;
  estibas: boolean;
  fechaDisponible: Date;
}