const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));document.querySelector('#nav').classList.toggle('open',open)});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{toggle?.setAttribute('aria-expanded','false');document.querySelector('#nav').classList.remove('open')}));
const dialog=document.querySelector('.photo-dialog');
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{const img=dialog.querySelector('img');const source=button.querySelector('img');img.src=button.dataset.photo;img.alt=button.dataset.alt;img.setAttribute('width',source.getAttribute('width'));img.setAttribute('height',source.getAttribute('height'));dialog.querySelector('.photo-window').style.cssText=button.dataset.window;dialog.querySelector('p').textContent=button.dataset.caption;dialog.showModal()}));
dialog?.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
