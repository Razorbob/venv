import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {
  public show=true;
  constructor() { }

  ngOnInit(): void {
  }

}
