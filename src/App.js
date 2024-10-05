import './App.css';
import About from './components/About';
import Button from './components/Button';
import Form from './components/Form';
import Hero from './components/Hero';
import Input from './components/Input';
import Items from './components/Items';
import Layout from './components/Layout';

function App() {
  const numbers=[1,2,3,40,5,6,7,8] 
  return (
    <>
      {/* <Input/>
      <br></br>
      <Button title="click Me"/>
      <Items numbers={numbers}/> */}
      {/* <Layout>
        <Hero/>
        <About/>
        </Layout>*/}
      {/* <br/> */}
      <Form/> 
    </>
  );
}

export default App;
