import React from 'react';
import Pemain from '../assets/img/Pemain.png';
import Gambar1 from '../assets/img/Gambar1.png';
import Gambar2 from '../assets/img/Gambar2.png';
import Gambar3 from '../assets/img/Gambar3.png';
import Berita1 from '../assets/img/Berita1.png';
import Berita2 from '../assets/img/Berita2.png';
import Berita3 from '../assets/img/Berita3.png';
import Berita4 from '../assets/img/Berita4.png';
import Berita5 from '../assets/img/Berita5.png';
import Berita6 from '../assets/img/Berita6.png';
import Berita7 from '../assets/img/Berita7.png';
import Berita8 from '../assets/img/Berita8.png';
import TigaGambar from '../assets/img/TigaGambar.png';

export const Beranda = () => {
    return (
        <>
            {/* Konten utama headline */}
            <div className="headline-container">
                {/* Elemen sejajar: tulisan dan gambar */}
                <div className="headline-row">
                    <div className="headline-content">
                        <h2 className="headline-title">
                            Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi
                        </h2>
                        <p className="headline-description">
                            Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas
                            Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila
                            lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
                        </p>
                        <p className="headline-date">22 Januari 2024</p>
                        <a href="#" className="read-more">
                            Baca Selengkapnya &rarr;
                        </a>
                    </div>
                    <div className="headline-image-box">
                        <img
                            src={Pemain}
                            alt="Timnas Indonesia"
                            className="headline-image"
                        />
                    </div>
                </div>
                {/* Navigasi Halaman */}
                <div className="pagination">
                    <span className="arrow">&lt;</span>
                    <span className="current-page">1</span>
                    <span className="separator">dari</span>
                    <span className="total-pages">5</span>
                    <span className="arrow">&gt;</span>
                </div>
            </div>

            {/* Konten Berita Terpopuler */}
            <div className="popular-news-container">
                <h2 className="section-title">Berita Terpopuler</h2>
                <div className="popular-news-list">
                    <div className="popular-news-item">
                        <div className="news-number">1</div>
                        <img
                            src={Gambar1}
                            alt="Berita 1"
                            className="news-image"
                        />
                        <div className="news-content">
                            <p className="news-title">
                                Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?
                            </p>
                            <p className="news-category">Politik &bull; 22 Jan 2024</p>
                        </div>
                    </div>
                    <div className="popular-news-item">
                        <div className="news-number">2</div>
                        <img
                            src={Gambar2}
                            alt="Berita 2"
                            className="news-image"
                        />
                        <div className="news-content">
                            <p className="news-title">
                                Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup Bakrie
                            </p>
                            <p className="news-category">Nasional &bull; 22 Jan 2024</p>
                        </div>
                    </div>
                    <div className="popular-news-item">
                        <div className="news-number">3</div>
                        <img
                            src={Gambar3}
                            alt="Berita 3"
                            className="news-image"
                        />
                        <div className="news-content">
                            <p className="news-title">
                                Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan
                            </p>
                            <p className="news-category">Nasional &bull; 22 Jan 2024</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Konten Rekomendasi */}
            <div className="recommendations-container">
                <h2 className="section-title">Rekomendasi Untuk Anda</h2>
                <div className="recommendations-grid">
                    {/* Daftar Berita */}
                    {[
                        { id: 1, img: Berita1, title: "Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas", category: "Nasional" },
                        { id: 2, img: Berita2, title: "Flypass Bonanza dan Heli Bell Warnai Tupdik TNI", category: "Nasional" },
                        { id: 3, img: Berita3, title: "Perwira Penerbangan TNI AL Raih Gelar 'Double Degree'", category: "Nasional" },
                        { id: 4, img: Berita4, title: "Bank Jatim QRIS Ramadan Vanganza Dibuka", category: "Nasional" },
                        { id: 5, img: Berita5, title: "PLN Sukses Lakukan Pemeliharaan 2 Tahunan", category: "Nasional" },
                        { id: 6, img: Berita6, title: "Bantu Pertahanan Indonesia, ITS Ciptakan Antiradar", category: "Nasional" },
                        { id: 7, img: Berita7, title: "BKD Jatim Gelar Tes Narkoba Bagi Pegawai Non ASN", category: "Nasional" },
                        { id: 8, img: Berita8, title: "Bank Indonesia Prediksi Ekonomi Jatim Tumbuh Lebih Tinggi", category: "Nasional" },
                    ].map((berita) => (
                        <div className="recommendation-item" key={berita.id}>
                            <img
                                src={berita.img}
                                alt={`Berita ${berita.id}`}
                                className="recommendation-image"
                            />
                            <div className="recommendation-content">
                                <p className="recommendation-title">{berita.title}</p>
                                <p className="recommendation-category">
                                    {berita.category} &bull; 22 Jan 2024
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Navigasi Pagination */}
                <div className="pagination-container">
                    {/* Informasi dan Navigasi Pagination */}
                    <div className="pagination-content">
                        {/* Informasi Pagination di sebelah kiri */}
                        <div className="pagination-info">
                            Showing 1 to 10 of 97 results
                        </div>
                        
                        {/* Navigasi Pagination di sebelah kanan */}
                        <div className="pagination">
                            <span className="arrow">&larr; Previous</span>
                            <span className="page-number active">1</span>
                            <span className="page-number">2</span>
                            <span className="page-number">...</span>
                            <span className="page-number">8</span>
                            <span className="page-number">9</span>
                            <span className="arrow">Next &rarr;</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Petualangan Edukatif */}
            <div className="educative-adventure-container">
                <div className="educative-adventure-content">
                    {/* Konten Teks */}
                    <div className="educative-adventure-text">
                        <h2 className="educative-adventure-title">
                            Petualangan Edukatif bersama Malang Mbois City Tour!
                        </h2>
                        <p className="educative-adventure-description">
                            Petualangan Edukatif bersama Malang Mbois City Tour!
                        </p>
                    </div>
                    
                    {/* Gambar */}
                    <div className="educative-adventure-image-wrapper">
                        <img
                            src={TigaGambar}
                            alt="Petualangan Edukatif"
                            className="educative-image"
                        />
                    </div>
                </div>
            </div>

            {/* Navigasi Carousel */}
            <div className="carousel-dots">
                <span className="dot"></span>
                <span className="dot active"></span>
                <span className="dot"></span>
            </div>
        </>
    );
};
export default Beranda;
