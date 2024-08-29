import { Children, createContext, useState } from "react";

const Mycontext = createContext();

const ContextProvider = ({ children }) => {
  const [isLogged, setLogged] = useState(false);

  return (
    <Mycontext.Provider value={{ isLogged, setLogged }}>
      {children}
    </Mycontext.Provider>
  );
};

export { Mycontext, ContextProvider };
