import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Contact from "./pages/contact/Contact.jsx";
import AppLayout from "./components/AppLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

// Combined scrollable page component
const MainPage = () => {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Portfolio /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <MainPage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
