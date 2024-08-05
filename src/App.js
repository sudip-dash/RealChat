import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./components/context/AccountProvide";
import Messenger from "./components/Messenger/Messenger";
import "./App.css";

function App() {
  const clientId =
    "313799907856-bmvki25d6n4ja967s164j7allrjh1dfp.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
