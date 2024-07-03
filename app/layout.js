import { Montserrat } from 'next/font/google';
import './globals.css';
import PropTypes from 'prop-types';
import { StyledEngineProvider } from '@mui/material';
import CustomThemeProvider from '@/theme/provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Department of Computer Science & Engineering, IIIT Delhi',
  description:
    'This is the official website of the Department of Computer Science and Engineering at IIIT Delhi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className}>
        {/* Standard meta tags */}
        <meta
          property="og:title"
          content="Department of Computer Science & Engineering, IIIT Delhi"
        />
        <meta
          property="og:description"
          content="This is the official website of the Department of Computer Science and Engineering at IIIT Delhi."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://media.licdn.com/dms/image/C4D0BAQHB2H7RAmPh5A/company-logo_200_200/0/1630546171538/cseiiitd_logo?e=1718236800&v=beta&t=MAQckcmOYWT1bihrf7FAcQKTnYUu2KDimYxlDhfpcrk"
        />
        <meta property="og:url" content="https://cse-iiitd.vercel.app/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@cseiiitd" />
        <meta
          name="twitter:title"
          content="Department of Computer Science & Engineering, IIIT Delhi"
        />
        <meta
          name="twitter:description"
          content="This is the official website of the Department of Computer Science and Engineering at IIIT Delhi."
        />
        <meta
          name="twitter:image"
          content="https://media.licdn.com/dms/image/C4D0BAQHB2H7RAmPh5A/company-logo_200_200/0/1630546171538/cseiiitd_logo?e=1718236800&v=beta&t=MAQckcmOYWT1bihrf7FAcQKTnYUu2KDimYxlDhfpcrk"
        />
        <meta
          name="keywords"
          content="CSE, IIITD, Computer Science, Indraprashta Institute of Information Technology, Engineering, Computer Science & Engineering, Delhi, New Delhi, Software Development, Machine Learning, Artificial Intelligence, Professors, Faculty, Ph.D., Admission, B.Tech, M.Tech, Course"
        />
        <link
          rel="icon"
          href="https://media.licdn.com/dms/image/C4D0BAQHB2H7RAmPh5A/company-logo_200_200/0/1630546171538/cseiiitd_logo?e=1718236800&v=beta&t=MAQckcmOYWT1bihrf7FAcQKTnYUu2KDimYxlDhfpcrk"
          sizes="any"
        />
        <StyledEngineProvider injectFirst>
          <CustomThemeProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CustomThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
