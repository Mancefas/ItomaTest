import { useEffect, useState } from "react";
import { Checkbox } from "@mantine/core";

import { useUserDataContext } from "../../context/UsersDataContext";

type FilterByActiveCheckboxProps = {};

const FilterByActiveCheckbox: React.FC<FilterByActiveCheckboxProps> = () => {
  const { jsonData, setChangedUserData, checked, setChecked } = useUserDataContext();

  const filterByActiveHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.currentTarget.checked) {
      setChangedUserData(jsonData.filter((item) => item.is_active));
    } else {
      setChangedUserData(jsonData);
    }
    setChecked(event.currentTarget.checked);
  };
  
  return (
    <Checkbox 
      checked={checked} 
      onChange={filterByActiveHandler} 
      m='auto'/>
  );

};

export default FilterByActiveCheckbox;
