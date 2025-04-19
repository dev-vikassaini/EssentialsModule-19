import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { UserComponent } from './components/user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserSignalComponent } from './components/user-signal/user-signal.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TaskModule } from './components/tasks/task.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        UserSignalComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        TaskModule,
    ],
    providers: [],
})
export class AppModule {

}