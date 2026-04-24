// ==========================================
// 1. PENGATURAN LINK MYLEAD & PARAMETER ML_SUB1
// ==========================================

const urlParams = new URLSearchParams(window.location.search);
const mlSub1 = urlParams.get('ml_sub1');

// Link asli bawaan MyLead Anda
let myLeadLink = "https://bestlocker.eu/iframe/cdcc3fb2-2137-11f1-a5cd-4e5c1971bddc";

if (mlSub1) {
    myLeadLink = myLeadLink + "&ml_sub1=" + mlSub1;
}

document.addEventListener("DOMContentLoaded", function() {
    const lockerBtn = document.getElementById("lockerLink");
    if(lockerBtn) {
        lockerBtn.href = myLeadLink;
    }
});

// ==========================================
// 2. LOGIKA TAMPILAN WEBSITE & TOMBOL
// ==========================================

function selectDevice(elem, type) {
    document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('selected'));
    elem.classList.add('selected');
}

function processStep1() {
    const user = document.getElementById('usernameInput').value;
    if(!user || user.trim() === "") { 
        alert("Please enter username!"); 
        return; 
    }

    const displayUserElements = document.querySelectorAll('#displayUsername');
    displayUserElements.forEach(el => el.innerText = user);

    // Sembunyikan tombol, tampilkan proses loading
    const btn = document.querySelector('#step1 .cta-btn');
    if(btn) btn.style.display = 'none';
    
    // Sembunyikan komentar agar proses loading terlihat jelas
    const comments = document.querySelector('.comments-section');
    if(comments) comments.style.display = 'none';
    
    const loadingContainer = document.getElementById('loading1');
    if(loadingContainer) loadingContainer.style.display = 'block';

    const searchIcon = document.getElementById('searchIcon');
    const successIcon = document.getElementById('successIcon');
    const barContainer = document.getElementById('barContainer1');
    const txt = document.getElementById('loadingText1');
    const bar = document.getElementById('progressBar1');

    if(searchIcon) searchIcon.style.display = 'block'; 
    if(successIcon) successIcon.style.display = 'none'; 
    if(barContainer) barContainer.style.display = 'block'; 
    if(txt) txt.style.color = "#ffcc00"; 
    
    let w = 0;
    const intv = setInterval(() => {
        w += 1.5; 
        if(bar) bar.style.width = w + '%';
        
        if(w > 10 && w < 50 && txt) txt.innerText = "Searching User ID...";
        if(w >= 50 && w < 80 && txt) txt.innerText = "Verifying Account...";
        if(w >= 80 && txt) txt.innerText = "Synchronizing...";
        
        if(w >= 100) {
            clearInterval(intv);
            if(searchIcon) searchIcon.style.display = 'none'; 
            if(barContainer) barContainer.style.display = 'none'; 
            if(successIcon) successIcon.style.display = 'block'; 
            if(txt) {
                txt.innerText = "Account Found!"; 
                txt.style.color = "#76ff03"; 
            }
            
            setTimeout(() => {
                const step1 = document.getElementById('step1');
                const step2 = document.getElementById('step2');
                if(step1) step1.classList.remove('active');
                if(step2) step2.classList.add('active');
                document.body.classList.remove('bg-step1');
            }, 1500);
        }
    }, 40); 
}

function startClaimProcess(itemName) {
    document.getElementById('selectedItemName').innerText = itemName;
    document.getElementById('step-loading').classList.add('active');

    let p = 0;
    const pBar = document.getElementById('progressBarGen');
    const cText = document.getElementById('consoleText');
    pBar.style.width = '0%';
    
    const steps = ["Connecting to Server...", "Validating User...", "Generating " + itemName + "...", "Finalizing..."];

    const timer = setInterval(() => {
        p += 1; pBar.style.width = p + '%';
        
        if (p < 30) cText.innerText = steps[0];
        else if (p < 60) cText.innerText = steps[1];
        else if (p < 90) cText.innerText = steps[2];
        else cText.innerText = steps[3];

        if (p >= 100) {
            clearInterval(timer);
            setTimeout(() => {
                document.getElementById('step-loading').classList.remove('active');
                document.getElementById('step3').classList.add('active'); 
            }, 800);
        }
    }, 50); 
}

function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    const display = document.getElementById('dealCountdown');
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if(display) display.textContent = hours + "h " + minutes + "m " + seconds + "s";
        if (--timer < 0) timer = duration;
    }, 1000);
}

startCountdown((14 * 3600) + (28 * 60) + 10);

// ==========================================
// 3. SCRIPT USER ONLINE (NYATA & RIBUAN)
// ==========================================
let currentUsers = 4285;

setInterval(() => {
    const el = document.getElementById('userCount');
    let change = Math.floor(Math.random() * 41) - 15; 
    currentUsers += change;
    if(currentUsers < 3800) currentUsers = 3800;
    if(currentUsers > 6500) currentUsers = 6500;
    if(el) el.innerText = "Users: " + currentUsers.toLocaleString();
}, 3000); 

// ==========================================
// 4. SCRIPT PELACAKAN HISTATS
// ==========================================
function lacakKlikCPA(event, urlTujuan) {
    if(event) event.preventDefault(); 
    
    window._Hasync = window._Hasync || [];
    window._Hasync.push(['Histats.start', '1,5022669,4,0,0,0,00010000']);
    window._Hasync.push(['Histats.fasi', '1']);
    window._Hasync.push(['Histats.track_hits', '']);
    
    var hs = document.createElement('script'); 
    hs.type = 'text/javascript'; 
    hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);

    setTimeout(function() {
        window.location.href = urlTujuan;
    }, 500);
}

// ==========================================
// 5. LIVE NOTIFICATION (SOCIAL PROOF)
// ==========================================
const euroNames = ["Oliver", "Emma", "Mateo", "Sofia", "Lucas", "Mila", "Leo", "Anna", "Maxim", "Chloe", "Hugo", "Alice", "Felix", "Clara", "Lars", "Greta", "Sven", "Ingrid", "Liam", "Charlotte", "Julian", "Lea", "Milan", "Elena", "Noah"];
const actions = ["successfully claimed", "just unlocked", "received a", "generated"];
const items = ["Diamond Booster", "Legendary Booster", "15,000 Coins", "Gold Booster", "VIP Bundle", "Power Pack", "Special Booster"];
const times = ["just now", "15 seconds ago", "32 seconds ago", "1 min ago", "2 mins ago"];

function showNotification() {
    const notiContainer = document.getElementById('live-notification');
    if(!notiContainer) return;

    const randomName = euroNames[Math.floor(Math.random() * euroNames.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];

    const nameEl = document.getElementById('noti-name');
    const actEl = document.getElementById('noti-action');
    const itemEl = document.getElementById('noti-item');
    const timeEl = document.getElementById('noti-time');

    if(nameEl) nameEl.innerText = randomName;
    if(actEl) actEl.innerText = randomAction;
    if(itemEl) itemEl.innerText = randomItem;
    if(timeEl) timeEl.innerText = randomTime;

    notiContainer.classList.add('show');

    setTimeout(() => {
        notiContainer.classList.remove('show');
    }, 4000);
}

setTimeout(() => {
    showNotification();
    setInterval(() => {
        showNotification();
    }, Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000); 
}, 2000);

// ==========================================
// 6. SISTEM ROTASI 50 KOMENTAR GLOBAL (REAL-TIME)
// ==========================================
const databaseKomentar = [
    // EROPA
    { name: "Oliver H.", text: "Just unlocked the Diamond Booster! Amazing.", img: "1" },
    { name: "Emma W.", text: "Finally! 15,000 coins added to my wallet.", img: "2" },
    { name: "Lucas M.", text: "Legendary Booster received. This is top tier!", img: "3" },
    { name: "Sofia G.", text: "Successfully claimed the VIP Bundle. Thank you!", img: "4" },
    { name: "Leo B.", text: "It actually works for my Android device. Great!", img: "5" },
    { name: "Mila K.", text: "The Gold Booster is so helpful. Just got it!", img: "6" },
    { name: "Noah J.", text: "Took only 2 minutes to verify. Worth it!", img: "7" },
    { name: "Alice P.", text: "Got the Special Booster pack just now.", img: "8" },
    { name: "Felix R.", text: "Match Masters rewards are real. Just received coins.", img: "9" },
    { name: "Clara S.", text: "Verified successfully. Reward unlocked!", img: "10" },
    { name: "Liam N.", text: "Legendary stickers found. This is cool!", img: "11" },
    { name: "Elena V.", text: "Power Pack claimed! Everything is smooth.", img: "12" },
    { name: "Sven L.", text: "Received 5,250 coins. No issues at all.", img: "13" },
    { name: "Anna D.", text: "Just got the Diamond pack. Highly recommended.", img: "14" },
    { name: "Milan F.", text: "Unlocking process was very fast. 5 stars!", img: "15" },
    { name: "Chloe T.", text: "Everything synchronized perfectly. Got my rewards.", img: "16" },
    { name: "Hugo Z.", text: "Just received the Silver Booster. Awesome!", img: "17" },
    { name: "Lea Q.", text: "Verified in seconds. My account is updated.", img: "18" },
    { name: "Maxim E.", text: "Diamond Booster received on iOS. Works great!", img: "19" },
    { name: "Ingrid C.", text: "Finally found a working way for Match Masters.", img: "20" },
    { name: "Hans M.", text: "German players, this is legit. Just got my koin.", img: "21" },
    { name: "Sophie L.", text: "Merci! The stickers are already in my account.", img: "22" },
    { name: "Lars O.", text: "Scandinavian approved! Fast verification.", img: "23" },
    { name: "Greta K.", text: "The generator is very stable. No lag.", img: "24" },
    { name: "Julian P.", text: "Just shared this with my clan. Everyone got it!", img: "25" },

    // ASIA (TANPA INDONESIA)
    { name: "Kenji Y.", text: "Sugoi! Legendary booster unlocked instantly.", img: "26" },
    { name: "Hana S.", text: "Japanese server works perfect. 15k coins received.", img: "27" },
    { name: "Min-Ho K.", text: "Kamsahamnida! Very fast synchronization.", img: "28" },
    { name: "Ji-Woo L.", text: "Korean users, try this. Verified in 1 min.", img: "29" },
    { name: "Chen W.", text: "Great tool. Successfully generated VIP bundle.", img: "30" },
    { name: "Mei Ling", text: "Got the Diamond Booster for free... I mean, easily!", img: "31" },
    { name: "Ananya S.", text: "Finally found something that works in India.", img: "32" },
    { name: "Rohan D.", text: "100% real. Just received my gold boosters.", img: "33" },
    { name: "Areeya T.", text: "Saw this on YouTube, tried it, and it works!", img: "34" },
    { name: "Somsak P.", text: "Thailand users, this is the best one.", img: "35" },
    { name: "Yuki H.", text: "Everything is perfect. My coins are here.", img: "36" },
    { name: "Tuan A.", text: "Vietnamese server is fast. Claimed 3000 coins.", img: "37" },
    { name: "Linh D.", text: "Stickers and boosters received. No issues.", img: "38" },
    { name: "Arjun V.", text: "Verification was simple. Got my legendary pack.", img: "39" },
    { name: "Daiki K.", text: "Best Match Masters tool in 2026. Arigato!", img: "40" },
    { name: "Soyeon P.", text: "My friend told me about this, it really works.", img: "41" },
    { name: "Wei Z.", text: "Highly recommended for all players.", img: "42" },
    { name: "Haruto S.", text: "I was skeptical at first, but it is real.", img: "43" },
    { name: "Nisha R.", text: "Generated 15000 coins in less than 5 mins.", img: "44" },
    { name: "Kim S.", text: "Seoul server is very fast today. Claimed!", img: "45" },
    { name: "Takumi N.", text: "Easy to use. Got my boosters immediately.", img: "46" },
    { name: "Zara B.", text: "Singapore server works fine. Verified!", img: "47" },
    { name: "Sora M.", text: "Just got my legendary sticker. So happy!", img: "48" },
    { name: "Rahul G.", text: "The verification step is worth the reward.", img: "49" },
    { name: "Aoi T.", text: "Fastest way to get Diamond boosters.", img: "50" }
];

function tampilkanKomentarAcak() {
    const container = document.getElementById('dynamicComments');
    if(!container) return;

    // Animasi memudar
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        // Mengacak database dan mengambil 2 komentar
        const acak = databaseKomentar.sort(() => 0.5 - Math.random()).slice(0, 2);
        container.innerHTML = ''; 

        acak.forEach(item => {
            const html = `
                <div class="comment-item">
                    <img src="https://i.pravatar.cc/150?img=${item.img}" alt="User" class="comment-avatar">
                    <div class="comment-body">
                        <div class="comment-name">${item.name} <span class="comment-time">just now</span></div>
                        <div class="comment-text">${item.text}</div>
                    </div>
                </div>
            `;
            container.innerHTML += html;
        });
        
        // Munculkan kembali
        container.style.opacity = '1';
    }, 500);
}

// Inisialisasi rotasi
document.addEventListener("DOMContentLoaded", () => {
    tampilkanKomentarAcak();
    setInterval(tampilkanKomentarAcak, 6000); 
});

// ==========================================
// 7. PROTEKSI WEBSITE (ANTI-COPY & INSPECT)
// ==========================================
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function(e) {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) || (e.ctrlKey && e.keyCode == 85)) return false;
};