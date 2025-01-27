import React from "react";
import HeaderIcon from "./HeaderIcon";

const WishlistIcon: React.FC = () => {
  return (
    <HeaderIcon href="/wishlist" className="WishlistIcon">
      <i className="bi bi-heart"></i>
    </HeaderIcon>
  );
};

export default WishlistIcon;
