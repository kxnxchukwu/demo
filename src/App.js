import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/navbar';
import { HomePage } from './components/Home/home';
import { AboutPage } from './components/About/about';
import { BlogPage } from './components/Blog/blog';
import { SignInPage } from './components/SignIn/signin';
import { SignUpPage } from './components/SignUp/signup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<div>
<BrowserRouter>
  <NavBar />
    <Switch>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route
          exact
          path="/signin"
          element={<SignInPage />}
        />
        <Route
          exact
          path="/create"
          element={<SignUpPage />}
        />
    </Switch>
</BrowserRouter>
</div>
  );
}

export default App;
