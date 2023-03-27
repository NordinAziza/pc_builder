import { Injectable } from '@angular/core';
import { Pc } from '../personalize-pc/personalize-pc.interface';
import { Cpu,Ram,Motherboard,Gpu,Psu,Storage } from './pc-parts.interface';
import {Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PcBuilderService {
  pc: Pc = {
    cpu: null,
    ram: null,
    motherboard: null,
    gpu: null,
    psu: null,
    storage: null,
    compatibility  : false,
    totalPrice : 0,
  };
  constructor() { }
  //ajout et suppression cpu
  addCpu(cpu : Cpu) {
    if (!this.pc.cpu)
    {
      this.pc.cpu = cpu;
      this.pc.totalPrice += this.pc.cpu.price;
    } 
    else 
    {
      this.pc.totalPrice -= this.pc.cpu.price;
      this.pc.cpu = cpu;
      this.pc.totalPrice += this.pc.cpu.price;
    }
    //verfication compatibilité cpu et carte mére
    if(this.pc.cpu && this.pc.motherboard && this.pc.cpu.socket === this.pc.motherboard.socket)
    {
      this.pc.compatibility = true;
    }
    else {this.pc.compatibility = false;}
  }
  removeCpu(price : number) {
    this.pc.cpu = null;
    this.pc.totalPrice -= price;
  }
  //ajout et suppression ram
  addRam(ram : Ram) {
    if(!this.pc.ram)
    {
      this.pc.ram = ram;
      this.pc.totalPrice+=this.pc.ram.price;
    }
    else
    {
      this.pc.totalPrice-=this.pc.ram.price;
      this.pc.ram = ram;
      this.pc.totalPrice+=this.pc.ram.price;
    } 
  }
  removeRam(price : number) {
    this.pc.ram = null;
    this.pc.totalPrice -= price;
  }
  //ajout et suppression motherboard
  addMotherboard(motherboard : Motherboard)
  {
    if(!this.pc.motherboard)
    {
      this.pc.motherboard = motherboard;
      this.pc.totalPrice += this.pc.motherboard.price;
    }
    else 
    {
      this.pc.totalPrice -= this.pc.motherboard.price;
      this.pc.motherboard = motherboard;
      this.pc.totalPrice += this.pc.motherboard.price;
    }
    //verfication compatibilité cpu et carte mére
    if(this.pc.cpu && this.pc.motherboard && this.pc.cpu.socket === this.pc.motherboard.socket)
    {
      this.pc.compatibility = true;
    }
    else {this.pc.compatibility = false;}

  }
  removeMotherboard(price : number)
  {
    this.pc.motherboard = null;
    this.pc.totalPrice -= price;
  }
  //ajout et suppression gpu
  addGpu(gpu : Gpu )
  {
    if(!this.pc.gpu)
    {
      this.pc.gpu = gpu;
      this.pc.totalPrice += this.pc.gpu.price;
    }
    else
    {
      this.pc.totalPrice -= this.pc.gpu.price;
      this.pc.gpu = gpu;
      this.pc.totalPrice += this.pc.gpu.price;
    }
  }
  removeGpu(price : number)
  {
    this.pc.gpu = null;
    this.pc.totalPrice -= price;
  }
  //ajout et suppression psu
  addPsu(psu : Psu)
  {
    if(!this.pc.psu)
    {
      this.pc.psu = psu;
      this.pc.totalPrice += this.pc.psu.price;
    }
    else 
    {
      this.pc.totalPrice -= this.pc.psu.price;
      this.pc.psu = psu;
      this.pc.totalPrice += this.pc.psu.price;
    }
  }
  removePsu(price : number)
  {
    this.pc.psu = null ;
    this.pc.totalPrice -= price;
  }
  //ajout et suppression storage
  addStorage(storage : Storage)
  {
    if(!this.pc.storage)
    {
      this.pc.storage = storage;
      this.pc.totalPrice += this.pc.storage.price;
    }
    else
    {
      this.pc.totalPrice -= this.pc.storage.price;
      this.pc.storage = storage;
      this.pc.totalPrice += this.pc.storage.price;
    }
  }
  removeStorage(price : number)
  {
    this.pc.storage = null;
    this.pc.totalPrice -= price;
  }
  //pc
  getPc(): Observable<Pc> {
    return of(this.pc);
  }
}
