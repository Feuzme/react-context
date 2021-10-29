import './App.css';
import Content from './components/Content/Content';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
    </>
  );
}

export default App;
