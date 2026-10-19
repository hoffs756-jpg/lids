// Columns: 0 name, 1 description, 2 IMAGE (file inside the images/ folder, no leading slash).
// The filter buttons match words in the image filename (plaid, red, van, black, white, silver, green,).
// To add a jar, add a row to the end of this list (change the last "]];" to "]," first).
const D=[
["apple butter","somthing here","apple_red_lid.jpg"],
["tikka masala","somthing here","black_lid.jpg"],
["keep cold","somthing here","blue_lid.jpg"],
["chili oil","somthing here","chili_red_lid.jpg"],
["chobani yogurt","somthing here","chobani_white_lid.jpg"],
["cocojune coconut","somthing here","cocojune_white_lid.jpg"],
["salsa","somthing here","desertpepper_black_lid.jpg"],
["fage greek yogurt","somthing here","fage_white_lid.jpg"],
["salsa","somthing here","frontera_silver_lid.jpg"],
["clarified butter","somthing here","ghee_silver_lid.jpg"],
["coconut yogurt","somthing here","goodculture_white_lid.jpg"],
["jam","somthing here","goodgood_black_lid.jpg"],
["sweet pepper relish","somthing here","howards_red_lid.jpg"],
["salted herring","somthing here","maties_blue_lid.jpg"],
["hard fruit candy","somthing here","mixedfruit_green_lid.jpg"],
["australian yogurt","somthing here","nosa_black_lid.jpg"],
["smuckers jam","somthing here","plaid_lid.jpg"],
["bone maman jam","somthing here","purple_plaid_lid.jpg"],
["caviar cream","somthing here","white_caviar_lid.jpg"],
["sturgon caviar","somthing here","sturgon_white.jpg"],
["van leeuwen blue icecream","somthing here","van_blue_lid.jpg"],
["van leeuwen grey icecream","somthing here","van_grey_lid.jpg"],
["beech nut baby food","somthing here","beach_green_lid.jpg"],
["van leeuwen purple icecream","somthing here","van_purple_lid.jpg"]];
// Long-ish placeholder paragraphs shown below the image on the detail page. Edit freely.
const LONG=[
"Placeholder text. Replace this with the story of the jar: where it came from, who made it, and why the lid caught your eye. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."];
// Text shown on the cylinder tiles (text only, no images). Fill these in; they repeat if there are fewer than tiles.
const cylText=[
"A lid is small, a plain round thing,",
"yet look at what it chooses to sing.",
"A pattern, a color, a tiny mark",
"can light a shelf up from the dark.",
"Gingham tied with a bit of string",
"says home, says jam, says everything.",
"Metal ridged and gold and round",
"keeps the summer safe and sound.",
"Twist it, hear the button pop,",
"the whole warm summer will not stop.",
"A pint of cold, a stripe of blue,",
"you know that brand, you always knew.",
"Red, and you're reaching, no need to look;",
"it's written in color, like a book.",
"White says cream, black says spice,",
"purple costs more, but worth the price.",
"The book holds lids in ink and page,",
"the site sets circles on a stage.",
"A pattern leads to its cousin's door,",
"a color leads you to explore.",
"No grand design, no loud display,",
"just one red chosen the careful way.",
"Made to open, made to throw,",
"each one was chosen, and now you know."];
const id=n=>"#"+String(n+1).padStart(3,"0");
const jar=p=>`<img src="images/${p[2]}" alt="${p[0]}">`;
// filter key is the lowercase image filename
const key=p=>p[2].toLowerCase();
const $=s=>document.querySelector(s),idx=$("#index"),world=$("#world");
$("#dt").textContent=new Date().toLocaleDateString("fr-CH").replace(/\//g,".");
D.forEach((p,i)=>{const e=document.createElement("div");e.className="cell";e.tabIndex=0;e.dataset.l=key(p);e.dataset.i=i;e.style.setProperty("--n",i);e.innerHTML=`<b>${id(i)}</b><div class="p">${jar(p)}</div>`;idx.append(e)});
// 3D
let ry=0,rx=-8,vy=.25,drag=0,moved=0,view="index",ox,oy;
function build(v){world.innerHTML="";const n=D.length;
if(v=="sphere"){
// sphere: circle-cropped images, one per jar
D.forEach((p,k)=>{const phi=Math.acos(1-2*(k+.5)/n),th=Math.PI*(1+Math.sqrt(5))*k,t=document.createElement("div");
t.className="t";t.dataset.l=key(p);t.dataset.i=k;t.innerHTML=jar(p);
t.style.transform=`rotateY(${th*180/Math.PI}deg) rotateX(${90-phi*180/Math.PI}deg) translateZ(${Math.min(innerWidth,innerHeight)*.34}px)`;world.append(t)})}
else{
// cylinder: text only, one tile per jar. 7 per ring, last ring is partial.
const per=8,R=Math.max(240,per*46/6.28);
for(let i=0;i<n;i++){const r=Math.floor(i/per),k=i%per,t=document.createElement("div"),a=k*360/per+r*8;
t.className="t tx sm";t.textContent=cylText[i%cylText.length];t.style.transform=`translateY(${(r-1.5)*118}px) rotateY(${a}deg) translateZ(${R}px)`;world.append(t)}}}
function loop(){if(view!="index"){if(!drag){vy+=(.25-vy)*.015;ry+=vy}world.style.transform=`translateZ(${view=="cyl"?-140:0}px) rotateX(${view=="cyl"?-18:rx}deg) rotateY(${ry}deg)`}requestAnimationFrame(loop)}loop();
const st=$("#stage");
st.onpointerdown=e=>{drag=1;moved=0;ox=e.clientX;oy=e.clientY};
addEventListener("pointermove",e=>{if(!drag)return;const dx=e.clientX-ox,dy=e.clientY-oy;moved+=Math.abs(dx)+Math.abs(dy);ry+=dx*.4;if(view=="sphere")rx=Math.max(-80,Math.min(80,rx-dy*.3));vy=dx*.02||vy;ox=e.clientX;oy=e.clientY});
addEventListener("pointerup",()=>{drag=0;vy=Math.max(-.6,Math.min(.6,vy))||.25});
// views & filters
document.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>{view=b.dataset.v;document.querySelectorAll("[data-v]").forEach(x=>x.setAttribute("aria-pressed",x==b));
idx.style.display=view=="index"?"grid":"none";st.style.display=view=="index"?"none":"block";if(view!="index"){build(view);filt(F)}});
let F="all",Q="";
// A jar matches if its image filename CONTAINS the filter word.
// go=true (user picked a filter / typed a search): matching jars move to the front of the index and the page scrolls to the top.
function filt(f,go){F=f;let c=0;
const match=e=>(f=="all"||e.dataset.l.includes(f))&&D[e.dataset.i][0].toLowerCase().includes(Q);
document.querySelectorAll("[data-l]").forEach(e=>{const m=match(e);e.classList.toggle("dim",!m);if(m&&e.classList.contains("cell"))c++});
$("#bil").textContent=`(${c}/${D.length})`;
if(go){[...idx.children].sort((a,b)=>(match(b)-match(a))||(a.dataset.i-b.dataset.i)).forEach(e=>{e.style.animation="none";idx.append(e)});
scrollTo({top:0,behavior:"smooth"})}}
document.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-f]").forEach(x=>x.setAttribute("aria-pressed",x==b));filt(b.dataset.f,true)});
$("#q").oninput=e=>{Q=e.target.value.toLowerCase().trim();filt(F,true)};
const tip=$("#tip");
addEventListener("pointermove",e=>{tip.style.transform=`translate(${e.clientX+14}px,${e.clientY+16}px)`});
document.addEventListener("pointerover",e=>{const c=e.target.closest("[data-i]"),on=c&&!c.classList.contains("dim")&&!drag&&!$("#det").classList.contains("open");tip.classList.toggle("on",!!on);if(c)tip.textContent=D[c.dataset.i][0]});
// hover label
document.addEventListener("pointerover",e=>{const c=e.target.closest("[data-i]");$("#hov").textContent=c?`${id(+c.dataset.i)} ${D[c.dataset.i][0]}`:"lids"});
// detail: image centered on the first screen, scroll down for the text. Side key lets you jump between jars.
const mini=$("#mini");
mini.innerHTML=D.map((q,j)=>`<span data-j="${j}" title="${q[0]}">${jar(q)}</span>`).join("");
mini.onclick=e=>{const s=e.target.closest("[data-j]");if(s)show(+s.dataset.j)};
let cur=0;
function show(i){cur=i;const p=D[i];
$("#big").innerHTML=`${jar(p)}<div class="cap">${id(i)} / ${D.length} &nbsp; ${p[0]}</div><div class="sc">Scroll &darr;</div>`;
$("#txt").innerHTML=`<div>${id(i)} / ${D.length}</div><h1>${p[0]}</h1><p>${p[1]}</p>${LONG.map(t=>`<p>${t}</p>`).join("")}<div class="pn"><button id="pv">Previous</button><button id="nx">Next</button></div>`;
$("#pv").onclick=()=>show((i+D.length-1)%D.length);$("#nx").onclick=()=>show((i+1)%D.length);
mini.querySelectorAll("[data-j]").forEach(s=>s.classList.toggle("on",+s.dataset.j==i));
const on=mini.querySelector(".on");if(on)on.scrollIntoView({block:"nearest",inline:"nearest"});
$("#det").scrollTo({top:0,behavior:"smooth"})}
function open(i,el){const r=el.getBoundingClientRect(),d=$("#det");d.classList.remove("open");d.style.cssText=`--t:${r.top}px;--l:${r.left}px;--r:${innerWidth-r.right}px;--b:${innerHeight-r.bottom}px`;show(i);d.scrollTop=0;requestAnimationFrame(()=>requestAnimationFrame(()=>d.classList.add("open")));$("#cl").focus();document.body.style.overflow="hidden"}
function close(){$("#det").classList.remove("open");document.body.style.overflow=""}
$("#cl").onclick=close;addEventListener("keydown",e=>{if(e.key=="Escape")close();if($("#det").classList.contains("open")){if(e.key=="ArrowRight")show((cur+1)%D.length);if(e.key=="ArrowLeft")show((cur+D.length-1)%D.length)}if(e.key=="Enter"&&e.target.classList.contains("cell"))e.target.click()});
document.addEventListener("click",e=>{const c=e.target.closest(".cell,.t[data-i]");if(c&&!c.classList.contains("dim")&&moved<6)open(+c.dataset.i,c)});
// set the count in the footer on load
filt("all");

// cover (jar lid) + intro page
// Cover: "Enter index" opens the lid straight into the site. "Intro" opens the lid onto the intro page,
// which has its own "Continue to index" and "Back" (closes the lid again). The nav "About" button brings the lid back.
const cover=$("#cover"),intro=$("#intro"),T=950;
let tm;const later=f=>{clearTimeout(tm);tm=setTimeout(f,T)};
const lock=on=>{document.body.style.overflow=on?"hidden":"";document.querySelectorAll(".bar,nav,main,footer").forEach(e=>e.inert=on)};
lock(true);
$("#go").onclick=()=>{cover.classList.add("open");later(()=>lock(false))};
$("#gi").onclick=()=>{intro.classList.remove("open");intro.hidden=false;intro.scrollTop=0;void intro.offsetWidth;cover.classList.add("open");later(()=>$("#ic").focus())};
const toSite=()=>{intro.classList.add("open");later(()=>{lock(false);intro.hidden=true})};
$("#ic").onclick=$("#ic2").onclick=toSite;
$("#ib").onclick=()=>{cover.classList.remove("open");later(()=>{intro.hidden=true})};
$("#about").onclick=()=>{lock(true);intro.hidden=true;scrollTo(0,0);cover.classList.remove("open")};