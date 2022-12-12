import React from 'react';
import Link from 'next/link';
import styles from './wiki-navigation.module.scss';
import { WikiPageProps, WikiPageSections } from '@components/layouts/wiki';
import { injectClassNames } from '@/utils/css';
import { FormattedMessage } from 'react-intl';

export interface IWikiNavigationProps {
  pages: WikiPageProps[];
  currentPage: string;
  pageSections: WikiPageSections;
}

const WikiNavigation = ({
  pages,
  currentPage,
  pageSections,
}: IWikiNavigationProps): JSX.Element => {
  return (
    <aside className={styles['wiki-sidebar']}>
      <nav className={styles['wiki-navigation']}>
        {pages.map((page, index) => {
          const link = (
            <Link href={page.path} key={`wiki-page-${index}`}>
              <a
                className={injectClassNames(
                  styles['link'],
                  styles['page-link'],
                  [styles['active'], page.path === currentPage],
                )}
              >
                <FormattedMessage id={page.title} />
              </a>
            </Link>
          );

          if (page.path === currentPage) {
            return (
              <>
                {link}
                {Array.from(pageSections).map(([key, section]) => (
                  <a
                    key={`wiki-page-${index}-${section.id}`}
                    className={injectClassNames(
                      styles['link'],
                      styles['section-link'],
                      [styles['active'], section.active],
                    )}
                    href={`#${section.id}`}
                  >
                    {section.title}
                  </a>
                ))}
              </>
            );
          }

          return link;
        })}
      </nav>
    </aside>
  );
};

export default WikiNavigation;
