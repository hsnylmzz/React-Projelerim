import Photo1 from "../assets/phuket.jpg";
import Photo2 from "../assets/phuket2.jpg";
import Maldives from "../assets/maldivler.jpg";
import Maldives2 from "../assets/maldivler2.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popüler Yerler</h1>
            <p>Nereye gitmek istiyorsunuz? Dünya turu için en uygun adres Golden Tours </p>
            <DestinationData
            className="first-des"
            heading="Phuket Adası"
            text="Phuket (Tayca:ภูเก็ต), eskiden batı dilinde Tha-Laang, Talang veya Junk Ceylon olarak bilinen Güneydoğu Asya ülkesi Tayland'ın Dünyaca ünlü Turizm adası. Başkenti Phuket City'dir. Phuket Uluslararası Havaalanına sahip olan Phuket'e Dünya'nın her yerinden özellikle Batılı Turistler akın etmektedir. Adanın en ünlü ve kalabalık plajı ise batı kıyısında bulunan Patong plajıdır. Diğer popüler plajları ise Karon ve Kata plajlarıdır."
            img1={Photo1}
            img2={Photo2}
            />

            <DestinationData
            className="first-des-reverse"
            heading="Maldivler"
            text="Turizmin gelişmesi, ülkenin ekonomisinin de büyümesini sağlamıştır. Doğrudan ve dolaylı olarak istihdam ve gelir artışı sağlamıştır. Günümüzde turizm ülkenin en büyük döviz kaynağı haline gelmiştir ve ülke ekonomisinin %20'sini oluşturmaktadır. 84 turistik tesisi ile 2000 yılında 467,154 turisti ağırlamıştır. Maldiv Adaları 2008 yılında 683.012 turisti ağırlamıştır. En fazla turistin geldiği ülkeler: İngiltere, İtalya, Almanya, Rusya ve Fransa'dır.Maldivler'de resortlar adalar üzerine kurulmuştur ve her resort genelde adanın adıyla anılmaktadır. Resortlardan en ünlüleri: One and Only Reethi Rah Resort, Huvafen Fushi Resort, Naladhu Resort, W Retreat Resort, Banyan Tree Resort, The Beach House at Manafaru Resort,Ayada Resort ve Sheraton Resort'tur. Resortlarda iki ayrı oda kategorisi bulunmaktadır: Beach Bungalow (Sahil Villa) ve Water Bungalow(Suüstü Villa). Water Bungalowlar, denizin üstüne çakılan kazıklar üzerine inşa edilmiştir. Birçok resortta 'no news-no shoes' uygulaması vardır. (haber okumak yok, ayakkabı yok !) "
            img1={Maldives}
            img2={Maldives2}
            />
        </div>
         
    )
}

export default Destination;