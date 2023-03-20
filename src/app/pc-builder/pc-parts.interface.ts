export interface Cpu{
    brand: string;
    name: string;
    price: number;
    socket: string;
    cores: number;
    threads: number;
    frequency: number;
    img:string;
  }
  export interface Ram{
      brand: string;
      name: string;
      size: number;
      frequency: number;
      price: number;
      img:string,
    };
    export interface Motherboard{
      name: string;
      brand: string;
      socket: string;
      price: number;
      img:string,
    }
    export interface  Gpu{
      brand: string;
      name: string;
      price: number;
      vram: number;
      coreFrequency: number;
      memoryFrequency: number;
      img:string,
    }
    export interface  Psu {
      name: string;
      brand: string;
      watt: number;
      price: number;
      img:string,
    }
    export interface  Storage {
      brand: string;
      name: string;
      capacity: number;
      technologie: string;
      price: number;
      img:string,
    }
