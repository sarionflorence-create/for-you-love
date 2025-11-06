// ====== Navigation ======
    document.querySelectorAll('.nav-btn').forEach(b=>b.addEventListener('click',e=>{
      document.querySelectorAll('.nav-btn').forEach(x=>x.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const target = e.currentTarget.dataset.target;
      document.getElementById(target).scrollIntoView({behavior:'smooth'});
    }));

    function scrollToSection(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}

    // ====== Letter typing animation ======
    const letterText = `Love,\n\nI don’t even know where to begin, because whenever it comes to you, everything starts to feel a bit softer, a bit slower, a bit heavier in the heart — in the best way. Maybe the best way to begin is this: thank you. \n\nThank you for existing at the same time that I do. Thank you for somehow crossing paths with me in a world this big, where we could have easily never met at all. Thank you for choosing to stay, even when there were days I struggled to choose myself. Thank you for loving me in ways I didn’t even know I needed to be loved.\n\nI still remember the earliest days — the way our story didn’t begin loudly, but softly. Hindi yung grand entrance. Hindi yung dramatic. Hindi yung tipong alam agad na “eto na yun.” It was quiet. Like the kind o f quiet that sneaks up on you. We started with comments, little replies, short conversations… nothing heavy. Just presence.

But it was enough to start something.

I didn’t know then what you would become to me. I didn’t know that a “friend,” a simple comfort, someone to talk to — would become home.

Baby, you became home.

And I didn’t even realize it until one day, I started looking for you in everything — in my day, in my thoughts, in the silence before sleeping, in my first instinct to share good news, and in the moments when everything felt too heavy.

I realized that you weren’t just “someone I talk to.”
You became someone I need.
You became someone I choose.
Someone I want to hold on to.
Someone I want to keep.

You were there when I wasn’t sure of myself.
When I was torn.
When I was afraid to fall again.
When I thought I was ready but wasn’t.
And still, you stayed.

Mahal, you never forced me to love fast.
You never made me feel like love was something I needed to rush.
Instead, you held me gently — so gently that I didn’t even realize I was healing.

You didn’t ask for proofs.
You didn’t demand validation.
You didn’t ask me to be whole before loving you.

You just asked one thing —
“Please payagan mo akong mahalin ka.”

Baby, those words changed me.

Because for once, love didn’t feel like something I had to earn.
It didn’t feel like something that hurt.
It didn’t feel like something I had to fear.

You made love feel soft.
You made love feel slow.
You made love feel warm.

And in that softness, I found myself falling for you — slowly at first, and then all at once.

Do you remember our long calls that lasted almost 12 hours? The ones we never wanted to end? The ones where we laughed, talked, got quiet, got sleepy, and then laughed again for no reason? Those hours didn’t feel like time passing — they felt like home expanding. They felt like breathing easier. They felt like something I wanted to return to, again and again.

I never liked calls before.
You didn’t either.
But somehow, we became the exception to our own rules.

I used to hate my voice — but you made me love it. Because you listened to it like it mattered. You listened like it was something precious. And because of that, I started to hear it differently too.

Love, you didn’t just make me love you.
You made me love myself a little more.

And that… that is the kind of love I didn’t know how to explain — until you. 

Niaine, you are gentle in ways I hope the world never takes away.
You are the softness I didn’t know I needed.
You are the warm place I didn’t know I was searching for.
You are the steady presence in the middle of everything uncertain.

You don’t have to do much — it’s the little things.
The way you say “good morning” as if you mean it.
The way you say my name like you’re holding it.
The way you ask “Are you okay?” even when I say I am.
The way you care without needing to be loud about it.

Your love isn’t the type that shouts.
It’s the type that stays.
The type that waits.
The type that listens.

And that kind of love is rare.

I want you to know this, mahal:
You are worth the patience.
You are worth the time.
You are worth the effort.
You are worth every slow, soft step of loving.

There is nothing about you that is too much.
Nothing about your feelings that are “too heavy.”
Nothing about your thoughts that are “too complicated.”

You are allowed to feel deeply.
You are allowed to care too much.
You are allowed to love with your whole heart.

Because that is who you are — someone who loves completely.

And I love that about you. Baby, I know we are still growing.
I know we are still learning.
I know life gets heavy sometimes.
I know distance makes everything feel harder.
But I want you to remember this —
The distance is real, yes.
But so are we.

The waiting is real.
But so is the love.

The uncertainty is real.
But so is the way we choose each other.

And as long as we continue choosing each other — we are already winning.

I will choose you in the bad days.
I will choose you in the quiet days.
I will choose you even when things are difficult.
I will choose you when we argue.
I will choose you when we misunderstand each other.
I will choose you when we get tired.
I will choose you when we’re both silent, both confused, both overwhelmed.
I will choose you when it’s easy — and when it’s not.

I will choose you, mahal.
In every version of life.
In every season of us.

Because love isn’t just the good moments.
Love is the choosing.
Love is the staying.
Love is the trying.
Love is holding each other — even from far away.

Rhian, my love, my baby, my mahal, my Niaine —

Thank you for being the safest place my heart has ever known.
Thank you for showing me the kind of love that doesn’t rush, doesn’t break, doesn’t demand — but gently unfolds.
Thank you for holding me with patience.
Thank you for loving me softly.
Thank you for staying when loving me required waiting.

Thank you, simply, for you.

You are the love I didn’t expect — but the love I will spend my life choosing.

So listen, baby —

Iyong-iyo ako.
Buo.
Walang kulang.
Walang tira.
Walang duda.
Walang takot.

Now, tomorrow, and every day after.

Always.
Always you.
Always us.\n\nAlways yours,\nPolen 💗`;
    const letterEl = document.getElementById('letter-text');
    let letterIndex = 0;let letterTimer=null;
    function typeLetter(){
      letterEl.textContent = '';
      letterIndex = 0;
      clearInterval(letterTimer);
      letterTimer = setInterval(()=>{
        letterIndex++;
        letterEl.textContent = letterText.slice(0,letterIndex);
        if(letterIndex>=letterText.length)clearInterval(letterTimer);
      },22);
    }
    document.getElementById('reveal-letter').addEventListener('click',typeLetter);
    document.getElementById('replay-letter').addEventListener('click',typeLetter);

    // ====== Reasons list and reveal ======
    const reasons = [
      "I love the way you smile, especially when you try to hide it.",
      "I love the sound of your laugh — it makes everything lighter.",
      "I love how your voice can calm me even on my worst days.",
      "I love the way you say my name — it feels like home.",
      "I love how you always try to understand me.",
      "I love how you never judge me for being myself.",
      "I love how you make me feel seen.",
      "I love how you make me feel heard.",
      "I love the warmth of your presence, even from afar.",
      "I love that we can talk about anything and everything.",
      "I love how comfortable silence is with you.",
      "I love the sarcasm and playful teasing we have.",
      "I love how we laugh at the most random things.",
      "I love that you stayed even when I was unsure.",
      "I love that you didn’t rush my healing.",
      "I love how patient you are with me.",
      "I love how you love — gentle but strong.",
      "I love your honesty, even when it’s hard.",
      "I love the way your voice sounds when you talk about something you love.",
      "I love the dreams you have for your future.",
      "I love your passion and dedication.",
      "I love your kindness — even when no one sees it.",
      "I love how thoughtful you are.",
      "I love the little things you remember about me.",
      "I love how you make ordinary moments feel special.",
      "I love that you make me excited for tomorrow.",
      "I love that you’re my peace.",
      "I love how we can rely on each other.",
      "I love how strong you are, even when you feel weak.",
      "I love how you keep going — even when life gets heavy.",
      "I love your sincerity.",
      "I love the softness in your words.",
      "I love the comfort in your tone.",
      "I love the way you care deeply.",
      "I love the way your heart works.",
      "I love how safe I feel with you.",
      "I love how you respect my feelings.",
      "I love how you respect my boundaries.",
      "I love how you make me want to be better.",
      "I love how you see the good in me even when I don’t.",
      "I love your sense of humor.",
      "I love how you never fail to make me smile.",
      "I love how your presence feels like sunlight.",
      "I love how you check on me.",
      "I love how you listen — really listen.",
      "I love the way your mind works.",
      "I love your ideas and how you express them.",
      "I love your perspective on life.",
      "I love your flaws — because they make you real.",
      "I love your imperfections — because they make you human.",
      "I love how you choose me.",
      "I love how you stay, even when it's hard.",
      "I love how you say “I’m here.”",
      "I love how you make me believe in love again.",
      "I love how you make distance feel small.",
      "I love how we survived even when it was not easy.",
      "I love the loyalty you give.",
      "I love your consistency.",
      "I love how you remember the way I feel things.",
      "I love how you understand my silence.",
      "I love the softness in your heart.",
      "I love the fire in your soul.",
      "I love how you comfort me in your own way.",
      "I love your gentleness with my emotions.",
      "I love your bravery — even when you feel scared.",
      "I love your patience with life.",
      "I love how you love your family.",
      "I love how you love and care for your friends.",
      "I love how you care about almost everything",
      "I love your sensitivity.",
      "I love how you express love — quietly, deeply, sincerely.",
      "I love how our connection feels natural.",
      "I love that I can be honest with you.",
      "I love that I don’t have to pretend.",
      "I love how you make me feel enough.",
      "I love how you remind me I deserve love too.",
      "I love the way you hold space for me.",
      "I love how you never make me feel alone.",
      "I love how you make memories feel important.",
      "I love how even distance can’t change us.",
      "I love how your messages make my day.",
      "I love how excited I feel to talk to you.",
      "I love how you look at me — even through a picture.",
      "I love that you’re my person.",
      "I love that I’m yours.",
      "I love how we found each other unexpectedly.",
      "I love how you became important without trying.",
      "I love how you’re soft with your love.",
      "I love how you’re real — no pretending.",
      "I love how we grew together.",
      "I love how we learned from each other.",
      "I love how we choose each other — every time.",
      "I love the peace I feel with you.",
      "I love the love we have — quiet but strong.",
      "I love how you inspired me to open my heart again.", 
      "I love how you hold my heart carefully.",
      "I love how you make love feel safe.",
      "I love how you make love feel home.",
      "I love how you are — simply you.",
      "I love how you make me want to go home after a tiring day.",
      "I love how you love me.",
      "And I love that I will always choose you — today, tomorrow, and every day after."
    ];

    const reasonsList = document.getElementById('reasons-list');
    const reasonTotal = document.getElementById('reason-total');
    const reasonCounter = document.getElementById('reason-counter');
    reasonTotal.textContent = reasons.length;
    let shown = 0;

    function showNextReason(){
      if(shown>=reasons.length) return;
      const r = document.createElement('div');
      r.className='reason';
      r.textContent = reasons[shown];
      r.style.opacity=0; r.style.transform='translateY(8px)';
      reasonsList.appendChild(r);
      // animate
      setTimeout(()=>{r.style.transition='opacity .45s, transform .45s';r.style.opacity=1;r.style.transform='translateY(0)';},20);
      shown++; reasonCounter.textContent=shown;
    }
    document.getElementById('next-reason').addEventListener('click',showNextReason);

    // auto show first 2 reasons for effect
    showNextReason();showNextReason();

    // ====== Gallery upload ======
    const photoInput = document.getElementById('photo-input');
    const gallery = document.getElementById('gallery');
    function addPhoto(file){
      const reader = new FileReader();
      const wrap = document.createElement('div');wrap.className='photo';
      reader.onload = ()=>{
        const img = document.createElement('img');img.src = reader.result;wrap.innerHTML='';wrap.appendChild(img);
      };
      reader.readAsDataURL(file);
      gallery.appendChild(wrap);
    }
    photoInput.addEventListener('change',(e)=>{
      const files = Array.from(e.target.files);
      if(files.length===0) return;
      // remove placeholder first
      if(gallery.children.length===1 && gallery.children[0].textContent.includes('Your photos')) gallery.innerHTML='';
      files.forEach(addPhoto);
    });

    // ====== Timeline adding ======
    document.getElementById('add-event').addEventListener('click',()=>{
      const title = document.getElementById('event-title');
      const meta = document.getElementById('event-meta');
      if(!title.value) return alert('Please add an event title.');
      const el = document.createElement('div');el.className='event';
      el.innerHTML = `<div class=\"dot\"></div><div><strong contenteditable> ${escapeHtml(title.value)}</strong><div class=\"meta\" contenteditable> ${escapeHtml(meta.value||'') }</div></div>`;
      document.getElementById('timeline-list').appendChild(el);
      title.value='';meta.value='';
    });

    function escapeHtml(s){return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');}

    // ====== Color interactions ======
    const cover = document.getElementById('cover-box');
    const magic = document.getElementById('magic-box');
    document.getElementById('nianie-name').addEventListener('click',()=>{
      // cycle colors
      const moods = [
        'linear-gradient(135deg,var(--pink),var(--cream))',
        'linear-gradient(135deg,var(--purple),var(--babyblue))',
        'linear-gradient(135deg,var(--pink),var(--babyblue),var(--purple))'
      ];
      const idx = (Math.floor(Math.random()*100)) % moods.length;
      cover.style.transition='background 0.6s';cover.style.background = moods[idx];
      magic.style.transition='background 0.6s';magic.style.background=moods[(idx+1)%moods.length];
    });

    document.getElementById('mood-pastel').addEventListener('click',()=>{magic.style.background='linear-gradient(135deg,var(--pink),var(--cream))'});
    document.getElementById('mood-purple').addEventListener('click',()=>{magic.style.background='linear-gradient(135deg,var(--purple),var(--babyblue))'});
    document.getElementById('mood-rainbow').addEventListener('click',()=>{magic.style.background='linear-gradient(90deg,var(--pink),var(--babyblue),var(--purple))'});

    // ====== small UX niceties ======
    // Keyboard: press N to reveal next reason, L for letter
    document.addEventListener('keydown',e=>{
      if(e.key.toLowerCase()==='n') showNextReason();
      if(e.key.toLowerCase()==='l') typeLetter();
    });

    // Accessibility: let user know how to add music
    console.log('To add background music: open this HTML file in a text editor and add <source src="your-song.mp3" type="audio/mpeg"> inside the <audio id="bg-audio"> element.');

const wallInput = document.getElementById("wallInput");
const postButton = document.getElementById("postButton");
const wallMessages = document.getElementById("wallMessages");

// Load saved messages on page load
let messages = JSON.parse(localStorage.getItem("freedomWall")) || [];

// Display saved messages
function displayMessages() {
  wallMessages.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("message");
    div.textContent = msg;
    wallMessages.appendChild(div);
  });
}

displayMessages();

// Add new message
postButton.addEventListener("click", () => {
  const text = wallInput.value.trim();
  if (text !== "") {
    messages.push(text);
    localStorage.setItem("freedomWall", JSON.stringify(messages));
    wallInput.value = "";
    displayMessages();
  }
});

/* ===== MUSIC PLAYLIST FEATURE ===== */

document.addEventListener("click", function() {
    document.getElementById("bgmusic").play();
  });



