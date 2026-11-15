import {storyPhoto,photoDialog} from './story-photos.mjs';
import {save,A} from './templates.mjs';

const photo=(file,alt,width,height,caption,extra='',eager=false)=>`<figure class="hobby-photo ${extra}"><a href="/assets/${file}" aria-label="Open full photograph: ${alt}"><img src="/assets/${file}" alt="${alt}" width="${width}" height="${height}" loading="${eager?'eager':'lazy'}"${eager?' fetchpriority="high"':''}></a><figcaption>${caption}</figcaption></figure>`;

save('/hobbies/','Personal hobbies | GSM pump controller','Independently developed during COVID and field-tested in 2020–21: an SMS-based submersible-pump controller with electrical monitoring, scheduling, and protective shutdown.',
`<article class="wrap hobby-project gsm-project" id="gsm-controller">
  <div class="gsm-intro">
    <span class="small-label">Independent hobby project · SMS-based submersible-pump system</span>
    <h1>GSM pump control,<br>monitoring &amp; protection.</h1>
    <p class="gsm-ownership">During COVID, I took this hobby project from idea to field operation entirely independently: I conceptualised, planned, designed, built, programmed, tested, and integrated the system myself.</p>
    <div class="gsm-badges" aria-label="Project highlights"><span>Field-tested in 2020–21</span><span>Text commands · No internet required</span><span>Custom electronics &amp; firmware</span></div>
  </div>
  <div class="gsm-overview">
    <div class="gsm-setting">
      ${photo('krishna-river-pumps.png','Irrigation pumps mounted on floating platforms on the Krishna River',1348,736,'Built around a local need: operating and monitoring irrigation pumps without repeated trips to the river.','gsm-river',true)}
      <div class="gsm-impact"><strong>3–4 field prototypes</strong><span>Evaluated over months of operation with existing agricultural motor starters.</span></div>
    </div>
    <section class="gsm-capabilities" aria-labelledby="capabilities-heading">
      <span class="small-label">Control + monitoring + failure prevention</span>
      <h2 id="capabilities-heading">Controller capabilities</h2>
      <ul>
        <li><strong>Monitor:</strong> motor load/current, supply voltage and phase availability, running status, and operating schedule.</li>
        <li><strong>Check continuously:</strong> phase readiness and valid two-phase or three-phase supply conditions.</li>
        <li><strong>Protect:</strong> detect dry-run, underload, and overload conditions; stop the motor and send an SMS alert when configured limits are breached.</li>
        <li><strong>Coordinate:</strong> work with capacitor-assisted phase converters and existing two-phase or three-phase starter hardware.</li>
        <li><strong>Schedule:</strong> accept operating schedules, set timers, and shut down after the programmed duration.</li>
        <li><strong>Control by text:</strong> start/stop commands, status notifications, automatic/manual modes, and settings retained across power interruptions.</li>
      </ul>
    </section>
  </div>
  <nav class="gsm-jumps" aria-label="GSM project sections">${A('#field-testing','Field testing')}${A('#hardware-development','Hardware development')}${A('#early-circuits','Early circuit testing')}${A('#project-outcome','Project outcome')}</nav>

  <section class="gsm-section gsm-field" id="field-testing" aria-labelledby="field-heading">
    <div class="gsm-section-heading"><span class="small-label">2020–21 · From a local problem to field operation</span><h2 id="field-heading">Built for the conditions at the pump.</h2><p>Unreliable power meant repeated journeys to remote irrigation pumps, sometimes at night or in heavy rain. I developed an SMS-based submersible-pump control and monitoring system that could retrofit existing starters, retain their contactors and protections, and give farmers useful operating information from an ordinary phone.</p></div>
    <div class="gsm-field-grid">
      ${photo('gsm-field-panel.jpg','An agricultural motor-starter panel with the modular GSM controller installed below',4000,3000,'Field integration: the controller connected to an existing agricultural motor-starter panel.')}
      <div class="gsm-field-notes"><h3>What I tested and resolved</h3><ul><li><strong>Real installations:</strong> approximately three to four prototypes, including systems with roughly 10 HP centrifugal pumps.</li><li><strong>Starter compatibility:</strong> phase checks, start-ready signals, and timing coordinated with existing motor-control hardware.</li><li><strong>Electrical disturbances:</strong> traced controller resets near contactors and voltage drops during GSM transmission.</li><li><strong>Improved stability:</strong> refined regulation, filtering, decoupling, local energy storage, and transient suppression.</li></ul></div>
      ${photo('gsm-starter-integration.jpg','Prototype electronics connected to the control circuitry of an agricultural pump starter',4000,3000,'Testing alongside the contactors, sensing connections, and starter circuitry.','gsm-integration-photo')}
    </div>
  </section>

  <section class="gsm-section" id="hardware-development" aria-labelledby="hardware-heading">
    <div class="gsm-section-heading"><span class="small-label">Hardware development</span><h2 id="hardware-heading">From interconnected modules to a custom PCB.</h2><p>I developed the electronics and embedded C/C++ firmware together, then redesigned the modular system into a compact board to simplify wiring, assembly, and integration.</p></div>
    <div class="gsm-hardware-grid">
      <section class="gsm-hardware-card" aria-labelledby="prototype-heading"><span class="small-label">Phase 1 · Module-based prototype</span><h3 id="prototype-heading">Integrate, program, and field-test.</h3><ul>
        <li><strong>Arduino Uno R3 / ATmega328P:</strong> automation and motor-control logic.</li>
        <li><strong>SIM800L GSM/GPRS:</strong> SMS commands, status updates, and notifications.</li>
        <li><strong>ACS712 30A + current transformer:</strong> motor-current sensing and abnormal-load detection.</li>
        <li><strong>5V dual-channel relay module:</strong> interface to existing starters and contactors.</li>
        <li><strong>AC-DC / DC-DC modules:</strong> low-voltage power conversion and regulation.</li>
        <li><strong>External phase/voltage interface:</strong> supply availability and operating-condition monitoring.</li>
      </ul></section>
      <section class="gsm-hardware-card" aria-labelledby="pcb-heading"><span class="small-label">Phase 2 · Custom PCB</span><h3 id="pcb-heading">Redesign and integrate the circuitry.</h3><ul>
        <li><strong>ATmega328P + SIM800L interface:</strong> onboard control and GSM connectivity without a separate Arduino board.</li>
        <li><strong>MB10S rectifiers + H11L1 optocouplers:</strong> optically isolated AC phase detection, replacing separate transformer-based sensing modules.</li>
        <li><strong>74HC14 Schmitt triggers:</strong> stable digital phase-status signals.</li>
        <li><strong>Four Songle 5V relays:</strong> integrated starter-control switching channels.</li>
        <li><strong>Hi-Link HLK-20M05:</strong> isolated 5V, 20W AC-DC power supply.</li>
        <li><strong>Current-sensor interfaces + protection:</strong> external sensing connections, MOV surge suppression, filtering, and decoupling.</li>
      </ul></section>
    </div>
    <div class="gsm-pcb-review">
      ${photo('gsm-custom-controller.jpg','Custom controller PCB with ATmega328P microcontroller, GSM interface, four relays, and power module',768,1024,'The custom-manufactured PCB: an integrated redesign following the modular field prototypes.','gsm-pcb-photo')}
      <div><h3>A complete development cycle, owned end to end.</h3><p>I prepared the schematic and PCB layout, ordered and assembled the boards, and tested programming, communication, and relay operation.</p><ul><li><strong>Less wiring:</strong> integrated circuitry replaced multiple interconnected modules.</li><li><strong>More compact assembly:</strong> fewer separate boards and simpler external connections reduced assembly effort and component cost.</li><li><strong>Board-level troubleshooting:</strong> investigated relay flicker with the initial onboard supply by tracing voltage levels, return paths, and transient loading.</li></ul><p class="gsm-development-note">The modular prototypes were field-tested. The custom PCB demonstrated the integrated architecture and core functions; board testing identified further power-supply revisions for the next version.</p></div>
    </div>
  </section>

  <section class="gsm-section gsm-bench" id="early-circuits" aria-labelledby="bench-title"><div class="gsm-section-heading"><span class="small-label">Early circuit testing</span><h2 id="bench-title">Developing each interface on the workbench.</h2><p>Breadboard testing let me check the microcontroller, GSM communication, current sensing, and relay interfaces separately before integrating them. Accessible wiring made it easier to isolate faults and verify supply levels as I developed the firmware.</p></div><div class="story-photo-grid">${storyPhoto('gsm-workbench')}${storyPhoto('gsm-breadboard')}</div></section>

  <section class="gsm-outcome" id="project-outcome" aria-labelledby="outcome-heading"><span class="small-label">Project outcome</span><h2 id="outcome-heading">Independent engineering with a practical purpose.</h2><p>I took a farming-community problem through circuit design, firmware, field operation, troubleshooting, and a custom PCB redesign. The result was a field-tested approach to remote pump operation, electrical monitoring, scheduling, and protective shutdown, built to work with existing irrigation infrastructure.</p></section>
</article>${photoDialog}
<section class="wrap hobbies-beyond"><span class="small-label">Away from the workbench</span><h2>Cricket, the outdoors, and a planted aquarium.</h2><p>I also enjoy playing cricket, camping and kayaking with friends, and caring for my fish tank, including Sushi, my red betta. ${A('/gallery/','Visit the gallery')} for those parts of my life.</p></section>`);
