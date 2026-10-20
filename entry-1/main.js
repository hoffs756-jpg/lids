// Columns: 0 name, 1 description, 2 IMAGE (file inside the images/ folder, no leading slash).
// (Each jar's page text is NOT here: it lives in the TEXT list further down, in the same order as this list.)
// The filter buttons match words in the image filename (plaid, red, van, black, white, silver, green,).
// To add a jar, add a row to the end of this list (change the last "]];" to "]," first).
const D=[
["apple butter","","apple_red_lid.jpg"],
["tikka masala","","black_lid.jpg"],
["keep cold","","blue_lid.jpg"],
["chili oil","","chili_red_lid.jpg"],
["chobani yogurt","","chobani_white_lid.jpg"],
["cocojune coconut","","cocojune_white_lid.jpg"],
["salsa","","desertpepper_black_lid.jpg"],
["fage greek yogurt","","fage_white_lid.jpg"],
["salsa","","frontera_silver_lid.jpg"],
["clarified butter","","ghee_silver_lid.jpg"],
["coconut yogurt","","goodculture_white_lid.jpg"],
["jam","","goodgood_black_lid.jpg"],
["sweet pepper relish","","howards_red_lid.jpg"],
["salted herring","","maties_blue_lid.jpg"],
["hard fruit candy","","mixedfruit_green_lid.jpg"],
["australian yogurt","","nosa_black_lid.jpg"],
["smuckers jam","","plaid_lid.jpg"],
["bone maman jam","","purple_plaid_lid.jpg"],
["caviar cream","","white_caviar_lid.jpg"],
["sturgon caviar","","sturgon_white.jpg"],
["beech nut baby food","","beach_green_lid.jpg"],
["van leeuwen blue icecream","","van_blue_lid.jpg"],
["van leeuwen grey icecream","","van_grey_lid.jpg"],
["van leeuwen purple icecream","","van_purple_lid.jpg"]];
// Long-ish placeholder paragraphs shown below the image on the detail page. Edit freely.
const LONG=[
"Placeholder text. Replace this with the story of the jar: where it came from, who made it, and why the lid caught your eye. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."];
// PAGE TEXT FOR EACH JAR, in the same order as the jar list at the top (001 = first jar).
// Write your text between the backticks. A blank line starts a new paragraph.
// Leave a pair of backticks empty (``) and that jar shows the shared LONG placeholder above instead.
// If you add a jar to the list at the top, add one more line here at the end.
const TEXT=[

/* 001 apple butter */ `A green garden grows
around a red apple,
a little piece of summer
pressed into a circle.

The leaves stretch outward,
the fruit sits heavy and bright,
a small red world
held in a border of green.

Somewhere, an apple
hangs from a branch,
ripening slowly beneath the sun,
waiting to be picked.

Here, it has been reduced
to a picture, a symbol,
a familiar shape
that needs no explanation.

The lid keeps the image
of something already gone,
a fruit made permanent
while the real thing disappears.

A garden on a jar,
a season on a shelf,
a small reminder
of the things we preserve.`,
/* 002 tikka masala */ `Black as midnight,
a circle of dark,
scattered with colors
that flicker like sparks.

Orange, yellow, green,
small lights in a row,
like windows in a city
seen from far below.

The dots gather together
but never become one.
Each keeps its color,
each keeps its own sun.

A little universe
spinning in place,
a constellation of sweets
in a small, contained space.

The lid turns slowly
under the kitchen light.
The colors move with it,
then settle back into night.`,
/* 003 keep cold */ `Blue as the cold
that gathers on glass,
blue as the water
that runs from the tap.

White letters circle
a bright blue sea,
telling the contents
where they should be.

Keep refrigerated.
Keep cool. Keep still.
The words make a promise
that the cold will fulfill.

A lid becomes a sign,
a message from the shelf,
reminding us that nothing
can preserve itself.

Beneath the blue surface,
time moves more slowly.
The jar waits in silence,
its contents held closely.

And when the refrigerator opens,
the blue catches the light,
a little frozen ocean
in the middle of the night.`,
/* 004 chili oil */ `A red circle shines
like a cherry in summer,
bright against the shelf,
a small, vivid color.

The edges catch light
in thin rings of red,
like ripples spreading
where a stone has been thrown.

At the center, a face
looks out from the lid,
surrounded by numbers
and marks that record
the passing of time.

A date is stamped
where a memory might go,
a small printed record
of something made long ago.

Red is the color
that asks to be seen.
It does not fade quietly
into the space between.

Even among silver,
white, black, and blue,
the red circle calls
the eye back to it.

A little stop sign,
a little bright flame,
a small red surface
that remembers its name.`,
/* 005 chobani yogurt */ `Yellow fruit falls
across a pale surface,
lemon slices and leaves
arranged in a garden.

The colors overlap,
but the center stays clear.
A name sits among them,
carefully placed near
the promise of sweetness
without the sugar.

Yellow brings sunlight,
green brings the ground,
and white leaves space
for the words to be found.

The lid is a garden
that never needs rain.
Its fruit never ripens,
never falls, never stains.

It stays bright forever,
a picture of spring,
a small circle of plenty
with nothing growing in it.

The jar waits quietly,
its colors on display,
holding a little image
of a summer day.`,
/* 006 cocojune coconut */ `A white circle opens
like a window to the sea,
outlined in blue
with a delicate symmetry.

Thin lines curl gently
around the edge,
like waves meeting
the side of a ledge.

There is no bright fruit,
no shouting color,
only the quiet suggestion
of water and summer.

Coconut rests
in the middle of the white,
a little blue drawing
surrounded by light.

The design feels distant
from the crowded shelf,
like a place you visit
when you need something else.

A calm little circle,
a breath between things,
a reminder of beaches
and the coolness they bring.

The jar closes,
the blue lines stay,
a quiet little ocean
at the end of the day.`,
/* 007 salsa */ `Black as the night
that settles on sand,
gold letters curve
around a horse standing grand.

A western landscape
appears in a circle,
where the desert stretches
beyond the edge of the label.

The horse holds still,
its shape printed in gold,
a figure from somewhere
dusty and old.

The lid becomes a window
into a place far away,
where the sun burns bright
and the shadows grow long.

Gold catches the light
like a trail through the dark.
The smallest details
leave the strongest mark.

A desert in miniature,
a story in black,
a little imagined world
that never looks back.`,
/* 008 fage greek yogurt */ `Silver clouds gather
over a lavender sky.
A number sits quietly,
round and open,
a circle inside a circle,
a promise of almost nothing.

Zero percent.
The words leave space
for everything else
to take its place.

Purple fades softly
into silver and gray,
like the last light of evening
at the end of the day.

There is something strange
about a number like zero.
It can mean absence,
a beginning, an ending,
or the space before
something appears.

The lid holds its message
without making a sound.
A small, pale circle
with nothing to prove.

And still it catches the eye,
because even nothing
can have a shape.`,
/* 009 salsa */ `The blue has faded
around the edges,
leaving behind
a soft metallic shine.

The name in the center
looks almost handwritten,
its letters winding
like a road through time.

Scratches gather
where fingers have touched,
small marks of opening,
of holding, of use.

The lid was once new,
its surface untouched,
its blue bright enough
to stand out from the rest.

Now it carries
a different kind of beauty,
one that comes slowly
from being handled.

A jar is emptied,
a lid is put aside,
but the marks remain
on its silver-blue skin.

A small object
that was never meant
to become a memory,
yet somehow did.`,
/* 010 clarified butter */ `Gold gathers around
a blue center,
a warm little sun
with a red stripe crossing through.

The metal catches light
along its rounded edge,
and the colors sit together
like ingredients on a counter.

Ghee melts slowly
in the warmth of a pan,
spreading into a shine
that follows the movement
of a spoon.

The lid cannot melt,
cannot stir, cannot taste,
but it carries the colors
of the food it protects.

Gold feels warm,
blue feels cool,
and red cuts across them
like a small ribbon.

A kitchen holds many things:
a pan, a spoon, a jar,
the sounds of cooking,
the smells that travel
from one room to another.

This circle keeps
only a picture of that world,
but it is enough
to bring the kitchen to mind.`,
/* 011 coconut yogurt */ `A soft gray circle
sits quietly among the others,
without a bright border
or a crowded design.

The words are simple,
the letters spaced out,
leaving room for the surface
to breathe.

Gray is the color
of things between:
not quite white,
not quite black,
not quite noticed,
not quite unseen.

It does not ask
for the eye to stop.
It lets the other colors
take their turn.

But look for a moment,
and the simplicity becomes
its own kind of pattern:
the balance of letters,
the space around the name,
the silver of the lid
showing through.

There is beauty in leaving
something unfinished,
in knowing when to stop,
in allowing a small circle
to be simply itself.`,
/* 012 jam */ `A black circle
holds two white words,
one above the other,
both bold and bright.

GOOD GOOD.

The letters stand tall
like buildings at night,
their rounded shapes
cutting through the dark.

There is something playful
about saying it twice,
as if once were not enough,
as if goodness could multiply
with every repetition.

The white letters
do not blend into the surface.
They sit on top of it,
clear and confident,
impossible to miss.

Black makes a stage
for the words to appear,
and the circle becomes
a small graphic world.

Nothing extra,
nothing to explain,
just a name repeated
until it becomes a rhythm.

Good, good,
round and complete,
a little black circle
with a bright heartbeat.`,
/* 013 sweet pepper relish */ `A red circle
inside a pale blue ring,
white letters arranged
like a sign announcing something.

The name curves
around the center,
following the shape
as if the words
were meant to travel
in a circle forever.

Red is bold,
blue is steady,
white leaves space
between the two.

The design feels familiar,
like a sign seen before,
something that belongs
to a shelf, a kitchen,
a place where ordinary things
are bought and brought home.

The lid makes a claim
without needing a voice.
It promises a kind of best,
a small declaration
printed in red and white.

And yet the circle
is only a circle,
the letters only letters,
the color only color
until someone looks.

Then the red becomes a signal,
the blue becomes a frame,
and a simple lid
becomes a recognizable thing.`,
/* 014 salted herring */ `Deep blue water
holds a little boat,
its red and white colors
floating against the dark.

The sea is contained
inside a metal rim,
its horizon reduced
to the shape of a circle.

A fish swims beneath
the printed surface,
small and still,
caught in a moment
that never changes.

The lid tells a story
of somewhere distant,
of cold water,
of nets pulled from the sea,
of mornings that begin
before the sun appears.

But here there are no waves,
no salt on the skin,
no wind pushing
against the side of a boat.

Only blue,
and the promise of water,
and a picture of the sea
that can fit in one hand.

The ocean is enormous.
The lid is small.
Still, both can hold
the idea of something
beyond our reach.`,
/* 015 hard fruit candy */ `A green circle
filled with leaves,
orange slices,
yellow fruit,
and little shapes
that seem to grow
toward the center.

The colors overlap
like a crowded garden
where everything ripens
at the same time.

Orange brings warmth,
yellow brings light,
green holds the promise
of something alive.

Fruit is temporary.
It bruises, softens,
changes its color,
and disappears.

But the fruit on the lid
will never spoil.
Its orange will stay orange,
its green will stay green,
its printed garden
will never know winter.

The jar opens,
the fruit is eaten,
the sweetness is gone.

Yet the lid remains,
still carrying the image
of abundance,
a little garden
that never has to grow.`,
/* 016 australian yogurt */ `A black circle
holds a pale shape,
an animal standing still
against a dark landscape.

The colors are muted,
the surface almost rough,
like stone worn down
by weather and time.

The animal looks outward,
but it cannot move.
Its body is a drawing,
its world a label.

There is something quiet
about the contrast:
the white shape appearing
from the darkness,
the black surrounding it
without swallowing it whole.

The lid holds no landscape
beyond its edge,
but the animal seems
to belong somewhere else.

Maybe to a field,
maybe to a hillside,
maybe to a place
where nothing is printed
and everything can move.

For now, it stays here,
a small figure
on a small circle,
waiting to be noticed.`,
/* 017 smuckers jam */ `Red and white squares
spread across the surface,
a picnic pattern
made round and bright.

The gingham looks familiar,
like a tablecloth
laid out on grass,
like a summer afternoon
that lasts a little longer
than expected.

In the center,
a small button waits.

Press it,
and the lid answers.

A pop breaks the silence,
a tiny sound
that tells you
the seal has changed.

Something once closed
has become open.
Something once protected
is ready to be reached.

The red checks remain,
steady and unchanged,
even after the sound
has disappeared.

A little pattern
made to look like fabric,
a small circle of metal
that remembers the feeling
of a picnic table.`,
/* 018 bone maman jam */ `Purple squares
alternate with white,
a pattern that repeats
until the eye begins
to follow its own path.

Dark, light,
dark, light,
a rhythm without sound,
a grid without numbers.

The pattern recalls fabric,
a piece of cloth
folded over a basket,
spread across a table,
held down at the corners
by the weight of the day.

But this cloth
has no threads,
no loose edges,
no place where it can tear.

It is printed flat
onto a circle,
a pattern pretending
to be something softer.

Purple gives it
a little unexpectedness,
a color between
the warmth of red
and the calm of blue.

The squares stay in place,
each one beside another,
a little order
repeated without end.`,
/* 019 caviar cream */ `Silver edges
surround a pale blue sea,
where a small red figure
stands above the words.

The center is quiet,
almost like a shoreline
seen through mist.

Little fish and shapes
gather near the bottom,
a suggestion of water
beneath the printed name.

The lid is metallic,
but the picture feels soft,
like something glimpsed
through a window
on a cloudy day.

Caviar belongs to the sea,
to dark water
and hidden depths,
to things collected
from a world
that rarely stands still.

Here, the sea
has been made circular,
contained by a rim
that fits in the hand.

The water cannot move.
The fish cannot swim.
But the image remains,
a small blue memory
of somewhere deeper.`,
/* 020 sturgon caviar */ `Cream and silver
blend into a quiet circle,
the colors of a shoreline
before the sun rises.

The words sit gently
on the pale surface,
leaving open space
between each letter.

There is no bright blue sea
and no dramatic wave,
only the suggestion
of something underwater,
something that lives
beneath the surface.

Sturgeon move through
deep and changing waters,
their bodies carrying
a history older
than the printed label.

The lid makes this world
look still and simple,
as though the sea
could be reduced
to a name and a circle.

But beneath the calm
is another kind of life,
slow and ancient,
moving through water
that cannot be seen.

The silver rim
catches the light.
The cream surface
holds its quiet.

A little circle
with a world beneath it.`,
/* 021 beech nut baby food */ `Green fills the circle
like leaves after rain,
bright and full
of growing things.

A name sits in white,
clear against the green,
surrounded by small marks
that hint at the natural world.

The design brings to mind
a garden in spring,
the first leaves opening,
the ground waking up
after a long winter.

Green is the color
of things beginning,
of stems reaching upward,
of food that grows
before it is gathered.

The lid carries that color
without ever changing,
without needing sunlight,
without needing soil.

The garden is a picture,
but the promise is real:
something inside
will be opened,
something will be eaten,
and the circle will remain.

A little green world
that sits in the hand,
small enough to overlook,
bright enough to remember.`,
/* 022 van leeuwen blue icecream */ `A deep blue circle
holds a name in black,
the letters flowing
like chocolate
across the surface.

The blue is bright
but not quite loud,
like the color of water
under a clear sky.

Peanut and chocolate
meet in the middle,
two familiar flavors
pressed into one.

The lid carries
the promise of sweetness,
of something rich
and something smooth,
of a spoon scraping
the last bit from the jar.

Its lettering feels loose,
almost handwritten,
like a word drawn quickly
without lifting a pen.

The circle is simple,
but the contrast stays:
blue beneath black,
sweetness beneath a seal.

When the jar is empty,
the blue will still be blue,
the name will still curve,
and the little circle
will hold the memory
of what was once inside.`,
/* 023 van leeuwen grey icecream */ `Gray like a cloudy sky,
black like ink,
a circle that holds
its colors close.

The words stretch
across the surface
in a loose, flowing script,
like a signature
written in one movement.

There is something understated
about the design.
No bright fruit,
no colorful pattern,
no picture asking
to be looked at.

Only gray and black,
a small contrast
that makes the name
feel almost handwritten
on a piece of paper.

Chocolate belongs
to darker colors,
to the warmth of brown,
to the richness of something
that melts slowly.

The lid does not show
the chocolate itself.
It gives only a name,
a hint, a suggestion
of what waits beneath.

The gray remains cool,
the lettering remains dark,
and the sweetness stays hidden
until the circle is opened.`,
/* 024 van leeuwen purple icecream */ `Purple spreads
across the surface,
soft and bright
like the sky
just after sunset.

Black letters curve
around the center,
their shapes stretching
like a ribbon
across a field of color.

The lid feels playful,
almost like a sweet
wrapped in paper,
a little gift
waiting to be opened.

Dulce de leche:
milk and sugar
changed by time and heat
into something golden,
something thick,
something sweet.

The purple does not show
the caramel inside,
but it gives the sweetness
a different kind of identity.

A color can become
part of a flavor,
even when it cannot
be tasted.

The jar may empty,
the caramel may disappear,
but the purple circle
will remain for a while,
a little piece of sweetness
without the sweet.`
];
// Text shown on the cylinder tiles (text only, no images). Fill these in; they repeat if there are fewer than tiles.
const cylText=[
"Looking closely at food lids reveals how much information can exist within a small, familiar object.",
"Through this collection, individual lids become a way to explore the relationship between packaging, visual identity, and everyday experience.",
"Colors, patterns, materials, and typography each contribute to the character of a product,",
"often creating associations that feel familiar before we even read a label.",
"What might initially seem like a simple metal circle becomes a surface that communicates through its appearance.",
"This website continues the exploration introduced in the book,",
"offering a different way to navigate and understand the collection.",
"Rather than following a fixed sequence, the lids can be explored through an index of individual examples,",
"visual categories, colors, and shapes.",
"This structure makes it possible to notice connections between objects that might otherwise seem unrelated,",
"revealing repeated design choices and unexpected similarities across different products.",
"The website acts as both a reference and an extension of the book, allowing the collection to be revisited from new perspectives.",
"Organizing the lids this way also highlights how design operates through repetition and variation.",
"Similar colors can communicate different things depending on their context,",
"while a familiar pattern can take on a new meaning when it appears on another product.",
"Some lids stand out through bold graphics and bright colors,",
"while others rely on subtle details, restrained typography, or the texture of their materials.",
"Together, these differences demonstrate how visual identity is built through individual decisions that contribute to a product's overall appearance.",
"Ultimately, this collection is an invitation to look more carefully at the objects that surround us.",
"Food lids are usually handled briefly and discarded or set aside once their purpose is fulfilled,",
"but their designs can reveal patterns of recognition, cultural associations, and the ways products distinguish themselves from one another.",
"By collecting, documenting, and organizing these objects, something ordinary becomes an opportunity for closer observation.",
"The website extends that process beyond the physical book,",
"creating an ongoing visual index of objects that are easy to overlook but full of details worth noticing."];

const id=n=>"#"+String(n+1).padStart(3,"0");
const jar=p=>`<img src="images/${p[2]}" alt="${p[0]}">`;
// filter key is the lowercase image filename
const key=p=>p[2].toLowerCase();
const $=s=>document.querySelector(s),idx=$("#index"),world=$("#world");
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
const per=8,R=Math.max(290,per*46/6.28);
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
// this jar's own text from the TEXT list if you wrote any, otherwise the shared LONG placeholder paragraphs
const own=(TEXT[i]||"").trim(),body=own?own.split(/\n\s*\n/):LONG;
$("#big").innerHTML=`${jar(p)}<div class="cap">${id(i)} / ${D.length} &nbsp; ${p[0]}</div><div class="sc">Scroll &darr;</div>`;
$("#txt").innerHTML=`<div>${id(i)} / ${D.length}</div><h1>${p[0]}</h1><p>${p[1]}</p>${body.map(t=>`<p>${t}</p>`).join("")}<div class="pn"><button id="pv">Previous</button><button id="nx">Next</button></div>`;
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