/* Project portfolio. Data points to the original uploaded project photos. */
(function(){
'use strict';
const categories=[{"key":"installation","title":"Укладка","desc":"Геометрия, рисунок и точная подгонка деревянного пола.","projects":[{"folder":"Укладка францезской елочки","title":"Укладка французской ёлочки","photos":["Укладка францезской елочки/7UUJYCjsHOUd0s24_W6TrJz6ONO2yKKSaUyZygOMU7Fui4kRk0gNweEwe5LN5m46NECDbNDG.jpg","Укладка францезской елочки/Nxph47-3dAxWrqveNSKuzT4DW4bhDLRS3qLgZYTjNj6dbQgf8j3u9on2wUw_yA_EKiooC86DwLXHCA.jpg","Укладка францезской елочки/P8_T3zA_zTE1XD7u6ZLBUzc6qs7Tyg95Ew4acmshosCu43Vq1Ntue-c0CY62ZLakMHuYzOqf.jpg","Укладка францезской елочки/c4cpPu4IEH8RcuOyV_A_q_P5nEVep91yrjJJyDHpnwQUrzP-Y0s4Fm3_NEArqbpgnhSjzcW9.jpg","Укладка францезской елочки/oKwDScBFQCEMtWj2yeJF01cFNy1_dzFPdNj-xwOI1a3whyATQRKRVywOfGmAzFR3SdtLEfUu.jpg"]},{"folder":"Укладка модульного паркета","title":"Укладка модульного паркета","photos":["Укладка модульного паркета/0fYR3trTDd8ovhFQMykgo9kXX_OSlTPXTg-j_vApm_xxcI9el6rbOPT9RJJhzxVpV1UWDYu6.jpg","Укладка модульного паркета/2yk4vrR6gYvFxIYA7kLB2fljqmgK1PwCgNwos0E0x7fZDm6RVhBCSSLhUPUkjabt0zFl-hs3.jpg","Укладка модульного паркета/BfohjjE9TC5VLyu6IOErUUmh2palCghz-3R_tdmpGYR-O-GRrxHtwkcBMApmQjin_BzG830s.jpg","Укладка модульного паркета/DOv39gwRWf39jfTtyofAAOmYOwZHWuZT1_mH4bOp9s9qlHIFv3aEGvb8WtWoCTcSfW6mfM5ly3C7nA.jpg","Укладка модульного паркета/QOXdIKj_8m7GbKyM85BDT3PuxherxlA9tgJKFllC5295oLnwJ2PVfIaaCsKRJFenNL2rQpdr.jpg","Укладка модульного паркета/T88vKfdYl901E8vF2-vqtxir22pzSvn08A-fhJVhHqGuqyv4YgeEcXd5_F2kPY1OWRaiI0Dv.jpg"]},{"folder":"Укладка массивного паркета","title":"Укладка массивного паркета","photos":["Укладка массивного паркета/8m7etd3ZIX-ZtbIjPLl0tLNt9lTIcYr6EEzi7t1Y4-SclVA78hlp0Q87vFVL2QyGTSmY6LJxOr-ZyA.jpg","Укладка массивного паркета/EzvcbMJo1QU6yE4LCxjCRzugLCtfsX5PQZ9EEj2Qzo1BHKQGanRrywb4bROGLaqOhCkDZYe1.jpg","Укладка массивного паркета/FETnNBr9NrmPN-fnAIzCxqtqNWBIqjSOAyDHCCVrgf3xnRDeqiQNo5rbHXDKU40mtpa7sugz.jpg","Укладка массивного паркета/pDW922MrrHsW1FeoJ1TBwQrdsP4EdOoZrOjQAFvAbeRF1gLVE3qk7QuG9ftIOMhgLSb7INau.jpg","Укладка массивного паркета/pptMaLE2LfoH1hdaRo9a3-Eqt1HWriLhrlcQksVSGACnEuGPylYnR55tdUxAMSQdTueGXHbK0X7fTw.jpg"]},{"folder":"Укладка массивной доски","title":"Укладка массивной доски","photos":["Укладка массивной доски/IMG_20210616_170448.jpg","Укладка массивной доски/IMG_20210616_170458.jpg","Укладка массивной доски/IMG_20210618_144518.jpg","Укладка массивной доски/IMG_20210620_160124.jpg","Укладка массивной доски/IMG_20210620_160136.jpg"]}]},{"key":"restoration","title":"Реставрация","desc":"Восстановление деревянного пола и работа с объектами разного масштаба.","projects":[{"folder":"Областная библиотека реставрация","title":"Областная библиотека — реставрация","photos":["Областная библиотека реставрация/IMG_20220914_142659.jpg","Областная библиотека реставрация/IMG_20220915_155517.jpg","Областная библиотека реставрация/IMG_20220915_155520.jpg","Областная библиотека реставрация/IMG_20220917_161223.jpg","Областная библиотека реставрация/IMG_20220917_161227.jpg","Областная библиотека реставрация/IMG_20221017_123403.jpg","Областная библиотека реставрация/IMG_20221017_123420.jpg","Областная библиотека реставрация/IMG_20221022_162801.jpg","Областная библиотека реставрация/IMG_20221030_121446.jpg","Областная библиотека реставрация/IMG_20221101_122849.jpg","Областная библиотека реставрация/IMG_20221103_145332.jpg","Областная библиотека реставрация/IMG_20221103_151957.jpg","Областная библиотека реставрация/IMG_20221107_101031.jpg","Областная библиотека реставрация/IMG_20221111_153438.jpg","Областная библиотека реставрация/IMG_20221116_124356.jpg","Областная библиотека реставрация/IMG_20221209_170633.jpg","Областная библиотека реставрация/IMG_20221210_154918.jpg","Областная библиотека реставрация/IMG_20221210_154925.jpg","Областная библиотека реставрация/IMG_20221210_174633.jpg","Областная библиотека реставрация/IMG_20221212_124644.jpg","Областная библиотека реставрация/IMG_20221216_123506.jpg"]},{"folder":"Реставрация бюджетными решениями","title":"Реставрация бюджетными решениями","photos":["Реставрация бюджетными решениями/IMG_20210514_122631.jpg","Реставрация бюджетными решениями/IMG_20210518_091102.jpg","Реставрация бюджетными решениями/IMG_20240205_120105.jpg","Реставрация бюджетными решениями/IMG_20240205_120116.jpg","Реставрация бюджетными решениями/IMG_20240207_164841.jpg","Реставрация бюджетными решениями/IMG_20240207_170335.jpg","Реставрация бюджетными решениями/IMG_20240208_111615.jpg"]},{"folder":"Реставрация СГМК","title":"Реставрация СГМК","photos":["Реставрация СГМК/4bfhxttbC6J5iiAwvURqkxk4QzHFGaEeXH0M-gNungEQCdVNtamOoL0EDyZByDZHb-MHlccD.jpg","Реставрация СГМК/EkS9Ol-c3TLY4M0h_BBdMxo2vDOtf_QNkcmw1QSiL8A60AsWhRmp4mvoecApBXBOQm7QVqE_.jpg","Реставрация СГМК/Es9wBfrK20cjQ142f_JV0CcPnCVOwqF7iQRZBC1UqTVC5258M--hyq8jixNbRlKl5bbhxh59Wl6KYg.jpg","Реставрация СГМК/FrV3FvtDM-QioheM79dtw2VUaGkeufWdhIyFIFP8UOssNBFKx1NyhXezAIiTGD1oN8ZDN2O7kMNJ4g.jpg","Реставрация СГМК/OeSp0f7bMr-ghyQa8qNZgSMkO0JOpbiUN9t7NMdK6REOrLEJ5jUCozlhMvlVhuY07sD1pkxMqjdrmg.jpg","Реставрация СГМК/T-MwKGIzUutJF3435UnXqPlengcs1TvHHVV8DesEPjh-YaZJecgYeMNOn4lsFsDsg3lTzl-3.jpg","Реставрация СГМК/TSGHbb3Dj6hTie3dS72ZOWKLDIlISuOTgGXJX-aGZJVy36q6ER26GNwvQPJl_IpdUs0jUf3ROgWdqw.jpg","Реставрация СГМК/bX9r4CpGHsnE9J1gkOnCqeASn2UeUXsx-lnaAeMK0sZQ-bI5Ps2_h1_ARWMUDY8LzJOIw3PB.jpg","Реставрация СГМК/bbyRnQjh3B7Ddh_3V_uh0c8BClznhSPX0Y5B77owIn_Sn6t0SLuuI5E-U2AGLt-HBv9rdtaAqUubVA.jpg","Реставрация СГМК/lQoWo32c3qi4_C6gfb-7ZS-mktoH4Pdozd1AoUVAbnWqVzzNkJ5ImxKnjZIpXdULoonQR2Z2.jpg"]},{"folder":"Реставрация спортзала междуреченск","title":"Реставрация спортзала — Междуреченск","photos":["Реставрация спортзала междуреченск/IMG_20250721_132040.jpg","Реставрация спортзала междуреченск/IMG_20250721_132057.jpg","Реставрация спортзала междуреченск/IMG_20250721_132106.jpg","Реставрация спортзала междуреченск/IMG_20250724_170120.jpg","Реставрация спортзала междуреченск/IMG_20250811_103244.jpg","Реставрация спортзала междуреченск/IMG_20250811_103253.jpg","Реставрация спортзала междуреченск/IMG_20250811_152917.jpg","Реставрация спортзала междуреченск/IMG_20250819_151748.jpg","Реставрация спортзала междуреченск/IMG_20250819_151757.jpg","Реставрация спортзала междуреченск/IMG_20250819_151808.jpg"]},{"folder":"Реставрация спортзала таштагол","title":"Реставрация спортзала — Таштагол","photos":["Реставрация спортзала таштагол/IMG_20240812_190414.jpg","Реставрация спортзала таштагол/IMG_20240814_203250.jpg","Реставрация спортзала таштагол/IMG_20240906_132159.jpg","Реставрация спортзала таштагол/IMG_20240906_161041.jpg","Реставрация спортзала таштагол/IMG_20240907_214644.jpg","Реставрация спортзала таштагол/IMG_20240908_191101.jpg","Реставрация спортзала таштагол/IMG_20240909_203137.jpg","Реставрация спортзала таштагол/IMG_20240910_223245.jpg","Реставрация спортзала таштагол/IMG_20240911_142009.jpg","Реставрация спортзала таштагол/IMG_20240911_142012.jpg","Реставрация спортзала таштагол/IMG_20240911_142016.jpg","Реставрация спортзала таштагол/IMG_20240911_142053.jpg"]},{"folder":"Реставрация и тонирование модулей)","title":"Реставрация и тонирование модулей)","photos":["Реставрация и тонирование модулей)/20210712_130946.jpg","Реставрация и тонирование модулей)/20210712_193537.jpg","Реставрация и тонирование модулей)/20210712_194352.jpg","Реставрация и тонирование модулей)/IMG_20210712_131455.jpg","Реставрация и тонирование модулей)/IMG_20210712_133845.jpg","Реставрация и тонирование модулей)/IMG_20210713_164834.jpg"]}]},{"key":"toning","title":"Тонировка","desc":"Оттенки и финишная обработка, меняющие характер древесины.","projects":[{"folder":"Тонирование пола сосна","title":"Тонирование пола — сосна","photos":["Тонирование пола сосна/IMG_20211028_151245.jpg","Тонирование пола сосна/IMG_20211028_153733.jpg","Тонирование пола сосна/IMG_20211028_171505.jpg","Тонирование пола сосна/IMG_20211029_113042.jpg"]},{"folder":"Доложили паркет и затонировали","title":"Доложили паркет и затонировали","photos":["Доложили паркет и затонировали/IMG_20201110_111244.jpg","Доложили паркет и затонировали/IMG_20201112_132259_1.jpg","Доложили паркет и затонировали/IMG_20201112_132333.jpg","Доложили паркет и затонировали/IMG_20201115_151900.jpg","Доложили паркет и затонировали/IMG_20201115_154854.jpg"]}]}];
const root=document.querySelector('#works .container');
if(!root)return;
const sectionHead=root.querySelector('.section-head');
if(!sectionHead)return;
const originalCopy=root.querySelector('.showcase');
if(originalCopy)originalCopy.remove();
const intro=document.createElement('p');
intro.className='portfolio-intro';
intro.textContent='Выберите направление, затем проект — внутри собраны фотографии именно с этого объекта.';
sectionHead.insertAdjacentElement('afterend',intro);
const view=document.createElement('div');
view.className='portfolio-content';
intro.insertAdjacentElement('afterend',view);
const viewer=document.createElement('div');
viewer.className='portfolio-viewer';
viewer.setAttribute('role','dialog');viewer.setAttribute('aria-modal','true');viewer.setAttribute('aria-label','Просмотр фотографии');
viewer.innerHTML='<button class="portfolio-viewer-close" type="button" aria-label="Закрыть">×</button><button class="portfolio-viewer-prev" type="button" aria-label="Предыдущее фото">‹</button><img alt=""><button class="portfolio-viewer-next" type="button" aria-label="Следующее фото">›</button><div class="portfolio-viewer-count"></div>';
document.body.appendChild(viewer);
let activePhotos=[],activePhoto=0,returnFocus=null;
const pathURL=p=>p.split('/').map(encodeURIComponent).join('/');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const totalPhotos=c=>c.projects.reduce((n,p)=>n+p.photos.length,0);
function toolbar(crumb,backLabel,backAction){
 const bar=document.createElement('div');bar.className='portfolio-toolbar';
 if(backAction){const b=document.createElement('button');b.className='portfolio-back';b.type='button';b.textContent='← '+backLabel;b.addEventListener('click',backAction);bar.appendChild(b);}
 if(crumb){const s=document.createElement('span');s.className='portfolio-crumb';s.textContent=crumb;bar.appendChild(s);}
 return bar;
}
function showCategories(){
 view.replaceChildren();
 const grid=document.createElement('div');grid.className='portfolio-category-grid';
 categories.forEach((cat,i)=>{
  const first=cat.projects.find(p=>p.photos.length)?.photos[0];
  const card=document.createElement('button');card.type='button';card.className='portfolio-category';
  card.innerHTML='<span class="portfolio-cover">'+(first?'<img loading="lazy" src="'+pathURL(first)+'" alt="">':'')+'</span><span class="portfolio-card-body"><span class="portfolio-index">НАПРАВЛЕНИЕ 0'+(i+1)+'</span><span class="portfolio-card-title">'+esc(cat.title)+'</span><span class="portfolio-card-desc">'+esc(cat.desc)+'</span><span class="portfolio-card-meta">'+cat.projects.length+' проекта · '+totalPhotos(cat)+' фото　↗</span></span>';
  card.addEventListener('click',()=>showProjects(cat));grid.appendChild(card);
 });
 view.appendChild(grid);
}
function showProjects(cat){
 view.replaceChildren(toolbar(cat.title,'Все направления',showCategories));
 const grid=document.createElement('div');grid.className='portfolio-project-grid';
 cat.projects.forEach((p,i)=>{
  const first=p.photos[0];const card=document.createElement('button');card.type='button';card.className='portfolio-project';
  card.innerHTML='<span class="portfolio-cover">'+(first?'<img loading="lazy" src="'+pathURL(first)+'" alt="">':'')+'</span><span class="portfolio-card-body"><span class="portfolio-index">ПРОЕКТ 0'+(i+1)+'</span><span class="portfolio-card-title">'+esc(p.title)+'</span><span class="portfolio-card-meta">'+p.photos.length+' фото　↗</span></span>';
  card.addEventListener('click',()=>showPhotos(cat,p));grid.appendChild(card);
 });
 view.appendChild(grid);
}
function showPhotos(cat,p){
 view.replaceChildren(toolbar(p.title,'К проектам',()=>showProjects(cat)));
 const grid=document.createElement('div');grid.className='portfolio-photo-grid';
 p.photos.forEach((src,i)=>{
  const b=document.createElement('button');b.type='button';b.className='portfolio-photo';b.setAttribute('aria-label','Открыть фото '+(i+1));
  b.innerHTML='<img loading="lazy" src="'+pathURL(src)+'" alt="'+esc(p.title)+' — фото '+(i+1)+'">';
  b.addEventListener('click',()=>openViewer(p.photos,i,b));grid.appendChild(b);
 });
 if(!p.photos.length){const empty=document.createElement('div');empty.className='portfolio-empty';empty.textContent='Фотографии этого проекта пока не найдены.';view.appendChild(empty);}
 else view.appendChild(grid);
}
function openViewer(photos,index,focus){
 activePhotos=photos;activePhoto=index;returnFocus=focus;viewer.classList.add('is-open');document.body.style.overflow='hidden';drawViewer();viewer.querySelector('.portfolio-viewer-close').focus();
}
function drawViewer(){
 const img=viewer.querySelector('img');img.src=pathURL(activePhotos[activePhoto]);img.alt='Фото '+(activePhoto+1)+' из '+activePhotos.length;
 viewer.querySelector('.portfolio-viewer-count').textContent=(activePhoto+1)+' / '+activePhotos.length;
}
function closeViewer(){viewer.classList.remove('is-open');document.body.style.overflow='';if(returnFocus)returnFocus.focus();}
function stepViewer(n){if(!activePhotos.length)return;activePhoto=(activePhoto+n+activePhotos.length)%activePhotos.length;drawViewer();}
viewer.querySelector('.portfolio-viewer-close').addEventListener('click',closeViewer);
viewer.querySelector('.portfolio-viewer-prev').addEventListener('click',()=>stepViewer(-1));
viewer.querySelector('.portfolio-viewer-next').addEventListener('click',()=>stepViewer(1));
viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer();});
document.addEventListener('keydown',e=>{if(!viewer.classList.contains('is-open'))return;if(e.key==='Escape')closeViewer();if(e.key==='ArrowLeft')stepViewer(-1);if(e.key==='ArrowRight')stepViewer(1);});
showCategories();
})();