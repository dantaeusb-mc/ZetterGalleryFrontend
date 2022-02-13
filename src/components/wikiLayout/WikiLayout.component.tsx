import React, { ReactNode, useEffect, useState } from 'react';
import styles from './WikiLayout.module.scss';
import WikiNavigation from '@components/wikiNavigation';
import { useRouter } from 'next/router';
import LayoutWrapper from '@components/layouts/wrapper/LayoutWrapper.component';
import Header from '@components/header';
import NavBar from '@components/navbar/Navbar.component';
import Footer from '@components/footer';
import { injectClassNames } from '@/utils/css';

export interface IWikiPageSection {
  title: string;
  id: string;
  ref?: HTMLElement;
  active: boolean;
}

export type IWikiPageSections = Map<string, IWikiPageSection>;

export interface IWikiPage {
  title: string;
  path: string;
}

type AddSectionHOF = (
  title: string,
  id: string,
) => (instance: HTMLElement) => void;

export interface IWikiPageProps {
  pages: IWikiPage[];
}

export interface IWikiLayoutProps extends IWikiPageProps {
  children: (sections: AddSectionHOF) => ReactNode;
}

export interface IWikiPageContentProps {
  addSection: AddSectionHOF;
}

const WikiLayout = ({ children, pages }: IWikiLayoutProps): JSX.Element => {
  const route = useRouter();
  const [sections, setSections] = useState<IWikiPageSections>(new Map());

  let observer: IntersectionObserver;

  const addSectionHOF: AddSectionHOF = (title: string, id: string) => {
    if (!sections.has(id)) {
      setSections(
        sections.set(id, {
          id: id,
          title: title,
          ref: undefined,
          active: false,
        }),
      );
    }

    return (instance: HTMLElement) => {
      if (!sections.has(id) || sections.get(id) === undefined) {
        return;
      }

      // @ts-ignore
      sections.get(id).ref = instance;
    };
  };

  useEffect(() => {
    if (sections.size > 0) {
      const options = {
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          // @ts-ignore
          if (sections.has(entry.target.id)) {
            // My dudes, a map function for a Map object is too much to ask about?
            // @ts-ignore
            const newSections = new Map(
              Array.from(sections).map(([key, section]) => {
                return [
                  key,
                  {
                    ...sections.get(key),
                    active: section.id === entry.target.id,
                  },
                ];
              }),
            ) as IWikiPageSections;

            if (newSections !== sections) {
              //console.log(newSections, sections);
              //setSections(newSections);
            }
          }
        });
      }, options);

      sections.forEach((section) => {
        if (section.ref === undefined) {
          return;
        }

        observer.observe(section.ref);
      });
    }

    return () => {
      if (observer !== undefined) {
        observer.disconnect();
      }
    };
  }, [sections]);

  return (
    <LayoutWrapper>
      <Header type="wide-plus-sidebar" />
      <NavBar />
      <div
        className={injectClassNames(
          'content-wide-plus-sidebar',
          styles['page'],
        )}
      >
        <WikiNavigation
          pages={pages}
          currentPage={route.pathname}
          pageSections={sections}
        />
        <main className={injectClassNames('content-inner', 'content-wide')}>
          {children(addSectionHOF)}
        </main>
      </div>
      <Footer />
    </LayoutWrapper>
  );
};

export default WikiLayout;
