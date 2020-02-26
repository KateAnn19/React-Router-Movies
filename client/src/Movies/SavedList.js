import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';


function SavedList (props) {

  let historyFoo = useHistory();
  const homeButton = () => {
    historyFoo.push('/');
  }

return (
  
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}

    <div onClick={homeButton} className="home-button">Home</div>
  </div>
)};


// function Home() {
//   const historyFoo = useHistory();
//   console.log("histroy", historyFoo);
//   const routeToShopFoo = () => {
//     // console.log("Submitting...");
//     // setTimeout(() => {
//     //   historyFoo.push("/item-list");
//     //   //we say we want to push user to /item-list
//     // }, 2000);
//     //2000 ms is 2 seconds //won't happen for 2 seconds
//     historyFoo.push("/item-list");
//   };
//   // console.log(props);
//   return (
//     <div className="home-wrapper">
//       <img
//         className="home-image"
//         src="https://source.unsplash.com/F6-U5fGAOik"
//         alt=""
//       />
//       <button onClick={routeToShopFoo} className="md-button shop-button">
//         Shop now!
//       </button>
//     </div>
//   );
// }







export default SavedList;
