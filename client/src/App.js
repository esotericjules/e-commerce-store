import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import {Route, Switch, Redirect} from "react-router-dom"


import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { GlobalStyle} from "./global.styles";

import {checkUserSession} from "./redux/user/user.action";
import {selectCurrentUser} from "./redux/user/user.selector";

const App = ({checkUserSession, currentUser}) => {
   useEffect(() => {
     checkUserSession()
   }, [checkUserSession]);
   
    return (
      <div>
        <GlobalStyle />
        <Header/>
        <Switch>
          <Route exact path={'/'} component={HomePage}/>
          <Route path={'/shop'} component={ShopPage}/>
          <Route exact path={'/checkout'} component={CheckoutPage}/>
          <Route exact path={'/signin'} render={() => currentUser ?   //I added .userAuth
            (<Redirect to={'/'}/> ):
            (<SignInAndSignUpPage/> )}/>
        </Switch>
      </div>
    );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
