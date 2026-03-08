const input = document.getElementById('aj-input');
const status = document.getElementById('status');

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let val = input.value.toUpperCase();
        
        if (val === 'AJ') {
            status.innerText = "MAGNET BARE METAL AKTIF. KERTAS JADI BUBUR.";
            status.style.color = "#0f0";
            // Di sini nanti kita tembak ke Jaringan Q-Net atau Transaksi Bank
            alert("Sovereign State: Selamat Datang di Dapur Ciracas.");
        } else {
            status.innerText = "Saraf Tidak Terdeteksi. Gunakan Dengkul.";
            status.style.color = "#f00";
            input.value = "";
        }
    }
});
