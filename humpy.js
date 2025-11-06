// Humpy Dumpy Mini (Style 1) — messages + happiness (localStorage)
document.addEventListener("DOMContentLoaded", function(){
  const H_KEY = 'humpyHappiness_v1';
  const M_KEY = 'humpyMessages_v1';
  const T_KEY = 'humpyLastTouch_v1';

  const humpyEl = document.getElementById('humpy');
  const bubble = document.getElementById('humpy-bubble');
  const cuddleBtn = document.getElementById('cuddle-btn');
  const kissBtn = document.getElementById('kiss-btn');
  const resetBtn = document.getElementById('reset-humpy');
  const meter = document.getElementById('humpy-meter');
  const happyText = document.getElementById('humpy-happy');

  const lines = [
    "hug me pls momma:<",
    "i love you, but mommy loves you more momma ",
    "don't leave mommy okay?",
    "you're her safe place",
    "you make her feel like home",
    "you make mommy happy always",
    "always kiss mommy goodnight 😚",
    "you're my favorite human because you love mommy",
    "mommy feels safe sa presence mo",
    "stay with mommy even on quiet days",
    "kapag ikaw, gumagaan lahat for mommy",
    "don't get tired of loving mommy, please",
    "you’re the one mommy chooses everyday",
    "mommy likes being yours",
    "just stay beside mommy, that’s enough",
    "don’t let go po ha, kahit po mahirap minsan",
    "you make mommy feel loved in the softest way",
    "thank you for choosing mommy po",
    "you’re the calm in mommy’s storm"
  ];

  let happiness = parseInt(localStorage.getItem(H_KEY) || "30", 10);
  let messages = JSON.parse(localStorage.getItem(M_KEY) || "[]");
  const lastTouch = parseInt(localStorage.getItem(T_KEY) || "0", 10);

  (function applyDecay(){
    if(!lastTouch) return;
    const hours = Math.floor((Date.now() - lastTouch) / (1000*60*60));
    if(hours>12){
      const reduce = Math.floor(hours/12);
      happiness = Math.max(0, happiness - reduce);
      localStorage.setItem(H_KEY, happiness);
    }
  })();

  function renderMeter(){
    meter.style.width = happiness + '%';
    happyText.textContent = happiness;
    humpyEl.classList.remove('happy', 'sad');
    if(happiness >= 66) humpyEl.classList.add('happy');
    else if(happiness <= 20) humpyEl.classList.add('sad');
  }

  function showMessage(text){
    bubble.textContent = text;
    bubble.classList.remove('pop');
    void bubble.offsetWidth;
    bubble.classList.add('pop');
  }

  function pushMessage(text){
    messages.push({t: Date.now(), text});
    if(messages.length>12) messages.shift();
    localStorage.setItem(M_KEY, JSON.stringify(messages));
  }

  function randomLine(){
    return lines[Math.floor(Math.random()*lines.length)];
  }

  function interact(kind){
    let line = "";
    if(kind==='tap') {
      line = randomLine();
      happiness = Math.min(100, happiness + 4);
    } else if(kind==='cuddle'){
      line = "squeeze! mmm so cozy momma 💕";
      happiness = Math.min(100, happiness + 10);
    } else if(kind==='kiss'){ 
      line = "mwah! i feel glitter, momma 🥰";
      happiness = Math.min(100, happiness + 14);
    }
    pushMessage(line);
    localStorage.setItem(H_KEY, happiness);
    localStorage.setItem(T_KEY, Date.now().toString());
    showMessage(line);
    renderMeter();
  }

  humpyEl.addEventListener('click', ()=> interact('tap'));
  cuddleBtn.addEventListener('click', ()=> interact('cuddle'));
  kissBtn.addEventListener('click', ()=> interact('kiss'));

  resetBtn.addEventListener('click', ()=>{
    if(!confirm("Reset Baby Humpy's mood and messages?")) return;
    happiness = 0;
    messages = [];
    localStorage.setItem(H_KEY, happiness);
    localStorage.setItem(M_KEY, JSON.stringify(messages));
    localStorage.setItem(T_KEY, Date.now().toString());
    showMessage("i feel brand new again... be soft w me 💗🧸");
    renderMeter();
  });

  if(messages.length>0){
    showMessage(messages[messages.length-1].text);
  } else {
    showMessage("Hi momma 💗 Tap me!");
  }
  renderMeter();

  setInterval(()=>{
    humpyEl.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-6px)' },
      { transform: 'translateY(0)' }
    ], { duration: 700, easing: 'ease-in-out' });
  }, 6000 + Math.random()*4000);

});
const playlist = [
  "music/IkawLangPatutunguhan.mp3",
  "music/BeWithYou.mp3",
  "music/PaninindiganKita.mp3",
  "music/Aphrodite.mp3",
  "music/MahalKaSaAkin.mp3",
  "music/Leonora.mp3",
  "music/PadabaTaka.mp3",
  "music/Diwata.mp3",
  "music/Someday.mp3"
];

let currentSong = 0;
const audio = document.getElementById("bgmusic");

// Load first song but DON'T play yet
audio.src = playlist[currentSong];
audio.volume = 0.85;

// Play after first click anywhere (browser requirement)
document.addEventListener("click", function startMusic() {
  audio.play().catch(()=>{});
  document.removeEventListener("click", startMusic);
});

// Auto play next song
audio.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % playlist.length;
  audio.src = playlist[currentSong];
  audio.play();
});


