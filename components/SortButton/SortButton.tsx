import { useState } from "react";
import { useUserDataContext } from "../../context/UsersDataContext";
import { Button } from "@mantine/core";

type SortField = "birthday" | "first_name" | "last_name";

type SortButtonProps = {
  sortBy: SortField;
};

const SortButton: React.FC<SortButtonProps> = ({ sortBy }) => {
  const { jsonData, setChangedUserData } = useUserDataContext();
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const sortName =
    sortBy === "birthday"
      ? "date_of_birth"
      : sortBy === "first_name"
      ? "first_name"
      : "last_name";

  const SortButtonHandler = () => {
    // copying data to get rerender
    const dataCopy = [...jsonData];
    const sortedData = dataCopy.sort((a, b) => {

      const sortValue = sortAsc ? -1 : 1;

      if (a.profile[sortName] < b.profile[sortName]) {
        return sortValue;
      } else if (a.profile[sortName] > b.profile[sortName]) {
        // does not sort correctly if only sortValue
        return -sortValue;
      } else {
        return 0;
      }
    });

    setChangedUserData(sortedData);
    setSortAsc(currentValue => !currentValue);
  };

  return (
    <Button onClick={SortButtonHandler}>
      Sort {sortAsc ? "🔽" : "🔼"}
    </Button>
  );
};

export default SortButton;