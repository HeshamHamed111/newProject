import React, {Component} from 'react';
import '../../App.css';

import Header from '../../component/Header/Header';

import Loadmenu from '../../component/Header/Loadmenu';
import Description from '../../component/Description/Description';
import Productimg from '../../component/Description/Productimg';
import SimilarProduct from '../../component/SimilarProduct/SimilarProduct';
import Footer from '../../component/Footer/Footer';



import Container from '../../component/Container';

class Index extends Component {


    render() {
        return (
            <div className="home">
            <Header />
            <Loadmenu />
            <Container>
            <div className="col-lg-6">
              <Productimg handelImage={this.props.handelImage} />
            </div>
            <div className="col-lg-6">
              <Description handlerCounter={this.props.handlerCounter} handelState={this.props.handelState} />
            </div>
            <SimilarProduct />
            </Container>
            <Footer />
            </div>

        )
    }
}
export default Index