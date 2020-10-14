import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";
// import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";


class ShopPage extends React.Component {
  
  componentDidMount() {
    const {fetchCollectionsStart} = this.props;
    
    fetchCollectionsStart();
    
    
    
    
    // const collectionRef = firestore.collection('collections');
    
    /* OBSERVABLE PATTERN */
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //  const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //  // console.log(collectionsMap);
    //   updateCollections(collectionsMap);
    //  this.setState({loading: false})
    // })
    
    /* API Call pattern */
    // fetch("https://firestore.googleapis.com/v1/projects/clothing-store-bdf48/databases/(default)/documents/collections")
    //   .then(response => response.json())
    //   .then(collections => console.log(collections))
    //
  
    /* promise pattern */
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading: false})
    // })
  }
  
  render() {
    const {match} = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
          />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);