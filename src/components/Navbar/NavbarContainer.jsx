import { connect } from "react-redux";
// import StoreContext from "../../StoreContext";
import Navbar from "./Navbar";

// const NavbarContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         return (
//           <Navbar navbar={state.navbar.navBar} />
//         )
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    navbar: state.navbar.navBar
  }
}

const NavbarContainer = connect(mapStateToProps) (Navbar)

export default NavbarContainer;
