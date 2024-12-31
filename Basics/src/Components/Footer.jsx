//2.providing the context
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { phone, name } = useContext(AppContext);
  return (
    <div>
      <h1>Footer</h1>
      <h2>Phone:{phone}</h2>
      <h3>Name:{name}</h3>
    </div>
  );
};

export default Footer;
