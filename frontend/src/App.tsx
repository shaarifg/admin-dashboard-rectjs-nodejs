
import Dashboard from "./comp/dashboards/Dashboard";
import VerticalNavigation from "./comp/vertical-navigation/VerticalNavigation";

const App=()=> {
  return (
    <div className="relative flex flex-auto bg-gray-100 min-w-0">
        <VerticalNavigation  />
        <Dashboard />
    </div>
  );
}

export default App;
