import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from '../services/services.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';
import { BankingComponent } from './banking/banking.component';
import { AiComponent } from './ai/ai.component';
import { BusinessStrategyComponent } from './business-strategy/business-strategy.component';
import { FinanceComponent } from './finance/finance.component';
import { ServiceNotFoundComponent } from './service-not-found/service-not-found.component';
import { BankingTitleComponent } from './banking/banking-title/banking-title.component';
import { BankingDescriptionComponent } from './banking/banking-description/banking-description.component';


@NgModule({
  declarations: [ServicesComponent,SupplyChainComponent, BankingComponent, AiComponent, BusinessStrategyComponent, FinanceComponent, ServiceNotFoundComponent, BankingTitleComponent, BankingDescriptionComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
