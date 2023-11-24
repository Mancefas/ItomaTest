import { useUserDataContext } from "../../context/UsersDataContext";
import { Button } from "@mantine/core";

type SortByBirthDateProps = {};

const SortByBirthDate: React.FC<SortByBirthDateProps>  = () => {
    const { jsonData, setChangedUserData, changedUserData } = useUserDataContext();

     const SortByBirthDateHandler = () => {
        // copying data to get rerender
        const dataCopy = [...changedUserData];
        const sortedData = dataCopy.sort((a, b) => {
            if (a.profile.date_of_birth < b.profile.date_of_birth) {
                return -1;
              }
              if (a.profile.date_of_birth > b.profile.date_of_birth) {
                return 1;
              }
              return 0;
          })

        setChangedUserData(sortedData)
     }   

  return (
    <Button onClick={SortByBirthDateHandler}>Sort</Button>
  )
}

export default SortByBirthDate