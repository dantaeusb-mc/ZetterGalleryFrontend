import React, { ReactNode, useEffect, useState } from 'react';
import styles from './wiki-layout.module.scss';
import WikiNavigation from '@components/wikiNavigation';
import Header from '@components/layouts/elements/header';
import NavBar from '@components/layouts/elements/navbar';
import Footer from '@components/layouts/elements/footer';
import LayoutWrapper from '../wrapper';
import { injectClassNames } from '@/utils/css';
import { useRouter } from 'next/router';

export interface WikiPageProps {
  title: string;
  path: string;
}

export interface WikiPageSection {
  title: string;
  id: string;
  ref?: HTMLElement;
  active: boolean;
}

export type WikiPageSections = Map<string, WikiPageSection>;

type AddSectionHOF = (
  title: string,
  id: string,
) => (instance: HTMLElement) => void;

export interface WikiNavigationProps {
  pages: WikiPageProps[];
}

export interface WikiLayoutProps extends WikiNavigationProps {
  children: (sections: AddSectionHOF) => ReactNode;
}

export interface WikiPageContentProps {
  addSection: AddSectionHOF;
}

const WikiLayout = ({ children, pages }: WikiLayoutProps): JSX.Element => {
  const route = useRouter();
  const [sections, setSections] = useState<WikiPageSections>(new Map());

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

      const section = sections.get(id);
      if (section != undefined) {
        section.ref = instance;
      }
    };
  };

  useEffect(() => {
    if (sections.size > 0) {
      const options = {
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (sections.has(entry.target.id)) {
            // My dudes, a map function for a Map object is too much to ask about?
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
            ) as WikiPageSections;

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
