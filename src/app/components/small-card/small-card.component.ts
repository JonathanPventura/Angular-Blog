import { Component, Input, OnInit } from '@angular/core';
import { DataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {

  @Input()
  imgSmallCard: string = ''
  @Input()
  titleSmallCard: string = ''
  @Input()
  descriptionSmallCard: string = ''


  noticias: any[] = []

  constructor(private dataFake: DataFake) { }

  ngOnInit() {

    this.noticias = this.dataFake.getNoticia()

  }









}


