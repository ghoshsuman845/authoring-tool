import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { MainpageComponent } from './core/mainpage/mainpage.component';
import { ContentComponent } from './content/content.component';
import { ComponentsComponent } from './components/components.component';
import { TextComponent } from './components/text/text.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { MCQComponent } from './components/mcq/mcq.component';
import { FinalCourseComponent } from './final-course/final-course.component';
import { EditorPaneComponent } from './editor-pane/editor-pane.component';
import { CourseComponent } from './final-course/course/course.component';
import { ArticlesComponent } from './final-course/articles/articles.component';
import { BlocksComponent } from './final-course/blocks/blocks.component';
import { ComponentComponent } from './final-course/component/component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    SidebarComponent,
    MainpageComponent,
    ContentComponent,
    ComponentsComponent,
    TextComponent,
    GraphicsComponent,
    MCQComponent,
    FinalCourseComponent,
    EditorPaneComponent,
    CourseComponent,
    ArticlesComponent,
    BlocksComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
