import React from 'react';
import JudulBerita from '../assets/img/JudulBerita.png';

const Berita = () => {
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
            <h1 class="berita-title">Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. Soetomo</h1>
            <p class="berita-info">Politik • 22 Jan 2024</p>
            <img src={JudulBerita} alt="Berita Utama" class="berita-image" />
            <p class="berita-content">
            Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas  
            Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila  lolos ke putaran ketiga Kualifikasi Piala 
            Dunia 2026. Akhir-akhir ini rumput lapangan Stadion GBK yang jadi markas Indonesia  dalam babak kedua Kualifikasi 
            Piala Dunia 2026 kerap bermasalah. Pada pertandingan kandang pertama melawan Vietnam, Maret lalu, rumput  GBK rusak 
            parah. PPKGBK selalu pengelola pun mendapat kritik deras.
            </p>
            <br></br>
            <p class="berita-content">
            Acara-acara di luar  sepak bola itu kerap membuat kondisi rumput tidak sehat dan tidak  
            terlihat bagus saat pertandingan, khususnya laga Timnas Indonesia. Sampai saat melawan Irak, 
            rumput GBK tidak terlihat sempurna meskipun  kondisinya lebih bagus dibanding lawan Vietnam. Opsi pindah kandang pun  
            muncul.
            </p>
            <br></br>
            <p class="berita-content">
            "Nanti kami akan  sampaikan [rencana pindah dari GBK]," ujar Sumardji saat ditanya  kemungkinan menggunakan stadion lain di putaran ketiga kualifikasi. 
            Sumardji tidak membantah kondisi rumput GBK yang masih kurang bagus  dalam duel Indonesia vs Irak. PSSI pun berharap PPKGBK 
            bisa lebih  memperhatikan kondisi rumput untuk pertandingan Skuad Garuda. "Kami sampai saat ini sudah telepon dengan pengelola 
            GBK karena kondisi  rumput kemarin kurang bagus, kami memohon ke pihak GBK supaya  betul-betul disiapkan dan diperhatikan 
            kondisi rumput," tutur Sumardji. "Kalau dilihat-lihat sepertinya kondisi rumput GBK kayaknya stres itu,  sehingga dengan 
            kondisi itu akan memengaruhi, tadi saya telepon supaya  diperhatikan," kata Sumardji menambahkan.
            </p>
            </div>
        </div>


        {/* Sidebar Berita */}
        <aside class="berita-sidebar">
            <h2 class="sidebar-title">Berita Terpopuler</h2>
            <ul class="sidebar-list">
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                <img src="path/to/image1.jpg" alt="Berita Populer 1" class="sidebar-image" />
                <div>
                    <p class="sidebar-text">Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?</p>
                    <span class="sidebar-info">Politik • 22 Jan 2024</span>
                </div>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                <img src="path/to/image2.jpg" alt="Berita Populer 2" class="sidebar-image" />
                <div>
                    <p class="sidebar-text">Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup Bakrie</p>
                    <span class="sidebar-info">Nasional • 22 Jan 2024</span>
                </div>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                <img src="path/to/image3.jpg" alt="Berita Populer 3" class="sidebar-image" />
                <div>
                    <p class="sidebar-text">Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan</p>
                    <span class="sidebar-info">Nasional • 22 Jan 2024</span>
                </div>
                </a>
            </li>
            </ul>
        </aside>
        
        {/* Komentar */}
        <div className="comments-section">
                    <h3 className="comments-title">Komentar</h3>
                    <div className="comment-form">
                        <textarea placeholder="Apa yang ingin Anda tanyakan?" maxLength={500}></textarea>
                        <button className="btn-submit">Kirim</button>
                    </div>
                    <ul className="comments-list">
                        <li className="comment-item">
                            <div className="comment-user">UJANG YUSMEIDI S.P., M.Agr. • 28 Mar 2024 11:15</div>
                            <div className="comment-text">
                                Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh? Karena saya mau download...
                            </div>
                            <a href="#" className="comment-reply">Balas</a>
                        </li>
                        <li className="comment-item">
                            <div className="comment-user">DINA RIKHA RIYANA WATI, S.Pd • 28 Mar 2024 11:15</div>
                            <div className="comment-text">Saya mengunduh sertifikatnya kok juga belum bisa</div>
                            <a href="#" className="comment-reply">Balas</a>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default Berita;
