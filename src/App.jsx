import AppLayout from "./components/AppLayout";
import SidebarProfile from "./components/SidebarProfile";
import TimeCells from "./components/TimeCells";
import { useState } from "react";

function App() {
  const [active, setActive] = useState([
    { id: "daily", active: true },
    { id: "weekly", active: false },
    { id: "monthly", active: false },
  ]);
  return (
    <AppLayout>
      <SidebarProfile active={active} setActive={setActive} />
      <TimeCells active={active} />
    </AppLayout>
  );
}

export default App;
