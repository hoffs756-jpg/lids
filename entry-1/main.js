const D=[
["Fig Jam","#5b2a4a","twist","#c8102e","round","250 ml","Provence","Slow-cooked black figs with a little lemon. Dense, seedy, good with sharp cheese.","Figs, sugar, lemon juice, pectin"],
["Alpine Honey","#e0a21b","twist","#1a1a1a","squat","340 g","Valais","Raw honey from high meadows. Crystallises in cold weather; warm the jar gently to loosen it.","Honey"],
["Gherkins","#8a9a3b","twist","#d9d2bf","tall","500 ml","Alsace","Small cucumbers pickled crisp in dill and mustard seed brine.","Cucumber, vinegar, dill, mustard seed, salt"],
["Apricot Confit","#e8892a","cloth","#b3261e","round","220 ml","Wachau","Whole apricot halves in a loose syrup. The gingham cloth is tied over a waxed disc.","Apricot, sugar, vanilla"],
["Pickled Beets","#8c1c3d","clamp","#1a1a1a","tall","700 ml","Silesia","Sliced beets with clove and allspice. The wire clamp seals against a rubber ring.","Beet, vinegar, sugar, clove, allspice"],
["Tomato Passata","#c9301f","clamp","#eeeeee","squat","500 ml","Calabria","Sieved summer tomatoes, nothing else. Keeps unopened for two years.","Tomato, salt"],
["Mustard","#d9b400","twist","#1a1a1a","squat","180 g","Dijon","Grainy mustard with white wine. Sharp first, mellow after a week open.","Mustard seed, white wine, vinegar, salt"],
["Olives","#6b7a2a","cork","#8a5a2b","round","330 g","Kalamata","Brine-cured olives with a cork stopper. Reseal firmly and keep submerged.","Olives, brine, oregano"],
["Sour Cherries","#7a0f2a","twist","#f2c200","round","400 g","Morava","Pitted morello cherries in light syrup. Made for strudel and cake.","Sour cherry, sugar"],
["Pesto","#4f8a2b","twist","#c8102e","squat","190 g","Liguria","Basil, pine nut and aged cheese under a layer of oil to keep the colour.","Basil, olive oil, pine nuts, cheese, garlic"],
["Anchovies","#b86b4b","clamp","#bbbbbb","squat","120 g","Cantabria","Salt-cured fillets packed in olive oil. A short clamp jar keeps them flat.","Anchovy, olive oil, salt"],
["Peanut Butter","#b9803f","twist","#e63a1f","round","340 g","Georgia","Roasted and stone-ground. The oil separates; stir from the bottom up.","Peanuts, salt"],
["Quince Paste","#d4902a","cloth","#2f6db5","squat","200 g","La Mancha","Firm, sliceable quince set in a short jar. Cut thin, serve with manchego.","Quince, sugar"],
["Sauerkraut","#d8e0a8","clamp","#1a1a1a","tall","900 ml","Bavaria","Raw fermented cabbage. Live cultures; keep refrigerated after opening.","Cabbage, salt, caraway"],
["Chili Crisp","#b3190f","twist","#1a1a1a","squat","210 g","Sichuan","Fried chili, garlic and shallot in oil, with a numbing pepper finish.","Chili, oil, garlic, shallot, Sichuan pepper"],
["Lemon Curd","#f0d23a","twist","#ffffff","round","240 g","Kent","Butter, egg and lemon. Short shelf life; keep cold.","Lemon, butter, egg, sugar"],
["Pickled Ginger","#f0b6b0","twist","#e8e1d0","round","150 g","Kyoto","Paper-thin young ginger in sweet vinegar. Pale pink from the root.","Ginger, rice vinegar, sugar"],
["Tahini","#c9a96a","twist","#1a8a5a","round","454 g","Nablus","Stone-ground hulled sesame. Pours slowly; stir before use.","Sesame"],
["Black Garlic","#231a15","cork","#6b4a2a","squat","100 g","Aomori","Whole bulbs aged for weeks until soft and sweet, like molasses.","Garlic"],
["Blueberry Preserve","#2c2f6b","cloth","#c8102e","round","250 ml","Maine","Wild berries, small and tart. Cloth top, tied with string.","Blueberry, sugar, lemon"],
["Caponata","#7a3b22","clamp","#1a1a1a","round","380 g","Sicily","Aubergine, celery and capers in sweet-sour tomato. Better the next day.","Aubergine, tomato, celery, capers, vinegar"],
["Pickled Eggs","#efe3c2","clamp","#aaaaaa","tall","800 ml","Ontario","Hard-boiled eggs in spiced vinegar. A tall jar with a wide mouth.","Egg, vinegar, onion, pepper"],
["Plum Chutney","#5a1f52","twist","#d9a400","round","300 g","Kashmir","Dark plums with ginger and fennel. Spoon beside rice or roast meat.","Plum, vinegar, sugar, ginger, fennel"],
["Capers","#6f7d3a","twist","#2f6db5","squat","100 g","Pantelleria","Salted buds, rinsed before use. A small squat jar fits a shelf door.","Caper, sea salt"]];
const LID={twist:"Twist-off metal lid with lugs. A safety button pops down when sealed.",clamp:"Wire bail clamp over a rubber gasket. Lifts open, reseals airtight.",cork:"Natural cork stopper pushed into the neck. Not airtight; use within weeks.",cloth:"Fabric cover tied with string over a waxed disc. Traditional, short-term."};
const id=n=>"#"+String(n+1).padStart(3,"0");
// Each product is drawn as a colored circle: fill = contents color, ring = lid color.
// Add an image path as a 10th item in a row of D to show an image instead.
function jar(p,k){
  if(p[9])return `<img src="${p[9]}" alt="${p[0]}">`;
  return `<svg viewBox="0 0 100 100" ${k?'role="img" aria-label="'+p[0]+'"':'aria-hidden="true"'}><circle cx="50" cy="50" r="44" fill="${p[1]}" stroke="${p[3]}" stroke-width="6"/></svg>`;
}
const $=s=>document.querySelector(s),idx=$("#index"),world=$("#world");
$("#dt").textContent=new Date().toLocaleDateString("fr-CH").replace(/\//g,".");
D.forEach((p,i)=>{const e=document.createElement("div");e.className="cell";e.tabIndex=0;e.dataset.l=p[2];e.dataset.i=i;e.style.setProperty("--n",i);e.innerHTML=`<b>${id(i)}</b><div class="p">${jar(p)}</div>`;idx.append(e)});
// 3D
let ry=0,rx=-8,vy=.25,drag=0,moved=0,view="index",ox,oy;
const prompts=["a jar of fig jam with a red lid.","a clamp jar of beets on a shelf.","a cork stopper in a green olive jar.","a gingham cloth tied over apricots.","a small red block on a table."];
function build(v){world.innerHTML="";const n=D.length;
if(v=="sphere"){D.forEach((p,i)=>{const phi=Math.acos(1-2*(i+.5)/n),th=Math.PI*(1+Math.sqrt(5))*i,t=document.createElement("div");t.className="t";t.dataset.l=p[2];t.dataset.i=i;t.innerHTML=jar(p);
t.style.transform=`rotateY(${th*180/Math.PI}deg) rotateX(${90-phi*180/Math.PI}deg) translateZ(${Math.min(innerWidth,innerHeight)*.34}px)`;world.append(t)})}
else{const rows=4,per=n/rows,R=Math.max(240,per*46/6.28);
for(let r=0;r<rows;r++)for(let k=0;k<per;k++){const i=r*per+k,t=document.createElement("div"),a=k*360/per+r*8;
if(r==0&&k%2==0&&false){}
t.className="t";t.dataset.l=D[i][2];t.dataset.i=i;t.innerHTML=jar(D[i]);t.style.transform=`translateY(${(r-1.5)*118}px) rotateY(${a}deg) translateZ(${R}px)`;world.append(t)}
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
function filt(f){F=f;let c=0;document.querySelectorAll("[data-l]").forEach(e=>{const m=(f=="all"||e.dataset.l==f)&&D[e.dataset.i][0].toLowerCase().includes(Q);e.classList.toggle("dim",!m);if(m&&e.classList.contains("cell"))c++});$("#bil").textContent=`Bilan (${c}/${D.length})`}
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
$("#txt").innerHTML=`<div>${id(i)} / ${D.length} &nbsp; ${p[6]}</div><h1>${p[0]}</h1><p>${p[7]}</p><dl><dt>Contents</dt><dd>${p[5]}</dd><dt>Lid</dt><dd>${p[2][0].toUpperCase()+p[2].slice(1)}. ${LID[p[2]]}</dd><dt>Jar</dt><dd>${p[4]} shoulder, clear glass</dd><dt>Ingredients</dt><dd>${p[8]}</dd><dt>Origin</dt><dd>${p[6]}</dd></dl><div class="pn"><button id="pv">Previous</button><button id="nx">Next</button></div><div class="mini">${D.map((q,j)=>`<span data-j="${j}">${jar(q).replace("<svg",'<svg style="'+(j==i?"opacity:1":"")+'"')}</span>`).join("")}</div>`;
$("#pv").onclick=()=>show((i+D.length-1)%D.length);$("#nx").onclick=()=>show((i+1)%D.length);
document.querySelectorAll("[data-j]").forEach(s=>s.onclick=()=>show(+s.dataset.j))}
function open(i,el){const r=el.getBoundingClientRect(),d=$("#det");d.classList.remove("open");d.style.cssText=`--t:${r.top}px;--l:${r.left}px;--r:${innerWidth-r.right}px;--b:${innerHeight-r.bottom}px`;show(i);d.scrollTop=0;requestAnimationFrame(()=>requestAnimationFrame(()=>d.classList.add("open")));$("#cl").focus();document.body.style.overflow="hidden"}
function close(){$("#det").classList.remove("open");document.body.style.overflow=""}
$("#cl").onclick=close;addEventListener("keydown",e=>{if(e.key=="Escape")close();if($("#det").classList.contains("open")){if(e.key=="ArrowRight")show((cur+1)%D.length);if(e.key=="ArrowLeft")show((cur+D.length-1)%D.length)}if(e.key=="Enter"&&e.target.classList.contains("cell"))e.target.click()});
document.addEventListener("click",e=>{const c=e.target.closest(".cell,.t[data-i]");if(c&&!c.classList.contains("dim")&&moved<6)open(+c.dataset.i,c)});