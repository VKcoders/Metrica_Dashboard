import { useContext } from "react";
import { Search } from "../../Context";

import Geral from "./Geral";
import Intro from "./Intro";
import Question from "./Question";
import Confirm from "./Confirm";

const ContentSwitch = () => {
  const { marker } = useContext(Search);

  const obj = {
    0: <Geral />,
    2: <Intro />,
    4: <Question />,
    6: <Confirm />
  };
  
  return obj[marker];
}

export default ContentSwitch;