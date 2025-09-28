//fungsi untuk scroll ke daftar buku
export function scrollKeDaftarBuku() {
  const daftar = document.getElementById('judulDaftarBuku');
  if (daftar) {
    daftar.scrollIntoView({ behavior: 'smooth' });
  }
}

//fungsi untuk menambah buku
export function tambahBuku(judul, penulis, perpustakaan, tampilkanBuku) {
  // Validasi input
  if (!judul || !penulis) return false;

  //cek duplikat judul + penulis
  const sudahAda = perpustakaan.getAll().some(buku =>
    buku.judul.toLowerCase() === judul.toLowerCase() &&
    buku.penulis.toLowerCase() === penulis.toLowerCase()
  );

  if (sudahAda) {
    alert('Buku dengan judul dan penulis yang sama sudah ada!');
    return false;
  }

  //buku baru dengan status tersedia
  const bukuBaru = { judul, penulis, status: 'tersedia' };

  //tambahkan ke perpustakaan & tampilkan
  perpustakaan.tambah(bukuBaru);
  tampilkanBuku();

  return true;
}