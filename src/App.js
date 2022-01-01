import Header from "./components/Header";
import Footer from "./components/Footer";
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

      <Page id="contact" className="bg-blue-900 h-2/3">
        <div className="w-full h-full flex items-center">
          <div className="md:w-2/3 lg:w-1/2 mx-auto w-full">
            <h1 className="leading-10 text-white text-4xl font-bold pb-3">
              Contact
            </h1>
            <p className="leading-7 text-blue-300">
              Do not hesitate to contact me! I will reply as soon as possible to any question you might have.
            </p>
          </div>
        </div>
      </Page>
      <Page className="bg-slate-900 h-1/3 w-full p-12">
        <div className="md:w-2/3 lg:w-1/2 mx-auto w-full">
          <Footer />
        </div>
      </Page>
    </div>
  );
}

export default App;
