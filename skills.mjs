import {save,A,pageIntro} from './templates.mjs';

const skills=[
  ['Laser processing & micromachining','I develop process windows by connecting laser parameters, material response, and measurements of the finished surface.',[
    'Pulsed and continuous-wave lasers across UV, visible, and infrared wavelengths',
    'Selective ablation, laser debonding, photovoltaic delamination, and silver recovery',
    'Cutting and micromachining of sapphire, silicon, and silicon carbide',
    'Focus, energy input, scan speed, overlap, and multi-pass optimization'
  ],'/projects/#recycling','Photovoltaic recycling'],
  ['Optical systems & spectroscopy','I build and troubleshoot custom instruments, from the optical layout to repeatable measurements.',[
    'Shared excitation and collection optics; reflective and focusing optics',
    'Beam alignment, spectral filtering, and fiber-coupled spectrometry',
    'Raman, fluorescence, LIBS, and imaging on a common platform',
    'Signal-path debugging, optical throughput, and measurement co-location'
  ],'/projects/#spectroscopy','NASA-funded spectroscopy platform'],
  ['Machine vision & motion control','I connect image analysis to physical laser processing and automated sample positioning.',[
    'OpenCV and U-Net/CNN segmentation of target features',
    'Image-to-vector toolpaths and coordinate translation',
    'Galil X/Y stages, galvo scanners, and motorized XYZ positioning',
    'TTL and driver interfaces, oscilloscopes, function generators, and motion debugging'
  ],'/projects/#recycling','Vision-guided processing'],
  ['Materials growth & vacuum processing','My experience spans bulk crystals, thin films, and the equipment used to prepare them.',[
    'Single-crystal growth of chalcogenide materials',
    'Pulsed-laser deposition (PLD/PVD) and vacuum thermal evaporation',
    'High-vacuum equipment operation and troubleshooting',
    'Controlled post-oxidation, sample preparation, and process-property studies'
  ],'/projects/#crystals','Materials research'],
  ['Characterization & metrology','I use complementary measurements to understand how processing changes structure, composition, and functional response.',[
    'SEM/EDS, TEM/STEM, XRD, and XPS',
    'Raman, fluorescence, LIBS, FTIR, and UV-Vis spectroscopy',
    'Optical and 3D digital microscopy, profilometry, and ellipsometry',
    'PPMS, electrical and electrochemical measurements, and film resistivity'
  ],'/projects/','Research applications'],
  ['Scientific software & analysis','I develop analysis workflows that connect experimental data with process decisions.',[
    'Python for scientific data analysis and visualization',
    'Computer vision, feature extraction, and segmentation evaluation',
    'Transient thermal modeling of multilayer material stacks',
    'Image-sensor noise analysis and basic SQL'
  ],'/projects/','Analysis in practice'],
  ['Embedded electronics & prototyping','An independent agricultural automation project took me from modular prototypes to a custom controller PCB.',[
    'Arduino and ATmega328P; embedded C/C++ firmware',
    'SIM800L GSM communication, serial AT commands, and EEPROM settings',
    'Current sensing, relay interfaces, and supply-state monitoring',
    'Schematic and PCB layout, assembly, board bring-up, and field troubleshooting'
  ],'/hobbies/#gsm-controller','GSM pump-controller project'],
  ['Experimental practice & documentation','I work through integration problems systematically and document procedures so others can reproduce the work.',[
    'Experimental design and repeatability checks',
    'Class 4 laser safety and cleanroom practices',
    'Power, signal, optical, and motion-system troubleshooting',
    'Standard operating procedures, technical reports, and user training'
  ],'/documents/','Resume and academic CV'],
  ['Organization building & governance','As a founding member of Pehchaan Ek Safar, I helped turn a student initiative into a registered education NGO.',[
    'Defining mission, aims, objectives, and long-term priorities',
    'NGO registration, constitution, and organizational structure',
    'Governance and continuity across successive student teams',
    'Building a sustainable foundation for volunteer-led programs'
  ],'/community/#leadership-roles','Founding-member experience'],
  ['Team leadership & partnerships','As Secretary in 2018–2019, I helped coordinate people, resources, and external relationships during the NGO’s formative years.',[
    'Team building, volunteer recruitment, and coordination',
    'Planning priorities and organizing responsibilities',
    'Partnership development and MoUs with multiple organizations',
    'Fundraising, outreach, and external engagement'
  ],'/community/#leadership-roles','Secretary and community leadership']
];

save('/skills/','Skills & leadership','Hands-on research and engineering skills, complemented by team leadership, nonprofit governance, partnerships, and organization building.',
pageIntro('Experience gained through research, projects, and community leadership','Skills & leadership','My work combines laser-material interactions, optical instruments, materials processing, and automation. Alongside research at UVA, IIT Delhi, and IIT Ropar and independent electronics projects, co-founding Pehchaan Ek Safar developed my experience in team leadership and organization building.').replace('page-intro wrap','page-intro wrap section-intro')+
`<div class="wrap"><div class="expertise-line" aria-label="Core expertise"><span>Laser processing</span><span>Optical instrumentation</span><span>Materials characterization</span><span>Machine vision</span><span>Process development</span></div><div class="skills-grid">${skills.map(([title,desc,items,url,label],i)=>`<section class="skill-card"><span class="small-label">${String(i+1).padStart(2,'0')}</span><h2>${title}</h2><p>${desc}</p><ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul>${A(url,label+' ↗','text-link')}</section>`).join('')}</div><div class="notebook"><h2>See the work behind the skills.</h2><p>${A('/projects/','Explore my research projects')} or ${A('/documents/','download my CV and resume')} for the methods, results, and experience behind this overview.</p></div></div>`);
