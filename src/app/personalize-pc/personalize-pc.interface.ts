import { Cpu,Ram,Motherboard,Gpu,Psu,Storage } from '../pc-builder/pc-parts.interface';

export interface Pc 
{
    cpu:Cpu|null ,
    ram:Ram|null,
    motherboard:Motherboard|null,
    gpu:Gpu|null,
    psu:Psu|null,
    storage:Storage|null,
    compatibility:boolean,
    totalPrice : number,
}