import { useState } from "react";
import { useUserDataContext } from "../../context/UsersDataContext";
import { Button } from "@mantine/core";

type FilterByActiveButtonProps = {};

const FilterByActiveButton: React.FC<FilterByActiveButtonProps> = () => {
  const { jsonData, setChangedUserData } = useUserDataContext();
  const [filterActive, setFilterActive] = useState<boolean>(true);

  // sort (filter) by is active or not

  const filterByActiveHandler = () => {
    setChangedUserData(
      jsonData.filter((item) =>
        filterActive ? item.is_active : !item.is_active,
      ),
    );
    setFilterActive((currentState) => !currentState);
  };

  return (
    <Button onClick={filterByActiveHandler}>{`Filter ${
      filterActive ? "✅" : "❌"
    }`}</Button>
  );
};

export default FilterByActiveButton;
