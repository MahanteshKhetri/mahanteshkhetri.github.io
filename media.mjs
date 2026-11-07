import {A} from './templates.mjs';

export const mediaUrl = 'https://www.pv-magazine.com/2026/05/13/continuous-wave-infrared-laser-technology-enables-damage-free-backsheet-removal-in-end-of-life-solar-modules/';
const paperUrl = 'https://doi.org/10.1016/j.solmat.2026.114404';
const update = 'pv magazine features my first-author research on laser backsheet removal · 13 May 2026';

export const mediaHead = `<style>
.research-news{display:flex;align-items:center;gap:18px;margin-top:22px;padding:16px 20px;background:#e9eef1;border-block:1px solid #cbd6dc;font-size:14px;line-height:1.5}
.research-news-badge{flex:none;color:var(--gold);font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase}
.research-news-window{flex:1;min-width:0;overflow:hidden}
.research-news-track{display:flex;width:max-content;animation:research-news-scroll 34s linear infinite}
.research-news-copy{flex:none;padding-right:64px;white-space:nowrap}
.research-news-link{flex:none;font-size:13px;font-weight:600;white-space:nowrap}
.research-news-pause{display:inline-flex;flex:none;align-items:center;gap:6px;font-size:12px;white-space:nowrap;cursor:pointer}
.research-news-motion{accent-color:var(--ink);width:15px;height:15px;margin:0}
.research-news:has(.research-news-motion:checked) .research-news-track,.research-news:hover .research-news-track,.research-news:focus-within .research-news-track{animation-play-state:paused}
.media-recognition{padding:30px 34px;margin-bottom:45px;background:#e9eef1;border-top:2px solid #a9bdcb}
.media-recognition .small-label{margin-bottom:12px}
.media-recognition h2{font-size:35px;max-width:800px;margin-bottom:18px}
.media-recognition p{max-width:900px;font-size:16px;color:#405566}
.media-recognition-links{display:flex;gap:12px 28px;flex-wrap:wrap}
@keyframes research-news-scroll{to{transform:translateX(-50%)}}
@media(max-width:800px){.research-news{flex-wrap:wrap;gap:12px 18px;padding:14px 16px}.research-news-window{order:4;flex-basis:100%}.research-news-link{margin-left:auto}.research-news-pause{font-size:11px}.media-recognition{padding:24px}.media-recognition h2{font-size:29px}}
@media(prefers-reduced-motion:reduce){.research-news-track{animation:none;width:auto;display:block}.research-news-copy{white-space:normal;padding:0}.research-news-copy+ .research-news-copy{display:none}.research-news-pause{display:none}}
</style>`;

export const newsRibbon = `<section class="research-news wrap" aria-label="Research news"><span class="research-news-badge">Research update</span><div class="research-news-window" aria-hidden="true"><div class="research-news-track"><span class="research-news-copy">${update}</span><span class="research-news-copy">${update}</span></div></div><a class="research-news-link" href="${mediaUrl}" aria-label="Read pv magazine coverage of my first-author backsheet-removal research, 13 May 2026">Read coverage ↗</a><label class="research-news-pause"><input class="research-news-motion" type="checkbox" aria-label="Pause moving update">Pause motion</label></section>`;

export const mediaRecognition = `<section class="media-recognition" id="media-coverage" aria-labelledby="media-recognition-title"><span class="small-label">Media coverage · <time datetime="2026-05-13">13 May 2026</time></span><h2 id="media-recognition-title">First-author research featured in pv magazine.</h2><p>pv magazine covered my first-author paper, <em>Laser removal of silicon solar cell backsheet while preserving tempered glass and silicon wafer</em>, published in <em>Solar Energy Materials and Solar Cells</em>. The study demonstrates continuous-wave infrared laser backsheet separation while preserving glass and silicon under optimized conditions.</p><p>Authors: Mahantesh Khetri, Pawan K. Kanaujia, and Mool C. Gupta.</p><div class="media-recognition-links">${A(mediaUrl,'Read media coverage ↗','text-link')}${A(paperUrl,'Read the first-author paper ↗','text-link')}</div></section>`;
