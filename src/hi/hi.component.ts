import { Component, OnInit, VERSION, Version } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name = 'angular ' + VERSION.major;
//data binding
  user = {
    name : 'chao',
    age : 22
  };

}
