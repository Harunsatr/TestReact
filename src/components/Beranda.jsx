import React, { useEffect, useState } from "react";
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
        const [Berita, setBerita] = useState([]);
    
        useEffect(() => {
            const fetchBerita = async () => {
            try {
                const response = await fetch(
                "https://api-berita-indonesia.vercel.app/antara/terbaru"
                );
                const data = await response.json();
                setBerita(data.data.posts.slice(0, 6) || []);
            } catch (error) {
                console.error("Error fetching Berita:", error);
            }
            };
    
            fetchBerita();;
        }, []);
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
            <div className="sidebar-popular-news-list">
            {Berita.map((item, index) => (
                <div className="sidebar-popular-news-item">
                <div className="sidebar-news-number">1</div>
                <img src={item.thumbnail} alt="Berita 1" className="sidebar-news-image" />
                <div className="sidebar-news-content">
                    <p className="sidebar-news-title">{item.title}
                    </p>
                    <p className="sidebar-news-category">
                    Politik &bull; {item.pubDate}
                    </p>
                </div>
                </div>
            ))}
                </div>
            </div>

            {/* Konten Rekomendasi */}
            <div className="recommendations-container">
            <h2 className="related-news-title">Rekomendasi Untuk Anda
                    </h2>
                    <div className="related-news-grid">
                            {Berita.map((item, index) => (
                        <div className="related-news-item" key={item.id}>
                            <img
                                src={item.thumbnail}
                                alt={`Berita ${item.id}`}
                                className="related-news-image"
                            />
                            <div className="related-news-content">
                                <p className="related-news-title-text">{item.title}</p>
                                <p className="related-news-meta">
                                    <span className="related-news-category">Terbaru</span> &bull;{" "}
                                    <span className="related-news-date">{item.pubDate}</span>
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
