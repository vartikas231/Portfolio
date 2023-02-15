import React , {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './admin.css'
const AchievementsAdmin = () => {
  const [achievement, setAchievement] = useState("");
  const [achievementData, setAchievementData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/achievement`);
        // console.log(res.data);
        setAchievementData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // onchange

  const onChangeAchievement = (e) => {
    setAchievement(e.target.value);
    // console.log(achievement);
  };

  // submit achievement
  const handleSubmit = (e) => {
    e.preventDefault();

    const postAchievement = {
      achievement,
    };
    setAchievement("");

    axios
      .post(`http://localhost:5000/achievement`, postAchievement)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  // delete about
  const deleteAchievement = (id) => {
    axios
      .delete(`http://localhost:5000/achievement/${id}`)
      .then((res) => {
        setMessageCond(true);
        setMessage(`${res.data.msg}`);

        setTimeout(() => {
          setMessage("");
          setMessageCond(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
    // delete from UI

    const achievementFilterDel = achievementData.filter((item) => item._id !== id);
    setAchievementData(achievementFilterDel);
  };

  return (
    <div className="same-component">
      <div className="same-form">
        <form onSubmit={handleSubmit}>
          <h4>Achievement Component</h4>
          <label htmlFor="text">Achievement</label>
          <input
            type="text"
            onChange={onChangeAchievement}
            value={achievement}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          {achievementData.map((item) => (
            <div className="same-admin" key={item._id}>
              <div className="icons">
                <Link to={`/editAchievement/${item._id}`}>
                  <i className="fas fa-edit"></i>
                </Link>

                <i className="fas fa-trash" onClick={()=>deleteAchievement(item._id)}></i>
              </div>
              {/* client\src\components\editComponents\EditAchievement.js */}
              {/* single education */}
              <div className="single-experience">
                <p>{item.achievement}</p>
              </div>
              <h3
                className={
                  setMessageCond
                    ? "new-delete item-delete-tab "
                    : "item-delete-tab"
                }
              >
                {message}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsAdmin;
