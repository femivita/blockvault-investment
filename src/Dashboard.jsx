import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import "./Dashboard.css";

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="navbar__toggle" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
        <h1 className="navbar__logo">Dashboard</h1>
      </nav>
      <div className={`sidebar ${showSidebar ? 'show-sidebar' : ''}`}>
        <ul className="sidebar__menu">
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <i className="fas fa-chart-line sidebar__icon"></i>
              Dashboard
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <i className="fas fa-users sidebar__icon"></i>
              Users
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <i className="fas fa-cog sidebar__icon"></i>
              Settings
            </a>
          </li>
        </ul>
      </div>
      <main className="main">
        <div className="main__content">
          <h2>Welcome to the Dashboard!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla id felis ultricies feugiat nec sed velit. Sed lobortis sapien eu tellus bibendum mollis. Vestibulum tempor imperdiet faucibus. Aenean ultricies consectetur odio. Suspendisse euismod elit vel enim dictum eleifend. Donec bibendum tortor vitae metus pharetra, a auctor libero pellentesque.</p>
        </div>
      </main>
    </div>
  );

//   const [showSidebar, setShowSidebar] = useState(false);
//   const [fundingAmount, setFundingAmount] = useState(0);

//   const handleSidebarToggle = () => {
//     setShowSidebar(!showSidebar);
//   };

//   const handleFundingAmountChange = (event) => {
//     setFundingAmount(event.target.value);
//   };

//   const handleFundingSubmit = (event) => {
//     event.preventDefault();
//     console.log("Funding submitted: ", fundingAmount);
//     setFundingAmount(0);
//   };

//   return (
//     <div className="dashboard">
//       <nav className="navbar">
//         <div className="navbar__logo">
//           <Link to="/">
//             <img src={logo} alt="Coinable logo" />
//           </Link>
//         </div>
//         <div className="navbar__links">
//           <Link to="/about">About Us</Link>
//           <Link to="/contact">Contact Us</Link>
//           <button className="navbar__btn navbar__btn--fund">Fund</button>
//           <button className="navbar__btn navbar__btn--withdraw">
//             Withdraw
//           </button>
//         </div>
//         <button className="navbar__toggle" onClick={handleSidebarToggle}>
//           <FaBars />
//         </button>
//       </nav>
//       <aside className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/transactions">Transactions</Link>
//         <Link to="/settings">Settings</Link>
//       </aside>
//       <main className="main">
//         <header
//           className="main__header"
//           style={{ backgroundImage: `url('/assets/header-bg.jpg')` }}
//         >
//           <h1 className="main__title">Welcome back, John!</h1>
//           <p className="main__subtitle">Your balance is 2.3456 BTC</p>
//         </header>
//         <section className="main__content">
//           <form className="funding-form" onSubmit={handleFundingSubmit}>
//             <h2 className="funding-form__title">Fund your wallet</h2>
//             <p className="funding-form__balance">
//               Your current balance is 2.3456 BTC
//             </p>
//             <div className="form-group">
//               <label htmlFor="funding-amount">Amount (BTC)</label>
//               <input
//                 type="number"
//                 step="any"
//                 id="funding-amount"
//                 name="funding-amount"
//                 value={fundingAmount}
//                 onChange={handleFundingAmountChange}
//               />
//             </div>
//             <button className="btn btn--primary" type="submit">
//               Fund
//             </button>
//           </form>
//         </section>
//       </main>
//       <footer className="footer">
//         <p>&copy; 2023 Blockvault Investment. All rights reserved.</p>
//       </footer>
//     </div>
//   );
};

export default Dashboard;
