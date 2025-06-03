import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardComponent } from './component/card/card.component';
import { PostFormComponent } from './component/post-form/post-form.component';


import { UsersComponent } from '../app/componennt/demo/users/users.component';
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { UserDataComponent } from './components/card/user-data/user-data.component';
import { DataBindingComponent } from './components/demo/data-binding/data-binding.component';
import { ReactiveFormComponent } from './components/demo/reactive-form/reactive-form.component';
import { TestServicesComponent } from './components/demo/test-services/test-services.component';
import { CustomPipeComponent } from './components/pipes/custom-pipe/custom-pipe.component';
import { PostsComponent } from './services/posts/posts.component';
import { UserComponent } from './services/user/user.component';
import { PipesComponent } from './components/demo/pipes/pipes.component';


import { TrimPipe } from '../app/pipes/trim.pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    PostFormComponent,
    UsersComponent,
    CardContentComponent,
    UserDataComponent,
    DataBindingComponent,
    ReactiveFormComponent,
    TestServicesComponent,
    CustomPipeComponent,
    PostsComponent,
    UserComponent,
    PipesComponent,
    TrimPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
