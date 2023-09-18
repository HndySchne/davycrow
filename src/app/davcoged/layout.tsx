"use client";
import { getCookie, deleteCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import "./davcoged.scss"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCookie, setCookie] = useState(false);
  useEffect(() => {
    getCookie("jwt");
    const cookie = getCookie("jwt");
    if (cookie === undefined) {
      console.log("cookie vide :", cookie);
      setCookie(false);
    } else {
      console.log("cookie pas vide : ", cookie);
      setCookie(true);
    }
  }, []);
  async function onSubmit() {
    console.log("On submit");
    deleteCookie("jwt");
    window.location.href = "/davcoged/login";
  }

  return (
    <div>
      <div>
        {isCookie ? (
          <nav>
            <button onClick={onSubmit}>Log Out</button>
          </nav>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
