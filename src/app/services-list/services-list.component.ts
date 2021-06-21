import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  homePageServices:any;
  constructor() { }

  ngOnInit() {
    this.homePageServices = [
      {
        imgName:'suppy-chain',
        title:'Supply Chain',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      },
      {
        imgName:'banking',
        title:'banking',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      },
      {
        imgName:'ai',
        title:'Artificial intelligence',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      },
      {
        imgName:'business',
        title:'Business Strategy',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      },
      {
        imgName:'suppy-chain',
        title:'Supply Chain',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      },
      {
        imgName:'banking',
        title:'banking',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      },
      {
        imgName:'ai',
        title:'Artificial intelligence',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      },
      {
        imgName:'business',
        title:'Business Strategy',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      }
    ]
  }

  trackByFn(index){
    return index;
  }

}
