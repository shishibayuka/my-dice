import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { NotFound } from "./components/NotFound";
import { Game } from "./components/Game";
import { Ranking } from "./components/Ranking";
import { List } from "./components/List";
import { Edit } from "./components/Edit";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
