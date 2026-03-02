// Sayfa Geçiş Sistemi (Animasyonlu)
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        const mainContent = document.querySelector('.animate-content');

        // Önce animasyonu sıfırla
        mainContent.style.opacity = '0';
        
        setTimeout(() => {
            document.querySelectorAll('.view-section').forEach(section => section.classList.add('hidden'));
            
            const targetView = document.getElementById('view-' + target);
            if (targetView) targetView.classList.remove('hidden');

            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Animasyonla geri getir
            mainContent.style.opacity = '1';
            window.scrollTo(0, 0);
        }, 150);
    });
});

// IP Kopyalama
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
