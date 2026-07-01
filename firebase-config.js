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
  apiKey:            "GANTI_API_KEY",
  authDomain:        "GANTI_PROJECT_ID.firebaseapp.com",
  projectId:         "GANTI_PROJECT_ID",
  storageBucket:     "GANTI_PROJECT_ID.appspot.com",
  messagingSenderId: "GANTI_SENDER_ID",
  appId:             "GANTI_APP_ID"
};
