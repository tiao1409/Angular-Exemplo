import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wello-world',
  templateUrl: './wello-world.component.html',
  styleUrls: ['./wello-world.component.css']
})
export class WelloWorldComponent implements OnInit {

  nome = '';
  constructor() { }

  ngOnInit(): void {
  }

}
