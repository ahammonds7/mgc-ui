import Main from "../common/Main";
import PrimaryPhoto from "./PrimaryPhoto";
import Categories from "./Categories";

const Home = () => {
  return (<>
    <Main>
      <PrimaryPhoto />
      <Categories />
    </Main>
  </>)
}

export const route = '/'

export default Home
