import SeoHead from '../SeoHead';

const Layout = ({ children }) => {

  return (
    <>
      <SeoHead />
      {children}
    </>
  );
};

export default Layout;
