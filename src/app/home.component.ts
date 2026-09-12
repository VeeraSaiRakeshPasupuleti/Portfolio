import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

interface SkillGroup { title:string; icon:string; items:string[]; }

@Component({
  selector:'app-home',
  standalone:true,
  template:`
  <section id="home" class="home">
    <div class="container home-inner">
      <div class="hero-copy">
        <p class="eyebrow">Hi, I'm Rakesh</p>
        <div class="hero-row">
          <h1>Software<br>Developer</h1>
          <p class="tagline">GenAI Developer / AI Engineer with hands-on experience building LLM-powered applications, advanced RAG pipelines, and Agentic AI workflows using Python, LangChain, LangGraph, and LLMs.</p>
        </div>
        <div class="socials">
          <a href="https://github.com/veerasairakeshpasupuleti" target="_blank" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.43 2.86 8.16 6.84 9.49.5.09.68-.22.68-.48v-1.68c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12C22 6.48 17.52 2 12 2Z"/></svg></a>
          <a href="https://www.linkedin.com/in/veera-sai-rakesh-pasupuleti-17782a249/" target="_blank" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5 9.75h3V19H5V9.75Zm5 0h2.88v1.26h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.39c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.68 1.14-1.68 2.32V19h-3V9.75Z"/></svg></a>
          <a href="mailto:p.veera.sai.rakesh@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 5H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V7c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V7l8 5 8-5v2Z"/></svg></a>
        </div>
      </div>

      <div class="logo-wall"><div class="fade left"></div><div class="tech-track">
        @for (tech of technologies; track tech) { <div class="tech"><img [src]="'svg/'+tech+'.svg'" [alt]="tech"><span>{{pretty(tech)}}</span></div> }
        @for (tech of technologies; track 'copy-'+tech) { <div class="tech" aria-hidden="true"><img [src]="'/svg/'+tech+'.svg'" [alt]="tech"><span>{{pretty(tech)}}</span></div> }
      </div><div class="fade right"></div></div>

      <div class="skills-glitch">
        <div class="skills">
          <h2>What I do?</h2>
          <div class="skill-list">
            @for(group of skillGroups; track group.title){

            <button
            type="button"
            class="skill-card"
            [class.open]="openSkill === group.title"
            (click)="toggle(group.title)"
          >

            <span class="skill-icon">

          @if (group.icon === 'genai') {
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">

              <path d="M12 3a4 4 0 0 0-4 4v1a5 5 0 0 0-5 5
                      5 5 0 0 0 5 5h8a5 5 0 0 0 5-5
                      5 5 0 0 0-5-5V7a4 4 0 0 0-4-4Z"/>

              <path d="M8 13h.01M12 11h.01M16 13h.01"/>

              <path d="M9 17c1 .8 2 1 3 1s2-.2 3-1"/>
            </svg>
          }

          @if (group.icon === 'backend') {
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">

              <rect x="3" y="3" width="18" height="7" rx="2"/>
              <rect x="3" y="14" width="18" height="7" rx="2"/>

              <path d="M7 7h.01M7 18h.01M11 7h6M11 18h6"/>
            </svg>
          }

        </span>

            <span class="skill-title">
              {{ group.title }}
            </span>

            <span class="chevron">
              ⌄
            </span>

            <span class="skill-details">
              @for (item of group.items; track item) {
                <span class="skill-item">• {{ item }}</span>
              }
            </span>
          </button>
            }
          </div>
        </div>
        <div class="glitch"><canvas #canvas></canvas><div class="vignette"></div></div>
      </div>
    </div>
  </section>
  `,
  styles:[`
    .home{color:var(--white)}
    .home-inner{padding:145px 0 56px}
    .hero-copy{display:flex;flex-direction:column;gap:16px}
    .eyebrow{font-size:18px;color:var(--white-icon);margin:0}
    .hero-row{display:flex;align-items:center;gap:32px}
    h1{font-size:clamp(3.2rem,6vw,4.2rem);line-height:.98;font-weight:500;margin:0;letter-spacing:-.04em}
    .tagline{font-size:clamp(1rem,2vw,1.5rem);color:var(--white-icon);max-width:620px;line-height:1.5;margin:0}
    .tagline span{color:var(--sec);animation:shine 3s linear infinite;background:linear-gradient(135deg,var(--sec) 25%,#eee5ff 50%,var(--sec) 75%);background-size:400% 100%;background-clip:text;color:transparent}
    .socials{display:flex;gap:8px;padding-top:10px}.socials a{display:grid;place-items:center;width:58px;height:58px;border:1px solid var(--white-icon-tr);border-radius:12px;color:var(--white-icon);background:var(--component-bg);transition:.3s}.socials a:hover{color:#fff;background:var(--white-icon-tr);transform:translateY(-2px)}.socials svg{width:32px;height:32px}
    .logo-wall{position:relative;overflow:hidden;padding:32px 0}.tech-track{display:flex;width:max-content;animation:scroll 50s linear infinite}.tech{display:flex;align-items:center;gap:8px;padding-right:80px;color:var(--white-icon);font-size:18px;font-weight:500;white-space:nowrap}.tech img{height:28px;width:30px;object-fit:contain;opacity:.6;filter:grayscale(10%)}.fade{position:absolute;z-index:2;top:0;bottom:0;width:130px;pointer-events:none}.fade.left{left:0;background:linear-gradient(90deg,var(--background),transparent)}.fade.right{right:0;background:linear-gradient(270deg,var(--background),transparent)}
    .skills-glitch{display:flex;align-items:center;gap:64px}.skills{flex:1}.skills h2{font-size:clamp(2rem,4vw,2.7rem);margin:0 0 24px;font-weight:600}.skill-list{display:flex;flex-direction:column;gap:16px}.skill-card{position:relative;width:400px;max-width:100%;display:grid;grid-template-columns:28px 1fr 24px;align-items:center;gap:10px;padding:16px;text-align:left;color:var(--white);background:var(--component-bg);border:1px solid var(--white-icon-tr);border-radius:16px;cursor:pointer;overflow:hidden;transition:.3s;font:inherit}.skill-card:hover{background:var(--white-icon-tr)}.skill-icon {display: flex;align-items: center;justify-content: center;width: 28px;height: 28px;color: var(--sec);flex-shrink: 0;}.skill-icon svg {display: block;width: 24px;height: 24px;stroke: currentColor;}.skill-title{font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chevron{font-size:25px;transition:transform .3s}.skill-card.open .chevron{transform:rotate(180deg)}.skill-details {
  grid-column: 1 / -1;
  display: grid;
  gap: 7px;

  max-height: 0;
  opacity: 0;
  overflow: hidden;

  color: var(--white-icon);
  font-size: 14px;

  transition: max-height .3s ease, opacity .3s ease, padding .3s ease;
}

.skill-card.open .skill-details {
  max-height: 300px;
  opacity: 1;
  padding-top: 8px;
}
.skill-item {
  display: block;
}
    .glitch{width:290px;height:290px;position:relative;background:#101010;overflow:hidden}.glitch canvas{display:block;width:100%;height:100%}.vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle,transparent 55%,#101010 100%)}
    @keyframes scroll{to{transform:translate3d(-50%,0,0)}} @keyframes shine{0%{background-position:100% 50%}30%,70%{background-position:0 50%}}
    @media(max-width:900px){.skills-glitch{gap:30px}.glitch{width:260px;height:260px}.skills{min-width:0}}
    @media(max-width:767px){.home-inner{padding:55px 0 56px}.hero-row{flex-direction:column;align-items:flex-start;gap:16px}.tagline{font-size:18px}.skills-glitch{flex-direction:column;align-items:stretch}.glitch{width:100%;height:292px}.skills h2{margin-bottom:16px}.tech{padding-right:48px;font-size:16px}.fade{width:70px}}
  `]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  technologies=['java','python', 'langchain', 'langgraph', 'rag', 'ai-agents', 'springboot', 'spring-security', 'microservices', 'mysql', 'vector-db', 'aws', 'gcp', 'docker', 'kubernetes', 'git', 'postman'];
  skillGroups:SkillGroup[]=[
    {title:'GenAI Development',icon:'genai',items:['LLM Application Development','RAG Engineering','Agentic AI Workflows','AI Application Integration','Production GenAI']},
    {title:'Backend Development',icon:'backend',items:['API Development', 'Java & Spring Boot', 'Security', 'Database Engineering', 'Microservice Architechture', 'DevOps & Deployment', 'AI-Backend Integration']}
  ];
  openSkill:string|null=null; private ctx!:CanvasRenderingContext2D; private raf=0; private timer?:number; private cells:any[]=[];
  toggle(title:string){this.openSkill=this.openSkill===title?null:title}
  pretty(t:string){return t==='typeScript'?'TypeScript':t==='tailwindcss'?'TailwindCSS':t==='javaScript'?'JavaScript':t.charAt(0).toUpperCase()+t.slice(1)}
  ngAfterViewInit(){this.setupCanvas();window.addEventListener('resize',this.resize);this.timer=window.setInterval(()=>this.glitch(),33)}
  private resize=()=>this.setupCanvas();
  private setupCanvas(){const c=this.canvas.nativeElement, parent=c.parentElement!;const dpr=devicePixelRatio||1;const r=parent.getBoundingClientRect();c.width=r.width*dpr;c.height=r.height*dpr;this.ctx=c.getContext('2d')!;this.ctx.setTransform(dpr,0,0,dpr,0,0);const cols=Math.ceil(r.width/10),rows=Math.ceil(r.height/20);const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>,0123456789';this.cells=Array.from({length:cols*rows},()=>({char:chars[Math.floor(Math.random()*chars.length)],color:['#5e4491','#A476FF','#241a38'][Math.floor(Math.random()*3)]}));this.draw(cols)}
  private glitch(){if(!this.ctx)return;const c=this.canvas.nativeElement,r=c.getBoundingClientRect(),cols=Math.ceil(r.width/10);for(let i=0;i<Math.max(1,this.cells.length*.05);i++){const x=Math.floor(Math.random()*this.cells.length);this.cells[x].char=String.fromCharCode(33+Math.floor(Math.random()*90));this.cells[x].color=['#5e4491','#A476FF','#241a38'][Math.floor(Math.random()*3)]}this.draw(cols)}
  private draw(cols:number){const r=this.canvas.nativeElement.getBoundingClientRect();this.ctx.clearRect(0,0,r.width,r.height);this.ctx.font='16px monospace';this.ctx.textBaseline='top';this.cells.forEach((cell,i)=>{this.ctx.fillStyle=cell.color;this.ctx.fillText(cell.char,(i%cols)*10,Math.floor(i/cols)*20)})}
  ngOnDestroy(){window.removeEventListener('resize',this.resize);if(this.timer)clearInterval(this.timer);cancelAnimationFrame(this.raf)}
}
