import React from 'react';  // Pastikan ada stylesheet untuk gaya navbar
import LogoFooter from '../assets/img/LogoFooter.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Section 1 */}
                    <div className="footer-section">
                        <a href="index.html" className="footerlogo">
                            <img src={LogoFooter} alt="Logo" />
                        </a>
                        <p className="footerberita">© 2023 Berita Kini. All Rights Reserved.</p>
                        <p>Ikuti Kami</p>
                        <div className="social-icons">
                            <a href="#!" aria-label="YouTube">
                                <i className="bi bi-youtube"></i>
                            </a>
                            <a href="#!" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#!" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="footer-section">
                        <h4>Telusuri</h4>
                        <ul>
                            <li><a href="#beranda">Beranda</a></li>
                            <li><a href="#kesehatan">Kesehatan</a></li>
                            <li><a href="#otomotif">Otomotif</a></li>
                            <li><a href="#politik">Politik</a></li>
                            <li><a href="#olahraga">Olahraga</a></li>
                            <li><a href="#nasional">Nasional</a></li>
                            <li><a href="#internasional">Internasional</a></li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="footer-section">
                        <h4>Bantuan</h4>
                        <ul>
                            <li><a href="#kontak">Kontak Kami</a></li>
                            <li><a href="#laporan">Laporan Pembajakan</a></li>
                            <li><a href="#kebijakan">Kebijakan</a></li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div className="footer-section">
                        <h4>Berlangganan Berita Terbaru</h4>
                        <form>
                            <input type="email" placeholder="Masukan email" />
                            <button type="submit">
                                <i className="bi bi-send-fill"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
