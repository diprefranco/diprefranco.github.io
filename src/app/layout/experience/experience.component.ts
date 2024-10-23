import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Job } from './job';

@Component({
  selector: 'web-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      headerColor: '#41516C',
      companyName: 'San Cristóbal Servicios Financieros',
      companyUrl: 'https://www.sancristobalsf.com.ar/',
      period: 'Jan. 2019 - May 2023',
      position: 'Full Stack Developer',
      techStack: 'Angular, C#.Net, Entity Framework, Azure DevOps, PostgreSQL'
    },
    {
      headerColor: '#FBCA3E',
      companyName: 'MsTechnologies',
      companyUrl: 'https://mstech.la/',
      period: 'Apr. 2018 - Dec. 2018',
      position: 'Full Stack Developer',
      techStack: 'Angular, C#.Net, Entity Framework, Azure DevOps, SQL Server'
    },
    {
      headerColor: '#E24A68',
      companyName: 'QGood',
      companyUrl: 'https://www.qgood.net/',
      period: 'Mar. 2015 - Dec. 2017',
      position: 'Full Stack Developer',
      techStack: 'C#.Net, Aspx, JavaScript, JQuery, HTML, CSS, SQL Server, NHibernate, Linq'
    },
    {
      headerColor: '#1B5F8C',
      companyName: 'Medicine School, UNR',
      companyUrl: 'https://www.coopmedicasunr.com.ar/',
      period: 'Sep. 2014 - Mar. 2015',
      position: 'Business Analyst (Internship)',
      techStack: 'Interviews, Use Cases, UIs'
    }
  ];
}
