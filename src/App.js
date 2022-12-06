import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { NotFound } from "./components/NotFound";
import { Game } from "./components/Game";
import { Ranking } from "./components/Ranking";
import { List } from "./components/List";
import { Edit } from "./components/Edit";
import { Update } from "./components/Update";
import { Select } from "./components/Select";
import { CourseRegister } from "./components/CourseRegister";
import { Choice } from "./components/Choice";
import { Event } from "./components/Event";
import { Play } from "./components/Play";
// 学習用ファイル
import ApiFetch from './components/example/ApiFetch';
import Form from './components/example/Form';
import { Example } from "./components/Example";
import { ExampleEffect } from "./components/ExampleEffect"




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
        <Route path={`/update/`} element={<Update />} />
        <Route path={`/select`} element={<Select />} />
        <Route path={`/course_register`} element={<CourseRegister />} />
        <Route path={`/choice`} element={<Choice />} />
        <Route path={`/event`} element={<Event />} />
        <Route path={`/play`} element={<Play />} />
        {/* 学習用ルート */}
        <Route path={`/example/`} element={<Example />} />
        <Route path={`/example_effect/`} element={<ExampleEffect />} />
        <Route path={`/api_fetch`} element={<ApiFetch />} />
        <Route path={`/form`} element={<Form />} />

      </Routes>
    </BrowserRouter>  
  );
};

export default App;
