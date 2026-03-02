// --- Sayfa Geçiş Sistemi ---
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        
        // Hız için görünürlüğü anlık değiştiriyoruz
        document.querySelectorAll('.view-section').forEach(s => s.classList.add('hidden'));
        
        const targetView = document.getElementById('view-' + target);
        if (targetView) {
            targetView.classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        // Aktif buton stilini güncelle
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        if (btn.classList.contains('nav-btn')) btn.classList.add('active');
    });
});

// --- IP Kopyalama ---
const copyBtn = document.getElementById('copy-ip-btn');
const toast = document.getElementById('copy-toast');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText("oyna.oldfinecraft.online").then(() => {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2500);
        });
    });
}
