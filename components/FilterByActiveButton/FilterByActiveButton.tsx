import { useUserDataContext } from "../../context/UsersDataContext";
import { Button } from "@mantine/core";

type FilterByActiveButtonProps = {};

const FilterByActiveButton: React.FC<FilterByActiveButtonProps>  = () => {
    const { setChangedUserData, changedUserData } = useUserDataContext();

     // sort (but its more filter) by is active or not

     const filterByActiveHandler = () => {
        setChangedUserData(changedUserData.filter((item) => item.is_active))
     }   

  return (
    <Button onClick={filterByActiveHandler}>FilterByActiveButton</Button>
  )
}

export default FilterByActiveButton