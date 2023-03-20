import { Injectable } from '@angular/core';
import { Pc } from '../personalize-pc/personalize-pc.interface';
import { Cpu,Ram,Motherboard,Gpu,Psu,Storage } from './pc-parts.interface';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PcBuilderService {
  pc:Pc | any
  constructor() { }

  addCpu(cpu:Cpu)
  {
    this.pc.cpu=cpu;
  }
  getPc():Observable<Pc>
  {
    return this.pc;
  }
}
