import type { PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebarMenu: () => void;
}

const SidebarContext = createContext<SidebarContextProps>(undefined!);

export function SidebarProvider({ children }: PropsWithChildren) {

  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebarMenu = () => {
    setIsSideBarOpen(!isSidebarOpen);
  }

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebarMenu,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarContext = () => useContext(SidebarContext);
