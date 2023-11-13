import HomeTwoMain from "@/components/home-two/HomeTwoMain";
import Wrapper from "@/layout/DefaultWrapper";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  return (
    <>
      <Wrapper>
        <main>
          <HomeTwoMain />
        </main>
      </Wrapper>
    </>
  );
};

export default Home;
