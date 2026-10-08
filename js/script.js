// ---- Cronómetro
let totalSeconds=3600,timerInterval=setInterval(updateTimer,1000);
function updateTimer(){if(totalSeconds>0){totalSeconds--;const m=Math.floor(totalSeconds/60),s=totalSeconds%60;document.getElementById('timer-display').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}}
function resetTimer(){clearInterval(timerInterval);totalSeconds=3600;timerInterval=setInterval(updateTimer,1000);document.getElementById('timer-display').textContent="60:00"}

// ---- Navegación
function switchTab(n){
 document.querySelectorAll('.phase').forEach(s=>s.classList.add('hidden'));
 const p=document.getElementById('phase-'+n);p.classList.remove('hidden');
 document.querySelectorAll('.tab').forEach(b=>b.classList.remove('on'));
 document.getElementById('tab-btn-'+n).classList.add('on');
 window.scrollTo({top:0,behavior:'smooth'});
}

// ---- Iconos minimalistas (trazo, estilo línea)
const P={shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',book:'<path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z"/>',compass:'<circle cx="12" cy="12" r="10"/><path d="m16 8-2 6-6 2 2-6z"/>',gamepad:'<path d="M6 12h4M8 10v4"/><circle cx="15" cy="13" r=".8"/><circle cx="18" cy="11" r=".8"/><rect x="2" y="6" width="20" height="12" rx="5"/>',award:'<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/>',down:'<path d="M12 5v14M5 12l7 7 7-7"/>',check:'<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',xcircle:'<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',star:'<path d="m12 2 3 6.5 7 .9-5.1 4.9 1.3 7L12 17.8 5.8 21.3l1.3-7L2 9.4l7-.9z"/>',printer:'<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/>',home:'<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10M10 20v-6h4v6"/>',school:'<path d="M3 21h18M5 21V9l7-5 7 5v12"/><path d="M10 21v-5h4v5M12 4V1"/>',tree:'<path d="M12 22v-6"/><path d="M12 16a6 6 0 0 0 4-10.5A4 4 0 0 0 8 5.5 6 6 0 0 0 12 16z"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-4 3-6 7-6s7 2 7 6"/><circle cx="17.5" cy="9" r="2.5"/><path d="M18 14c2.5.3 4 2 4 5"/>',heart:'<path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z"/>',hand:'<path d="M8 13V5a1.5 1.5 0 0 1 3 0v6M11 10V3.5a1.5 1.5 0 0 1 3 0V10M14 10V5a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7c-3 0-4-1.5-5.5-4L3 13a1.5 1.5 0 0 1 2.5-1.5L8 14"/>',phone:'<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',alert:'<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17.5v.01"/>',eyeoff:'<path d="M3 3l18 18M10.6 6.2A9 9 0 0 1 12 6c6 0 10 6 10 6a17 17 0 0 1-3.2 3.7M6.6 7.7A17 17 0 0 0 2 12s4 6 10 6a9 9 0 0 0 3.4-.7"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 7l3 3"/>',car:'<path d="M3 16v-4l2-5h14l2 5v4zM3 16v2h3v-2M18 16v2h3v-2"/>',mobile:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',chat:'<path d="M21 12a8 8 0 0 1-11.7 7L3 21l2-5.5A8 8 0 1 1 21 12z"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',pin:'<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',siren:'<path d="M7 18v-6a5 5 0 0 1 10 0v6M5 18h14v3H5zM12 2v2M4 6l1.5 1.5M20 6l-1.5 1.5"/>',ear:'<path d="M6 9a6 6 0 0 1 12 0c0 4-3 4-3 8a3 3 0 0 1-6 0M10 9a2 2 0 0 1 4 0"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',route:'<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h8"/>',mega:'<path d="M3 11v3a1 1 0 0 0 1 1h3l8 4V6L7 10H4a1 1 0 0 0-1 1zM19 9a4 4 0 0 1 0 6"/>',ban:'<circle cx="12" cy="12" r="10"/><path d="m5 5 14 14"/>',leaf:'<path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16zM4 21c3-6 6-8 10-10"/>',gift:'<rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M5 12v9h14v-9M8 8a2.5 2.5 0 0 1 0-5c3 0 4 5 4 5s1-5 4-5a2.5 2.5 0 0 1 0 5"/>',chev:'<path d="m6 9 6 6 6-6"/>',doc:'<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h7M9 17h7"/>',life:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.9 4.9 4.2 4.2M14.9 14.9l4.2 4.2M19.1 4.9l-4.2 4.2M9.1 14.9l-4.2 4.2"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'};
function hyd(r){r.querySelectorAll('i[data-i]:not([data-d])').forEach(e=>{e.dataset.d=1;e.classList.add('i');e.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${P[e.dataset.i]||''}</svg>`})}
new MutationObserver(()=>hyd(document.body)).observe(document.body,{childList:true,subtree:true});hyd(document.body);
const ico=n=>`<i data-i="${n}"></i>`;

// ---- Tarjetas desplegables
function card(c,ic,tag,title,sub,body,more){
 return `<div class="xc" style="--cc:${c}"><button class="hd" onclick="const x=this.parentElement;x.classList.toggle('open');this.setAttribute('aria-expanded',x.classList.contains('open'))" aria-expanded="false">
 <span class="ic">${/^[a-z]+$/.test(ic)?ico(ic):ic}</span><span class="flex-1 min-w-0">${tag?`<span class="tag" style="font-size:.65rem">${tag}</span><br>`:''}<span class="fr font-semibold text-lg leading-tight block" style="color:var(--navy)">${title}</span><span class="text-sm text-slate-600 block mt-1">${sub}</span></span><span class="chev">${ico('chev')}</span></button>
 <div class="more"><div>${body?`<p class="px-5 pb-3 text-sm text-slate-700">${body}</p>`:''}<ul>${more.map(m=>`<li>${ico(m[0])}${m[1]}</li>`).join('')}</ul></div></div></div>`}

document.getElementById('cards1').innerHTML=[
 card('#d9f0fa','home','','En el Hogar','Tu familia te cuida, te escucha y te protege.','El hogar debe ser el primer lugar donde te sientas seguro. Todas las niñas y niños tienen derecho a una vida libre de violencia.',[
  ['chat','Cuenta en casa cómo te fue en el día, también lo que te preocupa o te hace sentir mal.'],
  ['phone','Aprende tu nombre completo, tu dirección y el teléfono de un familiar.'],
  ['zap','No juegues con enchufes, estufa, cuchillos ni productos de limpieza; pide ayuda a un adulto.'],
  ['lock','No abras la puerta a personas que no conoces: avisa a un adulto.'],
  ['mobile','Usa internet con permiso y acompañado; no compartas tu dirección ni tu escuela.'],
  ['route','Acuerda con tu familia qué hacer en un sismo o incendio: por dónde salir y dónde reunirse.']]),
 card('#dff5e1','school','','En la Escuela','Maestros y compañeros practican el buen trato.','La SEP cuenta con orientaciones para prevenir y atender el acoso escolar, el maltrato y el abuso sexual infantil en las escuelas de educación básica.',[
  ['users','Resolvemos los desacuerdos hablando, sin golpes, apodos ni burlas.'],
  ['alert','El acoso escolar es cuando uno o varios compañeros agreden con golpes, burlas o exclusión para humillar o intimidar. No es un juego.'],
  ['hand','Si algo te incomoda, avisa a tu maestra o maestro, o a la dirección.'],
  ['route','Conoce las rutas de evacuación y el punto de reunión de tu escuela para los simulacros.'],
  ['heart','Invita a jugar a quien está solo: ser buen compañero ayuda a prevenir el acoso.']]),
 card('#fdeec3','tree','','En la Comunidad','Vecinos, policía y protección civil cuidan contigo.','Una comunidad segura se construye entre todos: familias, escuelas y autoridades.',[
  ['siren','Si te pierdes, quédate en un lugar con gente y pide ayuda a un policía o al personal de una tienda.'],
  ['pin','Avisa siempre a tu familia a dónde vas y con quién.'],
  ['leaf','Cuida parques y calles: la basura va en su lugar.'],
  ['route','Cruza por las esquinas y los cruces peatonales, siempre con atención y acompañado de un adulto.'],
  ['users','Juega en grupo y en lugares que un adulto pueda ver.']]),
 card('#ece0fb','award','','Tus Derechos','Tienes derecho a crecer sin violencia.','La Ley General de los Derechos de Niñas, Niños y Adolescentes reconoce tu derecho a una vida libre de violencia y obliga a familias, escuelas y autoridades a protegerte.',[
  ['shield','Derecho a la protección: nadie tiene derecho a lastimarte.'],
  ['ear','Derecho a ser escuchado y a dar tu opinión.'],
  ['heart','Derecho al buen trato en casa, en la escuela y en la comunidad.'],
  ['phone','Derecho a pedir ayuda: en una emergencia llama al 911.']])
].join('');
document.getElementById('src1').innerHTML=`<b>${ico('doc')} Fuentes consultadas:</b> UNICEF México, <a href="https://www.unicef.org/mexico/proteccion-contra-la-violencia" target="_blank" rel="noopener">«Protección contra la violencia»</a> · Comisión Nacional de los Derechos Humanos (CNDH), material sobre acoso escolar · SEP, Programa Nacional de Convivencia Escolar, <i>Orientaciones para la prevención, detección y actuación en casos de abuso sexual infantil, acoso escolar y maltrato en las escuelas de educación básica</i>. Los consejos prácticos siguen estas orientaciones generales.`;

const traffic=`<svg width="40" height="56" viewBox="0 0 40 56"><rect x="6" y="2" width="28" height="52" rx="10" fill="#1f3a5f"/><circle class="light" cx="20" cy="14" r="7" fill="#ef4444"/><circle class="light l2" cx="20" cy="28" r="7" fill="#facc15"/><circle class="light l3" cx="20" cy="42" r="7" fill="#22c55e"/></svg>`;
document.getElementById('cards2').innerHTML=[
 card('#dff5e1','shield','Situación 1','Un compañero te empuja en el recreo o te insulta','¿Qué debes hacer?','<strong>Acción segura:</strong> decirle con voz firme "¡Basta, no me gusta que me trates así!". Si continúa, <strong>cuéntale de inmediato a un profesor o adulto de confianza</strong>. Según la CNDH, el acoso escolar son actos de violencia física o psicológica entre estudiantes para intimidar, someter o humillar. <em>Sabías que:</em> UNICEF señala que entre compañeros suele manifestarse como bullying; las niñas sufren más exclusión y rumores, y los niños más violencia física.',[
  ['ban','No respondas con golpes o insultos: puede empeorar el problema.'],
  ['chat','Frase útil: "Para, no me gusta. Voy a avisar a la maestra."'],
  ['route','Aléjate hacia donde haya adultos o compañeros.'],
  ['heart','Si ves que molestan a alguien, no te rías ni lo grabes: acompáñalo y avisa a un adulto.'],
  ['ear','Si pasa varias veces, cuéntalo aunque te dé pena. No es tu culpa.']]),
 card('#d9f0fa',traffic,'Situación 2','El Semáforo del Tacto (Mi cuerpo es mío)','¿Cómo identificar caricias correctas?','<span class="inline-block bg-green-100 text-green-800 rounded-lg px-2 py-1 mb-1"><strong>Verde (zona pública):</strong> abrazos de abuelos, dar la mano para cruzar la calle.</span><br><span class="inline-block bg-yellow-100 text-yellow-800 rounded-lg px-2 py-1 mb-1"><strong>Amarillo:</strong> un toque que te incomoda o te confunde. Di "no" y avisa.</span><br><span class="inline-block bg-red-100 text-red-800 rounded-lg px-2 py-1"><strong>Rojo (zona privada):</strong> nadie puede tocar tus partes de baño ni pedirte secretos.</span>',[
  ['hand','Tu cuerpo es tuyo: puedes decir "no" a un abrazo o beso, incluso de alguien conocido.'],
  ['lock','Las partes que cubre el traje de baño son privadas: nadie debe tocarlas, pedirte que las toques ni tomarte fotos.'],
  ['eyeoff','Los secretos que dan miedo o confusión no se guardan: se cuentan.'],
  ['ear','Cuéntalo a un adulto de confianza; si no te cree, cuéntaselo a otro. Nunca es tu culpa.']]),
 card('#fdeec3','gift','Situación 3','Un desconocido te ofrece dulces o te pide ir con él','¿Cuál es la regla de oro?','<strong>Regla de oro:</strong> decir <strong>¡NO!</strong>, alejarte de inmediato hacia un lugar con gente y avisar a papá, mamá, un maestro o un policía.',[
  ['mega','Si alguien insiste, grita fuerte: "¡NO LO CONOZCO!" para que otros te escuchen.'],
  ['key','Acuerda con tu familia una palabra secreta para saber quién puede recogerte.'],
  ['car','No te subas a un auto sin permiso de tu familia, aunque digan conocerla.'],
  ['gift','No aceptes regalos, dulces ni paseos de personas desconocidas.']]),
 card('#ece0fb','users','Situación 4','Tus Adultos de Confianza','¿En quién puedes apoyarte siempre?','<strong>Tu red de apoyo:</strong> mamá, papá, tutores, maestros y directivos. Son personas que te escuchan sin juzgarte y te protegen.',[
  ['hand','Dibuja tu mano: en cada dedo escribe el nombre de una persona de confianza.'],
  ['clock','Puedes contarles en cualquier momento, aunque te cueste trabajo decirlo.'],
  ['route','Si un adulto no te ayuda, cuéntaselo a otro hasta que alguien actúe.'],
  ['heart','Pedir ayuda no es de cobardes: es de valientes.']]),
 card('#d9f0fa','mobile','Situación 5','Internet y redes sociales','¿Cómo cuidarte en línea?','Internet también es un lugar: las mismas reglas de seguridad aplican. UNICEF incluye el ciberacoso entre las violencias que hay que prevenir.',[
  ['lock','No compartas tus contraseñas, solo con tus papás o tutores.'],
  ['eyeoff','No publiques tu dirección, escuela, teléfono ni fotos privadas.'],
  ['users','No aceptes solicitudes ni mensajes de personas desconocidas.'],
  ['alert','Si un mensaje te molesta o asusta, no respondas: guarda una captura y avisa a un adulto.']])
].join('');

const T=(n,t,d,h)=>`<a class="et" href="tel:${h}"><b class="n">${n}</b><div class="t">${t}</div><p>${d}</p></a>`;
document.getElementById('emerg').innerHTML=`<div class="em"><h3><span class="pulse" style="display:inline-flex">${ico('phone')}</span> Números de emergencia en México</h3>
<p class="text-sm opacity-90 mt-1">Memoriza el 911. Llama solo en emergencias reales y pide a un adulto que te ayude.</p>
<div class="eg">
${T('911','Emergencias','Número único nacional: policía, ambulancia, bomberos y protección civil. Funciona las 24 horas, incluso sin saldo en el celular.','911')}
${T('089','Denuncia anónima','Para reportar delitos o violencia sin dar tu nombre. No es para emergencias: ahí se marca el 911.','089')}
${T('800 911 2000','Línea de la Vida','Apoyo emocional gratuito y confidencial de la Secretaría de Salud, 24 horas, los 365 días.','8009112000')}
</div>
<div class="mt-4 text-sm bg-white/10 rounded-2xl p-3 flex gap-3"><span style="color:var(--sun)">${ico('chat')}</span><span><b>Si llamas al 911 di:</b> tu nombre, dónde estás y qué pasó. No cuelgues hasta que te lo indiquen.</span></div></div>`;
document.getElementById('src2').innerHTML=`<b>${ico('doc')} Fuentes consultadas:</b> UNICEF México; CNDH (acoso escolar); SEP, <i>Orientaciones para la prevención, detección y actuación en casos de abuso sexual infantil, acoso escolar y maltrato</i>; Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública (911 y 089); Secretaría de Salud (Línea de la Vida). <br><b>Nota para el docente:</b> verifica además los teléfonos locales de Protección Civil y del DIF de tu municipio, y el protocolo de tu plantel.`;

// ---- Quiz (sin cambios)
const quizData=[
{question:"¿Cuál de los siguientes es un ejemplo de un entorno seguro en la escuela?",options:[{text:"Un lugar donde todos nos tratamos con respeto y si hay un problema lo platicamos con la maestra.",correct:true},{text:"Un rincón oscuro donde nadie me ve.",correct:false},{text:"Un lugar donde se burlan de los demás.",correct:false}],explanation:"¡Exacto! Un entorno seguro escolar se basa en el buen trato, el respeto y la comunicación con los maestros."},
{question:"Si un compañero te quita tus cosas a la fuerza o te insulta repetidamente, ¿qué debes hacer?",options:[{text:"Guardar silencio y quedarme triste sin decir nada.",correct:false},{text:"Decir ¡BASTA! con firmeza e informarle de inmediato a un adulto de confianza o maestro.",correct:true},{text:"Gritarle y pegarle también.",correct:false}],explanation:"¡Muy bien! Ante situaciones de acoso o bullying, siempre debemos poner límites verbales y buscar ayuda adulta."},
{question:"¿Qué nos enseña la regla del Semáforo del Tacto (Zonas Privadas)?",options:[{text:"Que nadie puede tocar las partes de mi cuerpo que cubre el traje de baño ni pedirme secretos sobre eso.",correct:true},{text:"Que puedo dejar que cualquiera me toque donde quiera.",correct:false},{text:"Que no debo hablar con nadie nunca.",correct:false}],explanation:"¡Correcto! Tu cuerpo es tuyo y tienes derecho a proteger tus zonas privadas y decir NO."},
{question:"¿Quiénes forman parte de tu red de adultos de confianza?",options:[{text:"Cualquier persona extraña que me dé dulces en la calle.",correct:false},{text:"Mis padres, profesores y directivos de la escuela que me cuidan y protegen.",correct:true},{text:"Nadie, debo resolver todo yo solo.",correct:false}],explanation:"¡Así es! Siempre cuentas con tu familia y maestros para apoyarte y protegerte ante cualquier riesgo."},
{question:"Si un adulto desconocido te pide que lo acompañes a buscar un cachorro, ¿cuál es la acción segura?",options:[{text:"Ir con él porque los animales son tiernos.",correct:false},{text:"Decir ¡NO!, alejarme corriendo y buscar a mis padres o un policía.",correct:true}],explanation:"¡Excelente! Nunca debes ir con desconocidos; tu seguridad es lo más importante."}];
let currentQuestionIndex=0,score=0;
function loadQuizQuestion(){
 const container=document.getElementById('quiz-container');
 if(currentQuestionIndex>=quizData.length){
  container.innerHTML=`<div class="text-center py-8 space-y-4"><div class="w-20 h-20 bg-amber-400 text-white rounded-full mx-auto flex items-center justify-center text-4xl shadow-lg animate-bounce"><i data-i="trophy"></i></div><h3 class="text-2xl font-bold text-slate-800">¡Felicidades! Has completado el Reto</h3><p class="text-slate-600">Tu puntaje final es <strong>${score} de ${quizData.length}</strong>.</p><p class="text-sm text-slate-500">¡Estás listo para hacer tu promesa y obtener tu diploma!</p><button onclick="switchTab(4)" class="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg transition">Ir a Mi Compromiso y Diploma →</button></div>`;
  document.getElementById('to-phase-4-btn').classList.remove('hidden');triggerConfetti();return}
 const q=quizData[currentQuestionIndex];
 document.getElementById('total-questions').textContent=quizData.length;
 document.getElementById('score-counter').textContent=score;
 let html=`<div class="bg-amber-50/60 border-2 border-amber-200 rounded-2xl p-6 shadow-sm"><span class="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 block">Pregunta ${currentQuestionIndex+1} de ${quizData.length}</span><h3 class="text-lg md:text-xl font-bold text-slate-800 mb-6">${q.question}</h3><div class="space-y-3" id="options-list">`;
 q.options.forEach((o,i)=>{html+=`<button onclick="checkAnswer(${i},${o.correct})" class="option-btn w-full text-left bg-white hover:bg-amber-100/70 border-2 border-amber-200 p-4 rounded-xl font-medium text-slate-700 transition"><span>${o.text}</span></button>`});
 html+=`</div><div id="feedback-box" class="mt-4 hidden p-4 rounded-xl font-medium text-sm"></div></div>`;
 container.innerHTML=html}
function checkAnswer(i,ok){
 const opts=document.querySelectorAll('.option-btn');opts.forEach(b=>b.disabled=true);
 const fb=document.getElementById('feedback-box');fb.classList.remove('hidden');
 if(ok){score++;document.getElementById('score-counter').textContent=score;
  opts[i].className="option-btn w-full text-left bg-emerald-100 border-2 border-emerald-500 p-4 rounded-xl font-medium text-emerald-800";
  fb.className="mt-4 p-4 rounded-xl font-medium text-sm bg-emerald-100 text-emerald-800 border border-emerald-300";
  fb.innerHTML=`<i data-i="check"></i> ¡Correcto! ${quizData[currentQuestionIndex].explanation}`;triggerMiniConfetti()}
 else{opts[i].className="option-btn w-full text-left bg-rose-100 border-2 border-rose-500 p-4 rounded-xl font-medium text-rose-800";
  fb.className="mt-4 p-4 rounded-xl font-medium text-sm bg-rose-100 text-rose-800 border border-rose-300";
  fb.innerHTML=`<i data-i="xcircle"></i> ¡Cuidado! Recuerda: ${quizData[currentQuestionIndex].explanation}`}
 setTimeout(()=>{document.getElementById('quiz-container').insertAdjacentHTML('beforeend',`<div class="mt-6 text-right"><button onclick="nextQuestion()" class="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl shadow-md transition">Siguiente Pregunta →</button></div>`)},500)}
function nextQuestion(){currentQuestionIndex++;loadQuizQuestion()}

// ---- Diploma (sin cambios)
function generateDiploma(){
 const n=document.getElementById('student-name').value.trim(),p=document.getElementById('student-promise').value;
 if(!n){alert("Por favor escribe tu nombre completo antes de generar el diploma.");return}
 document.getElementById('display-name').textContent=n;document.getElementById('display-promise').textContent=p;
 document.getElementById('display-date').textContent=new Date().toLocaleDateString('es-ES',{year:'numeric',month:'long',day:'numeric'});
 document.getElementById('diploma-container').classList.remove('hidden');triggerConfetti();
 document.getElementById('diploma-container').scrollIntoView({behavior:'smooth'})}
function resetWorkshop(){currentQuestionIndex=0;score=0;document.getElementById('student-name').value='';
 document.getElementById('diploma-container').classList.add('hidden');document.getElementById('to-phase-4-btn').classList.add('hidden');loadQuizQuestion();switchTab(1)}
function triggerConfetti(){if(typeof confetti==='function')confetti({particleCount:120,spread:80,origin:{y:.6}})}
function triggerMiniConfetti(){if(typeof confetti==='function')confetti({particleCount:40,spread:50,origin:{y:.7}})}
window.onload=loadQuizQuestion;
