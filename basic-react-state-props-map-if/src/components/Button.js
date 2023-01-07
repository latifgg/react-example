import React, { useState } from "react";

const Button = () => {
  const [isLogin, setIsLogin] = useState(false);
  const HandleClick = () => {
    // setIsLogin((prevState) => !prevState);
    setIsLogin(!isLogin)
};
  return (
    <>
      <button onClick={HandleClick}>{isLogin ? "login" : "logout"}</button>
      <p>{isLogin ? "Giris yapmak icin tiklayin" : "giris yapildi"}</p>
    </>
  );
};

export default Button;
