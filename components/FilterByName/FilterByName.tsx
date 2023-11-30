import { useUserDataContext } from "../../context/UsersDataContext";
import { Input } from "@mantine/core";

type FilterByNameProps = {};

const FilterByName: React.FC<FilterByNameProps> = () => {
  const { jsonData, setChangedUserData } = useUserDataContext();

  const FilterByNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = jsonData.filter((user) =>
    user.profile.first_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
    user.profile.last_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setChangedUserData(filteredData);
  };

  return (
    <Input 
    placeholder="Filter first or last name" 
    onChange={FilterByNameHandler} 
    variant="filled" size="md" radius="md" 
    />
  );
};

export default FilterByName;
