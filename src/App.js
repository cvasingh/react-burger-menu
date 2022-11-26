import { slide as Menu } from 'react-burger-menu'

function App() {
  return (<div style={{ width: '100%', height: '100vh', backgroundColor: 'rgba(0, 250, 0,0.1)' }}>
    <Menu right isOpen={true} />
    <div>
      <div>Home Page</div>
    </div>
  </div>);
}

export default App;
