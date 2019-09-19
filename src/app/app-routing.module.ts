import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
{ path: '',
  redirectTo: '/core',
  pathMatch: 'full'
},
{ path: 'components',
 component: ComponentsComponent ,
 children: [
 
  {path: 'graphics', component: GraphicsComponent}, 
  {path: 'mcq', component: MCQComponent}, 
  {path: 'text', component: TextComponent}, 

]
},
{ path: 'core', 
component: CoreComponent ,
children: [
 
   
  {path: 'sidebar',
   component: SidebarComponent,
   children: [
    {path: 'content', component: ContentComponent}, 
    {path: 'mainpage', component: MainpageComponent},
    { path: 'editor-pane',component: EditorPaneComponent},
    
  ]
},
]
},


{ path: 'final-course',
 component: FinalCourseComponent,
 children: [
  {path: 'articles', component: ArticlesComponent}, 
  {path: 'blocks', component: BlocksComponent}, 

  {path: 'component', component: ComponentComponent}, 
  {path: 'course', component: CourseComponent},
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
