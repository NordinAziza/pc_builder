import { Cpu,Ram,Motherboard,Gpu,Psu,Storage } from '../pc-builder/pc-parts.interface';

export interface Pc 
{
    cpu:Cpu,
    ram:Ram,
    motherboard:Motherboard,
    gpu:Gpu,
    psu:Psu,
    storage:Storage,
}