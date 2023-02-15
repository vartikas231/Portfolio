import React from "react";
import { Link } from "react-router-dom";
import "./edit.css";
const EditProjects = () => {
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-container">
          <div className="same-form">
            <form>
              <form>
                <h3 className="updated">updated</h3>
                <h4>Project Components</h4>
                <label htmlFor="text">id</label>
                <input type="text" name="product_id" required id="product-id" />

                <label htmlFor="text">Title</label>
                <input type="text" name="title" required id="title" />

                <label htmlFor="text">Description</label>
                <textarea
                  name="description"
                  required
                  id="description"
                  cols="30"
                  rows="3"
                />

                <div className="upload">
                  <input type="file" name="file" id="file_up" />

                  <div id="file_img">
                    <img
                      src="https://i.pinimg.com/236x/4b/95/33/4b953314e05a75107584c62f3d8fbeb3.jpg"
                      alt=""
                    />
                    <span>X</span>
                  </div>
                </div>
                <div className="btns">
                  <Link to="/admin">
                    <button classname="cancel-btn">Cancel</button>
                  </Link>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProjects;
