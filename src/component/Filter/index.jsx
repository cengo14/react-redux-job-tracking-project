import React, { useEffect, useState } from "react";
import { sortOpt, statusOpt, typeOpt } from "../../constant";
import "./filter.scss";
import Input from "./Input";
import Select from "./Select";
import api from "./../../api/index";
import { useDispatch } from "react-redux";
import { setError, setJobs, setLoading } from "../../redux/slice/taskSlice";

const Filter = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [text, setText] = useState();
  const [debounceText, setDebounceText] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [sort, setSort] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (text === undefined) return;
    const timer = setTimeout(() => setDebounceText(text), 1000);
    return () => clearTimeout(timer);
  }, [text]);
  useEffect(() => {
    const params = {
      q: debounceText,
      status,
      type,
      _sort: sort === "a-z" || sort === "z-a" ? "company" : "date",
      _order: sort === "a-z" || sort === "En Eski" ? "asc" : "desc",
    };
    dispatch(setLoading());
    api
      .get("/jobs", { params })
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, [debounceText, status, type, sort]);
  const handleReset = (e) => {
    e.target.reset();
    setText();
    setType();
    setDebounceText();
    setSort();
    setStatus();
  };
  return (
    <div className="filter-box">
      <button onClick={() => setIsFilter(!isFilter)} className="setting-btn">
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar1"></span>
      </button>

      <form
        onReset={handleReset}
        className={isFilter ? "filter-area" : "isFilter "}
      >
        <Input label="Ara" handleChange={(e) => setText(e.target.value)} />
        <Select
          label="Durum"
          options={statusOpt}
          handleChange={(e) => setStatus(e.target.value)}
        />
        <Select
          label="Tür"
          options={typeOpt}
          handleChange={(e) => setType(e.target.value)}
        />
        <Select
          label="Sırala"
          options={sortOpt}
          handleChange={(e) => setSort(e.target.value)}
        />
        <button type="reset" className="button">
          Filteryi Sıfırla
        </button>
      </form>
    </div>
  );
};

export default React.memo(Filter);
