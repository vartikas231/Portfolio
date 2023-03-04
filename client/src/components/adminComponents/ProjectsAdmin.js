import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialState = {
  product_id: "",
  title: "",
  description: "",
};
const ProjectsAdmin = () => {
  const [product, setProducts] = useState(initialState);
  const [images, setImages] = useState(false);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);
  const [projectData, setProjectData] = useState([]);

  // upload image functionality

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

  // handle change input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setProducts({ ...product, [name]: value });
// console.log(product.description);
// console.log(product.title);


  };

// handle submit form

const handleSubmit =(e)=>{
  e.preventDefault();
  try {
    axios.post('/project/',{...product,images})
    .then(res=>{
      setMessage(res.data.msg);
      setTimeout(()=>{
        setMessage('');
      },2000)


setProducts(initialState);
setImages(false);


    })
  } catch (error) {
    
  }
}

const styleUpload={
  display:images? 'block':'none' 
}



// fetching th data

useEffect(()=>{
  const fetchData=async ()=>{
    try {
      const res=await axios.get('/project');
      setProjectData(res.data);
      // console.log(res.data);

    } catch (error) {
      console.log(error);
    }
  }
},[])

// delete functonality



  return (
    <div className="same-component">
      <div className="same-form">
        <form onSubmit={handleSubmit}>
          <h4>Project Components</h4>
          <label htmlFor="text">id</label>
          <input
            type="text"
            name="product_id"
            id="product-id"
            value={product.product_id}
            onChange={handleChangeInput}
            required
          />

          <label htmlFor="text">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={product.title}
            onChange={handleChangeInput}
            required
          />

          <label htmlFor="text">Description</label>
          <textarea
            name="description"
            id="description"
            value={product.description}
            onChange={handleChangeInput}
            required
            cols="30"
            rows="3"
          />

          <div className="upload">
            <input type="file" name="file" id="file_up"
            onChange={handleUpload}
             />

            <div id="file_img" style={styleUpload}>
            <img src={images ? images.url :''} alt=""/>
              {/* <img
                src="https://i.pinimg.com/236x/4b/95/33/4b953314e05a75107584c62f3d8fbeb3.jpg"
                alt=""
              /> */}


              <span onClick={handleDestroy}>X</span>
            </div>
          </div>
          <button>Add item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div className="projects-admin">
            <div className="icons">
              <Link to={"/editProject"}>
                <i className="fas fa-edit"></i>
              </Link>

              <i className="fas fa-trash"></i>
            </div>

            {/* single project */}

            <div className="single-project">
              <div className="single-project-img">
                <img
                  src="https://i.pinimg.com/236x/49/1b/e3/491be313507162f0fc7f908391585dab.jpg"
                  alt=""
                />
              </div>

              <div className="single-project-info">
                <h3>Mountains</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  volutpat luctus lorem, nec maximus lacus semper vel. Nunc
                  porttitor arcu nec dolor porta, in facilisis purus elementum.
                  Praesent mollis metus orci, eget convallis leo laoreet in.
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </div>
            </div>

            <h3 className="item-delete-tab">X</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsAdmin;
