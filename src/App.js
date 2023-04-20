import './App.css';
//import React, {Component} from 'react';
import Body from "./components/Body";
import Nav from "./components/Nav";

import React from 'react';

const App = () => {
    return (
      <div className={'app'}>
          <Nav/>
          <Body/>
      </div>
  );
};

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {
//         avatar: 'https://www.gravatar.com/avatar/0000?d=monsterid',
//         name: 'Monster'
//       },
//       stats:{
//         followers: 1000,
//         subscribe: 100
//       }
//     }
//   }
//   changeAvatar = url => {
//      const temp = {...this.state.user};
//      temp.avatar = url || temp.avatar;
//     this.setState({user: temp});
//   }
//
//   render() {
//     return (
//         <div className={'app'}>
//           <UserContext.Provider value={
//             {
//               user: this.state.user,
//               stats: this.state.stats,
//               changeAvatar: this.changeAvatar
//             }
//           }>
//             <Nav/>
//             <Body/>
//           </UserContext.Provider>
//         </div>
//     );
//   }
// }
//
// export default App;
//
