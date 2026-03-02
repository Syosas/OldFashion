// --- IP Kopyalama Sistemi ---
const copyBtn = document.getElementById('copy-ip-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const ip = "oyna.oldfinecraft.online";
        navigator.clipboard.writeText(ip).then(() => {
            alert("Sunucu adresi kopyalandı! Minecraft'a yapıştırıp katılabilirsin.");
        });
    });
}

// --- Navigasyon Geçişleri ---
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        // Tüm aktiflikleri temizle
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Burada sayfa geçiş mantığını çalıştırabilirsin
        console.log("Gidilecek sayfa:", target);
    });
});
