import React, {PropsWithChildren} from 'react';
import NavBar from '@components/navbar'
import Footer from "@components/footer";
import Header from "@components/header";
import Main from "@components/layout/Main.component";
import LayoutWrapper from "@components/layout/LayoutWrapper.component";

function DefaultLayout(props: PropsWithChildren<any>): JSX.Element {
  return (
    <LayoutWrapper>
      <Header />
      <NavBar />
      <Main>
        { props.children }
      </Main>
      <Footer />
    </LayoutWrapper>
  );
}

export default DefaultLayout;
