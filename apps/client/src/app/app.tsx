import Router from './Router/Routes';
import Footer from './layout/component/Footer';
import Header from './layout/component/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApolloProvider } from '@apollo/client';
import client from './Graphql/apollo/apolloServer';

export const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Header />
          <Router />
        </Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
