import styled from '@emotion/styled'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Main from "../common/Main";
import data from '../products-data.json'
import {squareUrl} from "../config";
import {Button} from "@mui/material";

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
      {currentData.link && <a href={`${squareUrl}/product/${currentData.link}`} target="_blank" rel="noreferrer">
        <Button>Buy Now!</Button>
      </a>}
    </Main>
  </>)
}

export const route = '/product/:productCode'

export default Product
