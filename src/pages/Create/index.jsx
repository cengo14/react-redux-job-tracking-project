import React from "react";
import "./create.scss";
import Input from "./Input";
import Select from "./Select";
import { statusOpt, typeOpt } from "../../constant";
import api from "./../../api/index";
import { useDispatch } from "react-redux";
import { addJobs, setError } from "../../redux/slice/taskSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());
    jobData.date = Date.now();
    api
      .post("/jobs", jobData)
      .then((res) => {
        dispatch(addJobs(res.data));
        toast.success("Ekleme işlemi başarılı");
        navigate("/");
      })
      .catch((err) => {
        dispatch(setError(err.message));
        toast.error("Bir hata oluştu");
      });
  };
  return (
    <div className="add-page">
      <section className="create-box">
        <p>Yeni İş Ekle</p>
        <form onSubmit={handleSubmit}>
          <Input label="Pozisyon" name="position" />
          <Input label="Şirket" name="company" />
          <Input label="Konum" name="location" />
          <Select label="Durum" name="status" options={statusOpt} />
          <Select label="Tür" name="type" options={typeOpt} />

          <button className="button">Gönder</button>
        </form>
      </section>
    </div>
  );
};

export default Create;
