import HomeTwoMain from "@/components/home-two/HomeTwoMain";
import Wrapper from "@/layout/DefaultWrapper";
// Fix for vercel
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
