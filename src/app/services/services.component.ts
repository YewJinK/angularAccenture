import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  homePageServices:any;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.homePageServices = [
      {
        imgName:'suppy-chain',
        title:'Supply Chain',
        heading:'Supply chain transformation on the cloud',
        description:'Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains.'
      },
      {
        imgName:'banking',
        title:'banking',
        heading:'Driving powerfull transformation for banks',
        description:'Learn how a purpose-driven strategy is about doing the right thing for customers and society--and also a powerful way to drive growth.'
      },
      {
        imgName:'ai',
        title:'Artificial intelligence',
        heading:'Change how you work with AI',
        description:'Professionalize your approach to AI to change what’s possible for your business.'
      },
      {
        imgName:'business',
        title:'Business Strategy',
        heading:'Make the leap, take the lead',
        description:'Leaders have doubled down on tech—and are growing 5x faster than Laggards.'
      }
    ]
  }
  trackByFn(index){
    return index;
  }

  componentRedirect(title){
    event.preventDefault();
    if(title==="suppy-chain"){
      this._router.navigate(['services/supply-chain']);
    }else if(title==='banking'){
      this._router.navigate(['services/banking','finance']);
    }else if(title==='ai'){
      this._router.navigate(['services/ai'],{ queryParams: { types: 'popular',version:'1.0',released:'15-06-2021' } });
    }else if(title==="business"){
      this._router.navigate(['services/business-strategy']);
    }

  }

}
