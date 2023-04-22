/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from "react";
import { Link , useNavigate ,useParams } from "react-router-dom";

import "./edit.css";
import axios from "axios";

const initialState = {
  product_id: "",
  title: "",
  description: "",
};



const EditProjects = (props) => {
  const [product, setProducts] = useState(initialState);
  const [images, setImages] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


// var  id={match.params.id};

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const file = e.target.files[0];
      if (!file) return alert("no files exist");

      if (file.size > 1024 * 1024) {
        return alert("Size is too big!");
      }
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        return alert("Incorrect file format ! ");
      }

      let formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData, {
        headers: { "content-type ": "multipart/form-data" },
      });

      setImages(res.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  // delete image

  const handleDestroy = async () => {
    try {
      await axios.post("/destroy", { public_id: images.public_id });
      setImages(false);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };



  // getting data
  //
  // .
  //
  // .
  //
  // .
  //
  // .
  //
  // .
  //
  // .
  //
  // .
  //
  // .


 const { id } = useParams();
 

  useEffect(() => {
    axios
      .get(`/project/${`props.match.${id}`}`)
      .then((res) => {
        setProducts({
          product_id: res.data.product_id,
          title: res.data.title,
          description: res.data.description,
        });
      })
      .catch((err) => console.log(err));
  }, []);



const handleChangeInput=(e)=>{
  const {name,value}=e.target
  setProducts({...product,[name]:value})
}




  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .put(`/project/${`props.match.${id}`}`, { ...product, images })
        .then((res) => {
          setMessage(res.data.msg);
        });
    } catch (error) {
      console.log(error);
    }


    setTimeout(()=>{
      navigate("/admin")
    },2000)
  };

  const styleUpload={
    display:images?'block':'none'
  }
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-container">
          <div className="same-form">
            <form onSubmit={handleSubmit}>
              <h3 className="updated">{message}</h3>
              <h4>Project Components</h4>
              <label htmlFor="text">Id</label>
              <input
                type="text"
                name="product_id"
                required
                id="product-id"
                value={product.product_id}
                onChange={handleChangeInput}
              />

              <label htmlFor="text">Title</label>
              <input
                type="text"
                name="title"
                required
                id="title"
                value={product.title}
                onChange={handleChangeInput}
              />

              <label htmlFor="text">Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChangeInput}
                required
                id="description"
                cols="30"
                rows="3"
              />

              <div className="upload" >
                <input type="file" 
                name="file" 
                id="file_up"
                onChange={handleUpload}
                required
                 />

                <div id="file_img" style={styleUpload}>
                  <img
                    src={images?images.url:''}
                    alt=""
                  />
                  <span onClick={handleDestroy}>X</span>
                </div>
              </div>
              <div className="btns">
                <Link to="/admin">
                  <button className="cancel-btn">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProjects;
