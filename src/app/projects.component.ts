import { Component } from '@angular/core';

@Component({
 selector:'app-projects',standalone:true,
 template:`
 <section id="projects" class="section">
  <div class="container">
   <p class="eyebrow shiny">My work</p><h2>Projects</h2>
   <div class="project-grid">
    @for(project of projects;track project.title){
      <article class="project">
       <a class="preview" [href]="project.preview" target="_blank"><img [src]="project.image" [alt]="project.title"></a>
       <div class="project-info"><div><h3>{{project.title}}</h3><span>{{project.status}}</span></div>
        <div class="actions"><a [href]="project.link" target="_blank" aria-label="GitHub" class="icon-btn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 2 12l5 5 1.4-1.4L4.8 12l3.6-3.6L7 7l-5 5 5 5 1.4-1.4L4.8 12l3.6-3.6L12 2Zm5 0-5 5 1.4 1.4L17 4.8l3.6 3.6L22 7l-5-5Z"/></svg></a>
        <a [href]="project.preview" target="_blank" aria-label="Preview" class="icon-btn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 9.4 7.4 18 6 16.6 14.6 8H7V6h11v11h-2V9.4Z"/></svg></a></div>
       </div>
      </article>
    }
   </div>
   <a class="more" href="https://github.com/veerasairakeshpasupuleti" target="_blank">More projects on <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1A9.6 9.6 0 0 1 12 6.8c.9 0 1.7.1 2.5.3 1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.7c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10Z"/></svg></a>
  </div>
 </section>`,
 styles:[`
 .section{padding:48px 0;border-top:1px solid #ffffff10;color:var(--white)}.section h2{font-size:clamp(2.5rem,5vw,3.1rem);font-weight:500;margin:0 0 32px}.eyebrow{font-size:18px;margin:0 0 8px}.shiny{color:var(--sec);animation:shine 3s linear infinite;background:linear-gradient(135deg,var(--sec) 25%,#eee5ff 50%,var(--sec) 75%);background-size:400% 100%;background-clip:text;color:transparent}.project-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px}.preview{display:block;overflow:hidden;border-radius:16px;margin-bottom:16px;background:#1a1a1a}.preview img{width:100%;height:290px;object-fit:cover;display:block;transition:transform .3s}.project:hover img{transform:scale(1.05)}.project-info{display:flex;align-items:center;justify-content:space-between;padding:0 12px}.project h3{font-size:24px;margin:0 0 4px}.project-info span{font-size:14px;color:var(--white-icon)}.actions{display:flex;gap:8px}.icon-btn{width:56px;height:56px;display:grid;place-items:center;color:var(--white-icon);border:1px solid var(--white-icon-tr);border-radius:12px;background:var(--component-bg);transition:.3s}.icon-btn:hover{color:#fff;background:var(--white-icon-tr)}.icon-btn svg{width:28px;height:28px}.more{margin-top:36px;width:100%;display:flex;align-items:center;justify-content:center;gap:8px;padding:13px;border:1px solid var(--white-icon-tr);border-radius:999px;color:var(--white-icon);text-decoration:none;background:var(--component-bg);transition:.3s}.more:hover{color:#fff;background:var(--white-icon-tr);transform:scale(1.01)}.more svg{width:24px;height:24px}@keyframes shine{0%{background-position:100%}30%,70%{background-position:0}}@media(max-width:767px){.project-grid{grid-template-columns:1fr}.preview img{height:230px}}
 `]
})
export class ProjectsComponent{
  projects=[
    {
  title: 'RAG Knowledge Hub',
  image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=RAG Knowledge Hub',
  link: 'https://github.com/veerasairakeshpasupuleti/RAG-Knowledge-Hub',
  preview: 'https://github.com/veerasairakeshpasupuleti/RAG-Knowledge-Hub',
  status: 'On Development'
},
{
  title: 'E-Commerce Application',
  image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=E-Commerce Application',
  link: 'https://github.com/veerasairakeshpasupuleti/E-commerce-application',
  preview: 'https://github.com/veerasairakeshpasupuleti/E-commerce-application',
  status: 'Deployed'
}
  ]
//  projects=[1,2].map((n,i)=>({title:`${['RAG Knowledge Hub','E-Commerce Application'][i]}`,image:`https://placehold.co/600x400/1a1a1a/ffffff?text=${['RAG Knowledge Hub','E-Commerce Application'][i]}`,link:'https://github.com',preview:'https://veerasairakeshpasupuleti.github.io/Portfolio/',status:['On Development','Deployed'][i]}));
}
