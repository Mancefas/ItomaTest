import { useState } from "react";
import { Checkbox } from "@mantine/core";

import { useUserDataContext } from "../../context/UsersDataContext";

type FilterByActiveButtonProps = {};

const FilterByActiveButton: React.FC<FilterByActiveButtonProps> = () => {
  const { jsonData, setChangedUserData } = useUserDataContext();

  const filterByActiveHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.currentTarget.checked) {
      setChangedUserData(jsonData.filter((item) => item.is_active));
    } else {
      setChangedUserData(jsonData);
    }
    setChecked(event.currentTarget.checked);
  };
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox 
      checked={checked} 
      onChange={filterByActiveHandler} 
      m='auto'/>
  );

};

export default FilterByActiveButton;
