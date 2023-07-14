import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { EmpService } from './emp.service';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { Ng2SearchPipeModule } from 'ng2-search-filter/src/ng2-filter.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    // Ng2SearchPipeModule,
    
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
