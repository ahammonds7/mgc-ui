import styled from '@emotion/styled'
import { size } from "../config";

const Image = styled.img`
  width: 100%;
  height: auto;
`

const PrimaryPhoto = () => {
  return (<>
    <Image src={`http://placehold.jp/${size.maxWidth.replace('px', '')}x1000.png`} />
  </>);
}

export default PrimaryPhoto
