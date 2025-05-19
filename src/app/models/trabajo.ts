export  interface Trabajo {
    idTrabajo: number;
    idCliente : number;
    idTransportista  : number;
    lugarOrigen: string;
    lugarDestino: string;
    fechaRecogida: Date;
    fechaEntrega: Date;
    TipoCamionRequerido: string;
    pesoCarga: number;
    transporteComestibles: boolean;
    estibas: boolean;
}
