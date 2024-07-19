import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Welcome from the Contacts</h1>
      <button>
        <Link to="ContactUs">Call or Mail us</Link>
      </button>
      <button>
        <Link to="Address">Drop a Letter</Link>
      </button>
      <Outlet />
    </div>
  );
}
