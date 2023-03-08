import Footer from './Footer';
import Header from './Header';

type IProps = {
  children: React.ReactNode;
};

const Layout = (props: IProps) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center gap-4 min-h-screen my-4 ">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
