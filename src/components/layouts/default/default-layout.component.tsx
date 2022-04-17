import React, { PropsWithChildren } from 'react';
import Navbar from '@components/layouts/elements/navbar';
import Footer from '@components/layouts/elements/footer';
import Header from '@components/layouts/elements/header';
import LayoutWrapper from '@components/layouts/wrapper/layout-wrapper.component';
import { injectClassNames } from '@/utils/css';

function DefaultLayout(props: PropsWithChildren<any>): JSX.Element {
  return (
    <LayoutWrapper>
      <Header />
      <Navbar />
      <main className={injectClassNames('content-thin', 'content-inner')}>
        {props.children}
      </main>
      <Footer />
    </LayoutWrapper>
  );
}

export default DefaultLayout;
