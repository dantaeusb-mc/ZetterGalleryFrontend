import React, { ReactElement, ReactNode } from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import getTitle from '@/utils/page/get-title';
import { NextPageWithLayout } from '@pages/_app';

const FontPage: NextPageWithLayout<Record<never, unknown>> = () => {
  const intl = useIntl();

  const title = getTitle(
    intl.formatMessage({
      id: 'font.page.title',
      defaultMessage: 'Minefont test page',
      description: 'Minefont test page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'font.page.description',
    defaultMessage:
      'Test page for in-house international Minecraft font based on Monocraft font',
    description:
      'Test page for in-house international Minecraft font based on Monocraft font',
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        <FormattedMessage
          id="font.title"
          defaultMessage="Minefont test page"
          description="Test page for in-house international Minecraft font based on Monocraft font"
        />
      </h1>

      <p>Laŭ Ludoviko Zamenhof bongustas freŝa ĉeĥa manĝaĵo kun spicoj.</p>
      <p>Съешь ещё этих же мягких французских булок, да выпей чаю.</p>
      <p>
        Nechť již hříšné saxofony ďáblů rozezvučí síň úděsnými tóny waltzu,
        tanga a quickstepu.
      </p>
      <p>Høj bly gom vandt fræk sexquiz på wc</p>
      <p>
        ბრგე ჟღალთმიანსაც შესაჭმელად მიჰქონდა ქუჩაში წყალი, პური, აჯიკა, ძეხვი
        ტაფაზე
      </p>
      <p>
        Põdur Zagrebi tšellomängija-följetonist Ciqo külmetas kehvas garaažis
      </p>
      <p>Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich</p>
      <p>
        Ταχίστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός Takhístè
        alôpèx vaphês psèménè gè, draskelízei ypér nòthroý kynós
      </p>
      <p>עטלף אבק נס דרך מזגן שהתפוצץ כי חם</p>
      <p>
        Sидарски пејзаж: шугав билмез со чудење џвака ќофте и кељ на туѓ цех.
      </p>
      <p>
        Vår sære Zulu fra badeøya spilte jo whist og quickstep i min taxi.
      </p>
      <p>Jeżu klątw, spłódź Finom część gry hańb!</p>
      <p>Pijamalı hasta yağız şoföre çabucak güvendi.</p>
      <p>Чуєш їх, доцю, га? Кумедна ж ти, прощайся без ґольфів!</p>
      <p>Խորամանկ գորշ աղվեսը ցատկում է ծույլ շան վրայով</p>
      <p>Bâchez la queue du wagon-taxi avec les pyjamas du fakir</p>
      <p>Hyvän lorun sangen pieneksi hyödyksi jäi suomen kirjaimet.</p>
    </>
  );
};

FontPage.getLayout = (page: ReactElement): ReactNode => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
);

export default FontPage;
