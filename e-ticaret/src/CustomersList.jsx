import React, { Component } from 'react';

class CustomersList extends Component {
    state = {
        pageTitle : "Müşteriler",
        customersCount : 5,
        customers : [
            { 
                id : 1,
                name : "Hasan",
                phone : "123-151", 
                address : {
                    city : "Giresun"
                },
                photo : "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50"
            },
            { 
                id : 2,
                name : "Hakan",
                phone : "352-421", 
                address : {
                    city : "İstanbul"
                },
                photo : "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50"
            },
            { 
                id : 3,
                name : "Onur",
                phone : "512-611", 
                address : {
                    city : "Ankara"
                },
                photo : "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=50"
            },
            { 
                id : 4,
                name : "Alperen",
                phone : "832-253", 
                address : {
                    city : "Erzincan"
                },
                photo : "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=50"
            },
            { 
                id : 5,
                name : "Batuhan",
                phone : "523-212", 
                address : {
                    city : "Ankara"
                },
                photo : "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=50"
            }
        ]
    };
    //Yenileye tıkladığında eventler icra edilir.
    onRefreshClick = () =>
    {
        this.setState({
            customersCount : 7
        })
    }
    //Telefon numarası yoksa No Phone yazar.
    getPhoneToRender = (phone) =>
    {
        {
           if(phone)
           {
            return phone;
           }
           else{
            return <div className="bg-warning p-2 text-center">No Phone</div>
           }
        }
    }
    //Profil Resmini Değiştirir
    onChangePictureClick = (cust,index) =>{
        let custArr = this.state.customers;
        custArr[index].photo = "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=50";
        this.setState({
            customers : custArr
        })
    }
    //Tabloya veri gönderir.
    getCustomerRow = () => {
        return(
            this.state.customers.map((cust,index)=>{
                    return(
                        <tr key={cust.id}>
                            <td>{cust.id}</td>
                            <td><img src={cust.photo} alt="Customer"/>
                            <div>
                                <button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust,index);}}>Resmi Değiştir</button>
                            </div>
                            </td>
                            <td>{cust.name}</td>
                            <td>{this.getPhoneToRender(cust.phone)}</td>
                            <td>{cust.address.city}</td>
                        </tr>
                    );
                })
            );
    }
    render() {
      return (
        <div>
            <h4 className="m-1 p-1">{this.state.pageTitle}
            <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
            <button className="btn btn-info" onClick={this.onRefreshClick}>Yenile</button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Resim</th>
                        <th>Müşterinin Adı</th>
                        <th>Telefon</th>
                        <th>Şehir</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getCustomerRow()}
                </tbody>
            </table>
        </div>
    )
  }
}
export default CustomersList;