//1.creating context
import { createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+1 123456789";
  const name = "Navneet";

  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContextProvider;
