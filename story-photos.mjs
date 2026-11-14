import fs from 'node:fs';
import {esc} from './templates.mjs';

const photos=JSON.parse(fs.readFileSync('content/story-photos.json','utf8'));
const windowStyle=p=>{
  const [x,y,w,h]=p.crop||[0,0,p.width,p.height];
  return `--frame-ratio:${w/h};--image-width:${p.width/w*100}%;--image-left:${-x/w*100}%;--image-top:${-y/h*100}%`;
};
export function storyPhoto(key,extra='',eager=false){
  const p=photos[key];
  if(!p)throw new Error('Unknown story photo: '+key);
  return `<figure class="story-photo ${esc(extra)}"><button class="photo-button" data-photo="${esc(p.src)}" data-alt="${esc(p.alt)}" data-window="${windowStyle(p)}" data-caption="${esc(p.caption)}" aria-label="Enlarge photograph: ${esc(p.alt)}"><span class="photo-window" style="${windowStyle(p)}"><img src="${esc(p.src)}" alt="${esc(p.alt)}" width="${p.width}" height="${p.height}" loading="${eager?'eager':'lazy'}"></span></button><figcaption>${esc(p.caption)}</figcaption></figure>`;
}
export const photoDialog=`<dialog class="photo-dialog" aria-label="Expanded photograph"><button class="dialog-close">Close</button><div class="photo-window"><img alt="Expanded photograph" width="1800" height="1200"></div><p></p><div class="photo-controls"><button class="photo-prev" aria-label="Previous photograph">← Previous</button><span class="photo-count" aria-live="polite"></span><button class="photo-next" aria-label="Next photograph">Next →</button></div></dialog>`;
export const crystalPhotos=`<section class="crystal-record" aria-label="Photographs of my grown crystals"><span class="small-label">From growth to a physical sample</span><h3>Centimetre-scale crystals, grown in the lab.</h3><p>I grew bulk single crystals at centimetre scale, then prepared samples for structural and physical-property measurements. These photographs document that hands-on part of the research: the grown material in a sample vial and a closer view on graph paper.</p><div class="story-photo-grid crystal-photo-grid">${storyPhoto('crystal-vial')}${storyPhoto('crystal-surface')}</div><p class="photo-hint">Select a photograph to examine the sample more closely.</p></section>`;
