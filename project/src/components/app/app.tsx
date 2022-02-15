import MainPage from '../main-page/main-page';

type AppProps = {
  offersQuantity: number;
}

function App(props: AppProps): JSX.Element {
  const { offersQuantity } = props;

  return <MainPage offersQuantity={offersQuantity} />;
}

export default App;
