import { BrowserRouter, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import PostsPage from './components/PostsPage';
import ContactsPage from './components/ContactsPage';
import PhotosPage from "./components/PhotosPage";
import Header from "./components/Header";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Route path="/" exact component={HomePage} />
        <Route path="/posts" component={PostsPage} />
        <Route path="/photos" component={PhotosPage} />
        <Route path="/contacts" component={ContactsPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
