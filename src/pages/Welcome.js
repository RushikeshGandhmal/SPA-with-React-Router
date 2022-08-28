import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome To This React World</h1>
      <Route path="/welcome/new-user">
        <p>Welcome,  New User!</p>
      </Route>
    </section>
  );
};

export default Welcome;
