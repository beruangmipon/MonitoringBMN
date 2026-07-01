// ============================================================
//  KONFIGURASI FIREBASE — ISI BAGIAN INI DENGAN MILIK ANDA
// ============================================================
//
// Repo ini TERPISAH dari repo bappebti-dashboard, tapi bisa memakai
// PROJECT FIREBASE YANG SAMA (paling praktis — tidak perlu setup baru).
//
// Cara termudah: buka repo bappebti-dashboard Anda di GitHub, buka file
// firebase-config.js di sana, SALIN isinya, TEMPEL menggantikan isi
// file placeholder di bawah ini.
//
// (Kalau Anda justru ingin project Firebase yang benar-benar baru/terpisah,
// buat project baru di https://console.firebase.google.com lalu isi
// nilai-nilai di bawah dari project baru tersebut.)
//
//  PENTING: nilai-nilai ini BUKAN rahasia (wajar tampil di sisi browser).
//  Keamanan data diatur oleh "Firestore Security Rules", bukan oleh
//  menyembunyikan config ini.
// ============================================================

export const firebaseConfig = {
  apiKey:            "AIzaSyDNHTh4BQIwTSlQB477KaebpLs7eMzpdJE",
  authDomain:        "bmn-dashboard-53414.firebaseapp.com",
  projectId:         "bmn-dashboard-53414",
  storageBucket:     "bmn-dashboard-53414.firebasestorage.app",
  messagingSenderId: "1075522479903",
  appId:             "1:1075522479903:web:f6c6d64a1b04689974322a"
};
