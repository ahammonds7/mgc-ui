import styled from '@emotion/styled'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Main from "../common/Main";
import data from '../products-data.json'

const Title = styled.h1`
  font-family: AltaRegular, sans-serif;
`
const Caption = styled.p`
  text-align: center;
`

const Product = () => {
  const { productCode } = useParams()

  const [currentData, setCurrentData] = useState({})

  useEffect(() => {
    setCurrentData(data.products.find(i => i.productCode === productCode))
  }, [productCode, setCurrentData])

  return (<>
    <Main>
      <Title>{currentData.name}</Title>
      <Caption>Scent Notes: {currentData.scents}</Caption>
    </Main>
  </>)
}

export const route = '/product/:productCode'

export default Product
