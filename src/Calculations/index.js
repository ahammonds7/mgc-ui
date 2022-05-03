import styled from '@emotion/styled'
import Main from "../common/Main";
import {TextField as TextFieldMui} from "@mui/material";
import {useState} from "react";

const Title = styled.h1`
  font-family: AltaRegular, sans-serif;
`
const SubTitle = styled.h3`
  font-family: AltaRegular, sans-serif;
`
const Form = styled.form`
  display: flex;
  border: 1px solid #333;
  border-radius: 5px;
`
const Section = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

const TextField = styled(TextFieldMui)`
  width: 240px;
`
const onChange = (setter) => (e) => setter(e.target.value)

const calculate = (final, percentage) => {
  const pre = 100 + (percentage * 1)
  return (final / ((pre) / 100))
}

const format = (num) => {
  const str = String(num)
  return str.substring(0, str.indexOf('.') + 3)
}

const Calculations = () => {
  const [finalProductAmount, setFinalProductAmount] = useState(0)
  const [percentageOfScent, setPercentageOfScent] = useState(0)
  return (<>
    <Main>
      <Title>Calculations</Title>
      <Form>
        <Section>
          <SubTitle>Calculate Ounce Ratio Amounts</SubTitle>
          <TextField
            onChange={onChange(setFinalProductAmount)}
            label={'Final Product Amount (oz)'}
            name={'finalProductAmount'}
          />
          <TextField
            onChange={onChange(setPercentageOfScent)}
            label={'Percentage of Scent (%)'}
            name={'percentageOfScent'}
          />
        </Section>
        <Section>
          <br/>
          <br/>
          <br/>
          <br/>
          Results:
          <br/>
          <br/>
          Wax oz:&nbsp;&nbsp;{format(calculate(finalProductAmount, percentageOfScent))}
          <br/>
          <br/>
          Scent oz:&nbsp;{format(finalProductAmount - calculate(finalProductAmount, percentageOfScent))}
        </Section>
      </Form>
    </Main>
  </>)
}

export const route = '/calculations'

export default Calculations
