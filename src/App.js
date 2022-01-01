import Header from "./components/Header";
import Page from "./components/Page";
import ScrollHint from "./components/ScrollHint";

function App() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-auto w-screen h-screen">
      <Header />

      <Page id="about" className="bg-slate-900">
        <div className="h-full flex items-center">
          <div className="md:w-2/3 lg:w-1/2 mx-auto">
            <h1 className="leading-10 text-white text-4xl font-bold">
              David van Munster,<br></br>a software development student based in
              the Netherlands.
            </h1>
            <p className={"leading-7 text-slate-400 pt-3"}>
              I am currently a software development student at the Hogeschool
              Arnhem Nijmegen. I am passionate about obtaining new skills,
              especially skills surrounding technologies like programming
              languages, frameworks, tools & more.
            </p>
          </div>
        </div>
        <ScrollHint bg="text-slate-600" />
      </Page>

      <Page id="work" className="bg-rose-900">
        <div className="h-full flex items-center">
          <div className="md:w-2/3 lg:w-1/2 mx-auto">
            <h1 className="leading-10 text-white text-4xl font-bold">Work</h1>
            <p className="leading-7 text-rose-300 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </Page>

      <Page id="contact" className="bg-blue-900 h-full">
        <div className="w-full h-full flex items-center">
          <div className='w-full flex flex-col'>
          <div className="md:w-2/3 lg:w-1/2 mx-auto w-full">
            <h1 className="leading-10 text-white text-4xl font-bold pb-3">
              Contact
            </h1>
            <p className="leading-7 text-blue-300 pb-10">
              Do not hesitate to contact me! I will reply as soon as possible to
              any question you might have.
            </p>
          </div>
          <div className='flex md:w-2/3 lg:w-1/2 mx-auto w-full text-blue-400'>
            <div className="w-1/2">
              <h1 className="text-white text-sm pb-2">Email</h1>
              <ul>
                <li className="hover:text-white transition-colors">
                  hello@davidvanmunster.com
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <h1 className="text-white text-sm pb-2">Relevant links</h1>
              <ul>
                <li className="hover:text-white transition-colors">
                  <a href="https://www.linkedin.com/in/david-van-munster-10324115b/">
                    LinkedIn
                  </a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="https://www.github.com/dmun/">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        <p className="absolute bottom-8 text-sm text-blue-500">
          © 2022 David van Munster
        </p>
      </Page>
    </div>
  );
}

export default App;
