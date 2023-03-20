import { Component } from '@angular/core';
import { Pc } from './personalize-pc.interface';
import { PcBuilderService } from '../pc-builder/pc-builder.service';
@Component({
  selector: 'app-personalize-pc',
  templateUrl: './personalize-pc.component.html',
  styleUrls: ['./personalize-pc.component.css']
})
export class PersonalizePcComponent {
  pc:Pc | any
  constructor(private service :PcBuilderService){ }
  
  ngOnInit() {
    this.service.getPc().subscribe(pc => {
      this.pc = pc;
    });
  }
}
