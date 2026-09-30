const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));document.querySelector('#nav').classList.toggle('open',open)});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{toggle?.setAttribute('aria-expanded','false');document.querySelector('#nav').classList.remove('open')}));
const dialog=document.querySelector('.photo-dialog');
const photoButtons=[...document.querySelectorAll('[data-photo]')];
let photoIndex=0;
function showPhoto(index){
  photoIndex=(index+photoButtons.length)%photoButtons.length;
  const button=photoButtons[photoIndex],img=dialog.querySelector('img'),source=button.querySelector('img');
  img.src=button.dataset.photo;img.alt=button.dataset.alt;
  img.setAttribute('width',source.getAttribute('width'));img.setAttribute('height',source.getAttribute('height'));
  dialog.querySelector('.photo-window').style.cssText=button.dataset.window;
  dialog.querySelector('p').textContent=button.dataset.caption;
  dialog.querySelector('.photo-count').textContent=`${photoIndex+1} / ${photoButtons.length}`;
}
photoButtons.forEach((button,index)=>button.addEventListener('click',()=>{showPhoto(index);dialog.showModal()}));
dialog?.querySelector('.photo-prev').addEventListener('click',()=>showPhoto(photoIndex-1));
dialog?.querySelector('.photo-next').addEventListener('click',()=>showPhoto(photoIndex+1));
dialog?.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
dialog?.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();showPhoto(photoIndex+(e.key==='ArrowRight'?1:-1))}});
