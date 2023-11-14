import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Routers from "../routes/routers";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
