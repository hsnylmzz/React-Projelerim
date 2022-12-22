import React,{Component} from "react";
class Login extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            email : "",
            password : "",
            message : ""
        }
    }
    //Giriş Yap Butonuna Tıklayan Fonksiyon
    onLoginClick = async() => {
        console.log(this.state);

        let response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,{method : "GET"});
        
        let body = await response.json();
        console.log(body);
        if(body.length > 0)
        {
            //Giriş Başarılı
            this.setState({
                message: (<span className="text-success">Giriş Başarılı.</span>)
            })
        }
        else{
            //Giriş Başarısız
            this.setState({
                message: (<span className="text-danger">Giriş Başarısız.Lütfen Tekrar Deneyin.</span>)
            })
        }
    }
    render()
    {
        return(
            <div className="col-lg-9">
                <h4 className="m-1 p-2 border-bottom">Giriş</h4>
                {/* Email Formu */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Email : </label>
                    <input type="text" 
                    className="form-control" 
                    value={this.state.email}
                    onChange={(event)=> {
                        this.setState({email : event.target.value});
                    }}
                    />
                </div>
                
                {/* Şifre Formu */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Şifre : </label>
                    <input type="password" 
                    className="form-control" 
                    value={this.state.password}
                    onChange={(event) => {
                        this.setState({password: event.target.value});
                    }}
                    />
                </div>

                <div className="text-right">
                    {this.state.message}
                    <button className="btn btn-primary m-1" onClick={this.onLoginClick}>Giriş Yap</button>
                </div>
            </div>
        )
    }
}
export default Login;