import { About } from './components/About';
import Certificate from './components/Certificate';
// import Contact from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import Footer from './components/footer';
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
          <Experience />
        </div>
        <div>
          <Certificate />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
