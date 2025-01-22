import React, { useEffect, useState } from "react";
import axios from "axios";
import JudulBerita from "../assets/img/JudulBerita.png";
import Gambar1 from "../assets/img/Gambar1.png";
import Gambar2 from "../assets/img/Gambar2.png";
import Gambar3 from "../assets/img/Gambar3.png";
import Komentar1 from "../assets/img/Komentar1.png";
import Komentar2 from "../assets/img/Komentar2.png";
import Komentar3 from "../assets/img/Komentar3.png";
import Berita1 from "../assets/img/Berita1.png";
import Berita2 from "../assets/img/Berita2.png";
import Berita3 from "../assets/img/Berita3.png";

const Berita = () => {
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
    <div class="berita-container">
        <div class="berita-main">
        {/* Berita Utama */}
        <div class="judul-container">
            <div class="breadcrumb">
            <span>Beranda</span>
            <span class="breadcrumb-separator">&gt;</span>
            <span>Nasional</span>
            <span class="breadcrumb-separator">&gt;</span>
            <span>Detail</span>
            </div>
          {/* Judul Berita */}
            <h1 class="berita-title">
            Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
            Session di RSUD Dr. Soetomo
            </h1>
            <p class="berita-info">Politik • 22 Jan 2024</p>
            <img src={JudulBerita} alt="Berita Utama" class="berita-image" />
            <p class="berita-content">
            Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI
            Sumardji merespons peluang Timnas Indonesia pindah dari Stadion
            Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga
            Kualifikasi Piala Dunia 2026. Akhir-akhir ini rumput lapangan
            Stadion GBK yang jadi markas Indonesia dalam babak kedua Kualifikasi
            Piala Dunia 2026 kerap bermasalah. Pada pertandingan kandang pertama
            melawan Vietnam, Maret lalu, rumput GBK rusak parah. PPKGBK selalu
            pengelola pun mendapat kritik deras.
            </p>
            <br></br>
            <p class="berita-content">
            Acara-acara di luar sepak bola itu kerap membuat kondisi rumput
            tidak sehat dan tidak terlihat bagus saat pertandingan, khususnya
            laga Timnas Indonesia. Sampai saat melawan Irak, rumput GBK tidak
            terlihat sempurna meskipun kondisinya lebih bagus dibanding lawan
            Vietnam. Opsi pindah kandang pun muncul.
            </p>
            <br></br>
            <p class="berita-content">
            "Nanti kami akan sampaikan [rencana pindah dari GBK]," ujar Sumardji
            saat ditanya kemungkinan menggunakan stadion lain di putaran ketiga
            kualifikasi. Sumardji tidak membantah kondisi rumput GBK yang masih
            kurang bagus dalam duel Indonesia vs Irak. PSSI pun berharap PPKGBK
            bisa lebih memperhatikan kondisi rumput untuk pertandingan Skuad
            Garuda. "Kami sampai saat ini sudah telepon dengan pengelola GBK
            karena kondisi rumput kemarin kurang bagus, kami memohon ke pihak
            GBK supaya betul-betul disiapkan dan diperhatikan kondisi rumput,"
            tutur Sumardji. "Kalau dilihat-lihat sepertinya kondisi rumput GBK
            kayaknya stres itu, sehingga dengan kondisi itu akan memengaruhi,
            tadi saya telepon supaya diperhatikan," kata Sumardji menambahkan.
            </p>
        </div>
        </div>

      {/* Sidebar Berita */}
        <aside className="berita-sidebar">
        <h2 className="section-title">Berita Terpopuler</h2>
        {Berita.map((item, index) => (
        <div className="sidebar-popular-news-list">
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
            </div>
        ))}
        </aside>

        {/* Komentar */}
        <div className="comments-section">
            <h2 className="comments-title">Komentar</h2>
            {/* Form Komentar */}
            <div className="comment-form">
            <div className="comment-form-header">
                <img src={Komentar3} alt="Profile" className="comment-user-image" />
                <textarea
                placeholder="Apa yang ingin Anda tanyakan?"
                maxLength={500}
                className="comment-textarea"
                ></textarea>
            </div>
            <div className="comment-form-footer">
                <span className="char-counter">0/50</span>
                <button className="btn-submit">Kirim</button>
            </div>
            </div>

        {/* Daftar Komentar */}
        <ul className="comments-list">
                <li className="comment-item">
                    <div className="comment-user-details">
                        <img
                            src={Komentar1}
                            alt="User"
                            className="comment-user-avatar"
                        />
                        <div>
                            <p className="comment-user-name">UJANG YUSMEIDI S.P., M.Agr.</p>
                            <p className="comment-date">28 Mar 2024 11:15</p>
                        </div>
                    </div>
                    <div className="comment-text">
                        Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh? Karena saya mau download...
                    </div>
                    <a href="#" className="comment-reply">Balas</a>
                </li>
                <li className="comment-item reply-item">
                    <div className="comment-user-details">
                        <img
                            src={Komentar2}
                            alt="User"
                            className="comment-user-avatar"
                        />
                        <div>
                            <p className="comment-user-name">DINA RIKHA RIYANAWATI, S.Pd</p>
                            <p className="comment-date">28 Mar 2024 11:15</p>
                        </div>
                    </div>
                    <div className="comment-text">
                        Saya mengunduh sertifikatnya kok juga belum bisa.
                    </div>
                    <a href="#" className="comment-reply">Balas</a>
                </li>
            </ul>
            {/* Pagination */}
            <div className="pagination-container">
            <div className="pagination-info">
                Item per page
                <select className="pagination-select">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                </select>
                of 200
            </div>
            <div className="pagination-controls">
                <button className="pagination-button prev" disabled>&lt;</button>
                <button className="pagination-number active">1</button>
                <button className="pagination-number">2</button>
                <button className="pagination-button next">&gt;</button>
            </div>
            </div>

                {/* Berita Terkait */}
                <div className="related-news-container">
                    <h2 className="related-news-title">Berita Terkait 
                    <button className="related-news-view-more">Lihat Semua</button>
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
                </div>
            </div>
        </div>
    );
};
export default Berita;
