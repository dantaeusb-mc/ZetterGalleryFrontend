import React, {PropsWithChildren} from 'react';
import NavBar from '@components/navbar'
import Footer from "@components/footer";
import Header from "@components/header";

function DefaultLayout(props: PropsWithChildren<any>): JSX.Element {
  return (
    <>
      <Header />
      <main>
        { props.children }
      </main>
      <NavBar />
      <Footer />
    </>
  );
}

export default DefaultLayout;
