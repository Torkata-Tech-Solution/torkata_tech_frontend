// ecosystem.config.js
module.exports = {
  apps : [{
    name   : "torakatatech_front", // Nama aplikasi Anda
    script : "build/index.js", // Jalur ke entry point server SvelteKit Anda
    // Jika Anda menggunakan adapter Node, biasanya ini adalah `build/index.js`
    // Pastikan jalur ini benar sesuai dengan output build Anda.
    // Contoh lain: "prerendered/index.js" atau "output/server/index.js"
    watch  : false, // Set ke true jika Anda ingin PM2 me-restart otomatis saat ada perubahan file
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
};  