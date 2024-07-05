import { Img } from "../Img";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex items-center p-3.5 bg-light-gray-gray_56 shadow-xs`}>
      <div className="mx-auto flex w-full max-w-[1866px] items-center justify-between gap-5">
        <Img src="images/ing_header_logo.svg" alt="header logo" className="h-[26px] w-[136px] object-contain" />
        <a href="#">
          <Img
            src="images/ing_avatar_desktop.png"
            alt="avatar image"
            className="h-[32px] w-[32px] rounded-[16px] object-cover"
          />
        </a>
      </div>
    </header>
  );
}