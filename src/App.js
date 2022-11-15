import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { NotFound } from "./components/NotFound";
import { Game } from "./components/Game";
import { Ranking } from "./components/Ranking";
import { List } from "./components/List";
import { Edit } from "./components/Edit";
import { Example } from "./components/Example";
import { ExampleEffect } from "./components/ExampleEffect"
import ApiFetch from './components/example/ApiFetch';
import { Select } from "./components/Select";

const App= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login/'} element={<Login />} />
        <Route path={`/signup/`} element={<Signup />} />
        <Route path={`/*`} element={<NotFound />} />
        <Route path={`/game/`} element={<Game />} />
        <Route path={`/ranking/`} element={<Ranking />} />
        <Route path={`/list/`} element={<List />} />
        <Route path={`/edit/`} element={<Edit />} />
        <Route path={`/example/`} element={<Example />} />
        <Route path={`/example_effect/`} element={<ExampleEffect />} />
        <Route path={`/api_fetch`} element={<ApiFetch />} />
        <Route path={`/select`} element={<Select />} />
      </Routes>
    </BrowserRouter>  
  );
};

export default App;
