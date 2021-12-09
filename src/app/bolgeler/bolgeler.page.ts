import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bolgeler',
  templateUrl: './bolgeler.page.html',
  styleUrls: ['./bolgeler.page.scss'],
})
export class BolgelerPage implements OnInit {
  public areaName:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.areaName = this.activatedRoute.snapshot.paramMap.get('areaName');

    console.log(this.areaName);
  }

}
