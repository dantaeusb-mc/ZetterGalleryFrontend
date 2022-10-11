import React, { PropsWithChildren } from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import { NextPage } from 'next';
import getTitle from '@/utils/page/get-title';
import Callout, {
  CalloutSeverity,
} from '../components/widgets/callout/callout.component';

const TermsPage: NextPage<Record<string, unknown>> = (
  props: PropsWithChildren<Record<string, unknown>>,
) => {
  const intl = useIntl();

  const title = getTitle(
    intl.formatMessage({
      id: 'terms.page.title',
      defaultMessage: 'Terms of Service',
      description: 'ToS page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'terms.page.description',
    defaultMessage: 'Zetter Gallery terms of service',
    description: 'ToS page description',
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Callout severity={CalloutSeverity.Warning}>
          <FormattedMessage
            id="terms.title.callout.check-english"
            defaultMessage="Translations of the terms are provided by community and are not legally binding. Please refer to english version of this page if you have any questions."
          />
        </Callout>
        <h1>
          <FormattedMessage
            id="terms.title"
            defaultMessage="Terms of Service"
            description="Title for Zetter Gallery Terms of Service Page"
          />
        </h1>
        <h2>
          <FormattedMessage
            id="terms.description.title"
            defaultMessage="Description of Service"
          />
        </h2>
        <p>
          <FormattedMessage
            id="terms.description.paragraph"
            defaultMessage="Dmitrii Burlakov (“Zetter Gallery“, “we”, “us” or “our”) provides a platform via its website, Application Programming Interface and an independent, user-made modification to the Mojang video game Minecraft, to a community of registered users (“users” or “you”) to engage in a variety of activities, including to upload and display digital paintings (“Visual Content”). The following are the terms of use (“Terms”) for using the Site and the Services."
          />
        </p>
        <h2>
          <FormattedMessage
            id="terms.acceptance.title"
            defaultMessage="Acceptance of Terms"
          />
        </h2>
        <p>
          <FormattedMessage
            id="terms.acceptance.paragraph"
            defaultMessage="BY USING THE SERVICES, YOU ARE AGREEING, ON BEHALF OF YOURSELF AND THOSE YOU REPRESENT, TO COMPLY WITH AND BE LEGALLY BOUND BY THESE TERMS AS WELL AS OUR PRIVACY POLICY AND ALL APPLICABLE LAWS. IF YOU, FOR YOURSELF OR ON BEHALF OF THOSE YOU REPRESENT, DO NOT AGREE TO ANY PROVISION OF THESE TERMS, YOU MUST, FOR YOURSELF AND ON BEHALF ANY SUCH PERSON(S), DISCONTINUE THE REGISTRATION PROCESS, DISCONTINUE YOUR USE OF THE SERVICES, AND, IF YOU ARE ALREADY REGISTERED, CANCEL YOUR ACCOUNT."
          />
        </p>
        <h2>
          <FormattedMessage
            id="terms.zetter.modification.title"
            defaultMessage="Modification of Terms"
          />
        </h2>
        <p>
          <FormattedMessage
            id="terms.zetter.modification.replace"
            defaultMessage="Zetter Gallery reserves the right, at its sole discretion, to modify or replace the Terms at any time. What constitutes a material change will be determined at Zetter Gallery sole discretion. You are responsible for reviewing and becoming familiar with any such modifications. Using any Service or viewing any Visual Content constitutes your acceptance of the Terms as modified."
          />
          <FormattedMessage
            id="terms.zetter.modification.interruptions"
            defaultMessage="Your access to and use of the Site and our Services may be interrupted from time to time as a result of equipment malfunction, updating, maintenance or repair of the Site or any other reason within or outside of our control. Zetter Gallery reserves the right to suspend or discontinue the availability of the Site, any Service, and to remove any Visual Content at any time at its sole discretion and without prior notice. Zetter Gallery may also impose limits on certain features and Services or restrict your access to parts of or all of the Site and the Services without notice or liability. The Site should not be used or relied upon for storage of your Visual Content and you are directed to retain your own copies of all Visual Content posted on the Site."
          />
        </p>
        <h2>
          <FormattedMessage
            id="terms.zetter.registration.title"
            defaultMessage="Registration"
          />
        </h2>
        <p>
          <FormattedMessage
            id="terms.zetter.registration.paragraph"
            defaultMessage="Your access to and use of the Site and our Services may be interrupted from time to time as a result of equipment malfunction, updating, maintenance or repair of the Site or any other reason within or outside of our control. Zetter Gallery reserves the right to suspend or discontinue the availability of the Site, any Service, and to remove any Visual Content at any time at its sole discretion and without prior notice. Zetter Gallery may also impose limits on certain features and Services or restrict your access to parts of or all of the Site and the Services without notice or liability. The Site should not be used or relied upon for storage of your Visual Content and you are directed to retain your own copies of all Visual Content posted on the Site."
          />
        </p>
        <h2>
          <FormattedMessage
            id="terms.zetter.user-conduct.title"
            defaultMessage="User Conduct"
          />
        </h2>
        <p>
          <FormattedMessage
            id="terms.zetter.user-conduct.paragraph"
            defaultMessage="Your access to and use of the Site and our Services may be interrupted from time to time as a result of equipment malfunction, updating, maintenance or repair of the Site or any other reason within or outside of our control. Zetter Gallery reserves the right to suspend or discontinue the availability of the Site, any Service, and to remove any Visual Content at any time at its sole discretion and without prior notice. Zetter Gallery may also impose limits on certain features and Services or restrict your access to parts of or all of the Site and the Services without notice or liability. The Site should not be used or relied upon for storage of your Visual Content and you are directed to retain your own copies of all Visual Content posted on the Site."
          />
        </p>
        <h2>
          <FormattedMessage
            id="terms.zetter.licensing.title"
            defaultMessage="Licensing"
          />
        </h2>
        <p>
          <FormattedMessage
            id="terms.zetter.licensing.paragraph"
            defaultMessage="By submitting Visual Content to Zetter Gallery you grant a non-exclusive, transferable, worldwide license to use, sublicense, distribute, reproduce, modify, adapt, publicly perform and publicly display such Visual Content in connection with the Services. This license will exist for the period during which the Visual Content is posted on the Site and will automatically terminate upon the removal of the Visual Content from the Site. Zetter Gallery is not responsible for the copies that were created and distributed during period that Visual Content was available on service. Zetter Gallery does not provide way to retract copies of your Visual Content after it's distribution. Zetter Gallery does not claim ownership of your Visual Content."
          />
        </p>
        <h2>
          <FormattedMessage
            id="terms.zetter.copyright-complaints.title"
            defaultMessage="Copyright Complaints"
          />
        </h2>
        <p>
          <FormattedMessage
            id="terms.zetter.copyright-complaints.dmca"
            defaultMessage="Zetter Gallery reserves the right to remove any Content that allegedly infringes another person’s copyright. In appropriate circumstances, Zetter Gallery will terminate the accounts of users who infringe copyright. Notices to Zetter Gallery regarding any alleged copyright infringement should be directed to Zetter Gallery via email at: copyright@zetter.gallery."
          />
        </p>
        <h2>
          <FormattedMessage
            id="terms.zetter.release.title"
            defaultMessage="Release and Indemnity"
          />
        </h2>
        <p>
          <FormattedMessage
            id="terms.zetter.release.release-statement.1"
            defaultMessage="You hereby expressly and irrevocably release and forever discharge Zetter Gallery from any and all actions, causes of action, suits, proceedings, liability, debts, judgments, claims, and demands whatsoever in law or equity which you ever had, now have, or hereafter can, shall or may have, for or by reason of, or arising directly or indirectly out of your use of the Site and the Services."
          />
        </p>
        <p>
          <FormattedMessage
            id="terms.zetter.release.release-statement.2"
            defaultMessage="You hereby agree to indemnify and hold harmless Zetter Gallery from and against all claims, losses, expenses, damages and costs (including, but not limited to, direct, incidental, consequential, exemplary, and indirect damages), and reasonable attorneys' fees, resulting from or arising out of (i) a breach of these Terms, (ii) Content posted on the Site, by you or any person using your account or Microsoft credentials, (iv) the licensing, distribution, or use of your Visual Content, or (v) any violation of any rights of a third party. Zetter Gallery reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you."
          />
        </p>
        <h2>
          <FormattedMessage
            id="terms.zetter.warranty.title"
            defaultMessage="Warranty Disclaimer"
          />
        </h2>
        <p>
          <FormattedMessage
            id="terms.zetter.warranty.paragraph"
            defaultMessage="YOUR USE OF THE SITE AND THE SERVICES IS AT YOUR OWN RISK. THE SITE AND THE SERVICES ARE PROVIDED ON AN “AS IS, AS AVAILABLE” BASIS. ZETTER GALLERY EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING THE WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. ZETTER GALLERY DISCLAIMS ALL RESPONSIBILITY FOR ANY LOSS, INJURY, CLAIM, LIABILITY, OR DAMAGE OF ANY KIND RESULTING FROM, ARISING OUT OF OR IN ANY WAY RELATED TO (A) ANY ERRORS IN OR OMISSIONS FROM THIS SITE AND THE SERVICES, INCLUDING, BUT NOT LIMITED TO, TECHNICAL INACCURACIES AND TYPOGRAPHICAL ERRORS, (B) THIRD PARTY COMMUNICATIONS, (C) ANY THIRD PARTY WEBSITES OR CONTENT DIRECTLY OR INDIRECTLY ACCESSED THROUGH LINKS IN THE SITE, INCLUDING BUT NOT LIMITED TO ANY ERRORS OR OMISSIONS, (D) THE UNAVAILABILITY OF ALL OR ANY PART OF THE SITE OR THE SERVICES, (E) YOUR USE OF THE SITE OR THE SERVICES, OR (F) YOUR USE OF ANY EQUIPMENT OR SOFTWARE IN CONNECTION WITH THE SITE OR THE SERVICES."
          />
        </p>
        <h2>
          <FormattedMessage
            id="terms.zetter.liability.title"
            defaultMessage="Limitation of Liability"
          />
        </h2>
        <p>
          <FormattedMessage
            id="terms.zetter.warranty.paragraph.1"
            defaultMessage="EXCEPT AS OTHERWISE PROVIDED BY LAW, NEITHER ZETTER GALLERY NOR ANY OF ITS AFFILIATES, PARENTS, SUBSIDIARIES, AUTHORIZED DISTRIBUTORS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, CLIENTS, OR AGENTS SHALL BE LIABLE FOR ANY LOSS, INJURY, CLAIM, LIABILITY, OR DAMAGE OF ANY KIND RESULTING FROM YOUR USE OF THE SITE, ANY FACTS OR OPINIONS APPEARING THEREON, OR THE SERVICES. ZETTER GALLERY SHALL NOT BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER (INCLUDING, WITHOUT LIMITATION, ATTORNEYS’ FEES) IN ANY WAY DUE TO, RESULTING FROM, OR ARISING IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE SITE OR SERVICES. TO THE EXTENT THE FOREGOING LIMITATION OF LIABILITY IS PROHIBITED OR FAILS OF ITS ESSENTIAL PURPOSE, ZETTER GALLERY’S SOLE OBLIGATION TO YOU FOR DAMAGES SHALL BE LIMITED TO (A) US$100.00 IF THE CLAIM IS UNRELATED TO THE LICENSING OF VISUAL CONTENT; OR (B) THE TOTAL FEES COLLECTED BY ZETTER GALLERY FOR THE VISUAL CONTENT THAT IS THE SUBJECT MATTER OF THE CLAIM IF THE CLAIM IS RELATED TO THE LICENSING OF VISUAL CONTENT, WITH THE UNDERSTANDING THAT ZETTER GALLERY IS NOT RESPONSIBLE FOR THE MISUSE OF VISUAL CONTENT BY DISTRIBUTORS OR ANY OTHER THIRD PARTY UNDER ANY CIRCUMSTANCES."
          />
        </p>
        <p>
          <FormattedMessage
            id="terms.zetter.warranty.paragraph.2"
            defaultMessage="YOU AND ZETTER GALLERY AGREE THAT ANY PROCEEDINGS TO RESOLVE OR LITIGATE ANY DISPUTE ARISING HEREUNDER WILL BE CONDUCTED SOLELY ON AN INDIVIDUAL BASIS, AND THAT YOU WILL NOT SEEK TO HAVE ANY DISPUTE HEARD AS A CLASS ACTION, A REPRESENTATIVE ACTION, A COLLECTIVE ACTION, A PRIVATE ATTORNEY-GENERAL ACTION, OR IN ANY PROCEEDING IN WHICH YOU ACT OR PROPOSE TO ACT IN A REPRESENTATIVE CAPACITY. YOU FURTHER AGREE THAT NO PROCEEDING WILL BE JOINED, CONSOLIDATED, OR COMBINED WITH ANOTHER PROCEEDING WITHOUT THE PRIOR WRITTEN CONSENT OF ZETTER GALLERY AND ALL PARTIES TO ANY SUCH PROCEEDING."
          />
        </p>
      </DefaultLayout>
    </>
  );
};

export default TermsPage;
