import { useUserDataContext } from "../../context/UsersDataContext";
import { Input } from '@mantine/core';

type FilterByFirstNameProps = {};

const FilterByFirstName: React.FC<FilterByFirstNameProps> = () => {
    const { jsonData, setChangedUserData, changedUserData } = useUserDataContext();

    const filterByFirstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredData = changedUserData.filter(user => user.profile.first_name.toLowerCase().includes(e.target.value.toLowerCase()));
        setChangedUserData(filteredData)
  }

  return (
    <Input placeholder="Name" onChange={filterByFirstNameHandler} />
  )
}

export default FilterByFirstName