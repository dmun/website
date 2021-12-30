import Header from './components/Header';
import Landing from './components/Landing';
import Page from './components/Page';
import ScrollHint from './components/ScrollHint';

function App() {
  return (
    <div className='scroll-smooth snap-y snap-mandatory overflow-auto w-screen h-screen'>
      <Header />

      <Page id='about' shade='slate'>
        <div className='h-full flex items-center'>
          <div className='md:w-2/3 lg:w-1/2 mx-auto'>
            <Landing shade='slate' />
          </div>
        </div>
        <ScrollHint shade='slate' />
      </Page>

      <Page id='work' shade='rose'>
        <h1 className='absolute bottom-8 leading-0 text-rose-600 text-6xl font-bold'>WORK IN PROGRESS</h1>
      </Page>
    </div>
  );
}

export default App;
