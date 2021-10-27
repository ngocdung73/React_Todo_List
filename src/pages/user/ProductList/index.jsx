import React, { useEffect } from "react";
import { useHistory, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { PRODUCT_LIST } from "../../../constants/product";
import { ROUTER } from "../../../constants/router";

import * as S from "./styles";

import { getProductListAction } from '../../../redux/actions'

const ProductListPage = () => {
  const history = useHistory();
  const { productList } = useSelector((state) => state.productReducer)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(getProductListAction(PRODUCT_LIST))
  //   }, 1000)
  // }, [])

  const renderProductList = () => {
    return productList.map((item, index) => (
      <div
        key={item.id}
        className="card"
        onClick={() =>
          history.push({
            pathname: generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: item.id }),
            search: "?sort=new",
            hash: "#demo",
            state: item,
          })
        }
      >
        {item.isNew && <div className="new">NEW</div>}
        <img src={item.image} className="image" alt="" />
        <div className="card-content">
          <div>{item.name}</div>
          <div>{item.price.toLocaleString()}</div>
        </div>
      </div>
    ));
  };

  return <div className="list">{renderProductList()}</div>;
};

export default ProductListPage;
