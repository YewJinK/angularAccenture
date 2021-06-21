import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AiComponent } from './ai/ai.component';
import { BankingComponent } from './banking/banking.component';
import { BusinessStrategyComponent } from './business-strategy/business-strategy.component';
import { FinanceComponent } from './finance/finance.component';
import { ServiceNotFoundComponent } from './service-not-found/service-not-found.component';
import { ServicesComponent } from './services.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';


const routes: Routes = [
  {
    path:'', component:ServicesComponent
  },
  {
    path:'supply-chain', component: SupplyChainComponent
  },
  {
    path: 'banking', component: BankingComponent
  },
  {
    path: 'banking/finance', component: FinanceComponent
  },
  {
    path: 'ai', component:AiComponent
  },
  {
    path: 'business-strategy', component:BusinessStrategyComponent
  }
  // {
  //   path: '**', component: ServiceNotFoundComponent

  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
