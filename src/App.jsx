import { useState } from 'react';
// import reactLogo from './assets/react.svg?url'
import RLogo from './assets/react.svg';
import Logo from './assets/vite.svg';
// import viteLogo from '/vite.svg?url'
import './App.css';
import { useGetAllContactsQuery } from './redux/contacts/operations';

function App() {
  const [count, setCount] = useState(0);
  const { data, error, isLoading } = useGetAllContactsQuery();
  // const x = data ? data.resources : error.message;
  console.log(data);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <a href='https://vitejs.dev' target='_blank' className='logo'>
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          <Logo width={88} height={88} />
        </a>
        <a href='https://react.dev' target='_blank' className='logo react'>
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          <RLogo width={88} height={88} className='react' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
      <ul>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.resources.map(i => <li key={i.id}>{i.fields.email[0].value}</li>)
        ) : null}
      </ul>
    </>
  );
}

export default App;
