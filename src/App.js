import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className='flex items-center mx-auto h-screen w-full lg:w-1/2'>
        <div className='top-1/2 p-10'>
          <h1 className='leading-10 text-white text-4xl font-bold'>David van Munster,<br></br>a software development student based in the Netherlands.</h1>
          <p className='leading-7 text-slate-400 text-base pt-2'>I am currently a software development student at the Hogeschool Arnhem Nijmegen. I am passionate about obtaining new skills, especially skills surrounding technologies like programming languages, tools, hardware & more.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
