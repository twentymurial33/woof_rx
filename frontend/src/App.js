import Main from './components/Main';
import Footer from './components/Footer';
import Card from './Card';
function App() {
  return (
    <div className="App" style={{backgroundColor: 'black'}}>
        <Main/>
        <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px'}}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <div>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
