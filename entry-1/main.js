// Columns: 0 name, 1 contents color, 2 lid type, 3 lid color, 4 jar shape, 5 size,
// 6 origin, 7 description, 8 ingredients, 9 IMAGE PATH.
// The filter buttons match words in the image filename (plaid, red, van, black, white, silver, green, santa).
// The filenames below are placeholders: rename your files to match, or edit the paths.
const D=[
["apple lid","#5b2a4a","twist","#c8102e","round","250 ml","idk","somthing here","somthing here","apple_red_lid.jpg"],
["mystery lid","#e0a21b","twist","#1a1a1a","squat","340 g","idk","somthing here","somthing here","black_lid.jpg"],
["keep cold","#8a9a3b","twist","#d9d2bf","tall","500 ml","idk","somthing here","somthing here","blue_lid.jpg"],
["spicy","#e8892a","cloth","#b3261e","round","220 ml","idk","somthing here","somthing here","chili_red_lid.jpg"],
["creamy","#8c1c3d","clamp","#1a1a1a","tall","700 ml","idk","somthing here","somthing here","chobani_white_lid.jpg"],
["healthy","#c9301f","clamp","#eeeeee","squat","500 ml","idk","somthing here","somthing here","cocojune_white_lid.jpg"],
["catus yum","#d9b400","twist","#1a1a1a","squat","180 g","idk","somthing here","somthing here","desertpepper_black_lid.jpg"],
["yuck","#6b7a2a","cork","#8a5a2b","round","330 g","idk","somthing here","somthing here","fage_white_lid.jpg"],
["mystery lid","#b86b4b","clamp","#bbbbbb","squat","120 g","idk","somthing here","somthing here","frontera_silver_lid.jpg"],
["O M gee","#b9803f","twist","#e63a1f","round","340 g","idk","somthing here","somthing here","ghee_silver_lid.jpg"],
["coconut?","#d4902a","cloth","#2f6db5","squat","200 g","idk","somthing here","somthing here","goodculture_white_lid.jpg"],
["it better be good","#d8e0a8","clamp","#1a1a1a","tall","900 ml","idk","somthing here","somthing here","goodgood_black_lid.jpg"],
["american","#b3190f","twist","#1a1a1a","squat","210 g","idk","somthing here","somthing here","howards_red_lid.jpg"],
["fishy","#f0d23a","twist","#ffffff","round","240 g","idk","somthing here","somthing here","maties_blue_lid.jpg"],
["tart","#f0b6b0","twist","#e8e1d0","round","150 g","idk","somthing here","somthing here","mixedfruit_green_lid.jpg"],
["yo gurt","#c9a96a","twist","#1a8a5a","round","454 g","idk","somthing here","somthing here","nosa_black_lid.jpg"],
["fancy","#231a15","cork","#6b4a2a","squat","100 g","idk","somthing here","somthing here","plaid_lid.jpg"],
["fancy purple","#2c2f6b","cloth","#c8102e","round","250 ml","idk","somthing here","somthing here","purple_plaid_lid.jpg"],
["salty","#7a3b22","clamp","#1a1a1a","round","380 g","idk","somthing here","somthing here","santa_caviar_lid.jpg"],
["from the sea","#efe3c2","clamp","#aaaaaa","tall","800 ml","idk","somthing here","somthing here","santasturgon_white_lid.jpg"],
["blue ice","#5a1f52","twist","#d9a400","round","300 g","idk","somthing here","somthing here","van_blue_lid.jpg"],
["grey ice","#6f7d3a","twist","#2f6db5","squat","100 g","idk","somthing here","somthing here","van_grey_lid.jpg"],
// NEW: 25th entry (placeholder content, edit freely)
["purple ice","#9e1b32","twist","#c8102e","round","280 g","idk","somthing here","somthing here","van_purple_lid.jpg"]];
const LID={twist:"Twist-off metal lid with lugs. A safety button pops down when sealed.",clamp:"Wire bail clamp over a rubber gasket. Lifts open, reseals airtight.",cork:"Natural cork stopper pushed into the neck. Not airtight; use within weeks.",cloth:"Fabric cover tied with string over a waxed disc. Traditional, short-term."};
const id=n=>"#"+String(n+1).padStart(3,"0");
// Shows the image if p[9] exists, otherwise falls back to the colored circle.
function jar(p,k){
  if(p[9])return `<img src="${p[9]}" alt="${p[0]}">`;
  return `<svg viewBox="0 0 100 100" ${k?'role="img" aria-label="'+p[0]+'"':'aria-hidden="true"'}><circle cx="50" cy="50" r="44" fill="${p[1]}" stroke="${p[3]}" stroke-width="6"/></svg>`;
}
// CHANGED: filter key is now the lowercase image filename instead of the lid type
const key=p=>(p[9]||"").toLowerCase();
const $=s=>document.querySelector(s),idx=$("#index"),world=$("#world");
$("#dt").textContent=new Date().toLocaleDateString("fr-CH").replace(/\//g,".");
D.forEach((p,i)=>{const e=document.createElement("div");e.className="cell";e.tabIndex=0;e.dataset.l=key(p);e.dataset.i=i;e.style.setProperty("--n",i);e.innerHTML=`<b>${id(i)}</b><div class="p">${jar(p)}</div>`;idx.append(e)});
// 3D
let ry=0,rx=-8,vy=.25,drag=0,moved=0,view="index",ox,oy;
const prompts=["blah blah blah put somthing here","blah blah blah put somthing here","blah blah blah put somthing here","blah blah blah put somthing here","blah blah blah put somthing here"];
function build(v){world.innerHTML="";const n=D.length;
if(v=="sphere"){D.forEach((p,i)=>{const phi=Math.acos(1-2*(i+.5)/n),th=Math.PI*(1+Math.sqrt(5))*i,t=document.createElement("div");t.className="t";t.dataset.l=key(p);t.dataset.i=i;t.innerHTML=jar(p);
t.style.transform=`rotateY(${th*180/Math.PI}deg) rotateX(${90-phi*180/Math.PI}deg) translateZ(${Math.min(innerWidth,innerHeight)*.34}px)`;world.append(t)})}
else{
// CHANGED: works with any count (25 isn't divisible by 4). 7 per ring, last ring is partial.
const per=7,R=Math.max(240,per*46/6.28);
for(let i=0;i<n;i++){const r=Math.floor(i/per),k=i%per,t=document.createElement("div"),a=k*360/per+r*8;
t.className="t";t.dataset.l=key(D[i]);t.dataset.i=i;t.innerHTML=jar(D[i]);t.style.transform=`translateY(${(r-1.5)*118}px) rotateY(${a}deg) translateZ(${R}px)`;world.append(t)}
for(let k=0;k<7;k++){const t=document.createElement("div");t.className="t tx";t.textContent=prompts[k%5];t.style.transform=`translateY(${-2.5*118}px) rotateY(${k*360/7}deg) translateZ(${R+10}px)`;world.append(t)}}}
function loop(){if(view!="index"){if(!drag){vy+=(.25-vy)*.015;ry+=vy}world.style.transform=`translateZ(${view=="cyl"?-140:0}px) rotateX(${view=="cyl"?-18:rx}deg) rotateY(${ry}deg)`}requestAnimationFrame(loop)}loop();
const st=$("#stage");
st.onpointerdown=e=>{drag=1;moved=0;ox=e.clientX;oy=e.clientY};
addEventListener("pointermove",e=>{if(!drag)return;const dx=e.clientX-ox,dy=e.clientY-oy;moved+=Math.abs(dx)+Math.abs(dy);ry+=dx*.4;if(view=="sphere")rx=Math.max(-80,Math.min(80,rx-dy*.3));vy=dx*.02||vy;ox=e.clientX;oy=e.clientY});
addEventListener("pointerup",()=>{drag=0;vy=Math.max(-.6,Math.min(.6,vy))||.25});
// views & filters
document.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>{view=b.dataset.v;document.querySelectorAll("[data-v]").forEach(x=>x.setAttribute("aria-pressed",x==b));
idx.style.display=view=="index"?"grid":"none";st.style.display=view=="index"?"none":"block";if(view!="index"){build(view);filt(F)}});
let F="all",Q="";
// CHANGED: a jar matches if its image filename CONTAINS the filter word
function filt(f){F=f;let c=0;document.querySelectorAll("[data-l]").forEach(e=>{const m=(f=="all"||e.dataset.l.includes(f))&&D[e.dataset.i][0].toLowerCase().includes(Q);e.classList.toggle("dim",!m);if(m&&e.classList.contains("cell"))c++});$("#bil").textContent=`(${c}/${D.length})`}
document.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-f]").forEach(x=>x.setAttribute("aria-pressed",x==b));filt(b.dataset.f)});
$("#q").oninput=e=>{Q=e.target.value.toLowerCase().trim();filt(F)};
const tip=$("#tip");
addEventListener("pointermove",e=>{tip.style.transform=`translate(${e.clientX+14}px,${e.clientY+16}px)`});
document.addEventListener("pointerover",e=>{const c=e.target.closest("[data-i]"),on=c&&!c.classList.contains("dim")&&!drag&&!$("#det").classList.contains("open");tip.classList.toggle("on",!!on);if(c)tip.textContent=D[c.dataset.i][0]+", "+D[c.dataset.i][5]});
// hover label
document.addEventListener("pointerover",e=>{const c=e.target.closest("[data-i]");$("#hov").textContent=c?`${id(+c.dataset.i)} ${D[c.dataset.i][0]}`:"lids"});
// detail
let cur=0;
function show(i){cur=i;const p=D[i];$("#big").style.setProperty("--bc",p[1]+"33");$("#big").innerHTML=jar(p,1);
// CHANGED: thumbnail highlight now works for both <img> and <svg>
$("#txt").innerHTML=`<div>${id(i)} / ${D.length} &nbsp; ${p[6]}</div><h1>${p[0]}</h1><p>${p[7]}</p><dl><dt>Contents</dt><dd>${p[5]}</dd><dt>Lid</dt><dd>${p[2][0].toUpperCase()+p[2].slice(1)}. ${LID[p[2]]}</dd><dt>Jar</dt><dd>${p[4]} shoulder, clear glass</dd><dt>Ingredients</dt><dd>${p[8]}</dd><dt>Origin</dt><dd>${p[6]}</dd></dl><div class="pn"><button id="pv">Previous</button><button id="nx">Next</button></div><div class="mini">${D.map((q,j)=>`<span data-j="${j}">${jar(q).replace(/<(svg|img)/,'<$1 style="'+(j==i?"opacity:1":"")+'"')}</span>`).join("")}</div>`;
$("#pv").onclick=()=>show((i+D.length-1)%D.length);$("#nx").onclick=()=>show((i+1)%D.length);
document.querySelectorAll("[data-j]").forEach(s=>s.onclick=()=>show(+s.dataset.j))}
function open(i,el){const r=el.getBoundingClientRect(),d=$("#det");d.classList.remove("open");d.style.cssText=`--t:${r.top}px;--l:${r.left}px;--r:${innerWidth-r.right}px;--b:${innerHeight-r.bottom}px`;show(i);d.scrollTop=0;requestAnimationFrame(()=>requestAnimationFrame(()=>d.classList.add("open")));$("#cl").focus();document.body.style.overflow="hidden"}
function close(){$("#det").classList.remove("open");document.body.style.overflow=""}
$("#cl").onclick=close;addEventListener("keydown",e=>{if(e.key=="Escape")close();if($("#det").classList.contains("open")){if(e.key=="ArrowRight")show((cur+1)%D.length);if(e.key=="ArrowLeft")show((cur+D.length-1)%D.length)}if(e.key=="Enter"&&e.target.classList.contains("cell"))e.target.click()});
document.addEventListener("click",e=>{const c=e.target.closest(".cell,.t[data-i]");if(c&&!c.classList.contains("dim")&&moved<6)open(+c.dataset.i,c)});