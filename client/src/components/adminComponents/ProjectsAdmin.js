import React from 'react'
import { Link } from 'react-router-dom';
const ProjectsAdmin=()=> {
  return (
    <div className="same-component">
      <div className="same-form">
        <form>
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
}

export default ProjectsAdmin