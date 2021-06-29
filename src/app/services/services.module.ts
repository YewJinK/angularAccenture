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
import { AiDetailsComponent } from './ai/ai-details/ai-details.component';
import { SupplyChainModelsComponent } from './supply-chain/supply-chain-models/supply-chain-models.component';
import { WelcomePipe } from '../_custom-pipe/welcome.pipe';
import { CombinedPipe } from '../_custom-pipe/combined.pipe';
import { CustomAsyncPipe } from '../_custom-pipe/custom-async.pipe';

@NgModule({
  declarations: [
    ServicesComponent,
    SupplyChainComponent,
    BankingComponent,
    AiComponent,
    BusinessStrategyComponent,
    FinanceComponent,
    ServiceNotFoundComponent,
    BankingTitleComponent,
    BankingDescriptionComponent,
    AiDetailsComponent,
    SupplyChainModelsComponent,
    WelcomePipe,
    CombinedPipe,
    CustomAsyncPipe],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
