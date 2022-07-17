import './App.css';
import MasterMenu from './MasterMenu';

const menuJson = [
  {
    title: 'Home',
    sub: [{
      title: 'a',
      sub: [
        { title: 'aa' },
        { title: 'bb' },
        {
          title: 'cc',
          sub: [{ title: 'aaa' }]
        }]
    },
    { title: 'b', sub: [{ title: 'bb2' }] }]
  },
  { title: 'menu1' },
  { title: 'menu2', sub: [{ title: 'a' }] },
]

function App() {
  return (
    <div className="App">
      <MasterMenu menuJson={menuJson} />
    </div>
  );
}

export default App;
