import Layout from '../components/Layout';
import Global from '../styles/Global';
import styled from 'styled-components';
import Head from 'next/head';

const Content = styled.div`
  width: 960px;
  margin: 0 auto;

  @media (max-width: 987px) {
    width: 700px;
  }

  @media (max-width: 720px) {
    width: 450px;
  }

  @media (max-width: 470px) {
    width: 350px;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokemon API</title>
      </Head>
      <Content>
        <Layout>
          <Global />
          <Component {...pageProps} />
        </Layout>
      </Content>
    </>
  );
}

export default MyApp;
