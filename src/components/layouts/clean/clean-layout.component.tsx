import React, { PropsWithChildren } from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import LayoutWrapper from '@components/layouts/wrapper/layout-wrapper.component';
import { injectClassNames } from '@/utils/css';

function CleanLayout(props: PropsWithChildren<any>): JSX.Element {
  return (
    <LayoutWrapper>
      <Header />
      <main className={injectClassNames('content-thin', 'content-inner')}>
        {props.children}
      </main>
      <Footer />
    </LayoutWrapper>
  );
}

export default CleanLayout;
