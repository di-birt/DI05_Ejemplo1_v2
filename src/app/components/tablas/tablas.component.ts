import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss'],
  standalone: false
})
export class TablasComponent  implements OnInit {

  @Input() datosTabla: any[] = [];
  constructor() { }

  ngOnInit() {}

}
