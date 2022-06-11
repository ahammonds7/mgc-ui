import Main from "../common/Main";
import PrimaryPhoto from "./PrimaryPhoto";
import HomeContent from "./HomeContent";
// import Categories from "./Categories";

const Home = () => {
  return (<>
    <Main>
      <PrimaryPhoto />
      {/*<Categories />*/}
      <HomeContent />
    </Main>
  </>)
}

export const route = '/'

export default Home
