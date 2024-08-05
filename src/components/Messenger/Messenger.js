import { useContext } from "react";
import Interface from "../ChatModule/Interface";
import Signup from "../LoginSignup/Signup";
import { AccountContext } from "../context/AccountProvide";

const Messenger = () => {
  const { Account } = useContext(AccountContext);

  return <>{Account ? <Interface /> : <Signup />}</>;
};

export default Messenger;
