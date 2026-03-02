// --- Navigation ---
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        document.querySelectorAll('.view-section').forEach(s => s.classList.add('hidden'));
        document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
        const section = document.getElementById('view-' + target);
        if (section) {
            section.classList.remove('hidden');
            section.classList.add('active');
        }
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    });
});

// --- Auth Tabs ---
document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.auth-tab').forEach(t => {
            t.classList.remove('active', 'text-white');
            t.classList.add('text-white/50');
        });
        tab.classList.add('active', 'text-white');
        tab.classList.remove('text-white/50');
        const regFields = document.getElementById('register-fields');
        if (tab.dataset.type === 'register') {
            regFields.classList.remove('hidden');
        } else {
            regFields.classList.add('hidden');
        }
    });
});

// --- Store Items ---
const storeItems = [
    { name: 'VIP', price: '49.90 TL', desc: 'Temel ayrıcalıklar ve özel eşyalar.', color: 'amber' },
    { name: 'VIP+', price: '99.90 TL', desc: 'Gelişmiş yetenekler ve kozmetikler.', color: 'purple' },
    { name: 'MVP', price: '149.90 TL', desc: 'Tüm ayrıcalıklar ve özel içerikler.', color: 'red' }
];

const storeGrid = document.getElementById('store-grid');
if (storeGrid) {
    storeItems.forEach(item => {
        storeGrid.innerHTML += `
            <div class="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-${item.color}-500/50 transition-all text-center group">
                <h3 class="text-2xl font-bold mb-2 group-hover:text-${item.color}-400 transition-colors">${item.name}</h3>
                <p class="text-white/50 text-sm mb-6">${item.desc}</p>
                <div class="text-3xl font-bold text-${item.color}-400 mb-6">${item.price}</div>
                <button class="w-full py-2 bg-${item.color}-600 hover:bg-${item.color}-500 rounded-md font-medium transition-colors">Satın Al</button>
            </div>`;
    });
}

// --- Copy IP to Clipboard ---
const copyBtn = document.getElementById('copy-ip-btn');
const toast = document.getElementById('copy-toast');

if (copyBtn && toast) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('oyna.oldfinecraft.online').then(() => {
            showToast();
        }).catch(() => {
            // Fallback for older browsers
            const ta = document.createElement('textarea');
            ta.value = 'oyna.oldfinecraft.online';
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast();
        });
    });
}

function showToast() {
    toast.style.opacity = '1';
    toast.style.transform = 'translate(-50%, 0)';
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 10px)';
    }, 2000);
}

// --- Language Switcher ---
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        // Trigger Google Translate
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event('change'));
        }
        // Highlight active button
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.remove('text-white', 'bg-white/10');
            b.classList.add('text-white/60');
        });
        btn.classList.add('text-white', 'bg-white/10');
        btn.classList.remove('text-white/60');
    });
});

// --- Initialize Lucide Icons ---
lucide.createIcons();
