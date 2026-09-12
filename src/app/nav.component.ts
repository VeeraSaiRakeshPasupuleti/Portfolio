import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  template: `
    <nav #nav class="main-nav" [class.scrolling]="isScrolling">
      <div class="nav-inner">
        <ul>
          @for (item of items; track item.id) {
            <li>
              <a #navLink [href]="'#' + item.id" [class.active]="activeSection === item.id"
                 (click)="scrollTo($event, item.id)" [attr.aria-label]="item.label">
                <span class="nav-indicator"></span>
                <span class="nav-icon" [innerHTML]="item.icon"></span>
                <span class="nav-label">{{ item.label }}</span>
              </a>
            </li>
          }
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .main-nav{position:fixed;z-index:100;top:24px;left:50%;transform:translateX(-50%);width:80%;
      background:var(--background);border:1px solid transparent;backdrop-filter:blur(20px);
      transition:background .3s,border-color .3s,border-radius .3s,width .5s ease}
    .main-nav.scrolling{background:var(--component-bg);border-color:var(--white-icon-tr);border-radius:999px}
    .nav-inner{display:flex;justify-content:center;align-items:center;padding:12px}
    ul{display:flex;align-items:center;justify-content:center;gap:48px;list-style:none;margin:0;padding:0}
    li{flex:none}
    a{position:relative;display:flex;align-items:center;gap:4px;color:var(--white-icon);text-decoration:none;font-size:16px;transition:color .25s}
    a:hover,a.active{color:var(--white)}
    .nav-indicator{position:absolute;left:-22px;top:50%;width:8px;height:8px;border-radius:50%;background:#A9FF5B;
      transform:translateY(-50%) scale(0);opacity:0;transition:.3s}
    a.active .nav-indicator{transform:translateY(-50%) scale(1);opacity:1}
    .nav-icon{display:none;width:24px;height:24px}
    @media(max-width:767px){
      .main-nav{top:auto;bottom:0;width:100%;border-color:var(--white-icon-tr);border-radius:16px 16px 0 0}
      .main-nav.scrolling{border-radius:16px 16px 0 0}
      .nav-inner{padding:10px 14px}
      ul{width:100%;justify-content:space-between;gap:8px}
      li{flex:1}
      a{flex-direction:column;justify-content:center;gap:2px;font-size:11px}
      .nav-indicator{display:none}
      .nav-icon{display:flex}
    }
  `]
})
export class NavComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('navLink') links!: QueryList<ElementRef<HTMLAnchorElement>>;
  items = [
    {id:'home',label:'Home',icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9.49c0-.31.14-.6.39-.79l8-6.22c.36-.28.86-.28 1.23 0l8 6.22c.24.19.39.48.39.79V20ZM19 19V9.98l-7-5.44-7 5.44V19h14Z"/></svg>'},
    {id:'projects',label:'Projects',icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 5v14h16V7h-8.41l-2-2H4Zm8.41 0H21c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h7.41l2 2Z"/></svg>'},
    {id:'contact',label:'Contact',icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="m21.73 2.96-5.45 19.09c-.15.53-.48.56-.72.06L11 13 1.92 9.37c-.51-.2-.5-.51.03-.69l19.09-6.36c.53-.18.83.12.69.64ZM19.04 5.1 6.81 9.17l5.64 2.25 3.04 6.08L19.04 5.1Z"/></svg>'}
  ];
  activeSection='home'; isScrolling=false;
  private observer?: IntersectionObserver;
  private raf=0;

  ngAfterViewInit(){
    const sections=['home','projects','contact'].map(id=>document.getElementById(id)).filter(Boolean) as HTMLElement[];
    this.observer=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)this.activeSection=e.target.id;});
    },{threshold:.6});
    sections.forEach(s=>this.observer!.observe(s));
    this.updateNav();
  }
  @HostListener('window:scroll') onScroll(){ if(!this.raf)this.raf=requestAnimationFrame(()=>{this.updateNav();this.raf=0;}); }
  private updateNav(){this.isScrolling=window.scrollY>0;}
  scrollTo(e:Event,id:string){e.preventDefault();document.getElementById(id)?.scrollIntoView({behavior:'smooth'});}
  ngOnDestroy(){this.observer?.disconnect();cancelAnimationFrame(this.raf);}
}
