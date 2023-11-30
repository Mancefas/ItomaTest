import { useUserDataContext } from "../../context/UsersDataContext";
import { Input } from "@mantine/core";

type filterField = "first_name" | "last_name";

type FilterByNameProps = {
  filterBy: filterField;
};

const FilterByName: React.FC<FilterByNameProps> = ({ filterBy }) => {
  const { jsonData, setChangedUserData } = useUserDataContext();
  const filteringName = filterBy === "first_name" ? "first_name" : "last_name";
  const inputPlaceholder =
    filterBy === "first_name" ? "First name" : "Last name";

  const FilterByNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = jsonData.filter((user) =>
      user.profile[filteringName]
        .toLowerCase()
        .includes(e.target.value.toLowerCase()),
    );
    setChangedUserData(filteredData);
  };

  return (
    <Input placeholder={inputPlaceholder} onChange={FilterByNameHandler} />
  );
};

export default FilterByName;
