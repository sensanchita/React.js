
import Home from './Header'
import Contact from './Header'

function App() {
  let name = 'Pooja';
  return (
    <div>
    <h2>Hello from reactJS</h2> 
    <Home name = {'Pooja'} age ={24} />
    <Contact />
    </div>
  );
}

export default App;
