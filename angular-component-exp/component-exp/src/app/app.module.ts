// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';

// Decorate the class with the NgModule decorator
@NgModule({
  declarations: [
    // List your components, directives, and pipes here
    AppComponent,
    ContainerComponent
  ],
  imports: [
    // List the modules your application depends on
    BrowserModule,
  ],
  bootstrap: [
    // Define the root component
    AppComponent
  ],
})
// Export the module class
export class AppModule {}
