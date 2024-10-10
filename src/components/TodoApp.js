import React from "react";
import Nav from './Nav'; // Ensure Nav is imported
import { Routes, Route, useSearchParams } from "react-router-dom";
import HomePage from "../pages/HomePage"; // Check the path
import AddPage from "../pages/AddPage"; // Check the path
import EditPage from "../pages/EditPage"; // Check the path
import DetailPage from "../pages/DetailPage"; // Check the path
import NotFoundPage from "../pages/NotFoundPage"; // Ensure NotFoundPage is imported

function TodoApp() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ? searchParams.get('keyword') : '';

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <div>
      <Nav keyword={keyword} keywordChange={changeSearchParams} />
      <Routes>
        <Route path="/" element={<HomePage keyword={keyword} />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default TodoApp;
