"use client";

import { createContext, useContext, useState } from "react";

type IdContext = {
  session: number | null;
  setSession: React.Dispatch<React.SetStateAction<number | null>>;
};

export const IDContext = createContext<IdContext | null>(null);

export default function IDContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const [id, setID] = useState(0);
  const [session, setSession] = useState<number | null>(null);

  return (
    <IDContext.Provider
      value={{
        session,
        setSession,
      }}
    >
      {children}
    </IDContext.Provider>
  );
}

export function useIDContext() {
  //hook to check if the context exists within scope
  const idContext = useContext(IDContext);
  if (!idContext) {
    throw new Error("useIDContext must be used within a IDContextProvider");
  }
  return idContext;
}
