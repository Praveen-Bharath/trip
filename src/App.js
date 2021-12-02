import { useState } from 'react';
import {Dropdown,Location} from './Dropdown';
import './styles.css';

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
{}
<Dropdown selected={selected} setSelected={setSelected} />
<Location />
    </div>
  );
}

export default App;
