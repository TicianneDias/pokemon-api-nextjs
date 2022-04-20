import Layout from '../components/Layout'
import Global from '../styles/Global'
import styled from 'styled-components';

const Content = styled.div`
  width: 960px;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Content>
      <Layout>
        <Global/>
        <Component {...pageProps} />
      </Layout>
    </Content>
  )
}

export default MyApp
