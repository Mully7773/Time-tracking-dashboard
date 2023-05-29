import AppLayout from "./components/AppLayout";

import SidebarProfile from "./components/SidebarProfile";
import TimeCells from "./components/TimeCells";

function App() {
  return (
    <AppLayout>
      <SidebarProfile />
      <TimeCells />
    </AppLayout>
  );
}

export default App;
