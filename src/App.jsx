import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Header from "./component/Header";
import api from "./api";
import { useDispatch } from "react-redux";
import { setError, setJobs, setLoading } from "./redux/slice/taskSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading());
    api
      .get("/jobs", {
        params: {
          _sort: "date",
          _order: "desc",
        },
      })
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
App;
