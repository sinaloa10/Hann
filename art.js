/* =========================================================================
   DISTANCIA — art.js
   Fondos (SVG plano), personajes (lineart anime), props y paletas.
   Lienzo de referencia: 430 x 900 (preserveAspectRatio slice).
   ========================================================================= */

/* ---- paletas de cielo por hora/estación ---- */
const SKY = {
  amanecer:  ['#f4c8c0', '#f0b27a', '#cfa6b8'],   // primavera, alba
  dia:       ['#bcd6e8', '#d8e6ea', '#e9dfc8'],
  diaVerano: ['#a9d0e0', '#cfe2d2', '#ecead0'],
  tarde:     ['#f3c98a', '#e8a45f', '#caa07a'],
  atardecer: ['#f0a36b', '#d96f6b', '#7e5a86'],
  noche:     ['#0f1430', '#1a2046', '#2a2350'],
  nublado:   ['#9aa2ad', '#b3b8bf', '#cfd2d4'],
  otono:     ['#e8b878', '#d99a64', '#b07a5a'],   // dorado/ámbar
  invierno:  ['#aeb9c8', '#c6cdd6', '#dde2e6'],   // frío pálido
};

/* =========================================================================
   FONDOS
   ========================================================================= */
const BACKGROUNDS = {

  /* ---------- Aldea (panorámica) ---------- */
  aldea: (sky=SKY.amanecer, opts={}) => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="aldeaSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${sky[0]}"/><stop offset="0.55" stop-color="${sky[1]}"/><stop offset="1" stop-color="${sky[2]}"/>
      </linearGradient>
    </defs>
    <rect width="430" height="900" fill="url(#aldeaSky)"/>
    <circle cx="318" cy="180" r="54" fill="#fff2d8" opacity="0.6"/>
    <path d="M0 300 L70 220 L140 290 L220 200 L300 285 L370 230 L430 295 L430 360 L0 360 Z" fill="#9a86a8" opacity="0.5"/>
    <path d="M0 340 L90 270 L180 335 L270 260 L360 330 L430 285 L430 420 L0 420 Z" fill="#7d6b92" opacity="0.55"/>
    <g fill="#5d5070" opacity="0.8" transform="translate(60 250)">
      <rect x="-4" y="44" width="8" height="40"/>
      <path d="M-22 44 L22 44 L14 30 L-14 30 Z"/><path d="M-18 30 L18 30 L11 18 L-11 18 Z"/><path d="M-13 18 L13 18 L7 6 L-7 6 Z"/>
      <rect x="-2" y="0" width="4" height="8"/>
    </g>
    <rect x="0" y="380" width="430" height="520" fill="${opts.ground||'#8fa06a'}"/>
    <path d="M0 380 Q215 350 430 384 L430 520 L0 520 Z" fill="${opts.ground2||'#9caf73'}"/>
    <path d="M180 900 L205 470 L225 470 L260 900 Z" fill="#b89a6e"/>
    <path d="M205 470 L225 470 L228 520 L201 520 Z" fill="#c7aa7e"/>
    ${house(40, 560, 1.0)} ${house(300, 540, 0.9)} ${house(120, 640, 1.2)} ${house(330, 660, 1.25)}
    ${opts.smoke ? `<path d="M70 540 q-8 -30 4 -54 q-10 -20 2 -40" stroke="#d8cfc4" stroke-width="5" fill="none" opacity="0.4" stroke-linecap="round"/>` : ''}
    ${treeBy(opts.tree, -10, 560, 1.5)} ${treeBy(opts.tree, 410, 540, 1.6)}
    <g fill="#4a3f4e" opacity="0.4">
      <ellipse cx="212" cy="700" rx="4" ry="10"/><ellipse cx="232" cy="690" rx="3.5" ry="9"/><ellipse cx="196" cy="730" rx="4" ry="11"/>
    </g>
  </svg>`,

  /* ---------- Mercado (con puesto de especias) ---------- */
  mercado: (sky=SKY.dia, opts={}) => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="mktSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs>
    <rect width="430" height="900" fill="url(#mktSky)"/>
    <path d="M0 250 L120 250 L100 300 L20 300 Z" fill="#6e5746"/>
    <path d="M150 240 L300 240 L320 300 L130 300 Z" fill="#7a6149"/>
    <path d="M320 250 L430 250 L430 300 L300 300 Z" fill="#6e5746"/>
    <rect x="0" y="300" width="430" height="600" fill="#c2a87e"/>
    <rect x="0" y="300" width="430" height="40" fill="#b89a6e"/>
    <line x1="0" y1="290" x2="430" y2="270" stroke="#8a6a4a" stroke-width="2"/>
    <g>${banner(60,'#c25b54')} ${banner(140,'#3f7a86')} ${banner(220,'#d99a3f')} ${banner(300,'#7a5a86')} ${banner(370,'#c25b54')}</g>
    ${stall(20, 360, '#c46a52')} ${stall(250, 380, '#3f6f7a')}
    <!-- puesto de especias: cuencos con montículos de color -->
    <g transform="translate(96 470)">
      <rect x="-6" y="44" width="240" height="58" fill="#8a6a4a"/>
      <rect x="-6" y="40" width="240" height="8" fill="#6e5440"/>
      ${spiceBowl(20,'#c0532e')} ${spiceBowl(66,'#d99a2e')} ${spiceBowl(112,'#7a5230')} ${spiceBowl(158,'#a8823a')} ${spiceBowl(204,'#9a3b2e')}
    </g>
    <g fill="#5b4d52" opacity="0.4"><ellipse cx="370" cy="520" rx="14" ry="34"/><ellipse cx="402" cy="540" rx="13" ry="33"/></g>
  </svg>`,

  /* ---------- Río ---------- */
  rio: (sky=SKY.dia, opts={}) => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rioSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="0.6" stop-color="${sky[1]}"/><stop offset="1" stop-color="${sky[2]}"/></linearGradient>
      <linearGradient id="rioWater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[1]}" stop-opacity="0.9"/><stop offset="1" stop-color="${sky[0]}" stop-opacity="0.55"/></linearGradient>
    </defs>
    <rect width="430" height="900" fill="url(#rioSky)"/>
    ${opts.sun ? `<circle cx="330" cy="200" r="60" fill="#fff0cf" opacity="0.65"/>` : ''}
    <path d="M0 360 Q215 300 430 360 L430 430 L0 430 Z" fill="${opts.hill||'#7e8f64'}" opacity="0.8"/>
    <rect x="0" y="410" width="430" height="120" fill="${opts.bank||'#86975f'}"/>
    <path d="M-20 520 Q160 470 220 540 Q300 640 470 600 L470 760 Q280 800 180 720 Q90 660 -20 700 Z" fill="url(#rioWater)"/>
    <g stroke="#ffffff" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round">
      <line x1="60" y1="600" x2="110" y2="596"/><line x1="150" y1="640" x2="205" y2="636"/><line x1="260" y1="660" x2="320" y2="654"/><line x1="90" y1="680" x2="140" y2="676"/>
    </g>
    <path d="M-20 690 Q120 650 240 720 Q340 780 470 740 L470 900 L-20 900 Z" fill="${opts.frontBank||'#8fa066'}"/>
    <path d="M-20 690 Q120 650 240 720 Q340 780 470 740 L470 770 Q330 805 230 748 Q120 685 -20 720 Z" fill="${opts.frontBank2||'#9cae72'}"/>
    ${treeBy(opts.tree, -16, 470, 1.3)} ${treeBy(opts.tree, 412, 450, 1.4)}
    ${opts.ducks ? `<g fill="#5b4d52"><ellipse cx="150" cy="600" rx="9" ry="5"/><ellipse cx="178" cy="612" rx="8" ry="4.5"/></g>` : ''}
  </svg>`,

  /* ---------- Escaleras del templo ---------- */
  templo: (sky, opts={}) => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="toroGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffce86" stop-opacity="0.6"/><stop offset="1" stop-color="#ffce86" stop-opacity="0"/></radialGradient>
      <linearGradient id="tmpSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${(sky&&sky[0])||'#0e1230'}"/><stop offset="1" stop-color="${(sky&&sky[2])||'#241d3a'}"/></linearGradient>
    </defs>
    <rect width="430" height="900" fill="url(#tmpSky)"/>
    ${opts.night===false ? '' : `<circle cx="330" cy="120" r="40" fill="#ece8f4" opacity="0.85"/>
    <g fill="#cfc8e6"><circle cx="80" cy="90" r="1.4"/><circle cx="140" cy="150" r="1"/><circle cx="220" cy="70" r="1.2"/><circle cx="390" cy="200" r="1.1"/></g>`}
    <path d="M-20 230 L150 230 L120 290 L-20 290 Z" fill="#1a141f"/>
    <path d="M-20 222 L160 222 L150 234 L-20 234 Z" fill="#241a24"/>
    <g fill="#2c2636">${[...Array(7)].map((_,i)=>`<rect x="${60-i*8}" y="${520+i*54}" width="${310+i*16}" height="40" rx="3"/>`).join('')}</g>
    <g fill="#3a3346" opacity="0.7">${[...Array(7)].map((_,i)=>`<rect x="${60-i*8}" y="${514+i*54}" width="${310+i*16}" height="8" rx="3"/>`).join('')}</g>
    <g transform="translate(360 470)">
      <circle cx="0" cy="-6" r="46" fill="url(#toroGlow)"/>
      <rect x="-7" y="20" width="14" height="40" fill="#39323f"/><rect x="-16" y="6" width="32" height="16" rx="2" fill="#4a4150"/>
      <rect x="-12" y="-12" width="24" height="20" rx="2" fill="#5a5060"/><rect x="-7" y="-8" width="14" height="12" fill="#ffdf9a"/>
      <path d="M-18 -12 L18 -12 L10 -24 L-10 -24 Z" fill="#39323f"/>
    </g>
  </svg>`,

  /* ---------- Festival de linternas ---------- */
  festival: () => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="lanternGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffcf7a" stop-opacity="0.8"/><stop offset="1" stop-color="#ffcf7a" stop-opacity="0"/></radialGradient></defs>
    <rect width="430" height="900" fill="#16142e"/>
    <rect y="500" width="430" height="400" fill="#231b2a"/>
    <circle cx="70" cy="110" r="34" fill="#ede9f4" opacity="0.7"/>
    <path d="M0 360 L110 360 L92 410 L18 410 Z" fill="#3a2e3a"/>
    <path d="M300 350 L430 350 L430 410 L282 410 Z" fill="#3a2e3a"/>
    <path d="M-10 200 Q215 250 440 190" stroke="#5a4a52" stroke-width="2" fill="none"/>
    <path d="M-10 300 Q215 360 440 300" stroke="#5a4a52" stroke-width="2" fill="none"/>
    ${[40,110,180,250,320,390].map((x,i)=>lantern(x, 222+(i%2?14:0))).join('')}
    ${[80,160,240,320,400].map((x,i)=>lantern(x, 328+(i%2?12:0), 0.85)).join('')}
    <g fill="#0e0a18" opacity="0.6"><ellipse cx="120" cy="560" rx="16" ry="44"/><ellipse cx="300" cy="565" rx="16" ry="46"/><ellipse cx="350" cy="585" rx="15" ry="44"/></g>
  </svg>`,

  /* ---------- Puente de piedra (festival al fondo) ---------- */
  puente: () => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="fglow" cx="0.5" cy="0.4" r="0.6"><stop offset="0" stop-color="#ffb86a" stop-opacity="0.45"/><stop offset="1" stop-color="#ffb86a" stop-opacity="0"/></radialGradient>
      <linearGradient id="pwater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2348"/><stop offset="1" stop-color="#15122a"/></linearGradient>
    </defs>
    <rect width="430" height="900" fill="#14122c"/>
    <circle cx="350" cy="120" r="30" fill="#ece8f4" opacity="0.7"/>
    <!-- festival lejano (resplandor + linternas pequeñas) -->
    <ellipse cx="120" cy="320" rx="180" ry="90" fill="url(#fglow)"/>
    ${[60,100,140,180].map((x,i)=>lantern(x, 280+(i%2?10:0), 0.5)).join('')}
    <g fill="#2a2238" opacity="0.8"><path d="M0 330 L90 330 L78 370 L12 370 Z"/><path d="M150 320 L240 320 L252 370 L138 370 Z"/></g>
    <!-- agua -->
    <rect x="0" y="560" width="430" height="340" fill="url(#pwater)"/>
    <g stroke="#6a5e86" stroke-opacity="0.4" stroke-width="2"><line x1="40" y1="640" x2="100" y2="636"/><line x1="200" y1="680" x2="270" y2="676"/><line x1="120" y1="720" x2="180" y2="716"/></g>
    <!-- puente de piedra en arco -->
    <path d="M-20 560 Q215 470 450 560 L450 600 Q215 514 -20 600 Z" fill="#3a3548"/>
    <path d="M-20 556 Q215 466 450 556 L450 572 Q215 484 -20 572 Z" fill="#4a4458"/>
    <!-- baranda -->
    <path d="M-20 540 Q215 452 450 540" stroke="#5a5468" stroke-width="6" fill="none"/>
    ${[20,90,160,250,330,400].map(x=>`<rect x="${x}" y="${484 + Math.abs(x-215)*0.18}" width="6" height="${56 - Math.abs(x-215)*0.04}" fill="#4a4458"/>`).join('')}
  </svg>`,

  /* ---------- Interior, vela, de noche (la caja) ---------- */
  cuarto: () => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="velaGlow" cx="0.5" cy="0.6" r="0.55"><stop offset="0" stop-color="#f6d79a" stop-opacity="0.5"/><stop offset="1" stop-color="#f6d79a" stop-opacity="0"/></radialGradient></defs>
    <rect width="430" height="900" fill="#241d28"/>
    <rect x="20" y="60" width="390" height="430" fill="#3a3340"/>
    <g stroke="#564c5a" stroke-width="2">
      ${[...Array(5)].map((_,i)=>`<line x1="${20+i*97.5}" y1="60" x2="${20+i*97.5}" y2="490"/>`).join('')}
      ${[...Array(5)].map((_,i)=>`<line x1="20" y1="${60+i*107}" x2="410" y2="${60+i*107}"/>`).join('')}
    </g>
    <rect x="250" y="100" width="120" height="140" fill="#2a2f4e"/>
    <circle cx="320" cy="150" r="26" fill="#e9e6f2" opacity="0.85"/>
    <g stroke="#564c5a" stroke-width="2"><line x1="310" y1="100" x2="310" y2="240"/><line x1="250" y1="170" x2="370" y2="170"/></g>
    <rect x="0" y="490" width="430" height="410" fill="#5a4636"/>
    <g stroke="#48372a" stroke-width="2">${[...Array(6)].map((_,i)=>`<line x1="0" y1="${520+i*64}" x2="430" y2="${520+i*64}"/>`).join('')}</g>
    <rect x="0" y="300" width="430" height="600" fill="url(#velaGlow)"/>
    <g>
      <rect x="196" y="600" width="14" height="44" fill="#e8d6b0"/>
      <ellipse cx="203" cy="646" rx="22" ry="7" fill="#3a2e26"/>
      <path d="M203 576 q-9 14 0 24 q9 -10 0 -24" fill="#ffd27a"/>
      <path d="M203 582 q-5 8 0 14 q5 -6 0 -14" fill="#fff4cf"/>
    </g>
  </svg>`,

  /* ---------- Exterior de casa, de noche (estrellas) ---------- */
  casanoche: () => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cnSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0e26"/><stop offset="0.6" stop-color="#141838"/><stop offset="1" stop-color="#20203f"/></linearGradient></defs>
    <rect width="430" height="900" fill="url(#cnSky)"/>
    <g fill="#d7d0ee">
      <circle cx="40" cy="80" r="1.5" opacity="0.9"/><circle cx="110" cy="60" r="1" opacity="0.6"/><circle cx="180" cy="110" r="1.2" opacity="0.7"/>
      <circle cx="250" cy="70" r="1" opacity="0.5"/><circle cx="320" cy="120" r="1.4" opacity="0.8"/><circle cx="390" cy="80" r="1" opacity="0.6"/>
      <circle cx="70" cy="180" r="1.1" opacity="0.6"/><circle cx="360" cy="200" r="1.2" opacity="0.6"/><circle cx="200" cy="200" r="1" opacity="0.5"/>
      <circle cx="280" cy="160" r="1.1" opacity="0.6"/><circle cx="130" cy="220" r="1" opacity="0.5"/>
    </g>
    <!-- luna creciente -->
    <g transform="translate(330 130)"><circle r="30" fill="#ece8f4" opacity="0.9"/><circle cx="12" cy="-6" r="28" fill="#0a0e26"/></g>
    <!-- colina + árbol -->
    <path d="M0 560 Q215 520 430 560 L430 900 L0 900 Z" fill="#11152e"/>
    <path d="M0 640 Q215 610 430 644 L430 900 L0 900 Z" fill="#171a36"/>
    <!-- casa silueta con ventana cálida -->
    <g transform="translate(250 540)">
      <rect x="0" y="40" width="120" height="80" fill="#0e1126"/>
      <path d="M-14 42 L134 42 L110 6 L10 6 Z" fill="#080a1c"/>
      <rect x="24" y="64" width="30" height="34" fill="#f0c878" opacity="0.85"/>
      <rect x="24" y="64" width="30" height="34" fill="none" stroke="#0e1126" stroke-width="2"/>
    </g>
    <g transform="translate(20 470) scale(1.2)">
      <path d="M30 120 q-6 -60 4 -96" stroke="#0c0f24" stroke-width="7" fill="none"/>
      <g fill="#1a1d3a"><circle cx="10" cy="14" r="26"/><circle cx="40" cy="2" r="30"/><circle cx="68" cy="20" r="26"/><circle cx="40" cy="22" r="26"/></g>
    </g>
  </svg>`,

  /* ---------- Vista general de la aldea desde la colina (panorámica) ---------- */
  vista: (sky=SKY.amanecer) => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vistaSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${sky[0]}"/><stop offset="0.5" stop-color="${sky[1]}"/><stop offset="1" stop-color="${sky[2]}"/>
      </linearGradient>
      <linearGradient id="vistaWater" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${sky[0]}" stop-opacity="0.9"/><stop offset="1" stop-color="${sky[1]}" stop-opacity="0.5"/>
      </linearGradient>
    </defs>
    <rect width="430" height="900" fill="url(#vistaSky)"/>
    <circle cx="322" cy="150" r="44" fill="#fff2d8" opacity="0.7"/>
    <!-- montañas en capas -->
    <path d="M0 300 L70 210 L150 285 L235 195 L315 280 L385 220 L430 285 L430 380 L0 380 Z" fill="#8a7a9a" opacity="0.45"/>
    <path d="M0 350 L100 260 L200 335 L300 250 L400 330 L430 295 L430 440 L0 440 Z" fill="#6e6088" opacity="0.55"/>
    <!-- pagoda lejana -->
    <g fill="#564a68" opacity="0.7" transform="translate(360 280)">
      <rect x="-3" y="40" width="6" height="34"/><path d="M-18 40 L18 40 L11 28 L-11 28 Z"/><path d="M-14 28 L14 28 L8 16 L-8 16 Z"/><path d="M-10 16 L10 16 L5 6 L-5 6 Z"/>
    </g>
    <!-- valle -->
    <rect x="0" y="400" width="430" height="500" fill="#7e9456"/>
    <path d="M0 400 Q215 372 430 408 L430 560 L0 560 Z" fill="#8aa25e"/>
    <!-- campos de arroz (terrazas con agua) -->
    <g opacity="0.85">
      <path d="M-10 540 Q120 515 250 545 Q340 565 440 548 L440 580 Q340 596 250 576 Q120 547 -10 572 Z" fill="url(#vistaWater)"/>
      <path d="M-10 600 Q140 575 280 606 Q360 622 440 608 L440 642 Q360 656 280 638 Q140 608 -10 634 Z" fill="url(#vistaWater)"/>
      <path d="M-10 664 Q120 640 260 672 Q350 690 440 674 L440 712 Q350 726 260 706 Q120 674 -10 702 Z" fill="url(#vistaWater)"/>
    </g>
    <g stroke="#5e7444" stroke-width="2" opacity="0.5" fill="none">
      <path d="M-10 558 Q120 533 250 563"/><path d="M-10 622 Q140 597 280 628"/>
    </g>
    <!-- río serpenteante -->
    <path d="M150 900 Q190 800 168 730 Q140 660 196 600 Q244 552 220 500 Q200 460 232 420 L250 420 Q224 462 244 500 Q272 556 222 604 Q172 656 200 724 Q224 800 188 900 Z" fill="url(#vistaWater)" opacity="0.8"/>
    <!-- casas de la aldea con techo de paja + humo recto -->
    ${thatchHouse(70, 520, 0.9)} ${thatchHouse(150, 560, 1.0)} ${thatchHouse(300, 540, 0.95)} ${thatchHouse(350, 600, 1.05)}
    <g stroke="#e6ddd0" stroke-width="4" fill="none" opacity="0.4" stroke-linecap="round">
      <path d="M104 514 q-4 -36 2 -64 q-4 -22 2 -42"/>
      <path d="M330 534 q4 -34 -2 -62 q4 -22 -2 -40"/>
    </g>
    <!-- cerezos enmarcando -->
    ${sakuraTree(-14, 470, 1.4)} ${sakuraTree(408, 450, 1.5)}
  </svg>`,

  /* ---------- Taller de carpintería (interior) ---------- */
  taller: () => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="tallerGlow" cx="0.66" cy="0.32" r="0.6"><stop offset="0" stop-color="#f6dca8" stop-opacity="0.55"/><stop offset="1" stop-color="#f6dca8" stop-opacity="0"/></radialGradient></defs>
    <rect width="430" height="900" fill="#2c2016"/>
    <!-- pared de tablones -->
    <rect x="0" y="0" width="430" height="540" fill="#3a2a1c"/>
    <g stroke="#2a1d12" stroke-width="2">${[...Array(7)].map((_,i)=>`<line x1="${i*62}" y1="0" x2="${i*62}" y2="540"/>`).join('')}</g>
    <!-- ventana con luz de mañana -->
    <rect x="250" y="80" width="130" height="150" fill="#cdb98a"/>
    <g stroke="#3a2a1c" stroke-width="4"><line x1="315" y1="80" x2="315" y2="230"/><line x1="250" y1="155" x2="380" y2="155"/></g>
    <rect x="0" y="0" width="430" height="900" fill="url(#tallerGlow)"/>
    <!-- herramientas colgadas -->
    <g stroke="#caa56e" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M40 70 L40 140 M28 70 L52 70"/>
      <path d="M90 70 L90 150 M84 150 L96 150"/>
      <path d="M140 72 L160 132 M150 70 L168 78"/>
    </g>
    <g fill="#8a6a44"><rect x="34" y="138" width="12" height="36" rx="2"/><rect x="146" y="128" width="10" height="30" rx="2"/></g>
    <!-- piso -->
    <rect x="0" y="540" width="430" height="360" fill="#5a4330"/>
    <g stroke="#48372a" stroke-width="2">${[...Array(6)].map((_,i)=>`<line x1="0" y1="${574+i*60}" x2="430" y2="${574+i*60}"/>`).join('')}</g>
    <!-- banco de trabajo -->
    <g>
      <rect x="20" y="560" width="180" height="22" fill="#6e5236"/>
      <rect x="30" y="582" width="14" height="70" fill="#5a4330"/><rect x="176" y="582" width="14" height="70" fill="#5a4330"/>
      <rect x="60" y="548" width="50" height="14" rx="2" fill="#8a6a44"/>
    </g>
    <!-- tablones recargados + virutas -->
    <g><rect x="360" y="380" width="16" height="180" fill="#7a5c3c" transform="rotate(8 368 470)"/><rect x="382" y="380" width="16" height="180" fill="#6e5236" transform="rotate(8 390 470)"/></g>
    <g fill="#caa56e" opacity="0.6"><path d="M230 650 q10 -6 18 0 q-8 6 -18 0z"/><path d="M260 668 q10 -6 18 0 q-8 6 -18 0z"/><path d="M210 672 q10 -6 18 0 q-8 6 -18 0z"/></g>
  </svg>`,

  /* ---------- Techo del taller, de noche (estrellas) ---------- */
  techo: () => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="techoSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0e26"/><stop offset="0.6" stop-color="#141838"/><stop offset="1" stop-color="#23244a"/></linearGradient></defs>
    <rect width="430" height="900" fill="url(#techoSky)"/>
    <g fill="#d7d0ee">
      <circle cx="40" cy="70" r="1.5" opacity="0.9"/><circle cx="110" cy="50" r="1" opacity="0.6"/><circle cx="180" cy="100" r="1.2" opacity="0.7"/>
      <circle cx="250" cy="60" r="1" opacity="0.5"/><circle cx="320" cy="110" r="1.4" opacity="0.8"/><circle cx="390" cy="70" r="1" opacity="0.6"/>
      <circle cx="70" cy="160" r="1.1" opacity="0.6"/><circle cx="360" cy="190" r="1.2" opacity="0.6"/><circle cx="200" cy="180" r="1" opacity="0.5"/>
      <circle cx="280" cy="150" r="1.1" opacity="0.6"/><circle cx="130" cy="210" r="1" opacity="0.5"/><circle cx="420" cy="140" r="1" opacity="0.5"/>
    </g>
    <circle cx="86" cy="120" r="40" fill="#ece8f4" opacity="0.9"/>
    <circle cx="74" cy="110" r="40" fill="#0a0e26" opacity="0.55"/>
    <!-- aldea + montañas silueta -->
    <path d="M0 470 L80 400 L160 465 L250 395 L340 460 L430 405 L430 560 L0 560 Z" fill="#11152e"/>
    <g fill="#0c1024">
      ${[20,90,170,250,330,390].map(x=>`<g transform="translate(${x} 488)"><rect x="0" y="14" width="48" height="30"/><path d="M-8 16 L56 16 L40 0 L8 0 Z"/></g>`).join('')}
    </g>
    <!-- techo en primer plano (pendiente con tejas) -->
    <path d="M-20 660 L450 600 L450 900 L-20 900 Z" fill="#3a2c20"/>
    <path d="M-20 660 L450 600 L450 628 L-20 690 Z" fill="#4a3826"/>
    <g stroke="#2a2016" stroke-width="2" opacity="0.7">
      ${[...Array(9)].map((_,i)=>`<line x1="${-20+i*52}" y1="${690 - i*1}" x2="${-10+i*52}" y2="900"/>`).join('')}
    </g>
  </svg>`,

  /* ---------- Camino entre árboles (al río del norte) ---------- */
  camino: (sky=SKY.tarde, opts={}) => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="caminoSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="0.6" stop-color="${sky[1]}"/><stop offset="1" stop-color="${sky[2]}"/></linearGradient></defs>
    <rect width="430" height="900" fill="url(#caminoSky)"/>
    ${opts.sun ? `<circle cx="215" cy="250" r="48" fill="#fff0cf" opacity="0.6"/>` : ''}
    <!-- suelo / pradera -->
    <rect x="0" y="430" width="430" height="470" fill="#7c9252"/>
    <path d="M0 430 Q215 405 430 434 L430 560 L0 560 Z" fill="#88a05a"/>
    <!-- camino de tierra que se aleja -->
    <path d="M150 900 L200 470 L230 470 L290 900 Z" fill="#b89a6e"/>
    <path d="M200 470 L230 470 L236 540 L196 540 Z" fill="#c7aa7e"/>
    <g stroke="#a88a5e" stroke-width="2" opacity="0.5"><path d="M168 760 L300 760" /><path d="M178 660 L268 660"/></g>
    <!-- árboles a ambos lados, arqueando -->
    ${treeBy(opts.tree, -20, 380, 1.5)} ${treeBy(opts.tree, 60, 430, 1.1)}
    ${treeBy(opts.tree, 360, 360, 1.6)} ${treeBy(opts.tree, 300, 430, 1.0)}
    <!-- ramas que cruzan arriba -->
    <path d="M0 230 Q140 180 200 250 M430 210 Q300 170 240 250" stroke="#5a4636" stroke-width="6" fill="none" opacity="0.7"/>
  </svg>`,

  /* ---------- Patio de arquería del templo (exterior) ---------- */
  arqueria: (sky=SKY.tarde, opts={}) => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="arqSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="0.55" stop-color="${sky[1]}"/><stop offset="1" stop-color="${sky[2]}"/></linearGradient></defs>
    <rect width="430" height="900" fill="url(#arqSky)"/>
    ${opts.sun ? `<circle cx="92" cy="180" r="50" fill="#fff0cf" opacity="0.6"/>` : ''}
    <!-- arboleda al fondo -->
    <path d="M0 300 Q120 250 240 300 Q340 260 430 300 L430 380 L0 380 Z" fill="#7e8f5e" opacity="0.6"/>
    ${treeBy(opts.tree, -16, 250, 1.3)} ${treeBy(opts.tree, 392, 240, 1.4)}
    <!-- alero del templo (techo de madera a la derecha) -->
    <path d="M250 250 L470 250 L470 210 L300 210 Z" fill="#5a4334"/>
    <path d="M250 250 L470 250 L470 262 L256 262 Z" fill="#42301f"/>
    <rect x="300" y="262" width="14" height="120" fill="#6e5746"/>
    <rect x="430" y="262" width="14" height="120" fill="#6e5746"/>
    <!-- explanada de tierra batida -->
    <rect x="0" y="380" width="430" height="520" fill="#cdb487"/>
    <rect x="0" y="380" width="430" height="44" fill="#bfa478"/>
    <!-- líneas de tiro -->
    <g stroke="#a98f63" stroke-width="2" opacity="0.6"><line x1="0" y1="640" x2="430" y2="640"/><line x1="0" y1="720" x2="430" y2="720"/></g>
    <!-- dianas (mato) al fondo izquierdo -->
    <g transform="translate(46 470)">
      <ellipse cx="0" cy="54" rx="30" ry="9" fill="#9a7a4e"/>
      <circle cx="0" cy="24" r="30" fill="#f0e6d2" stroke="${INK}" stroke-width="2"/>
      <circle cx="0" cy="24" r="20" fill="#fbf6ec"/><circle cx="0" cy="24" r="10" fill="#f0e6d2"/>
      <circle cx="0" cy="24" r="4" fill="#c0532e"/>
      <rect x="-3" y="48" width="6" height="22" fill="#6e5746"/>
    </g>
    <g transform="translate(118 484) scale(0.86)">
      <ellipse cx="0" cy="54" rx="30" ry="9" fill="#9a7a4e"/>
      <circle cx="0" cy="24" r="30" fill="#f0e6d2" stroke="${INK}" stroke-width="2"/>
      <circle cx="0" cy="24" r="20" fill="#fbf6ec"/><circle cx="0" cy="24" r="10" fill="#f0e6d2"/>
      <circle cx="0" cy="24" r="4" fill="#c0532e"/>
      <rect x="-3" y="48" width="6" height="22" fill="#6e5746"/>
    </g>
    <!-- soporte de arcos a la derecha -->
    <g transform="translate(360 470)">
      <rect x="-2" y="0" width="4" height="120" fill="#6e5746"/><rect x="60" y="0" width="4" height="120" fill="#6e5746"/>
      <rect x="-6" y="-2" width="74" height="6" fill="#5a4334"/>
      <path d="M14 6 q-10 56 0 110" stroke="#7a5a3a" stroke-width="3" fill="none"/>
      <path d="M40 6 q-10 56 0 110" stroke="#7a5a3a" stroke-width="3" fill="none"/>
    </g>
    <!-- figuras lejanas del grupo (siluetas tenues) -->
    <g fill="#6e6354" opacity="0.34">
      <ellipse cx="206" cy="560" rx="13" ry="38"/><ellipse cx="250" cy="552" rx="12" ry="36"/>
    </g>
  </svg>`,

  /* ---------- Cocina de la casa de Kenzo (interior, fogón) ---------- */
  cocina: () => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="hearthGlow" cx="0.34" cy="0.62" r="0.5"><stop offset="0" stop-color="#f6c878" stop-opacity="0.55"/><stop offset="1" stop-color="#f6c878" stop-opacity="0"/></radialGradient></defs>
    <rect width="430" height="900" fill="#2a2118"/>
    <!-- pared de madera -->
    <rect x="0" y="0" width="430" height="520" fill="#3a2c20"/>
    <g stroke="#4a382a" stroke-width="2">${[...Array(6)].map((_,i)=>`<line x1="${i*86}" y1="0" x2="${i*86}" y2="520"/>`).join('')}</g>
    <!-- estante con utensilios y tarros -->
    <rect x="40" y="120" width="350" height="10" fill="#5a4332"/>
    <g>
      <rect x="60" y="92" width="26" height="28" rx="3" fill="#9a7a52"/><rect x="100" y="86" width="22" height="34" rx="3" fill="#7a5a3e"/>
      <rect x="140" y="96" width="24" height="24" rx="3" fill="#8a6a44"/>
      <circle cx="300" cy="104" r="14" fill="none" stroke="#caa56e" stroke-width="3"/><circle cx="334" cy="106" r="11" fill="none" stroke="#caa56e" stroke-width="3"/>
    </g>
    <!-- ventana con luz tenue -->
    <rect x="280" y="180" width="110" height="110" fill="#1c2236"/>
    <g stroke="#4a382a" stroke-width="3"><line x1="335" y1="180" x2="335" y2="290"/><line x1="280" y1="235" x2="390" y2="235"/></g>
    <!-- piso -->
    <rect x="0" y="520" width="430" height="380" fill="#5a4636"/>
    <g stroke="#48372a" stroke-width="2">${[...Array(5)].map((_,i)=>`<line x1="0" y1="${560+i*70}" x2="430" y2="${560+i*70}"/>`).join('')}</g>
    <!-- fogón (irori) con olla y resplandor -->
    <rect x="0" y="300" width="430" height="600" fill="url(#hearthGlow)"/>
    <g transform="translate(120 600)">
      <rect x="-70" y="20" width="140" height="90" rx="6" fill="#241b14"/>
      <rect x="-70" y="20" width="140" height="16" fill="#3a2c20"/>
      <!-- brasas -->
      <g fill="#e8772f"><circle cx="-20" cy="64" r="6"/><circle cx="0" cy="70" r="7"/><circle cx="22" cy="62" r="5"/></g>
      <g fill="#ffce6a" opacity="0.8"><circle cx="-18" cy="64" r="3"/><circle cx="2" cy="70" r="3"/></g>
      <!-- gancho y olla -->
      <line x1="0" y1="-40" x2="0" y2="18" stroke="#2a2018" stroke-width="4"/>
      <path d="M-34 30 q0 40 34 40 q34 0 34 -40 z" fill="#43352a" stroke="${INK}" stroke-width="2"/>
      <ellipse cx="0" cy="30" rx="34" ry="9" fill="#2a2018"/>
      <path d="M-14 14 q4 -12 14 -16 M2 14 q4 -12 14 -16" stroke="#cfbfa0" stroke-width="3" fill="none" opacity="0.5" stroke-linecap="round"/>
    </g>
  </svg>`,

  /* ---------- Barca de río con pasajeros ---------- */
  barca: (sky=SKY.dia, opts={}) => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="barcaSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="0.6" stop-color="${sky[1]}"/><stop offset="1" stop-color="${sky[2]}"/></linearGradient>
      <linearGradient id="barcaWater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[1]}"/><stop offset="1" stop-color="${sky[0]}"/></linearGradient>
    </defs>
    <rect width="430" height="900" fill="url(#barcaSky)"/>
    ${opts.sun ? `<circle cx="330" cy="170" r="52" fill="#fff0cf" opacity="0.6"/>` : ''}
    <!-- riberas lejanas -->
    <path d="M0 300 Q120 270 250 300 Q340 280 430 300 L430 360 L0 360 Z" fill="#7e8f5e" opacity="0.7"/>
    ${treeBy(opts.tree, -16, 250, 1.1)} ${treeBy(opts.tree, 398, 240, 1.2)}
    <!-- agua -->
    <rect x="0" y="340" width="430" height="560" fill="url(#barcaWater)"/>
    <g stroke="#ffffff" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round">
      <line x1="40" y1="400" x2="100" y2="396"/><line x1="220" y1="430" x2="290" y2="426"/><line x1="120" y1="470" x2="180" y2="466"/><line x1="300" y1="450" x2="370" y2="446"/>
    </g>
    <!-- borda trasera de la barca (visible sobre la caja de diálogo) -->
    <path d="M-30 520 Q215 486 460 520 L460 560 Q215 526 -30 560 Z" fill="#6e5440"/>
    <path d="M-30 520 Q215 486 460 520 L460 534 Q215 500 -30 534 Z" fill="#86694c"/>
    <!-- casco / interior -->
    <path d="M-30 556 Q215 530 460 556 L470 900 L-40 900 Z" fill="#5a4636"/>
    <path d="M-30 556 Q215 530 460 556 L466 600 Q215 574 -36 600 Z" fill="#6e5440"/>
    <g stroke="#4a382a" stroke-width="2">${[...Array(5)].map((_,i)=>`<line x1="-30" y1="${640+i*46}" x2="460" y2="${640+i*46}"/>`).join('')}</g>
    <!-- bordes laterales que suben -->
    <path d="M-20 520 L-10 700" stroke="#5a4332" stroke-width="10" stroke-linecap="round"/>
    <path d="M450 520 L440 700" stroke="#5a4332" stroke-width="10" stroke-linecap="round"/>
    <!-- mercancía: cestas y sacos al fondo, sobre la borda -->
    <g transform="translate(46 470)"><ellipse cx="0" cy="30" rx="26" ry="12" fill="#9a7a4e"/><path d="M-26 30 q0 -30 26 -30 q26 0 26 30 z" fill="#a8854e"/><g stroke="#7a5a36" stroke-width="1.5"><line x1="-16" y1="8" x2="-16" y2="30"/><line x1="0" y1="0" x2="0" y2="30"/><line x1="16" y1="8" x2="16" y2="30"/></g></g>
    <g transform="translate(376 472)"><path d="M-24 32 q-6 -42 24 -42 q30 0 24 42 z" fill="#b6a070"/><ellipse cx="0" cy="32" rx="24" ry="9" fill="#9a8456"/></g>
    <!-- remo del barquero -->
    <line x1="430" y1="470" x2="384" y2="600" stroke="#6e5440" stroke-width="6" stroke-linecap="round"/>
  </svg>`,

  /* ---------- Matsumoto: calle/mercado de ciudad (más grande) ---------- */
  matsumoto: (sky=SKY.dia, opts={}) => `
  <svg viewBox="0 0 430 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="matSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs>
    <rect width="430" height="900" fill="url(#matSky)"/>
    <!-- castillo / torre al fondo (Matsumoto-jō evocado) -->
    <g transform="translate(300 130)" fill="#4a4458" opacity="0.7">
      <rect x="-2" y="70" width="44" height="60"/>
      <path d="M-14 70 L54 70 L44 52 L-4 52 Z"/><path d="M-8 52 L48 52 L40 36 L0 36 Z"/><path d="M0 36 L40 36 L32 20 L8 20 Z"/>
      <rect x="16" y="10" width="8" height="12"/>
    </g>
    <!-- hileras de tejados a dos aguas -->
    <g fill="#6e5746"><path d="M-10 250 L120 250 L96 300 L14 300 Z"/><path d="M120 250 L250 250 L274 300 L96 300 Z" fill="#7a6149"/><path d="M250 250 L440 250 L440 300 L274 300 Z"/></g>
    <g fill="#4a3a2e"><path d="M-10 250 L120 250 L116 262 L-6 262 Z"/><path d="M250 250 L440 250 L440 262 L246 262 Z"/></g>
    <!-- calle -->
    <rect x="0" y="300" width="430" height="600" fill="#c2a87e"/>
    <rect x="0" y="300" width="430" height="46" fill="#b09469"/>
    <!-- guirnaldas / banderines de ciudad -->
    <line x1="0" y1="296" x2="430" y2="274" stroke="#8a6a4a" stroke-width="2"/>
    <g>${banner(40,'#c25b54')} ${banner(96,'#3f7a86')} ${banner(152,'#d99a3f')} ${banner(208,'#7a5a86')} ${banner(264,'#c25b54')} ${banner(320,'#3f7a86')} ${banner(380,'#d99a3f')}</g>
    <!-- puestos a ambos lados -->
    ${stall(6, 360, '#b6603f')} ${stall(150, 350, '#3f6f7a')} ${stall(300, 366, '#9a6a3a')}
    <!-- gentío denso (siluetas) -->
    <g fill="#5b4d52" opacity="0.42">
      <ellipse cx="60" cy="640" rx="15" ry="40"/><ellipse cx="110" cy="660" rx="16" ry="44"/><ellipse cx="170" cy="640" rx="14" ry="38"/>
      <ellipse cx="250" cy="662" rx="16" ry="44"/><ellipse cx="310" cy="642" rx="14" ry="40"/><ellipse cx="370" cy="660" rx="15" ry="42"/>
    </g>
    <g fill="#6e6058" opacity="0.3">
      <ellipse cx="90" cy="600" rx="11" ry="28"/><ellipse cx="210" cy="596" rx="11" ry="28"/><ellipse cx="340" cy="600" rx="11" ry="28"/>
    </g>
  </svg>`,
};

/* ---------- piezas reutilizables ---------- */
function treeBy(kind, x, y, s){
  if(kind==='otono') return mapleTree(x,y,s);
  if(kind==='desnudo') return bareTree(x,y,s);
  if(kind==='none') return '';
  return sakuraTree(x,y,s);
}
function house(x, y, s){
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <rect x="0" y="20" width="70" height="46" fill="#6e5746"/>
    <path d="M-8 22 L78 22 L62 -2 L8 -2 Z" fill="#4a3a2e"/><path d="M-8 22 L78 22 L74 28 L-4 28 Z" fill="#3a2c22"/>
    <rect x="14" y="36" width="18" height="30" fill="#caa56e"/><rect x="42" y="36" width="16" height="20" fill="#3a2c22"/>
  </g>`;
}
function thatchHouse(x, y, s){
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <rect x="0" y="24" width="64" height="40" fill="#7a6147"/>
    <path d="M-12 26 L76 26 L56 -4 L8 -4 Z" fill="#9a8460"/>
    <path d="M-12 26 L76 26 L70 8 L-4 8 Z" fill="#86714f"/>
    <rect x="12" y="40" width="16" height="24" fill="#3a2c22"/>
  </g>`;
}
function sakuraTree(x, y, s){
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M30 120 q-6 -60 4 -96" stroke="#5a4636" stroke-width="7" fill="none"/>
    <path d="M34 60 q-22 -8 -34 -28 M34 50 q22 -10 36 -24 M34 40 q-10 -22 -6 -40" stroke="#5a4636" stroke-width="4" fill="none"/>
    <g fill="#f1c4d4"><circle cx="10" cy="14" r="26"/><circle cx="40" cy="2" r="30"/><circle cx="68" cy="20" r="26"/><circle cx="26" cy="34" r="24"/><circle cx="56" cy="36" r="23"/><circle cx="40" cy="20" r="28"/></g>
    <g fill="#f7d6e1" opacity="0.7"><circle cx="22" cy="6" r="12"/><circle cx="54" cy="14" r="11"/><circle cx="40" cy="30" r="10"/></g>
  </g>`;
}
function mapleTree(x, y, s){
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M30 120 q-6 -60 4 -96" stroke="#5a4636" stroke-width="7" fill="none"/>
    <path d="M34 60 q-22 -8 -34 -28 M34 50 q22 -10 36 -24" stroke="#5a4636" stroke-width="4" fill="none"/>
    <g fill="#d97a3a"><circle cx="10" cy="14" r="25"/><circle cx="40" cy="2" r="29"/><circle cx="68" cy="20" r="25"/><circle cx="40" cy="20" r="27"/></g>
    <g fill="#e8983a" opacity="0.8"><circle cx="24" cy="8" r="13"/><circle cx="56" cy="16" r="12"/></g>
    <g fill="#c0542e" opacity="0.6"><circle cx="40" cy="30" r="11"/><circle cx="16" cy="26" r="9"/></g>
  </g>`;
}
function bareTree(x, y, s){
  return `<g transform="translate(${x} ${y}) scale(${s})" stroke="#4a3c34" stroke-width="5" fill="none" stroke-linecap="round">
    <path d="M34 120 L34 40"/><path d="M34 70 q-22 -16 -34 -36 M34 60 q22 -18 36 -36 M34 48 q-10 -22 -4 -42 M34 52 q14 -20 28 -30"/>
  </g>`;
}
function banner(x, c){ return `<path d="M${x} ${283 - (x/430*18)} l18 -1 l-2 36 l-14 1 z" fill="${c}" opacity="0.92"/>`; }
function stall(x, y, c){
  return `<g transform="translate(${x} ${y})">
    <rect x="0" y="40" width="150" height="14" fill="#6e5746"/><rect x="0" y="54" width="150" height="80" fill="#8a6a4a" opacity="0.5"/>
    <path d="M-10 40 L160 40 L150 6 L0 6 Z" fill="${c}"/><path d="M-10 40 L160 40 L156 14 L-6 14 Z" fill="${c}" opacity="0.7"/>
    <rect x="6" y="6" width="8" height="48" fill="#5a4636"/><rect x="136" y="6" width="8" height="48" fill="#5a4636"/>
  </g>`;
}
function spiceBowl(x, c){
  return `<g transform="translate(${x} 0)"><ellipse cx="0" cy="42" rx="20" ry="8" fill="#7a5a3e"/><path d="M-20 40 q20 -28 40 0 z" fill="${c}"/><ellipse cx="0" cy="40" rx="20" ry="6" fill="${c}"/></g>`;
}
function lantern(x, y, s=1){
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <circle cx="0" cy="6" r="30" fill="url(#lanternGlow)"/><line x1="0" y1="-16" x2="0" y2="-10" stroke="#5a4a52" stroke-width="2"/>
    <ellipse cx="0" cy="2" rx="13" ry="17" fill="#e8623f"/><ellipse cx="0" cy="2" rx="13" ry="17" fill="none" stroke="#a83a26" stroke-width="1.5"/>
    <line x1="-13" y1="2" x2="13" y2="2" stroke="#a83a26" stroke-width="1"/>
  </g>`;
}

/* =========================================================================
   PERSONAJES — lineart anime
   ========================================================================= */
const INK = '#241b2e';
const CHARACTERS = {

  /* Ella — kimono gris pálido, cabello recogido con precisión, de pie */
  ella: `
  <svg viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M60 188 q40 -22 80 0 l26 244 q-66 22 -132 0 z" fill="#d2cdc6"/>
      <path d="M60 188 q40 -22 80 0 l6 60 q-46 -16 -92 0 z" fill="#bdb7af"/>
      <path d="M100 196 L84 250 M100 196 L118 250" fill="none" stroke="${INK}" stroke-width="1.8"/>
      <rect x="60" y="262" width="80" height="30" rx="3" fill="#9a7f95"/>
      <rect x="60" y="262" width="80" height="9" fill="#866b82"/>
      <path d="M62 196 q-26 6 -30 70 l24 8 q8 -44 14 -64 z" fill="#c8c2ba"/>
      <path d="M138 196 q26 6 30 70 l-24 8 q-8 -44 -14 -64 z" fill="#c8c2ba"/>
      <path d="M86 176 q14 -12 28 0 l-2 22 q-12 -8 -24 0 z" fill="#f2dcc8"/>
      <ellipse cx="100" cy="138" rx="30" ry="34" fill="#f6e2d0"/>
      <path d="M84 138 q6 8 14 0" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M104 138 q6 8 14 0" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M92 122 q-8 -4 -14 0 M108 122 q8 -4 14 0" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <path d="M98 150 q3 3 6 0" fill="none" stroke="#c98477" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M70 132 q-4 -44 30 -48 q34 4 30 48 q-6 -26 -30 -24 q-24 -2 -30 24 z" fill="#2c2438"/>
      <path d="M70 132 q-10 6 -8 26 q8 -8 10 -22 z" fill="#2c2438"/>
      <path d="M130 132 q10 6 8 26 q-8 -8 -10 -22 z" fill="#2c2438"/>
      <ellipse cx="100" cy="86" rx="20" ry="13" fill="#241b2e"/>
      <line x1="86" y1="84" x2="118" y2="80" stroke="#9a7f95" stroke-width="3" stroke-linecap="round"/>
    </g>
  </svg>`,

  /* Ella sentada (seiza) */
  ellaSit: `
  <svg viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M40 196 q70 -30 140 0 q26 70 22 118 q-92 26 -184 0 q-4 -50 22 -118 z" fill="#d2cdc6"/>
      <path d="M70 300 q40 -10 80 0" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <rect x="66" y="206" width="88" height="26" rx="3" fill="#9a7f95"/>
      <path d="M78 150 q32 -16 64 0 l4 60 q-36 -16 -72 0 z" fill="#bdb7af"/>
      <path d="M110 158 L96 206 M110 158 L126 206" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <path d="M98 140 q12 -10 24 0 l-2 18 q-10 -6 -20 0 z" fill="#f2dcc8"/>
      <ellipse cx="110" cy="104" rx="26" ry="30" fill="#f6e2d0"/>
      <path d="M96 106 q5 7 12 0 M112 106 q5 7 12 0" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M70 100 q-4 -38 40 -42 q42 4 38 42 q-8 -22 -38 -20 q-30 -2 -40 20 z" fill="#2c2438"/>
      <ellipse cx="110" cy="58" rx="17" ry="11" fill="#241b2e"/>
    </g>
  </svg>`,

  /* Ella de pie sosteniendo algo (hierbas / papel) — manos al frente */
  ellaHold: `
  <svg viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M60 188 q40 -22 80 0 l26 244 q-66 22 -132 0 z" fill="#d2cdc6"/>
      <path d="M100 196 L84 250 M100 196 L118 250" fill="none" stroke="${INK}" stroke-width="1.8"/>
      <rect x="60" y="262" width="80" height="30" rx="3" fill="#9a7f95"/>
      <!-- mangas al frente sosteniendo -->
      <path d="M66 200 q-12 40 18 56 l8 -16 q-18 -16 -10 -44 z" fill="#c8c2ba"/>
      <path d="M134 200 q12 40 -18 56 l-8 -16 q18 -16 10 -44 z" fill="#c8c2ba"/>
      <ellipse cx="92" cy="262" rx="9" ry="10" fill="#f2dcc8"/><ellipse cx="108" cy="262" rx="9" ry="10" fill="#f2dcc8"/>
      <path d="M86 176 q14 -12 28 0 l-2 22 q-12 -8 -24 0 z" fill="#f2dcc8"/>
      <ellipse cx="100" cy="138" rx="30" ry="34" fill="#f6e2d0"/>
      <path d="M84 138 q6 8 14 0 M104 138 q6 8 14 0" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M70 132 q-4 -44 30 -48 q34 4 30 48 q-6 -26 -30 -24 q-24 -2 -30 24 z" fill="#2c2438"/>
      <ellipse cx="100" cy="86" rx="20" ry="13" fill="#241b2e"/>
    </g>
  </svg>`,

  /* Ella de espaldas (frente al puesto) */
  ellaBack: `
  <svg viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M60 188 q40 -22 80 0 l26 244 q-66 22 -132 0 z" fill="#d2cdc6"/>
      <path d="M100 192 L100 432" stroke="${INK}" stroke-width="1.4"/>
      <rect x="60" y="262" width="80" height="32" rx="3" fill="#9a7f95"/>
      <path d="M62 196 q-26 6 -30 70 l24 8 q8 -44 14 -64 z" fill="#c8c2ba"/>
      <path d="M138 196 q26 6 30 70 l-24 8 q-8 -44 -14 -64 z" fill="#c8c2ba"/>
      <path d="M86 176 q14 -10 28 0 l-3 18 q-11 -6 -22 0 z" fill="#f2dcc8"/>
      <path d="M70 150 q4 -46 30 -48 q26 2 30 48 q-8 10 -30 10 q-22 0 -30 -10 z" fill="#2c2438"/>
      <ellipse cx="100" cy="92" rx="19" ry="12" fill="#241b2e"/>
      <line x1="86" y1="90" x2="118" y2="86" stroke="#9a7f95" stroke-width="3" stroke-linecap="round"/>
    </g>
  </svg>`,

  /* Él — joven aldeano, de pie */
  el: `
  <svg viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M70 280 l-8 152 l30 0 l8 -120 l8 120 l30 0 l-8 -152 z" fill="#46506a"/>
      <path d="M66 188 q34 -20 68 0 l8 102 q-42 16 -84 0 z" fill="#5a6580"/>
      <path d="M100 196 L84 286 M100 196 L116 286" fill="none" stroke="${INK}" stroke-width="1.8"/>
      <rect x="64" y="266" width="72" height="18" rx="2" fill="#caa05a"/>
      <path d="M68 196 q-22 8 -26 78 l22 6 q6 -46 16 -70 z" fill="#525d76"/>
      <path d="M132 196 q22 8 26 78 l-22 6 q-6 -46 -16 -70 z" fill="#525d76"/>
      <ellipse cx="52" cy="282" rx="9" ry="11" fill="#e8c4a4"/><ellipse cx="148" cy="282" rx="9" ry="11" fill="#e8c4a4"/>
      <path d="M88 176 q12 -10 24 0 l-2 20 q-10 -8 -20 0 z" fill="#e8c4a4"/>
      <ellipse cx="100" cy="138" rx="29" ry="32" fill="#edcaa8"/>
      <path d="M85 140 q6 6 13 0 M102 140 q6 6 13 0" fill="none" stroke="${INK}" stroke-width="2.3" stroke-linecap="round"/>
      <path d="M88 124 q-6 -3 -11 0 M112 124 q6 -3 11 0" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <path d="M71 134 q-2 -42 29 -46 q31 4 29 46 q-8 -22 -16 -24 q-6 14 -13 4 q-7 10 -13 -4 q-8 2 -16 24 z" fill="#1d1726"/>
    </g>
  </svg>`,

  /* Kenzo de pie con mochila/hatillo de viaje al hombro (partida) */
  kenzoBag: `
  <svg viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M70 280 l-8 152 l30 0 l8 -120 l8 120 l30 0 l-8 -152 z" fill="#46506a"/>
      <path d="M66 188 q34 -20 68 0 l8 102 q-42 16 -84 0 z" fill="#5a6580"/>
      <path d="M100 196 L84 286 M100 196 L116 286" fill="none" stroke="${INK}" stroke-width="1.8"/>
      <rect x="64" y="266" width="72" height="18" rx="2" fill="#caa05a"/>
      <!-- hatillo de viaje al hombro derecho -->
      <path d="M126 150 L150 138" stroke="#8a6a44" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M70 168 q-22 8 -26 78 l22 6 q6 -46 16 -70 z" fill="#525d76"/>
      <!-- brazo derecho sujetando el bastón del hatillo -->
      <path d="M134 196 q14 -10 16 -58" stroke="#525d76" stroke-width="20" fill="none" stroke-linecap="round"/>
      <ellipse cx="150" cy="140" rx="9" ry="11" fill="#e8c4a4"/>
      <!-- bastón -->
      <line x1="150" y1="96" x2="150" y2="300" stroke="#8a6a44" stroke-width="5" stroke-linecap="round"/>
      <!-- bulto de tela atado -->
      <path d="M150 110 q-26 -2 -30 22 q-2 18 30 18 q32 0 30 -18 q-4 -24 -30 -22 z" fill="#a8623f"/>
      <path d="M150 108 q-10 -6 -2 -16 q10 8 2 16" fill="#a8623f" stroke="${INK}" stroke-width="1.6"/>
      <ellipse cx="52" cy="282" rx="9" ry="11" fill="#e8c4a4"/>
      <path d="M88 176 q12 -10 24 0 l-2 20 q-10 -8 -20 0 z" fill="#e8c4a4"/>
      <ellipse cx="100" cy="138" rx="29" ry="32" fill="#edcaa8"/>
      <path d="M85 140 q6 6 13 0 M102 140 q6 6 13 0" fill="none" stroke="${INK}" stroke-width="2.3" stroke-linecap="round"/>
      <path d="M88 124 q-6 -3 -11 0 M112 124 q6 -3 11 0" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <path d="M71 134 q-2 -42 29 -46 q31 4 29 46 q-8 -22 -16 -24 q-6 14 -13 4 q-7 10 -13 -4 q-8 2 -16 24 z" fill="#1d1726"/>
    </g>
  </svg>`,

  /* Hana con arco (práctica de arquería) — postura de tiro de perfil */
  hanaBow: `
  <svg viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <!-- hakama de práctica -->
      <path d="M64 280 l-6 152 l30 0 l6 -118 l8 118 l30 0 l-6 -152 z" fill="#3a4a64"/>
      <!-- torso, kimono de práctica gris -->
      <path d="M62 186 q38 -18 76 0 l6 104 q-44 16 -88 0 z" fill="#cfcabf"/>
      <path d="M100 192 L86 286 M100 192 L114 286" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <rect x="60" y="262" width="80" height="16" rx="2" fill="#9a7f95"/>
      <!-- hombro derecho descubierto (estilo arquería) -->
      <path d="M120 188 q22 6 24 60 l-20 4 q-2 -42 -14 -56 z" fill="#e8d8c4"/>
      <!-- brazo izquierdo extendido sosteniendo el arco -->
      <path d="M72 196 q-44 4 -56 6" stroke="#cfcabf" stroke-width="18" fill="none" stroke-linecap="round"/>
      <ellipse cx="20" cy="202" rx="9" ry="10" fill="#e8d8c4"/>
      <!-- brazo derecho tensando la cuerda -->
      <path d="M126 200 q18 6 26 0" stroke="#e8d8c4" stroke-width="16" fill="none" stroke-linecap="round"/>
      <!-- arco (yumi) vertical largo, asimétrico -->
      <path d="M14 60 q-22 150 6 320" stroke="#7a5a32" stroke-width="5" fill="none"/>
      <!-- cuerda tensada hacia la mano derecha -->
      <path d="M14 70 L150 200 L14 372" stroke="${INK}" stroke-width="1.4" fill="none" opacity="0.85"/>
      <!-- flecha -->
      <line x1="18" y1="200" x2="150" y2="200" stroke="#caa56e" stroke-width="2.4"/>
      <polygon points="14,200 26,196 26,204" fill="${INK}"/>
      <!-- cara de perfil concentrada -->
      <path d="M90 176 q12 -8 22 0 l-2 18 q-10 -6 -18 0 z" fill="#f2dcc8"/>
      <ellipse cx="104" cy="140" rx="28" ry="32" fill="#f6e2d0"/>
      <path d="M114 140 q6 6 13 0" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M120 124 q7 -3 12 0" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <!-- cabello recogido -->
      <path d="M76 134 q-2 -44 30 -48 q34 4 30 48 q-6 -26 -30 -24 q-26 -2 -30 24 z" fill="#2c2438"/>
      <ellipse cx="104" cy="88" rx="18" ry="12" fill="#241b2e"/>
      <line x1="92" y1="86" x2="120" y2="82" stroke="#9a7f95" stroke-width="3" stroke-linecap="round"/>
    </g>
  </svg>`,

  /* Él sentado (orilla / escaleras) */
  elSit: `
  <svg viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round">
      <path d="M64 214 q-12 56 -2 96 l40 0 q-2 -40 4 -72 z" fill="#46506a"/>
      <path d="M150 214 q14 56 4 96 l-40 0 q2 -40 -6 -72 z" fill="#3e4760"/>
      <path d="M74 150 q36 -22 72 0 q10 56 2 96 q-40 16 -78 0 q-6 -52 4 -96 z" fill="#5a6580"/>
      <path d="M80 168 q-22 40 -6 84" fill="none" stroke="#525d76" stroke-width="20" stroke-linecap="round"/>
      <path d="M140 168 q22 40 6 84" fill="none" stroke="#525d76" stroke-width="20" stroke-linecap="round"/>
      <path d="M98 140 q12 -8 22 0 l-2 16 q-9 -6 -18 0 z" fill="#e8c4a4"/>
      <ellipse cx="110" cy="108" rx="26" ry="29" fill="#edcaa8"/>
      <path d="M97 112 q5 6 12 0 M112 112 q5 6 12 0" fill="none" stroke="${INK}" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M74 106 q-2 -38 36 -42 q38 4 36 42 q-8 -20 -18 -22 q-5 12 -12 3 q-7 9 -12 -3 q-10 2 -18 22 z" fill="#1d1726"/>
    </g>
  </svg>`,

  /* Él de espaldas */
  elBack: `
  <svg viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M72 282 l-6 150 l28 0 l6 -116 l8 116 l28 0 l-6 -150 z" fill="#3e4760"/>
      <path d="M64 186 q36 -18 72 0 l8 104 q-44 16 -88 0 z" fill="#525d76"/>
      <path d="M100 190 l0 100" stroke="${INK}" stroke-width="1.6"/>
      <rect x="62" y="266" width="76" height="16" rx="2" fill="#caa05a"/>
      <path d="M66 194 q-22 8 -26 76 l22 6 q6 -44 16 -68 z" fill="#4a5470"/>
      <path d="M134 194 q22 8 26 76 l-22 6 q-6 -44 -16 -68 z" fill="#4a5470"/>
      <path d="M86 176 q14 -8 28 0 l-3 18 q-11 -6 -22 0 z" fill="#e8c4a4"/>
      <path d="M72 150 q4 -40 28 -42 q24 2 28 42 q-6 8 -28 8 q-22 0 -28 -8 z" fill="#1d1726"/>
    </g>
  </svg>`,

  /* Hiro — joven amable, atento, ropa terrosa (verde/marrón) */
  hiro: `
  <svg viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M70 280 l-7 152 l30 0 l7 -118 l7 118 l30 0 l-7 -152 z" fill="#5a4e3a"/>
      <path d="M66 186 q34 -18 68 0 l8 104 q-42 16 -84 0 z" fill="#6e7a52"/>
      <path d="M100 194 L85 284 M100 194 L115 284" fill="none" stroke="#54603e" stroke-width="2"/>
      <rect x="64" y="264" width="72" height="16" rx="2" fill="#9a8a56"/>
      <!-- un brazo levemente al frente (gesto de escuchar/preguntar) -->
      <path d="M68 196 q-20 10 -20 64 l22 4 q2 -42 14 -60 z" fill="#646f4a"/>
      <path d="M132 198 q24 14 18 50 l-20 4 q0 -34 -14 -48 z" fill="#646f4a"/>
      <ellipse cx="52" cy="262" rx="9" ry="11" fill="#e8c4a4"/><ellipse cx="132" cy="250" rx="9" ry="10" fill="#e8c4a4"/>
      <path d="M88 174 q12 -10 24 0 l-2 20 q-10 -8 -20 0 z" fill="#e8c4a4"/>
      <ellipse cx="100" cy="136" rx="29" ry="32" fill="#edcaa8"/>
      <path d="M85 138 q6 6 13 0 M102 138 q6 6 13 0" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M87 121 q-5 -3 -10 -1 M113 121 q5 -3 10 -1" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <path d="M99 150 q3 3 6 0" fill="none" stroke="#c98477" stroke-width="1.5" stroke-linecap="round"/>
      <!-- cabello castaño, partido a un lado -->
      <path d="M71 132 q0 -42 29 -44 q29 2 29 44 q-8 -24 -22 -22 q4 -8 -8 -8 q-18 2 -28 30 z" fill="#3a2a1e"/>
    </g>
  </svg>`,

  /* Hana sentada con el cabello ondulado por la humedad (sin recoger) */
  ellaRizado: `
  <svg viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M40 196 q70 -30 140 0 q26 70 22 118 q-92 26 -184 0 q-4 -50 22 -118 z" fill="#d2cdc6"/>
      <path d="M70 300 q40 -10 80 0" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <rect x="66" y="206" width="88" height="26" rx="3" fill="#9a7f95"/>
      <path d="M78 150 q32 -16 64 0 l4 60 q-36 -16 -72 0 z" fill="#bdb7af"/>
      <path d="M110 158 L96 206 M110 158 L126 206" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <path d="M98 140 q12 -10 24 0 l-2 18 q-10 -6 -20 0 z" fill="#f2dcc8"/>
      <ellipse cx="110" cy="104" rx="26" ry="30" fill="#f6e2d0"/>
      <path d="M96 106 q5 7 12 0 M112 106 q5 7 12 0" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M105 116 q4 3 8 0" fill="none" stroke="#c98477" stroke-width="1.5" stroke-linecap="round"/>
      <!-- cabello suelto y ondulado (mechones irregulares) -->
      <path d="M70 104 q-10 -56 40 -60 q50 4 40 60 q-4 -16 -12 -14 q2 14 -8 12 q-4 12 -16 6 q-6 12 -18 2 q-12 4 -8 16 q-10 -12 -16 -14 z" fill="#2c2438"/>
      <path d="M72 100 q-14 12 -10 40 q8 -14 14 -34 q-6 18 0 40 q8 -16 6 -42 z" fill="#2c2438"/>
      <path d="M148 100 q14 12 10 40 q-8 -14 -14 -34 q6 18 0 40 q-8 -16 -6 -42 z" fill="#2c2438"/>
      <path d="M84 86 q14 -10 24 12 M118 84 q14 4 12 26" fill="none" stroke="#3a3050" stroke-width="2" opacity="0.6"/>
    </g>
  </svg>`,

  /* Maestro Hiroshi — carpintero mayor de ciudad, de pie, sobrio */
  maestro: `
  <svg viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M70 280 l-8 152 l30 0 l8 -120 l8 120 l30 0 l-8 -152 z" fill="#33302c"/>
      <path d="M64 188 q36 -20 72 0 l8 102 q-44 16 -88 0 z" fill="#4a4640"/>
      <path d="M100 196 L84 286 M100 196 L116 286" fill="none" stroke="#2c2926" stroke-width="2"/>
      <rect x="62" y="266" width="76" height="18" rx="2" fill="#6e5236"/>
      <!-- brazos cruzados (postura de evaluar) -->
      <path d="M70 210 q30 16 60 0 l-4 24 q-26 12 -52 0 z" fill="#403c36"/>
      <ellipse cx="74" cy="220" rx="9" ry="11" fill="#e0c0a0"/><ellipse cx="126" cy="220" rx="9" ry="11" fill="#e0c0a0"/>
      <path d="M88 176 q12 -10 24 0 l-2 20 q-10 -8 -20 0 z" fill="#e0c0a0"/>
      <ellipse cx="100" cy="138" rx="29" ry="32" fill="#e6c6a4"/>
      <path d="M85 140 q6 5 13 0 M102 140 q6 5 13 0" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M86 124 q-6 -2 -10 1 M114 124 q6 -2 10 1" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <!-- bigote/barba corta cana -->
      <path d="M90 156 q10 6 20 0" fill="none" stroke="#cfcabf" stroke-width="3" stroke-linecap="round"/>
      <!-- cabello cano, recogido atrás -->
      <path d="M72 132 q-2 -40 28 -42 q30 2 28 42 q-8 -20 -28 -20 q-20 0 -28 20 z" fill="#b8b2a6"/>
      <ellipse cx="100" cy="92" rx="11" ry="8" fill="#a8a298"/>
    </g>
  </svg>`,

  /* Daisuke — conocido de Kuromi, comerciante viajero, de pie */
  daisuke: `
  <svg viewBox="0 0 200 440" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <path d="M70 280 l-8 152 l30 0 l8 -120 l8 120 l30 0 l-8 -152 z" fill="#5a4a36"/>
      <path d="M66 188 q34 -20 68 0 l8 102 q-42 16 -84 0 z" fill="#7a6444"/>
      <path d="M100 196 L84 286 M100 196 L116 286" fill="none" stroke="#5e4c34" stroke-width="2"/>
      <rect x="64" y="266" width="72" height="16" rx="2" fill="#9a7a4a"/>
      <!-- correa de bolsa de comercio cruzando el pecho -->
      <path d="M70 192 L132 252" stroke="#4a3826" stroke-width="6"/>
      <rect x="120" y="246" width="30" height="26" rx="3" fill="#5a4430"/>
      <path d="M68 196 q-22 8 -24 70 l22 4 q4 -42 14 -62 z" fill="#6e5a3e"/>
      <path d="M132 196 q22 8 24 70 l-22 4 q-4 -42 -14 -62 z" fill="#6e5a3e"/>
      <ellipse cx="46" cy="270" rx="9" ry="11" fill="#e8c4a4"/><ellipse cx="154" cy="270" rx="9" ry="11" fill="#e8c4a4"/>
      <path d="M88 176 q12 -10 24 0 l-2 20 q-10 -8 -20 0 z" fill="#e8c4a4"/>
      <ellipse cx="100" cy="138" rx="29" ry="32" fill="#edcaa8"/>
      <path d="M85 140 q6 6 13 0 M102 140 q6 6 13 0" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M99 150 q3 3 6 0" fill="none" stroke="#c98477" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M87 122 q-5 -3 -10 -1 M113 122 q5 -3 10 -1" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <!-- cabello castaño con pañuelo de viaje -->
      <path d="M71 132 q0 -42 29 -44 q29 2 29 44 q-8 -22 -22 -20 q4 -8 -8 -8 q-18 2 -28 28 z" fill="#3a2a1e"/>
      <path d="M70 116 q30 -16 60 0 l-2 -10 q-28 -12 -56 0 z" fill="#8a5a3a"/>
    </g>
  </svg>`,

  /* Perro — pequeño, sentado, estilo shiba (cálido) */
  perro: `
  <svg viewBox="0 0 140 130" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round">
      <!-- cola -->
      <path d="M96 96 q26 -6 22 -34 q-2 -14 -16 -14 q12 8 6 24 q-6 16 -18 16 z" fill="#e8c79a"/>
      <!-- cuerpo -->
      <path d="M40 116 q-14 -2 -16 -34 q-2 -36 30 -42 q34 -4 42 26 q8 30 -6 50 z" fill="#edcfa2"/>
      <path d="M44 116 q-2 -30 8 -44" fill="none" stroke="#d8b783" stroke-width="2" opacity="0.7"/>
      <!-- patas -->
      <ellipse cx="44" cy="116" rx="8" ry="6" fill="#edcfa2"/><ellipse cx="78" cy="116" rx="8" ry="6" fill="#edcfa2"/>
      <!-- cabeza -->
      <path d="M28 58 q0 -30 28 -32 q28 2 28 32 q0 24 -28 26 q-28 -2 -28 -26 z" fill="#f0d4a8"/>
      <!-- orejas -->
      <path d="M30 40 L22 14 L46 30 Z" fill="#e6c293"/><path d="M82 40 L90 14 L66 30 Z" fill="#e6c293"/>
      <!-- hocico claro -->
      <path d="M40 66 q16 14 32 0 q-2 14 -16 16 q-14 -2 -16 -16 z" fill="#fbf1df"/>
      <!-- ojos + nariz -->
      <circle cx="46" cy="54" r="2.6" fill="${INK}"/><circle cx="66" cy="54" r="2.6" fill="${INK}"/>
      <path d="M53 70 q3 3 6 0" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="56" cy="66" rx="3.2" ry="2.4" fill="${INK}"/>
    </g>
  </svg>`,

  /* Padre — carpintero mayor, sentado trabajando, cabello cano */
  padre: `
  <svg viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg">
    <g stroke="${INK}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round">
      <!-- piernas cruzadas (sentado al banco) -->
      <path d="M50 250 q40 26 120 0 l6 56 q-66 18 -132 0 z" fill="#6a5236"/>
      <!-- torso, yukata de trabajo marrón -->
      <path d="M70 150 q40 -20 80 0 q8 56 0 104 q-44 16 -82 0 q-6 -52 2 -104 z" fill="#7a6147"/>
      <path d="M110 158 L94 252 M110 158 L126 252" fill="none" stroke="#5e4a34" stroke-width="2"/>
      <rect x="68" y="226" width="84" height="18" rx="2" fill="#5a4330"/>
      <!-- brazos hacia el frente (trabajando) -->
      <path d="M74 170 q-18 30 6 60" fill="none" stroke="#73593f" stroke-width="20" stroke-linecap="round"/>
      <path d="M146 170 q18 30 -6 60" fill="none" stroke="#73593f" stroke-width="20" stroke-linecap="round"/>
      <ellipse cx="86" cy="232" rx="9" ry="10" fill="#e0bc94"/><ellipse cx="134" cy="232" rx="9" ry="10" fill="#e0bc94"/>
      <!-- cuello + cabeza -->
      <path d="M98 140 q12 -8 22 0 l-2 16 q-9 -6 -18 0 z" fill="#e0bc94"/>
      <ellipse cx="109" cy="108" rx="27" ry="30" fill="#e6c49c"/>
      <path d="M95 110 q5 5 12 0 M111 110 q5 5 12 0" fill="none" stroke="${INK}" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M93 96 q-5 -3 -10 0 M111 96 q5 -3 10 0" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <!-- bigote / barba corta cana -->
      <path d="M98 124 q11 6 22 0" fill="none" stroke="#cfcabf" stroke-width="3" stroke-linecap="round"/>
      <!-- cabello cano, recogido -->
      <path d="M80 104 q-2 -36 29 -38 q31 2 29 38 q-8 -18 -16 -20 q-5 10 -13 2 q-8 8 -29 18 z" fill="#bdb6ad"/>
      <ellipse cx="109" cy="66" rx="14" ry="9" fill="#a8a098"/>
    </g>
  </svg>`,
};

/* =========================================================================
   PROPS — objetos ilustrados (centrados sobre la caja de diálogo)
   ========================================================================= */
const PROPS = {

  /* grulla de papel, sobre un halo cálido */
  crane: `
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="craneGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffe6b8" stop-opacity="0.8"/><stop offset="0.5" stop-color="#f6d9a8" stop-opacity="0.4"/><stop offset="1" stop-color="#f6d9a8" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="120" cy="110" rx="120" ry="80" fill="url(#craneGlow)"/>
    <g stroke="${INK}" stroke-width="2" stroke-linejoin="round">
      <!-- alas -->
      <path d="M120 110 L40 70 L116 96 Z" fill="#f3efe7"/>
      <path d="M120 110 L200 70 L124 96 Z" fill="#e7e1d6"/>
      <!-- cuerpo -->
      <path d="M120 110 L150 132 L116 138 Z" fill="#f6f2ea"/>
      <!-- cuello + cabeza -->
      <path d="M118 100 L86 58" stroke="${INK}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M86 58 L74 64 L84 50 Z" fill="#e8623f" stroke="${INK}" stroke-width="1.5"/>
      <!-- cola -->
      <path d="M150 132 L186 142 L150 124 Z" fill="#eee8dd"/>
      <!-- pliegues -->
      <path d="M120 110 L116 138 M120 110 L116 96" stroke="${INK}" stroke-width="1" opacity="0.5"/>
    </g>
  </svg>`,

  /* caja de madera abierta con papeles doblados y una grulla arriba */
  box: `
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="boxGlow" cx="0.5" cy="0.4" r="0.55"><stop offset="0" stop-color="#f6d9a8" stop-opacity="0.4"/><stop offset="1" stop-color="#f6d9a8" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="120" cy="120" rx="120" ry="74" fill="url(#boxGlow)"/>
    <g stroke="${INK}" stroke-width="2" stroke-linejoin="round">
      <!-- tapa abierta atrás -->
      <path d="M60 86 L180 86 L196 60 L76 60 Z" fill="#6e5440"/>
      <!-- caja -->
      <path d="M52 96 L188 96 L196 168 L44 168 Z" fill="#7a5e44"/>
      <path d="M52 96 L188 96 L184 110 L56 110 Z" fill="#8a6c4e"/>
      <!-- papeles doblados dentro -->
      <g stroke-width="1.5">
        <path d="M66 104 L110 100 L116 130 L72 134 Z" fill="#efe9df"/>
        <path d="M118 102 L168 106 L162 132 L114 128 Z" fill="#e7e1d6"/>
        <path d="M86 110 L140 108 L138 124 L88 126 Z" fill="#f4f0e8"/>
      </g>
      <!-- grulla encima -->
      <g transform="translate(108 76) scale(0.5)">
        <path d="M24 30 L-30 4 L20 22 Z" fill="#f3efe7"/><path d="M24 30 L78 4 L28 22 Z" fill="#e7e1d6"/>
        <path d="M24 30 L48 46 L20 50 Z" fill="#f6f2ea"/>
        <path d="M22 24 L-6 -8" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
        <path d="M-6 -8 L-16 -2 L-8 -14 Z" fill="#e8623f"/>
      </g>
    </g>
  </svg>`,

  /* nota de papel doblada con caligrafía */
  note: `
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="noteGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#f6d9a8" stop-opacity="0.45"/><stop offset="1" stop-color="#f6d9a8" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="120" cy="100" rx="100" ry="66" fill="url(#noteGlow)"/>
    <g transform="rotate(-4 120 100)" stroke="${INK}" stroke-width="2" stroke-linejoin="round">
      <rect x="78" y="44" width="84" height="112" rx="3" fill="#efe9df"/>
      <!-- marcas de dobleces -->
      <line x1="78" y1="82" x2="162" y2="82" stroke="#cfc6b6" stroke-width="1.5"/>
      <line x1="78" y1="120" x2="162" y2="120" stroke="#cfc6b6" stroke-width="1.5"/>
      <line x1="120" y1="44" x2="120" y2="156" stroke="#cfc6b6" stroke-width="1"/>
      <!-- caligrafía (trazos verticales) -->
      <g stroke="#3a3530" stroke-width="2.2" stroke-linecap="round" opacity="0.8">
        <path d="M142 58 L138 74 M144 64 q-6 4 -10 2"/>
        <path d="M126 58 L122 76 M128 66 q-5 3 -9 1"/>
        <path d="M110 60 L106 78 M112 68 q-5 3 -8 1"/>
      </g>
    </g>
  </svg>`,

  /* cajita de madera cerrada — la que Kenzo hace, tapa que encaja */
  cajita: `
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="cajitaGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#f6d9a8" stop-opacity="0.5"/><stop offset="1" stop-color="#f6d9a8" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="120" cy="108" rx="108" ry="64" fill="url(#cajitaGlow)"/>
    <g stroke="${INK}" stroke-width="2" stroke-linejoin="round">
      <!-- cuerpo de la caja en perspectiva -->
      <path d="M70 92 L170 92 L186 108 L54 108 Z" fill="#9a744c"/>
      <path d="M54 108 L186 108 L186 156 L54 156 Z" fill="#7a5c3c"/>
      <path d="M54 108 L70 92 L70 140 L54 156 Z" fill="#6a4e32"/>
      <!-- tapa -->
      <path d="M66 84 L174 84 L190 100 L50 100 Z" fill="#a8815a"/>
      <path d="M50 100 L190 100 L190 110 L50 110 Z" fill="#8a6843"/>
      <!-- vetas -->
      <g stroke="#5e4630" stroke-width="1" opacity="0.5"><line x1="70" y1="122" x2="170" y2="122"/><line x1="70" y1="138" x2="170" y2="138"/></g>
    </g>
  </svg>`,

  /* trampa para peces — armazón de madera reticulado */
  trampa: `
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="trampaGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#f6d9a8" stop-opacity="0.42"/><stop offset="1" stop-color="#f6d9a8" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="120" cy="104" rx="112" ry="58" fill="url(#trampaGlow)"/>
    <g stroke="${INK}" stroke-width="2" stroke-linejoin="round" fill="none">
      <!-- nasa cónica -->
      <path d="M58 70 L182 96 L182 112 L58 138 Z" fill="#8a6a44" stroke="${INK}"/>
      <path d="M182 96 q22 8 22 12 q0 4 -22 4 z" fill="#6e5236"/>
      <!-- aros y varillas -->
      <g stroke="#caa56e" stroke-width="2">
        <line x1="58" y1="70" x2="58" y2="138"/><line x1="92" y1="76" x2="92" y2="132"/>
        <line x1="126" y1="82" x2="126" y2="126"/><line x1="160" y1="90" x2="160" y2="120"/>
        <line x1="58" y1="104" x2="182" y2="104"/>
        <line x1="62" y1="86" x2="180" y2="100"/><line x1="62" y1="122" x2="180" y2="108"/>
      </g>
    </g>
  </svg>`,

  /* porta-notas de madera con compartimento abierto y papel doblado dentro */
  portanotas: `
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="pnGlow" cx="0.5" cy="0.46" r="0.55"><stop offset="0" stop-color="#f6d9a8" stop-opacity="0.5"/><stop offset="1" stop-color="#f6d9a8" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="120" cy="104" rx="116" ry="62" fill="url(#pnGlow)"/>
    <g stroke="${INK}" stroke-width="2" stroke-linejoin="round">
      <!-- tapa deslizante levantada atrás -->
      <path d="M70 70 L182 70 L196 50 L84 50 Z" fill="#7a5e44"/>
      <path d="M70 70 L182 70 L182 76 L70 76 Z" fill="#5a4332"/>
      <!-- cuerpo del porta-notas, vetas finas -->
      <path d="M58 80 L182 80 L190 150 L50 150 Z" fill="#8a6c4e"/>
      <path d="M58 80 L182 80 L180 92 L60 92 Z" fill="#9a7c5a"/>
      <g stroke="#6e5238" stroke-width="1" opacity="0.5"><line x1="70" y1="100" x2="172" y2="100"/><line x1="66" y1="120" x2="176" y2="120"/><line x1="62" y1="138" x2="180" y2="138"/></g>
      <!-- compartimento interior visible -->
      <path d="M78 84 L162 84 L168 116 L72 116 Z" fill="#3a2c1e"/>
      <!-- papel doblado encajado dentro, sin holgura -->
      <path d="M86 88 L154 88 L158 112 L82 112 Z" fill="#efe9df"/>
      <line x1="120" y1="88" x2="120" y2="112" stroke="#cfc6b6" stroke-width="1"/>
      <line x1="86" y1="100" x2="154" y2="100" stroke="#cfc6b6" stroke-width="1"/>
      <!-- caligrafía mínima en el papel -->
      <g stroke="#3a3530" stroke-width="1.8" stroke-linecap="round" opacity="0.8">
        <path d="M132 92 L130 98 M133 95 q-4 2 -7 1"/>
        <path d="M118 92 L116 99 M119 96 q-4 2 -7 1"/>
      </g>
    </g>
  </svg>`,

  /* juego de piedras — tablero de posición con fichas claras y oscuras */
  piedras: `
  <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="goGlow" cx="0.5" cy="0.5" r="0.55"><stop offset="0" stop-color="#f6d9a8" stop-opacity="0.45"/><stop offset="1" stop-color="#f6d9a8" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="120" cy="108" rx="116" ry="60" fill="url(#goGlow)"/>
    <g stroke="${INK}" stroke-width="2" stroke-linejoin="round">
      <!-- tablero en perspectiva -->
      <path d="M52 96 L188 96 L214 150 L26 150 Z" fill="#c79a5a"/>
      <path d="M52 96 L188 96 L190 102 L50 102 Z" fill="#b6883f"/>
      <!-- retícula -->
      <g stroke="#6e5236" stroke-width="1.2" opacity="0.8">
        <line x1="70" y1="102" x2="50" y2="146"/><line x1="100" y1="102" x2="90" y2="146"/><line x1="130" y1="102" x2="132" y2="146"/><line x1="160" y1="102" x2="174" y2="146"/>
        <line x1="60" y1="114" x2="180" y2="114"/><line x1="50" y1="128" x2="190" y2="128"/><line x1="40" y1="142" x2="200" y2="142"/>
      </g>
      <!-- fichas oscuras -->
      <g fill="#2a2532"><ellipse cx="100" cy="114" rx="9" ry="5"/><ellipse cx="130" cy="128" rx="9" ry="5"/><ellipse cx="86" cy="128" rx="9" ry="5"/></g>
      <!-- fichas claras -->
      <g fill="#efe9df" stroke="#bdb4a2" stroke-width="1"><ellipse cx="130" cy="114" rx="9" ry="5"/><ellipse cx="158" cy="128" rx="9" ry="5"/><ellipse cx="112" cy="142" rx="9" ry="5"/></g>
      <!-- cuencos de fichas a los lados -->
      <path d="M16 118 q0 -16 18 -16 q18 0 18 16 q0 10 -18 10 q-18 0 -18 -10 z" fill="#7a5a3a"/>
      <path d="M188 118 q0 -16 18 -16 q18 0 18 16 q0 10 -18 10 q-18 0 -18 -10 z" fill="#7a5a3a"/>
    </g>
  </svg>`,
};

window.BACKGROUNDS = BACKGROUNDS;
window.CHARACTERS  = CHARACTERS;
window.PROPS       = PROPS;
window.SKY         = SKY;
