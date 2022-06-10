import styled from "@emotion/styled";
import CleanLinkExternal from "../common/CleanLinkExternal";

import tiktokIcon from './social-media-icons/tiktok.png'
import instagramIcon from './social-media-icons/instagram.png'
import facebookIcon from './social-media-icons/facebook.png'

const  Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin-bottom: -10px;
`

const Link = styled(CleanLinkExternal)`

`
const Icon = styled.img`
  max-width: 32px;
`

const SocialMediaLinks = () => {
  return (<Container>
    <Link href={'https://www.tiktok.com/t/ZTd3v42kg/'} target="_blank" rel="noreferrer">
      <Icon src={tiktokIcon} />
    </Link>
    <Link href={'https://www.instagram.com/magnolia_grove_creations_llc/'} target="_blank" rel="noreferrer">
      <Icon src={instagramIcon} />
    </Link>
    <Link href={'https://www.facebook.com/MagnoliaGroveCreations'} target="_blank" rel="noreferrer">
      <Icon src={facebookIcon} />
    </Link>
  </Container>);
}

export default SocialMediaLinks
