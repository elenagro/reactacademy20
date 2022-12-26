import LifecycleFuncComponent from "./components/LifecycleFuncComponent";
import LifecycleClassComponent from "./components/LifecycleClassComponent";
import { useState } from "react";

const App = () => {

  const [shouldShow, setShouldShow] = useState(true)

  return (<>
  <LifecycleFuncComponent />
  <LifecycleClassComponent />
  </>);
}

export default App;
