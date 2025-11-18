import { createContext, useState } from "react";

export const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <PortfolioContext.Provider value={{ open, setOpen }}>
      {children}
    </PortfolioContext.Provider>
  );
}
