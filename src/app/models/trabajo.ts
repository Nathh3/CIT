export  interface Trabajo {
    idTrabajo: number;
    idCliente : number;
    idTransportista  : number;
    lugarOrigen: string;
    lugarDestino: string;
    fechaRecogida: Date;
    fechaEntrega: Date;
    TipoCamionRequerido: string;
    PesoCarga: number;
    TransporteComestibles: boolean;
    Estibas: boolean;
}
