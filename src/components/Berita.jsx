import React from 'react';

const Berita = () => {
    return (
        <div className="berita-page">
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <span>Beranda</span>
                <span className="breadcrumb-separator"> &gt; </span>
                <span>Nasional</span>
                <span className="breadcrumb-separator"> &gt; </span>
                <span>Detail</span>
            </div>

            {/* Konten Utama */}
            <div className="berita-layout">
                {/* Konten Kiri */}
                <div className="berita-main">
                    <h1 className="berita-title">Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. Soetomo</h1>
                    <p className="berita-info">Politik • 22 Jan 2024</p>
                    <img src="path/to/image.jpg" alt="Berita Utama" className="berita-image" />
                    <p className="berita-caption">Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah kandang. (CNN Indonesia/Adhi Wicaksono)</p>
                    <p className="berita-content">
                        Jakarta, CNN Indonesia -- Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026...
                    </p>
                </div>

                {/* Sidebar */}
                <aside className="berita-sidebar">
                    <h2 className="sidebar-title">Berita Terpopuler</h2>
                    <ul className="sidebar-list">
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                                <img src="path/to/image1.jpg" alt="Berita Populer 1" className="sidebar-image" />
                                <div>
                                    <p className="sidebar-text">Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?</p>
                                    <span className="sidebar-info">Politik • 22 Jan 2024</span>
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                                <img src="path/to/image2.jpg" alt="Berita Populer 2" className="sidebar-image" />
                                <div>
                                    <p className="sidebar-text">Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup Bakrie</p>
                                    <span className="sidebar-info">Nasional • 22 Jan 2024</span>
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                                <img src="path/to/image3.jpg" alt="Berita Populer 3" className="sidebar-image" />
                                <div>
                                    <p className="sidebar-text">Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan</p>
                                    <span className="sidebar-info">Nasional • 22 Jan 2024</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default Berita;
