import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/_services/shared-service.service';

@Component({
  selector: 'app-supply-chain',
  templateUrl: './supply-chain.component.html',
  styleUrls: ['./supply-chain.component.css']
})
export class SupplyChainComponent implements OnInit {
  title:string;
  details = [];

  constructor(private shared:SharedServiceService) {
    this.title = 'Supply Chain Management';
  }

  ngOnChanges(){
    console.log('ng Onchanges')
  }

  ngOnInit() {
    console.log('NgOninit');
  }
  ngDoCheck(){
    console.log('ngDoCheck()')
  }
  ngAfterContentInit(){
    console.log('NgAftercontentInit()');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked()')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit()')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked()')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy()')
  }

  displayModels()
  {
    this.details = [{
      title:"Continuous Flow Model",
      description:`This is one of the most traditional supply chain models and is best suited for mature industries that operate with a certain degree of stability. It offers stability in high demand situations. Manufacturers producing the same goods repeatedly, and having a customer demand profile with little variation can benefit from this model.
      This model relies on the stability of supply and demand. Its processes are scheduled in such a way that a continuous flow of information and products is ensured.`,
      img:"../../../assets/images/supply/buildings.jpg", 
      button:"Explore"
    },
    {
      title:"Agile Model",
      description:`This model of supply chain is best suited for industries that deal with unpredictable demand and products that are made to order.
      This model focuses on the supply chain’s ability to amp up production on a moment’s notice but can remain static when the demand is low. It demands excess production capacity, and the processes are designed for the smallest possible batches of products.`,
      img:"../../../assets/images/supply/bulbs.jpg",
      button:"Explore"
    },
    {
      title:"Fast Chain Model",
      description:`This supply chain model is best suited for industries that manufacture a trendy product and has a short life cycle, such as fashion items. In addition to that, these businesses also need to get them out fast before the trend ends. This model offers a certain degree of flexibility. 
      For the said industry, a business’ value proposals are evaluated by how quickly and efficiently they can update their product catalog in accordance with the latest trends.`,
      img:"../../../assets/images/supply/clock.jpg",
      button:"Explore"
    },
    {
      title:"Flexible Model",
      description:`This model is best suited for industries with no unexpected demands or relatively predictable demand peaks and long periods of low workload.
      The flexible model provides businesses the freedom to meet high demand peaks and manage long periods of low volume work-load. The production can be switched on and off easily.`,
      img:"../../../assets/images/supply/container.jpg",
      button:"Explore"
    },
    {
      title:"Custom Configured Model",
      description:`As the name suggests, this model’s primary focus is on providing custom configurations, especially for assembly and production processes. It is a hybrid combination of the agile model and the continuous flow model.
      Let us understand this with the example of an automobile manufacturing process. Usually, the processes involving intricate sub-assemblies such as assembling gears in a transmission box are complicated and very time consuming because of intricate interlinking of tiny parts. But attaching these multiple sub-assemblies into a final product is as easy as plug-n-play. For example, attaching an assembled transmission box to the car’s drive-train. Just like that, in cases where final assembly is simpler compared to initial assembly and the other downstream processes, the final assembly is managed under an efficient, or a continuous-flow supply chain model. The intricate sub-assembly configurations and the later downstream processes then operate in an agile model.`,
      img:"../../../assets/images/supply/transport.jpg",
      button:"Explore"
    },
    {
      title:"Efficient Chain Model",
      description:`This model is best suited for businesses operating in highly competitive markets wherein pricing plays a large part and businesses are fighting for the same group of customers. Markets, where customers may not perceive major differences in the value proposals of various competitors and end-to-end efficiency, are the premium goal.
      For achieving this, management must maximize the utilization of machinery and other assets at their disposal to maintain high overall equipment efficiency and a resultant reduction in cost. Inventory management and order fulfillment are prime areas of focus for the profitability of the business.`,
      img:"a../../../assets/images/supply/vessel.jpg",
      button:"Explore"
    }
    ];

    this.shared.emitData(this.details);
  }

}
