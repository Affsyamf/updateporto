import { About } from './components/About';
import Contact from './components/Contact';
import { Education } from './components/Education';
import { Exprerience } from './components/Experience';

import Landing from './components/Landing';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className='absolute top-[80px] right-0 left-0'>
        <div>
          <Landing />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Education />
        </div>
        <div>
          <Exprerience />
        </div>
        <div>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
