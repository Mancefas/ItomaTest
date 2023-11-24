import { useUserDataContext } from "../../context/UsersDataContext";
import { Input } from '@mantine/core';

type FilterByLastNameProps = {};

const FilterByLastName: React.FC<FilterByLastNameProps> = () => {
    const { jsonData, setChangedUserData, changedUserData } = useUserDataContext();

    const FilterByLastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredData = changedUserData.filter(user => user.profile.last_name.toLowerCase().includes(e.target.value.toLowerCase()));
        setChangedUserData(filteredData)
  }

  return (
    <Input placeholder="Last name" onChange={FilterByLastNameHandler} />
  )
}

export default FilterByLastName