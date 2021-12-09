import { CriptoProvider } from "@context/cripto";
import Routers from "@utils/components/Routers";
const App = () => {
  return (
    <CriptoProvider>
      <Routers />
    </CriptoProvider>
  );
};

export default App;
