import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParcerComponent } from './parcer/parcer.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { SideheaderComponent } from './sideheader/sideheader.component';
import { CoursesComponent } from './courses/courses.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { FooterComponent } from './footer/footer.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parcer', component: ParcerComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'education', component: EducationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParcerComponent,
    ResumeComponent,
    HomeComponent,
    SideheaderComponent,
    CoursesComponent,
    ProjectsComponent,
    EducationComponent,
    HomecontentComponent,
    FooterComponent,
    BlogsComponent,
    BlogComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
