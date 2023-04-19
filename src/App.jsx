import './App.css'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import routes from './component/routes/routes';
function App() {
  return (
    <div className="App">
    <RouterProvider router={routes} />
    </div>
  )
}

export default App
