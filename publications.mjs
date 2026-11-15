import fs from 'node:fs';
import {save,pageIntro,A,esc,links} from './templates.mjs';

const publications=JSON.parse(fs.readFileSync('content/publications.json','utf8'));
const groups=[
  {type:'journal',id:'journal-articles',title:'Journal articles'},
  {type:'conference',id:'conference-proceedings',title:'Conference proceedings'}
].map(group=>({...group,items:publications.filter(p=>p.type===group.type).sort((a,b)=>Number(b.year)-Number(a.year))}));
const entry=p=>`<article class="pub-row"><div class="pub-year">${esc(p.year)}<br><span class="subtle">${esc(p.role)}</span></div><div><h3>${A('https://doi.org/'+p.doi,esc(p.title))}</h3><p>${esc(p.authors)}</p><p><em>${esc(p.journal)}</em>${p.citation?', '+esc(p.citation):''} (${esc(p.year)})</p><p class="pub-source">${A('https://doi.org/'+p.doi,'Publisher / DOI ↗')}</p></div></article>`;

const body=pageIntro('Research output','Publications','Journal articles, conference proceedings, and technical contributions in laser processing, materials recovery, and characterization.')
  +`<div class="wrap publications-page"><div class="publication-resources">${A(links.scholar,'Google Scholar ↗','text-link')}${A('/documents/','Download CV &amp; resume','text-link')}${A('/projects/','Explore the research projects','text-link')}</div><nav class="publication-index" aria-label="Publication sections">${groups.map(g=>A('#'+g.id,`${g.title} <span>${g.items.length}</span>`)).join('')}${A('#other-contributions','Patent &amp; technical report <span>2</span>')}</nav>
  ${groups.map(g=>`<section class="publication-section" id="${g.id}" aria-labelledby="${g.id}-heading"><div class="publication-heading"><h2 id="${g.id}-heading">${g.title}</h2><span>${g.items.length} publications</span></div>${g.items.map(entry).join('')}</section>`).join('')}
  <section class="publication-section" id="other-contributions" aria-labelledby="other-contributions-heading"><div class="publication-heading"><h2 id="other-contributions-heading">Patent &amp; technical report</h2></div>
  <article class="pub-row"><div class="pub-year">2026<br><span class="subtle">Co-inventor</span></div><div><span class="small-label">Published patent application</span><h3>${A('https://patents.google.com/patent/US20260008129A1/en','Use of Lasers to Selectively Remove Materials from Substrates')}</h3><p>Mool C. Gupta, Mahantesh Khetri</p><p>US20260008129A1 · Published January 8, 2026<br>International application: PCT/US2023/069458</p><p class="pub-source">${A('https://patents.google.com/patent/US20260008129A1/en','Read the patent application ↗')}</p></div></article>
  <article class="pub-row"><div class="pub-year">2024<br><span class="subtle">Co-author</span></div><div><span class="small-label">DOE technical report</span><h3>${A('https://www.osti.gov/biblio/2588729','High-Efficiency Recycled Silicon Solar Cell')}</h3><p>Mool C. Gupta, Mahantesh Khetri</p><p>University of Virginia · U.S. Department of Energy<br>Report DE-EE0010244 · OSTI ID 2588729 · December 5, 2024</p><p class="pub-source">${A('https://www.osti.gov/biblio/2588729','Report details ↗')} · ${A('https://doi.org/10.2172/2588729','DOI ↗')}</p></div></article></section></div>`;

save('/publications/','Publications','Journal articles, IEEE PVSC, SPIE and AIP conference proceedings, a patent application, and a DOE technical report by Mahantesh Khetri and collaborators.',body);
