import { useContext } from "react";
import { Global } from "../../Context";

import All from "./All";
import Create from "./Create";
import Link from "./Link";
import Client from "./Client";
import Result from "./Result";
import Status from "./Status";
import Audio from "./Audio";
import Historic from "./Historic";

const ContentSwitch = () => {
  const { menuIndex } = useContext(Global);

  const obj = {
    All: <All />,
    Create: <Create />,
    Link: <Link />,
    Client: <Client />,
    Result: <Result />,
    Status: <Status />,
    Audio: <Audio />,
    Historic: <Historic />
  };
  
  return obj[menuIndex]
} 

export default ContentSwitch;