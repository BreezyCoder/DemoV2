import React from "react";
import { isMobile } from "react-device-detect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollBtn from "./components/scrollBtn";
import Navi from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import About from "./components/about";
import Products from "./components/products";
import UserControl from "./components/userControl";
import Footer from "./components/footer";
//Products Pages
import Consumables from "./components/consumables";

function App() {
  //functional check for conditional rendering to check if mobile and display the sidebar instead of the usual navbar
  if (isMobile) {
    return (
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          {/*All Routes lead to their Products Category */}
          <Route path="/consumables" component={Consumables} />
          <Route path="/signup" component={UserControl} />
        </Switch>
        <Footer />
      </Router>
    );
  } else if (!isMobile) {
    //below function animates and re-sizes the navbar on desktops for better scrolling and visibility
    window.onscroll = function () {
      scrollFunction();
    };
    //animate the navbar
    function scrollFunction() {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        function logo() {
          document.querySelector(".navbar").style.height = "50px";
          document.querySelector(".scroll-btn").style.display = "block";
          document.querySelector(".logo").style.visibility = "hidden";
        }
        return logo();
      } else {
        function logo() {
          document.querySelector(".navbar").style.height = "145px";
          document.querySelector(".logo").style.visibility = "visible";
          document.querySelector(".scroll-btn").style.display = "none";
        }
        return logo();
      }
    }
  }
  //client side routing for faster load speeds
  return (
    <Router>
      <Navi />
      <ScrollBtn />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        {/* Routes to all product categories*/}
        <Route path="/consumables" component={Consumables} />
        <Route path="/signup" component={UserControl} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
