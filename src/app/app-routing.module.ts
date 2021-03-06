import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceListReactiveComponent } from './components/resource-list-reactive/resource-list-reactive.component';

const routes: Routes = [
  //Default Route to mimic current behavior
  {
    path: '',
    component: ResourceListComponent
  }, {
    path: 'resource-list-reactive',
    component: ResourceListReactiveComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

//Export components used by app for convenience in app module declaration
export const appRoutingComponents = [
  ResourceListComponent,
  ResourceListReactiveComponent
]

