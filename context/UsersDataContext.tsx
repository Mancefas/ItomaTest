"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "../types/types";

type UserDataContext = {
  jsonData: User[];
  setJsonData: (data: User[]) => void;
  changedUserData: User[];
  setChangedUserData: (data: User[]) => void;
  paginatedData: User[];
  setPaginatedData: (data: User[]) => void;
  checked: boolean;
  setChecked: (data: boolean) => void;
};

export const UserDataContext = createContext<UserDataContext>(
  {} as UserDataContext,
);

export const UserDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [jsonData, setJsonData] = useState<User[]>([]);
  const [changedUserData, setChangedUserData] = useState<User[]>([]);
  const [paginatedData, setPaginatedData] = useState<User[]>([]);
  const [checked, setChecked] = useState(false);

  const UserDataContextStore = {
    jsonData,
    setJsonData,
    changedUserData,
    setChangedUserData,
    paginatedData,
    setPaginatedData,
    checked,
    setChecked,
  };

  return (
    <UserDataContext.Provider value={UserDataContextStore}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => useContext(UserDataContext);
