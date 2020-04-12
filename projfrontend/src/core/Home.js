import React, { useState, useEffect } from "react";
import { API } from "../backend";
import Base from "./Base";

export default function Home() {
  return (
    <Base
      title="Home Page"
      description="Welcome to the Multi-User Login System"
      className="container"
    >
      <p>
        This is the role based login system with seperate dashboard for user and
        admin
      </p>
    </Base>
  );
}
