import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// lazy laoded modules
import { ServicesModule } from './services/services.module';
import { InsightsModule } from './insights/insights.module';
import { IndustriesModule } from './industries/industries.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { LoginModule } from './login/login.module';
import { PostsModule } from './posts/posts.module';

//Loading UnsavedChangesGuard
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { UserDataDisplayComponent } from './user-data-display/user-data-display.component';
import { HighlightDirective } from './_directives/highlight.directive';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';

// loading services
import { PostsService } from './_services/posts.service';
//import { UserssService } from './_services/users.service';
import { SharedServiceService } from './_services/shared-service.service';
import { PiechartComponent } from './piechart/piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    CareersComponent,
    HeaderComponent,
    FooterComponent,
    ServicesListComponent,
    PageNotFoundComponent,
    SignUpComponent,
    ListOfRegisteredUsersComponent,
    UserDataDisplayComponent,
    HighlightDirective,
    RxjsOperatorsComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InsightsModule,
    IndustriesModule,
    AboutModule,
    ContactModule,
    LoginModule,
    PostsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    UnsavedChangesGuard,
    PostsService,
    //UsersService,
    SharedServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
