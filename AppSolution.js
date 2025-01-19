```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  let location = useLocation();
  return (
    <div>
      Home {location.pathname}
    </div>
  );
}

function About() {
  return <div>About</div>;
}
export default App; 
```