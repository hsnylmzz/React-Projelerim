import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Golden Tours</h1>
                    <p>Turizmin Adresi</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-youtube-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Gezilerimiz</h4>
                    <a href="/">İstanbul</a>
                    <a href="/">Londra</a>
                    <a href="/">New York</a>
                    <a href="/">Phuket</a>
                </div>
                <div>
                    <h4>Sosyal Medya Hesaplarımız</h4>
                    <a href="/">Facebook</a>
                    <a href="/">Twitter</a>
                    <a href="/">İnstagram</a>
                    <a href="/">Youtube</a>
                </div>
                <div>
                    <h4>Yardım</h4>
                    <a href="/">Destek</a>
                    <a href="/">İletişim</a>
                </div>
                <div>
                    <h4>Diğer</h4>
                    <a href="/">Hizmet Şartları</a>
                    <a href="/">Gizlilik Politikası</a>
                    <a href="/">Kullanıcı Lisansı</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;