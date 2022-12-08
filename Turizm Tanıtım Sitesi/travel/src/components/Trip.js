import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/istanbul.jpg";
import Trip2 from "../assets/london.jpg";
import Trip3 from "../assets/new-york.jpg";
function Trip()
{
    return(
        <div className="trip">
            <h1>Yeni Seyahatler</h1>
            <p>Keşfetmek istediğiniz yerler için Google Haritayı kullanın.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="İstanbul"
                text="İstanbul,nüfuslarına göre şehirler listesinde belediye sınırları göz önüne alınarak yapılan sıralamaya göre Avrupa'da birinci, dünyada ise altıncı sırada yer almaktadır.
                Dünyanın en eski şehirlerinden biri olan İstanbul, 330-395 yılları arasında Roma İmparatorluğu, 395-1204 yılları arasında Bizans İmparatorluğu, 1204-1261 yılları arasında Latin İmparatorluğu,1261-1453 yılları arasında tekrar Bizans İmparatorluğu ve son olarak 1453-1922 yılları arasında Osmanlı İmparatorluğu'na başkentlik yaptı.
                Ayrıca İstanbul, Hilâfetin Osmanlı İmparatorluğu'na geçtiği 1517'den kaldırıldığı 1924'e kadar İslam dünyasının da merkezi oldu"
                />

                <TripData
                image={Trip2}
                heading="Londra"
                text="Londra (İngilizce: London, İngilizce telaffuz: [ˈlʌndən]; Latince: Londinium), İngiltere'nin ve Birleşik Krallık'ın başkenti ve en kalabalık şehridir.
                Londra, sanat, ticaret, eğitim, eğlence, moda, finans, sağlık, medya, profesyonel hizmetler, araştırma ve geliştirme, turizm ve ulaşım alanlarında dünyanın önde gelen şehirlerinden biridir. 
                Dünyanın en büyük finans merkezlerinden biridir ve dünyanın beşinci büyükşehir bölgesi GSYİH'sine sahiptir."
                />
                <TripData
                image={Trip3}
                heading="New York"
                text="New York Şehri, Amerika Birleşik Devletleri'nin en kalabalık şehri ve dünyanın en kalabalık metropolitan alanlarından New York metropolitan bölgesinin merkezidir. 
                Şehir bir parçası olduğu New York Eyaleti ile karıştırıldığı için İngilizcede New York City olarak isimlendirilir.
                New York şehir sınırları içerisindeki nüfus yaklaşık 8,3 milyon olup, metropolitan alana bakıldığında bölgenin nüfusu yaklaşık 20 milyon kişidir. 
                New York bir göçmen kentidir. Kentte yaklaşık 170 ayrı dil konuşulmaktadır ve her üç kişiden biri ABD dışında bir ülke doğumludur.
                Şehir; ticaret, finans, medya, sanat, moda, araştırma, teknoloji, eğitim ve eğlence sektörlerine önemli katkıda bulunduğundan dolayı 'küresel etkiye sahip şehir' olarak anılır"
                />
            </div>
        </div>
    )
}
export default Trip;