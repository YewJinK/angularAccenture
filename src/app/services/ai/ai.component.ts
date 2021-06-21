import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AIDATA } from './ai-data';
import { AiDetailsComponent } from './ai-details/ai-details.component';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent implements OnInit {
  types:string;
  version:string;
  released:string;

  // Get a refence to the child component
  @ViewChild(AiDetailsComponent,{static: false}) child;

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

  onSumbit() {
    this.child.onExplore(); // Invoke the function of the child
  }

  // Dynamically populate the child's innerHtml with data from the mock datastore
  // with additional manipulations for the CSS
  populateChildHtml(event) {
    let details: string = '';
    let originalHtml: string = event.innerHTML;
    let spanStartTag: string;

    // Get the start and end of the default <span> element containing the dynamic css class
    let startIndex = originalHtml.indexOf('<span');
    let endIndex = originalHtml.indexOf('>', startIndex);
    spanStartTag = originalHtml.slice(startIndex, endIndex+1);
    // Construct the details by looping through the data array
    for (let data of AIDATA) {
      details += `<h3>${spanStartTag}${data.title}</span></h3>`;
      details += `<img src="${data.img}" style="width: 50%; border-radius: 5px">`
      details += `<p>${data.desc}</p>`
    }
    // Reconstruct the inner html
    startIndex = originalHtml.indexOf('<section');
    endIndex = originalHtml.indexOf('>', startIndex);
    originalHtml = originalHtml.slice(startIndex, endIndex+1);
    console.log(originalHtml)
    originalHtml = originalHtml.replace('style="display: none;"', '');
    console.log(originalHtml)
    originalHtml += details + '</section>'

    event.innerHTML = originalHtml;
    console.log(originalHtml)
  }
}
