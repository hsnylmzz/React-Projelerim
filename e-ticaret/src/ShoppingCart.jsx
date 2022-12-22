import React,{ Component } from "react";
import Product from "./Product";
class ShoppingCart extends Component{
    //Componenti mount edildiğinde icra eder.
    constructor(props)
    {
      //console.log("constructor : Shopping Cart")
      super(props);
      //State durumunu başlatır.
      this.state = {
        products : []
      };
    }
    //+ tuşuna tıklamak için fonksiyon(En fazla 10 ürün almasına izin verir)
    handleIncrement = (product,maxValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if(allProducts[index].quantity < maxValue)
        {
            allProducts[index].quantity++;
            //arttırma durumunu html'e yazar.
            this.setState({
               products: allProducts
            })
        }
    }
    //- tuşuna tıklamak için fonksiyon
    handleDecrement = (product,minValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if(allProducts[index].quantity > minValue)
        {
            allProducts[index].quantity--;
            //azaltma durumunu html'e yazar.
            this.setState({
               products: allProducts
            })
        }
    }

    //Kapat(X) tuşuna basınca ürün silinir.
    handleDelete = (product) =>{
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(window.confirm("Silmek istediğinize emin misiniz?"))
        {
            //Silmek istediğimiz indisi arıyoruz.
            allProducts.splice(index, 1);
            //silinmiş halini html'e yazar.
            this.setState({
                products: allProducts
            })
        }
    }
    componentDidMount = async() =>
    {
        //console.log("Component DidMount : Shopping Cart");
        let response = await fetch("http://localhost:5000/products",{method : "GET"});
        let prods = await response.json();
        this.setState({products: prods});
        console.log(prods);
    }
    componentDidUpdate(prevProps,prevState)
    {
        //console.log("Component Did Update",prevProps,prevState,this.props,this.state);
        if (prevProps.x != this.props.x)
        {
            //http'yi çağırır
        }
    }
    componentWillUnmount()
    {
        //console.log("componentWillUnmount : ShoppingCart");
    }
    componentDidCatch(error, info) {
        //console.log("componentDidCatch - ShoppingCart");
        //console.log(error, info);
    
        localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
      }
    render()
    {
        //console.log("render : Shopping Cart")
        return(
            <div className="container-fluid">
                <h4>Alışveriş Kartı</h4>
                <div className="row">{this.state.products.map((prod)=>{
                    return <Product key={prod.id} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    id={prod.id}
                    product={prod}>
                        <button className="btn btn-primary">Satın Al</button>
                    </Product>
                })}</div>
            </div>
        )
    }
    //render burada biter
}

export default ShoppingCart;