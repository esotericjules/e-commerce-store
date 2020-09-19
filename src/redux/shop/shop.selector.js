import {createSelector} from "reselect";
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;
// console.log(selectShop)

export const selectCollections = createSelector(
  [selectShop],
  shop =>{
    // console.log(shop.collections)
    return  shop.collections
  }

)
console.log(selectCollections)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => {
    // console.log(collections[key])
    return collections[key]
  })
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections  => {
      // console.log(collections)
      return collections[collectionUrlParam]
    }
    
  )
);

