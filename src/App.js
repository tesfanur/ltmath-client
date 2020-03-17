import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./components/pages/home";
// import About from "./components/pages/about";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_USERS = gql`
  query {
    users {
      username
      email
      usertype
      token
    }
  }
`;

const App = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return <User users={data.users} />;
    }}
  </Query>
);

const User = ({ users }) => {
  console.log({ users });
  return (
    <div>
      <ul>
        {users.map(user => {
          const { username, email, usertype } = user;
          console.log({ username, email, usertype });
          return <li key={email}>{email}</li>;
        })}
      </ul>
    </div>
  );
};
export default App;

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul style={{ decoration: "none" }}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // function Home() {
// //   return <h2>Home</h2>;
// // }

// // function About() {
// //   return <h2>About</h2>;
// // }

// function Users() {
//   return <h2>Users</h2>;
// }
