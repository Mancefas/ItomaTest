import { useUserDataContext } from "../../context/UsersDataContext";
import { Button } from "@mantine/core";

type SortField = "birthday" | "first_name" | "last_name";

type SortButtonProps = {
  sortBy: SortField;
};

const SortButton: React.FC<SortButtonProps> = ({ sortBy }) => {
  const { jsonData, setChangedUserData } = useUserDataContext();
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
      if (a.profile[sortName] < b.profile[sortName]) {
        return -1;
      }
      if (a.profile[sortName] > b.profile[sortName]) {
        return 1;
      }
      return 0;
    });

    setChangedUserData(sortedData);
  };

  return <Button onClick={SortButtonHandler}>Sort</Button>;
};

export default SortButton;
