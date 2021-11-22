import React, {PropsWithChildren} from 'react';
import NavBar from '@components/navbar'
import Footer from "@components/footer";
import Header from "@components/header";
import LayoutWrapper from "@components/layout/LayoutWrapper.component";
import {injectClassNames} from "@/utils/css";

function DefaultLayout(props: PropsWithChildren<any>): JSX.Element {
  return (
    <LayoutWrapper>
      <Header />
      <NavBar />
      <main className={ injectClassNames('content-thin', 'content-inner') }>
        { props.children }
      </main>
      <Footer />
    </LayoutWrapper>
  );
}

export default DefaultLayout;
