import Header from './components/Header';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div>
      <Header />
      <div className='mx-auto lg:w-3/4 md:w-full p-12'>
        <Paragraph
          heading='Introduction'
          content='Ducimus culpa unde alias sunt vel aspernatur. Deserunt voluptate sequi est aliquid animi. Voluptas porro cum quia dolores. Quam aut aspernatur architecto. Exercitationem ipsam ut voluptatibus aspernatur praesentium est fuga. Deleniti sed mollitia aut aliquid.'
        />
      </div>
    </div>
  );
}

export default App;
