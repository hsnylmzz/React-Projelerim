import "./ContactForm.css";

function ContactForm() {  
    return(
        <div className="form-container">
            <h1>Bizimle İletişime Geç</h1>
            <form>
                <input placeholder="Adı"/>
                <input placeholder="Email"/>
                <input placeholder="Konu"/>
                <textarea placeholder="mesaj" rows="4"></textarea>
                <button>Gönder</button>
            </form>
        </div>
    )
}
export default ContactForm;