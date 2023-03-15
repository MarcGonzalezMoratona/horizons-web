import Footer from "./Footer";
import Header from "./Header";

type IProps = {
  children: React.ReactNode;
};

const Layout = (props: IProps) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
