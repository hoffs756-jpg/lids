// polish.js: loads AFTER main.js. It only adds behavior and never changes your content.
// Delete this file and its <script> tag to undo it all.
(()=>{
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE=matchMedia("(hover:hover) and (pointer:fine)").matches;
const root=document.documentElement,nav=$("nav"),det=$("#det"),txt=$("#txt");
const DEFAULT_MOOD="hsl(330 100% 92%)";

// ---------- each jar gets a color pulled from its lid photo ----------
// (If the browser blocks reading pixels, e.g. opening the file straight from disk, it falls back to a pretty pastel per jar.)
const COL=D.map((_,i)=>`hsl(${(i*47)%360} 78% 80%)`);
function lidColor(img){
  try{
    const c=document.createElement("canvas"),n=24;c.width=c.height=n;
    const x=c.getContext("2d",{willReadFrequently:true}),w=img.naturalWidth,h=img.naturalHeight;
    if(!w)return null;
    x.drawImage(img,w*.2,h*.2,w*.6,h*.6,0,0,n,n);
    const d=x.getImageData(0,0,n,n).data;let sx=0,sy=0,sat=0,k=0;
    for(let i=0;i<d.length;i+=4){
      const r=d[i]/255,g=d[i+1]/255,b=d[i+2]/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,dl=mx-mn;
      if(d[i+3]<200||dl<.18||l<.12||l>.92)continue;           // skip white, black, grey and transparent pixels
      const s=dl/(1-Math.abs(2*l-1));
      let hh=mx==r?((g-b)/dl)%6:mx==g?(b-r)/dl+2:(r-g)/dl+4;hh*=60;if(hh<0)hh+=360;
      sx+=Math.cos(hh*Math.PI/180);sy+=Math.sin(hh*Math.PI/180);sat+=s;k++;
    }
    if(k<n*n*.08)return null;                                  // mostly grey/black/white lid: keep the pastel fallback
    let hue=Math.atan2(sy,sx)*180/Math.PI;if(hue<0)hue+=360;
    return `hsl(${Math.round(hue)} ${Math.round(Math.max(55,Math.min(90,sat/k*100)))}% 76%)`;
  }catch(e){return null}
}
function paint(i){
  const cell=idx.querySelector(`.cell[data-i="${i}"]`);if(cell)cell.style.setProperty("--c",COL[i]);
  const t=[...world.children].find(el=>el.dataset.i==i);if(t)t.style.setProperty("--c",COL[i]);
}
D.forEach((_,i)=>{
  const cell=idx.querySelector(`.cell[data-i="${i}"]`);if(!cell)return;
  cell.style.setProperty("--c",COL[i]);
  const img=cell.querySelector("img");if(!img)return;
  const go=()=>{const c=lidColor(img);if(c){COL[i]=c;paint(i)}};
  img.complete?go():img.addEventListener("load",go,{once:true});
});

// ---------- the page mood follows whichever jar you hover ----------
document.addEventListener("pointerover",e=>{
  const c=e.target.closest(".cell");
  if(c){if(!c.classList.contains("dim"))root.style.setProperty("--mood",COL[c.dataset.i])}
  else if(!e.target.closest(".t"))root.style.setProperty("--mood",DEFAULT_MOOD);
});

// ---------- a ticker of your cylinder poem under the nav ----------
if(typeof cylText!=="undefined"&&cylText.length){
  const m=document.createElement("div");m.className="marq";m.setAttribute("aria-hidden","true");
  const line=cylText.map(t=>`<span>${t}</span><i></i>`).join("");
  m.innerHTML=`<div>${line}${line}</div>`;
  nav.after(m);
  document.querySelectorAll("[data-v]").forEach(b=>b.addEventListener("click",()=>{m.hidden=b.dataset.v!=="index"}));
}

// ---------- sphere + cylinder: tiles get their color, and the back ones fade ----------
let tiles=[];
const num=(s,re)=>{const m=s.match(re);return m?parseFloat(m[1]):0};
new MutationObserver(()=>{
  tiles=[...world.children].map(el=>{
    if(el.dataset.i!=null)el.style.setProperty("--c",COL[el.dataset.i]);
    const s=el.style.transform;
    return{el,Y:num(s,/translateY\((-?[\d.e-]+)px\)/),A:num(s,/rotateY\((-?[\d.e-]+)deg\)/),B:num(s,/rotateX\((-?[\d.e-]+)deg\)/),R:num(s,/translateZ\((-?[\d.e-]+)px\)/)||1};
  });
}).observe(world,{childList:true});
const rad=Math.PI/180;
function depth(t,wx){
  let x=0,y=0,z=t.R,c,s,a;
  a=t.B*rad;c=Math.cos(a);s=Math.sin(a);[y,z]=[y*c-z*s,y*s+z*c];
  a=t.A*rad;c=Math.cos(a);s=Math.sin(a);[x,z]=[x*c+z*s,-x*s+z*c];
  y+=t.Y;
  a=ry*rad;c=Math.cos(a);s=Math.sin(a);[x,z]=[x*c+z*s,-x*s+z*c];
  a=wx*rad;c=Math.cos(a);s=Math.sin(a);[y,z]=[y*c-z*s,y*s+z*c];
  return Math.max(0,Math.min(1,(z/t.R+1)/2));
}

// ---------- scroll: sticky-nav line, footer progress, skew on fast scroll ----------
let lastY=scrollY,sk=0,skShown=0;
function onScroll(){
  nav.classList.toggle("stuck",scrollY>4);
  const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
  root.style.setProperty("--sp",Math.min(1,scrollY/max).toFixed(3));
}
addEventListener("scroll",onScroll,{passive:true});onScroll();

// ---------- cursor ring (desktop) ----------
let mx=-100,my=-100,cx=-100,cy=-100,seen=false,ring=null;
if(FINE&&!RM){
  ring=document.createElement("div");ring.id="ring";document.body.append(ring);
  addEventListener("pointermove",e=>{
    mx=e.clientX;my=e.clientY;if(!seen){seen=true;cx=mx;cy=my}
    ring.classList.add("on");
    ring.classList.toggle("big",!!e.target.closest("[data-i]:not(.dim)")&&!det.classList.contains("open"));
  });
  addEventListener("pointerdown",()=>ring.classList.add("down"));
  addEventListener("pointerup",()=>ring.classList.remove("down"));
  root.addEventListener("mouseleave",()=>ring.classList.remove("on"));
}

// ---------- index: tilt each jar toward the pointer ----------
if(FINE&&!RM){
  idx.addEventListener("pointermove",e=>{
    const c=e.target.closest(".cell");if(!c||c.classList.contains("dim"))return;
    const p=c.querySelector(".p"),r=p.getBoundingClientRect();
    p.style.setProperty("--ty",(((e.clientX-r.left)/r.width-.5)*16).toFixed(1)+"deg");
    p.style.setProperty("--tx",(-((e.clientY-r.top)/r.height-.5)*16).toFixed(1)+"deg");
  });
  idx.addEventListener("pointerout",e=>{
    const c=e.target.closest(".cell");if(!c||c.contains(e.relatedTarget))return;
    const p=c.querySelector(".p");p.style.setProperty("--tx","0deg");p.style.setProperty("--ty","0deg");
  });
}

// ---------- cover: the lid drifts a little with the pointer ----------
let px=0,py=0,tpx=0,tpy=0;
if(!RM)addEventListener("pointermove",e=>{tpx=e.clientX/innerWidth*2-1;tpy=e.clientY/innerHeight*2-1});

// ---------- one animation loop ----------
function frame(){
  if(ring&&seen){cx+=(mx-cx)*.18;cy+=(my-cy)*.18;ring.style.transform=`translate(${cx.toFixed(1)}px,${cy.toFixed(1)}px)`}
  if(!RM){
    const y=scrollY,v=y-lastY;lastY=y;
    sk+=(Math.max(-5,Math.min(5,v*.14))-sk)*.2;if(Math.abs(sk)<.02)sk=0;
    if(sk!==skShown){skShown=sk;idx.style.setProperty("--sk",sk.toFixed(2)+"deg")}
    if(!cover.classList.contains("open")){
      px+=(tpx-px)*.08;py+=(tpy-py)*.08;
      cover.style.setProperty("--px",px.toFixed(3));cover.style.setProperty("--py",py.toFixed(3));
    }
  }
  if(view!="index"&&tiles.length){
    const wx=view=="cyl"?-18:rx;
    for(const t of tiles){const n=depth(t,wx);
      t.el.style.setProperty("--d",(.18+.82*Math.pow(n,1.4)).toFixed(3));
      t.el.style.setProperty("--s",(.7+.3*n).toFixed(3));}
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// ---------- jar page: tint + halo in the jar's color, hero drifts on scroll, text fades up ----------
new MutationObserver(()=>det.style.setProperty("--c",COL[cur])).observe($("#big"),{childList:true});
det.addEventListener("scroll",()=>det.style.setProperty("--ds",Math.min(1,det.scrollTop/innerHeight).toFixed(3)),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{root:det,threshold:.12});
new MutationObserver(()=>{
  [...txt.children].forEach((el,i)=>{el.classList.add("rv");el.style.transitionDelay=Math.min(i,4)*60+"ms";io.observe(el)});
}).observe(txt,{childList:true});

// ---------- keyboard: "/" jumps to search ----------
addEventListener("keydown",e=>{
  if(e.key!=="/"||e.metaKey||e.ctrlKey||/INPUT|TEXTAREA/.test(document.activeElement.tagName)||nav.inert)return;
  e.preventDefault();$("#q").focus();
});
})();