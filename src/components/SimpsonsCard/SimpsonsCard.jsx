import "./styles.css";
// props- это возможность передавать данные из  родительского компонента в дочерний
// props является  обьектом
// синтаксис без деструктуризации:
// function SimpsonsCard(props) {
 // console.log(props)
// <img className="avatar" src= {props.avatar} alt="User Avatar" /> и так далее

// синтаксис с деструктуризацией:
function SimpsonsCard({avatar, firstName, lastName, job, hobby}) {
    // данные хранятся в самом компоненте- это старый подход:
  // const homerSimpson = {
  //   firstName: "Homer",
  //   lastName: "Simpson",
  //   job: "Nuclear Security Specialist",
  //   hobby: "Bear, TV, FastFood",
  //   avatarURL:
  //     "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  // };
  // const {FirstName, LastName, Job, Hobby, AvatarURL} = homerSimpson;
  return (
    <div className="card">
      <img className="avatar" src= {avatar} alt="User Avatar" />
      <div className="card_info">
        <span className="info_title">Fullname: </span>
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <div className="card_info">
        <span className="info_title"> Job: </span>
        <p>{job}</p>
      </div>
      <div className="card_info">
        <span className="info_title">Hobby: </span>
        <p>{hobby}</p>
      </div>
    </div>
  );
}
export default SimpsonsCard;