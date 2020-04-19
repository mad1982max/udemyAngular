import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { TableComponent } from './table/table.component';
import { HighLightDirective } from './highlight/highlight.directive';

import {Routes, RouterModule} from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { MapComponent } from './map/map.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found-component/not-found.component'

const appRoutes: Routes = [
  { path: "", component: MainComponent},
  { path: "addUser", component: AddUserComponent },
  { path: "map", component: MapComponent},
  { path: "**", redirectTo: "" }
]


@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    TableComponent,
    HighLightDirective,
    AddUserComponent,
    MapComponent,
    NavigationComponent,
    MainComponent,
    NotFoundComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
