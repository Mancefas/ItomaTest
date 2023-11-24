import { useUserDataContext } from "../../context/UsersDataContext";
import { Button } from "@mantine/core";

type SortByFirstNameProps = {};

const SortByFirstName: React.FC<SortByFirstNameProps>  = () => {
    const { jsonData, setChangedUserData, changedUserData } = useUserDataContext();

     const sortByFirstNameHandler = () => {
        // copying data to get rerender
        const dataCopy = [...changedUserData];
        const sortedData = dataCopy.sort((a, b) => {
            if (a.profile.first_name < b.profile.first_name) {
              return -1;
            }
            if (a.profile.first_name > b.profile.first_name) {
              return 1;
            }
            return 0;
          })

        setChangedUserData(sortedData)
     }   

  return (
    <Button onClick={sortByFirstNameHandler}>Sort</Button>
  )
}

export default SortByFirstName;