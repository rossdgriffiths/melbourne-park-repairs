const sites=[
 {id:1,coordinates:[144.97855,-37.82235],title:'Rod Laver forecourt',location:'South of Rod Laver Arena · Melbourne Park',tiles:81,grout:180,joints:null,photo:'assets/site-1.jpg',reference:'assets/site-1-map.png'},
 {id:2,coordinates:[144.97914,-37.82216],title:'Rod Laver southeast walkway',location:'Southeast of Rod Laver Arena · Melbourne Park',tiles:20,grout:280,joints:55,photo:'assets/site-2.jpg',reference:'assets/site-2-map.png'},
 {id:3,coordinates:[144.98008,-37.82203],title:'Kia Arena west plaza',location:'West of Kia Arena · Melbourne Park',tiles:48,grout:450,joints:null,photo:'assets/site-3.jpg',reference:'assets/site-3-map.png'},
 {id:4,coordinates:[144.98112,-37.82273],title:'Kia Arena south approach',location:'South of Kia Arena · Melbourne Park',tiles:5,grout:10,joints:null,photo:'assets/site-4.jpg',reference:'assets/site-4-map.png'},
 {id:5,coordinates:[144.98067,-37.82247],title:'Kia Arena southwest frontage',location:'Southwest side of Kia Arena · Melbourne Park',tiles:0,grout:25,joints:null,photo:'assets/site-5.jpg',reference:'assets/site-5-map.png'},
 {id:6,coordinates:[144.98184,-37.82198],title:'Kia Arena east walkway',location:'East of Kia Arena · Melbourne Park',tiles:0,grout:15,joints:null,photo:'assets/site-6.jpg',photo2:'assets/site-6-2.jpg',reference:'assets/site-6-map.png'},
 {id:7,coordinates:[144.98115,-37.82125],title:'Kia Arena north plaza',location:'North of Kia Arena · Melbourne Park',tiles:5,grout:0,joints:null,photo:'assets/site-7.jpg',reference:'assets/site-7-map.png'},
 {id:8,coordinates:[144.98004,-37.82139],title:'Centrepiece south plaza',location:'South of Centrepiece · Melbourne Park',tiles:10,grout:50,joints:null,photo:'assets/site-8.jpg',reference:'assets/site-8-map.png'},
 {id:9,coordinates:[144.97904,-37.82111],title:'Rod Laver northeast plaza',location:'Northeast of Rod Laver Arena · Melbourne Park',tiles:27,grout:100,joints:null,photo:'assets/site-9.png',reference:'assets/site-9-map.png'},
 {id:10,coordinates:[144.97872,-37.82068],title:'Rod Laver north walkway',location:'North of Rod Laver Arena · Melbourne Park',tiles:17,grout:50,joints:null,photo:'assets/site-10.jpg',reference:'assets/site-10-map.png'},
 {id:11,coordinates:[144.97756,-37.82189],title:'Margaret Court southeast plaza',location:'Between Margaret Court Arena and Rod Laver Arena · Melbourne Park',tiles:12,grout:320,joints:null,photo:'assets/site-11.jpg',reference:'assets/site-11-map.png'},
 {id:12,coordinates:[144.97699,-37.82160],title:'Margaret Court south frontage',location:'South side of Margaret Court Arena · Melbourne Park',tiles:18,grout:218,joints:null,photo:'assets/site-12.jpg',reference:'assets/site-12-map.png'},
 {id:13,coordinates:null,title:'Location pending',location:'Site 13 · Location not supplied',tiles:10,grout:180,joints:null,photo:null,reference:null},
 {id:14,coordinates:[144.97640,-37.82010],title:'Show Court 2 north plaza',location:'North of Show Court 2 · Melbourne Park',tiles:68,grout:110,joints:null,photo:'assets/site-14.jpg',photo2:'assets/site-14-2.jpg',reference:'assets/site-14-map.png'}
];
sites.push(...[{"id":15,"kind":"hazard","hazardNo":1,"coordinates":[144.97912,-37.82208],"title":"Tripping hazard 1","location":"Southeast of Rod Laver Arena · Melbourne Park","tiles":null,"grout":null,"joints":null,"photo":"assets/hazard-1-1.jpg","photos":["assets/hazard-1-1.jpg","assets/hazard-1-2.jpg","assets/hazard-1-3.jpg","assets/hazard-1-4.jpg","assets/hazard-1-5.jpg"],"reference":"assets/hazard-1-map.png","description":"Cracked and missing paving and joint bedding beside the metal joint strips."},{"id":16,"kind":"hazard","hazardNo":2,"coordinates":[144.9778,-37.8222],"title":"Tripping hazard 2","location":"Southwest of Rod Laver Arena · Melbourne Park","tiles":null,"grout":null,"joints":null,"photo":"assets/hazard-2-1.jpg","photos":["assets/hazard-2-1.jpg","assets/hazard-2-2.jpg","assets/hazard-2-3.jpg"],"reference":"assets/hazard-2-map.png","description":"Cracked and crumbling joint bedding beside the metal strips at the gate, with gaps and vegetation visible."}]);
sites.push(...[{"id": 17, "kind": "hazard", "hazardNo": "3", "coordinates": [144.9829, -37.82267], "title": "Tripping hazard 3", "location": "Decking transition between John Cain Arena and National Tennis Centre", "tiles": null, "grout": null, "joints": null, "photo": "assets/new-17-1.jpg", "photos": ["assets/new-17-1.jpg", "assets/new-17-2.jpg", "assets/new-17-3.jpg", "assets/new-17-4.jpg"], "reference": "assets/new-17-map.jpg", "description": "Decking / concrete transition trip hazard. 100 lineal metres of decking repairs. Obtain quotations to repair the concrete transition to the decking; concrete repair extent to be confirmed on site.", "decking": true}, {"id": 18, "kind": "hazard", "hazardNo": "4", "coordinates": [144.98338, -37.82232], "title": "Tripping hazard 4", "location": "National Tennis Centre north edge, near MCG tram stop approach", "tiles": null, "grout": null, "joints": null, "photo": "assets/new-18-1.jpg", "photos": ["assets/new-18-1.jpg", "assets/new-18-2.jpg"], "reference": "assets/new-18-map.jpg", "description": "IMMEDIATE REPAIR REQUIRED. Rotten timber transition beside the expansion joint. Obtain quotations for permanent repair; confirm extent and associated support condition on site.", "decking": true}, {"id": 19, "kind": "hazard", "hazardNo": "CP", "coordinates": [144.98345, -37.82382], "title": "Multi Level Car Park ramp", "location": "Multi Level Car Park ramp, Olympic Boulevard side of National Tennis Centre", "tiles": null, "grout": null, "joints": null, "photo": "assets/new-19-1.jpg", "photos": ["assets/new-19-1.jpg", "assets/new-19-2.jpg"], "reference": "assets/new-19-map.jpg", "description": "Decking trip hazard shown in Photo 2: inspect damaged timber and confirm repair scope. Contractor maintenance: soft pressure wash; hydroxide clean; fill minor gaps and knots; light sanding and oiling. Supplied PDF heading says John Cain Arena - confirm area applicability. No paver repairs recorded.", "decking": true}, {"id": 20, "kind": "hazard", "hazardNo": "MCG", "coordinates": [144.9831, -37.82223], "title": "Ramp to MCG", "location": "Ramp to MCG, north approach between John Cain Arena and National Tennis Centre", "tiles": null, "grout": null, "joints": null, "photo": "assets/new-20-1.jpg", "photos": ["assets/new-20-1.jpg", "assets/new-20-2.jpg", "assets/new-20-3.jpg", "assets/new-20-4.jpg", "assets/new-20-5.jpg"], "reference": "assets/new-20-map.jpg", "description": "IMMEDIATE ATTENTION REQUIRED. Contractor report: replace approximately 100 linear metres of boards, replace patch boards to suit, soft pressure wash, hydroxide clean, fill minor gaps and knots, light sanding and oiling. Confirm final quantities on site. Decking work is separate from paving totals.", "decking": true}]);
sites.push({"id": 21, "kind": "hazard", "hazardNo": "D1", "decking": true, "urgent": false, "coordinates": [144.9761, -37.82085], "title": "Show Court decking / River Terrace", "location": "Beside Show Court 2 \u00b7 River Terrace \u00b7 Melbourne Park", "tiles": null, "grout": null, "joints": null, "photo": "assets/show-court-deck-1.jpg", "photos": ["assets/show-court-deck-1.jpg", "assets/show-court-deck-2.jpg"], "reference": "assets/show-court-deck-map.jpg", "description": "Contractor audit 21 September 2026: replace approximately 300 lineal metres of decking boards; replace 100 lineal metres of stair nosing and the timber beneath the steps / nosing; re-screw additional loose boards. Poor subfloor and lifting stair nosing recorded. Stair nosing and timber-base repairs are high priority; broader replacement recommended at a later stage. Summary also records 30+ boards requiring replacement - reconcile this with the 300 lm scope before quoting."});
sites.push({"id": 22, "kind": "hazard", "hazardNo": "D2", "decking": true, "urgent": false, "coordinates": [144.978, -37.82245], "title": "Rodda decking", "location": "Rodda decking / terrace and ramp \u00b7 Melbourne Park", "tiles": null, "grout": null, "joints": null, "photo": "assets/rodda-deck-1.jpg", "photos": ["assets/rodda-deck-1.jpg", "assets/rodda-deck-2.jpg", "assets/rodda-deck-3.jpg"], "reference": "assets/rodda-deck-map.jpg", "description": "Replace 100 lineal metres of decking, as supplied by the site manager. Confirm board dimensions, affected lengths and repair boundaries on site before pricing. Separate decking scope; no paving or grout quantity recorded for this item."});
let selected=sites[14];
const kmlCenter=[144.9807439067762,-37.82130338687419];
const status=document.getElementById('status');
const viewer=document.getElementById('viewer');
document.addEventListener('click',event=>{const button=event.target.closest('[data-image]');if(!button)return;document.getElementById('full-image').src=button.dataset.image;document.getElementById('full-image').alt=button.dataset.title;document.getElementById('image-title').textContent=button.dataset.title;document.getElementById('original').href=button.dataset.image;viewer.showModal()});
document.getElementById('close').onclick=()=>viewer.close();
viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close()});
let map;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
function selectSite(id,animate=true){
 selected=sites.find(s=>s.id===Number(id));
 const hazard=selected.kind==='hazard';
 const label=hazard?selected.title:'Site '+selected.id;
 document.querySelector('.metrics').hidden=hazard;
 document.querySelector('.joint-metric').hidden=hazard;
 document.querySelector('.tag').textContent=selected.decking?(selected.urgent===false?'DECKING REPAIRS':'URGENT DECKING'):hazard?'TRIPPING HAZARD':'PAVING';
 document.getElementById('hazard-description').hidden=!hazard;
 document.getElementById('hazard-description').textContent=hazard?selected.description+(selected.decking?'':' Repair quantities have not been supplied.'):'';
 const photos=[...new Set((selected.photos||[selected.photo,selected.photo2]).filter(Boolean))];
 const gallery=document.getElementById('hazard-gallery');gallery.replaceChildren();gallery.hidden=!photos.length;
 photos.forEach((src,i)=>{const b=document.createElement('button');b.className='gallery-photo';b.dataset.image=src;b.dataset.title=label+' · photograph '+(i+1);const img=document.createElement('img');img.src=src;img.alt=label+' · photo '+(i+1);img.loading='lazy';const caption=document.createElement('span');caption.textContent='Photo '+(i+1)+' ↗';b.append(img,caption);gallery.append(b)});
 document.getElementById('site-select').value=String(selected.id);
 document.querySelector('#details h2').innerHTML='<span class="number">'+(hazard?(/^\d+$/.test(String(selected.hazardNo))?'H'+selected.hazardNo:String(selected.hazardNo)):String(selected.id).padStart(2,'0'))+'</span> '+selected.title;
 document.querySelector('.subtitle').textContent=selected.location;
 document.getElementById('tiles').textContent=selected.tiles;
 document.getElementById('grout').innerHTML=selected.grout+'<small> m</small>';
 document.getElementById('joints').innerHTML=selected.joints===null?'Not recorded':selected.joints+'<small> m</small>';
 document.getElementById('joints').classList.toggle('unrecorded',selected.joints===null);
 document.querySelector('.photobutton span').innerHTML=hazard?'Photo 1 <b>↗</b>':'Site photograph <b>↗</b>'; document.querySelector('.caption').textContent=hazard?'Supplied hazard photographs · '+selected.photos.length+' photos.':'Supplied site photograph. Quantities are from the survey information provided; individual damaged tiles are not marked in this photo.'; document.querySelector('.caption').hidden=!selected.photo; document.querySelector('.note').hidden=!selected.coordinates; document.getElementById('pending-location').hidden=!!selected.coordinates;
 const photo=document.querySelector('.photobutton');photo.hidden=!selected.photo;photo.dataset.image=selected.photo;photo.dataset.title=label+' · supplied photograph';
 if(selected.photo)photo.querySelector('img').src=selected.photo;photo.querySelector('img').alt=label+' · '+selected.title;
 const extra=document.getElementById('extra-photo');extra.hidden=!selected.photo2;extra.dataset.image=selected.photo2||'';extra.dataset.title='Site '+selected.id+' · second paving photograph';
 photo.hidden=true;extra.hidden=true;document.querySelector('.caption').textContent=photos.length+' attached photo'+(photos.length===1?'':'s')+' · select a photo to enlarge.';
 document.querySelector('.reference').hidden=!selected.reference;
 const ref=document.querySelector('.reference button');ref.dataset.image=selected.reference;ref.dataset.title=label+' · original location screenshot';
 document.getElementById('fly').disabled=!selected.coordinates;
 document.getElementById('fly').textContent='↗ Fly to '+label;
 if(map&&map.getLayer('selected-glow')){map.setFilter('selected-glow',['all',['==',['get','id'],selected.id],['!=',['get','kind'],'hazard']]);map.setFilter('selected-ring',['all',['==',['get','id'],selected.id],['!=',['get','kind'],'hazard']]);}
 if(animate)fly();
}
document.getElementById('site-select').onchange=e=>selectSite(e.target.value);
selectSite(15,false);
try{
map=new maplibregl.Map({container:'map',style:'https://tiles.openfreemap.org/styles/liberty',center:kmlCenter,zoom:14.8,pitch:0,bearing:0,attributionControl:true});
map.addControl(new maplibregl.NavigationControl({visualizePitch:true}),'top-right');
map.addControl(new maplibregl.ScaleControl({unit:'metric'}),'bottom-left');
map.on('load',()=>{
 // Draw the cone locally so it works in both packaged and hosted versions.
 const coneCanvas=document.createElement('canvas');coneCanvas.width=80;coneCanvas.height=88;
 const cone=coneCanvas.getContext('2d');
 cone.lineJoin='round';cone.strokeStyle='#ffffff';cone.lineWidth=5;
 cone.beginPath();cone.moveTo(13,70);cone.lineTo(67,70);cone.lineTo(74,82);cone.lineTo(6,82);cone.closePath();cone.fillStyle='#b52232';cone.fill();cone.stroke();
 cone.beginPath();cone.moveTo(34,7);cone.lineTo(46,7);cone.lineTo(63,72);cone.lineTo(17,72);cone.closePath();cone.fillStyle='#f97316';cone.fill();cone.stroke();
 cone.fillStyle='#ffffff';
 cone.beginPath();cone.moveTo(30,23);cone.lineTo(50,23);cone.lineTo(53,35);cone.lineTo(27,35);cone.closePath();cone.fill();
 cone.beginPath();cone.moveTo(23,49);cone.lineTo(57,49);cone.lineTo(60,61);cone.lineTo(20,61);cone.closePath();cone.fill();
 map.addImage('traffic-cone',cone.getImageData(0,0,80,88),{pixelRatio:2});

 const layers=map.getStyle().layers;
 const building=layers.find(l=>l['source-layer']==='building');
 if(building&&!layers.some(l=>l.type==='fill-extrusion'))map.addLayer({id:'survey-buildings',type:'fill-extrusion',source:building.source,'source-layer':'building',minzoom:14,paint:{'fill-extrusion-color':'#b6c6b2','fill-extrusion-height':['coalesce',['get','render_height'],6],'fill-extrusion-base':['coalesce',['get','render_min_height'],0],'fill-extrusion-opacity':.88}},layers.find(l=>l.type==='symbol')?.id);
 map.addSource('sites',{type:'geojson',data:{type:'FeatureCollection',features:sites.filter(s=>s.coordinates).map(s=>({type:'Feature',geometry:{type:'Point',coordinates:s.coordinates},properties:{id:s.id,kind:s.urgent===false?'repair':s.kind||'repair',name:s.kind==='hazard'?s.title:'SITE '+s.id+' · '+s.tiles+' TILES'}}))}});
 map.addLayer({id:'site-halo',type:'circle',source:'sites',filter:['!=',['get','kind'],'hazard'],paint:{'circle-radius':24,'circle-color':['case',['==',['get','kind'],'hazard'],'#d94747','#60a5fa'],'circle-opacity':.28}});
 map.addLayer({id:'site-pin',type:'circle',source:'sites',filter:['!=',['get','kind'],'hazard'],paint:{'circle-radius':10,'circle-color':['case',['==',['get','kind'],'hazard'],'#b52232','#2563eb'],'circle-stroke-width':3,'circle-stroke-color':'#fff'}});
 map.addLayer({id:'selected-glow',type:'circle',source:'sites',filter:['all',['==',['get','id'],selected.id],['!=',['get','kind'],'hazard']],paint:{'circle-radius':38,'circle-color':['case',['==',['get','kind'],'hazard'],'#ef4444','#3b82f6'],'circle-opacity':.65,'circle-blur':.85}});
 map.addLayer({id:'selected-ring',type:'circle',source:'sites',filter:['all',['==',['get','id'],selected.id],['!=',['get','kind'],'hazard']],paint:{'circle-radius':15,'circle-color':'rgba(0,0,0,0)','circle-stroke-width':3,'circle-stroke-color':['case',['==',['get','kind'],'hazard'],'#ff6b6b','#60a5fa']}});
 map.addLayer({id:'hazard-cones',type:'symbol',source:'sites',filter:['==',['get','kind'],'hazard'],layout:{'icon-image':'traffic-cone','icon-size':.85,'icon-allow-overlap':true,'icon-ignore-placement':true}});
 map.addLayer({id:'site-label',type:'symbol',source:'sites',layout:{'text-field':['get','name'],'text-size':13,'text-font':['Noto Sans Regular'],'text-offset':[0,2],'text-anchor':'top','text-allow-overlap':true},paint:{'text-color':'#162924','text-halo-color':'#ffffff','text-halo-width':2}});
 ['site-pin','site-halo','site-label','hazard-cones'].forEach(layer=>{map.on('click',layer,e=>{selectSite(e.features[0].properties.id);document.getElementById('details').scrollIntoView({behavior:reduced?'instant':'smooth',block:'nearest'})});map.on('mouseenter',layer,()=>map.getCanvas().style.cursor='pointer');map.on('mouseleave',layer,()=>map.getCanvas().style.cursor='')});
 if(!reduced){
  const pulseStarted=performance.now();
  function pulseSelected(now){
   if(!map.getLayer('selected-glow'))return;
   const phase=((now-pulseStarted)%1800)/1800;
   map.setLayoutProperty('hazard-cones','icon-size',['case',['==',['get','id'],selected.id],.85+Math.sin(phase*Math.PI)*.15,.85]);
   map.setPaintProperty('selected-glow','circle-radius',22+phase*27);
   map.setPaintProperty('selected-glow','circle-opacity',.7*(1-phase));
   map.setPaintProperty('selected-ring','circle-radius',14+phase*10);
   map.setPaintProperty('selected-ring','circle-stroke-opacity',1-phase*.85);
   requestAnimationFrame(pulseSelected);
  }
  requestAnimationFrame(pulseSelected);
 }
 document.querySelectorAll('.toolbar button').forEach(b=>b.disabled=false);
 status.hidden=true;selectSite(selected.id);
});
 map.on('error',e=>{console.warn(e.error);if(!map.loaded()){status.hidden=false;status.textContent='Map could not load. Check your internet connection; site photos are available in the panel.'}});
 const timer=setTimeout(()=>{if(!map.isStyleLoaded()){status.hidden=false;status.textContent='Map loading is taking longer than usual. Photos and quantities are available in the panel.'}},15000);
 map.once('idle',()=>clearTimeout(timer));
}catch(e){status.textContent='3D map unavailable in this browser. Site photos and repair quantities are available in the panel.';console.warn(e)}
function fly(){if(!map||!selected.coordinates)return;map.flyTo({center:selected.coordinates,zoom:17.4,pitch:58,bearing:-25,duration:reduced?0:3200,essential:false});document.getElementById('view').textContent='3D view';document.getElementById('view').setAttribute('aria-pressed','true')}
document.getElementById('fly').onclick=fly;
document.getElementById('view').onclick=()=>{const flat=map.getPitch()>10;map.easeTo({pitch:flat?0:58,bearing:flat?0:-25,duration:reduced?0:900});document.getElementById('view').textContent=flat?'2D view':'3D view';document.getElementById('view').setAttribute('aria-pressed',String(!flat))};
document.getElementById('overview').onclick=()=>{map.fitBounds([[144.9755,-37.8243],[144.9845,-37.8195]],{padding:{top:110,bottom:80,left:70,right:70},pitch:0,bearing:0,duration:reduced?0:1800});document.getElementById('view').textContent='3D view';document.getElementById('view').setAttribute('aria-pressed','true')};
