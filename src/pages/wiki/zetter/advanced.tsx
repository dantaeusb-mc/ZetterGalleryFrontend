import React from 'react';
import Head from 'next/head';
import UAParser from 'ua-parser-js';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  WikiLayout,
  WikiLayoutProps,
} from '@components/layouts/wiki';
import styles from '../wiki.module.scss';
import getTitle from '@/utils/page/get-title';
import { injectClassNames } from "@/utils/css";
import { getZetterWikiPages } from "@pages/wiki/zetter";

enum HotkeyFlavor {
  windows = 'windows',
  linux = 'linux',
  mac = 'mac'
}

export default function ZetterWikiRecipes(): JSX.Element {
  const intl = useIntl();
  const userAgent = new UAParser();
  const hotkeyFlavor: HotkeyFlavor =
    userAgent.getOS().name == 'Mac OS'
      ? HotkeyFlavor.mac
      : HotkeyFlavor.windows;

  const title = getTitle(
    intl.formatMessage({
      id: 'wiki.zetter.advanced.page.title',
      defaultMessage: 'Zetter Advanced Topics Wiki',
      description: 'Zetter Advanced Topics Wiki page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'wiki.zetter.advanced.page.description',
    defaultMessage: 'Learn about advanced techniques in Zetter Mod for Minecraft',
    description: 'Zetter Advanced Wiki page description',
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WikiLayout pages={getZetterWikiPages(intl)}>
        {(addSection) => {
          return (
            <article>
              <h1>
                <FormattedMessage
                  id={'wiki.zetter.advanced.title'}
                  defaultMessage="Zetter Wiki Advanced Topics"
                  description="Title for Zetter Wiki Advanced Page"
                />
              </h1>
              <section
                id="hotkeys"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter.advanced.hotkeys.section',
                    defaultMessage: 'Hotkeys',
                  }),
                  'hotkeys',
                )}
              >
                <h2 id="hotkeys">
                  <FormattedMessage
                    id={'wiki.zetter.advanced.hotkeys.title'}
                    defaultMessage="Hotkeys"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.advanced.hotkeys'}
                    defaultMessage="Hotkeys are keyboard shortcuts that should make your work easier and quicker. Learning them will improve your experience a lot."
                    description="Explain what is hotkeys"
                  />
                </p>
                <div className={injectClassNames(styles['grouped-table'], styles['hotkeys'])}>
                  <div className={styles['group-title-row']}>
                    <FormattedMessage  id={'wiki.zetter.advanced.hotkeys.tools.title'} defaultMessage="Tools" />
                  </div>
                  <div className={styles['col']}><kbd>P</kbd></div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.tools.pencil'} defaultMessage="Pencil tool" /></div>
                  <div className={styles['col']}><kbd>B</kbd></div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.tools.brush'} defaultMessage="Brush tool" /></div>
                  <div className={styles['col']}><kbd>I</kbd> or hold { hotkeyFlavor == HotkeyFlavor.mac ? <kbd>Option ⌥</kbd> : <kbd>Alt</kbd>}</div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.tools.picker'} defaultMessage="Color picker tool" /></div>
                  <div className={styles['col']}><kbd>F</kbd></div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.tools.bucket'} defaultMessage="Bucket or fill tool" /></div>
                  <div className={styles['col']}><kbd>H</kbd> or hold <kbd>Space</kbd></div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.tools.hand'} defaultMessage="Hand tool" /></div>
                  <div className={styles['col']}><kbd>-</kbd> or <kbd>_</kbd> or mouse wheel down</div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.tools.zoom-out'} defaultMessage="Zoom out" /></div>
                  <div className={styles['col']}><kbd>=</kbd> or <kbd>+</kbd> or mouse wheel up</div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.tools.zoom-in'} defaultMessage="Zoom in" /></div>
                  <div className={styles['group-title-row']}>
                    <FormattedMessage  id={'wiki.zetter.advanced.hotkeys.tools.history'} defaultMessage="History" />
                  </div>
                  <div className={styles['col']}><kbd className={styles['key']}>{ hotkeyFlavor == HotkeyFlavor.mac ? 'Cmd ⌘' : 'Ctrl'} + Z</kbd></div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.history.undo'} defaultMessage="Undo: cancel last non-canceled action" /></div>
                  <div className={styles['col']}><kbd className={styles['key']}>{ hotkeyFlavor == HotkeyFlavor.mac ? 'Cmd ⌘' : 'Ctrl'} + Y</kbd></div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.history.redo'} defaultMessage="Redo: restore last canceled action" /></div>
                  <div className={styles['group-title-row']}>
                    <FormattedMessage  id={'wiki.zetter.advanced.hotkeys.tools.colors'} defaultMessage="Colors" />
                  </div>
                  <div className={styles['col']}><kbd>Up arrow</kbd></div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.colors.up'} defaultMessage="Use palette slot above the current one" /></div>
                  <div className={styles['col']}><kbd>Down arrow</kbd></div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.colors.down'} defaultMessage="Use palette slot below the current one" /></div>
                  <div className={styles['col']}><kbd>X</kbd></div>
                  <div className={styles['col']}><FormattedMessage  id={'wiki.zetter.advanced.hotkeys.colors.swap'} defaultMessage="Swap color: use palette slot next to current one." /></div>
                </div>
              </section>
              <section
                id="console"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter.advanced.console.section',
                    defaultMessage: 'Console Commands',
                  }),
                  'console',
                )}
              >
                <h2 id="console">
                  <FormattedMessage
                    id={'wiki.zetter.advanced.console.title'}
                    defaultMessage="Console Commands"
                  />
                </h2>
                <h3>
                  <FormattedMessage
                    id={'wiki.zetter.advanced.console.restore.title'}
                    defaultMessage="Restore command"
                  />
                </h3>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.advanced.console.restore.pre'}
                    defaultMessage="Losing results of your work can be devastating, when you put a lot of love in it.
                    It is especially devastating if that is happened because some guy uploaded ill-tested version of the
                    mod and some terrible bug happened... oh well. For that reason, Zetter does never remove a painting
                    (though it could be blocked by server admin, but not removed unless physically deleted),
                    and there is a special 'Restore' command, which can be used as following:"
                    description="Explain what is restore command"
                  />
                </p>
                <code className={styles['console-code']}>/zetter restore "Your Painting Title"</code>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.advanced.console.restore.post'}
                    defaultMessage={'Instead of "Your Painting Name" you should use the title of your painting, obviously. ' +
                      'But you can also use painting id (number) or even canvas code, if you\'re more into technical stuff. ' +
                      'This command should give you a copy of the painting if it was found by provided parameter.'}
                    description="Explain what restore command parameters and results"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.advanced.console.restore.notice'}
                    defaultMessage="Keep in mind, though, that this only applies to the signed paintings. Non-signed canvases
                    can be easily lost forever or overwritten by Zetter when canvas item is removed from the world. So
                    remember to sign your painting when you're done and avoid using easels as a decoration if the result
                    is important to you."
                    description="Explain requirements for the restore command"
                  />
                </p>
              </section>
            </article>
          );
        }}
      </WikiLayout>
    </>
  );
}
