import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='snap-y snap-mandatory overflow-auto w-screen h-screen'>
      <Header />

      <div className='snap-start bg-slate-900 mx-auto h-screen w-full relative'>
        <div className='w-full h-full flex items-center lg:w-2/3 xl:w-1/2 mx-auto'>
          <div className='p-10'>
            <h1 className='leading-10 text-white text-4xl font-bold'>David van Munster,<br></br>a software development student based in the Netherlands.</h1>
            <p className='leading-7 text-slate-400 text-base pt-3'>I am currently a software development student at the Hogeschool Arnhem Nijmegen. I am passionate about obtaining new skills, especially skills surrounding technologies like programming languages, frameworks, tools & more.</p>
          </div>
        </div>
        <div className='invisible sm:visible text-slate-500 absolute bottom-8 flex flex-col right-1/2 translate-x-1/2'>
          <a className='pb-2'>Scroll</a>
          <FontAwesomeIcon className='animate-bounce h-6 align-middle' icon={faArrowDown} />
        </div>
      </div>

      <div className='snap-start bg-rose-900 mx-auto h-screen w-full relative'>
        <div className='w-full h-full flex items-center lg:w-2/3 xl:w-1/2 mx-auto'>
            <h1 className='w-full text-center leading-10 text-rose-300 text-4xl font-bold'>WORK IN PROGRESS</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
