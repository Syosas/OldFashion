// --- Sayfa Geçiş Sistemi (Anlık Hız) ---
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;

        // Tüm bölümleri gizle
        document.querySelectorAll('.view-section').forEach(section => {
            section.classList.add('hidden');
        });

        // Hedef bölümü göster
        const targetView = document.getElementById('view-' + target);
        if (targetView) {
            targetView.classList.remove('hidden');
            // Sayfayı yukarı kaydır
            window.scrollTo(0, 0);
        }

        // Butonların aktiflik durumunu güncelle
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        // Eğer menüdeki butonlardan biriyse aktif yap
        if(btn.classList.contains('nav-btn')) btn.classList.add('active');
    });
});

// --- IP Kopyalama ve Bildirim ---
const copyBtn = document.getElementById('copy-ip-btn');
const toast = document.getElementById('copy-toast');

if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const ip = "oyna.oldfinecraft.online";
        navigator.clipboard.writeText(ip).then(() => {
            // Bildirimi göster
            toast.classList.add('show');
            // 2.5 saniye sonra gizle
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2500);
        });
    });
}
