import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent implements OnInit {
  types:string;
  version:string;
  released:string;
  constructor(private route: ActivatedRoute) {
    // this.types = route.snapshot.queryParamMap.get('types');
    // this.version = route.snapshot.queryParamMap.get('version');
    // this.released = route.snapshot.queryParamMap.get('released');
    // console.log(this.types,this.version,this.released);
    console.log(route.snapshot.queryParams);
    var {types,version,released} = route.snapshot.queryParams
    // this.types = types;
    // this.version = version;
    // this.released = released;
    console.log(types,version,released);
   }

  ngOnInit() {

  console.log(this.types,this.version,this.released);

  }

}
