import fs from 'node:fs';
import {save,pageIntro,esc} from './templates.mjs';
const photos=JSON.parse(fs.readFileSync('content/gallery.json','utf8'));
const groups=[...new Set(photos.map(p=>p.group||'Along the way'))];
const windowStyle=p=>{
  const [x,y,w,h]=p.crop||[0,0,p.width,p.height];
  if(![x,y,w,h,p.width,p.height].every(Number.isFinite)||x<0||y<0||w<=0||h<=0||x+w>p.width||y+h>p.height)throw new Error('Invalid photo crop: '+p.src);
  return `--frame-ratio:${w/h};--image-width:${p.width/w*100}%;--image-left:${-x/w*100}%;--image-top:${-y/h*100}%`;
};
const item=p=>`<figure class="album-photo"><button class="photo-button" data-photo="${esc(p.src)}" data-alt="${esc(p.alt)}" data-window="${esc(windowStyle(p))}" data-caption="${esc(p.title+' '+p.caption)}" aria-label="Enlarge photo: ${esc(p.title)}"><span class="photo-window" style="${windowStyle(p)}"><img src="${esc(p.src)}" alt="${esc(p.alt)}" width="${p.width}" height="${p.height}" loading="lazy"></span></button><figcaption>${p.place||p.date?`<span class="album-meta">${esc([p.place,p.date].filter(Boolean).join(' · '))}</span>`:''}<h3>${esc(p.title)}</h3><p>${esc(p.caption)}</p></figcaption></figure>`;
save('/gallery/','A few moments along the way','Research, conferences, and life outside the lab.',pageIntro('A little more of life','A few moments<br>along the way.','The people behind the research, a few moments out in the world, and the life between experiments.')+`<div class="wrap album">${groups.map(group=>`<section class="album-section"><h2>${esc(group)}</h2><div class="album-grid">${photos.filter(p=>(p.group||'Along the way')===group).map(item).join('')}</div></section>`).join('')}<p class="subtle album-hint">Select a photograph for a closer look.</p></div><dialog class="photo-dialog" aria-label="Expanded photograph"><button class="dialog-close">Close</button><div class="photo-window" style="${windowStyle(photos[0])}"><img src="${photos[0].src}" alt="${esc(photos[0].alt)}" width="${photos[0].width}" height="${photos[0].height}"></div><p></p></dialog>`);
