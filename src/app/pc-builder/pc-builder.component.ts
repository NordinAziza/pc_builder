import { Component} from '@angular/core'
import { Cpu,Ram,Motherboard,Gpu,Psu,Storage } from './pc-parts.interface';
import { PcBuilderService } from './pc-builder.service';
@Component({
  selector: 'app-pc-builder',
  templateUrl: './pc-builder.component.html',
  styleUrls: ['./pc-builder.component.css']
})
export class PcBuilderComponent {
  displayCpu: boolean = false;  displayRam: boolean = false; displayMotherboard: boolean = false;
  displayGpu: boolean = false; displayPsu: boolean = false; displayStorage: boolean = false;

  cpus: Cpu[] = [
    {
      brand: 'Intel',
      name: 'Core i7-11700K',
      price: 399,
      socket: 'LGA1200',
      cores: 8,
      threads: 16,
      frequency: 3.6,
      img:"pc_builder\src\imgs\inteli7jpg."
    },
    {
      brand: 'AMD',
      name: 'Ryzen 9 5950X',
      price: 799,
      socket: 'AM4',
      cores: 16,
      threads: 32,
      frequency: 3.4,
      img:""
    },
    {
      brand: 'Intel',
      name: 'Core i5-11600K',
      price: 279,
      socket: 'LGA1200',
      cores: 6,
      threads: 12,
      frequency: 3.9,
      img:""
    },
    {
      brand: 'AMD',
      name: 'Ryzen 5 5600X',
      price: 299,
      socket: 'AM4',
      cores: 6,
      threads: 12,
      frequency: 3.7,
      img:""
    },
  ];
  motherboards: Motherboard[] = [
    {
      name: 'ASUS ROG Maximus XIII Hero',
      brand: 'ASUS',
      socket: 'LGA1200',
      price: 499,
      img:""
    },
    {
      name: 'Gigabyte AORUS X570 Master',
      brand: 'Gigabyte',
      socket: 'AM4',
      price: 389,
      img:""
    },
    {
      name: 'MSI MAG B550 Tomahawk',
      brand: 'MSI',
      socket: 'AM4',
      price: 189,
      img:""
    },
    {
      name: 'ASRock B560M Steel Legend',
      brand: 'ASRock',
      socket: 'LGA1200',
      price: 139,
      img:""
    },
  ];
  rams:Ram[] =
  [
    {
      brand: 'Corsair',
      name: 'Vengeance RGB Pro',
      size: 32,
      frequency: 3200,
      price: 199,
      img:""
    },
    {
      brand: 'G.Skill',
      name: 'Trident Z Neo',
      size: 16,
      frequency: 3600,
      price: 129,
      img:""
    },
    {
      brand: 'Crucial',
      name: 'Ballistix RGB',
      size: 32,
      frequency: 3200,
      price: 179,
      img:""
    },
    {
      brand: 'Team Group',
      name: 'T-Force Delta RGB',
      size: 16,
      frequency: 3200,
      price: 89,
      img:""
    },
  ]
   gpus: Gpu[] = [
    {
      brand: 'NVIDIA',
      name: 'GeForce RTX 3080',
      price: 699,
      vram: 10,
      coreFrequency: 1710,
      memoryFrequency: 1188,
      img:""
    },
    {
      brand: 'AMD',
      name: 'Radeon RX 6800 XT',
      price: 649,
      vram: 16,
      coreFrequency: 2015,
      memoryFrequency: 2000,
      img:""
    },
    {
      brand: 'NVIDIA',
      name: 'GeForce RTX 3090',
      price: 1499,
      vram: 24,
      coreFrequency: 1695,
      memoryFrequency: 1219,
      img:""
    },
    {
      brand: 'AMD',
      name: 'Radeon RX 6900 XT',
      price: 999,
      vram: 16,
      coreFrequency: 2015,
      memoryFrequency: 2000,
      img:""
    }
  ];
  psus: Psu[] = [
    {
      name: 'RM850x',
      brand: 'Corsair',
      watt: 850,
      price: 139,
      img:""
    },
    {
      name: 'TX850M',
      brand: 'Corsair',
      watt: 850,
      price: 119,
      img:""
    },
    {
      name: 'Focus GX-850',
      brand: 'Seasonic',
      watt: 850,
      price: 169,
      img:""
    },
    {
      name: 'Focus GM-650',
      brand: 'Seasonic',
      watt: 650,
      price: 99,
      img:""
    },
  ]
  storages: Storage[] = [
    {
      brand: 'Samsung',
      name: '970 EVO Plus',
      capacity: 1,
      technologie: 'SSD',
      price: 169,
      img:""
    },
    {
      brand: 'Crucial',
      name: 'MX500',
      capacity: 2, 
      technologie: 'SSD',
      price: 219,
      img:""
    },
    {
      brand: 'Western Digital',
      name: 'Black',
      capacity: 4, 
      technologie: 'HDD',
      price: 129,
      img:""
    }
  ];
  constructor(public service :PcBuilderService)
  {

  }

}
