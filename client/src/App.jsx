import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Auth from "./components/Auth";

const defaultTheme = createTheme();

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
          <Auth>
            <Outlet />
          </Auth>
        </ThemeProvider>
        </Provider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
