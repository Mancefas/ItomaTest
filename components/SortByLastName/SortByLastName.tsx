import { useUserDataContext } from "../../context/UsersDataContext";
import { Button } from "@mantine/core";

type SortByLastNameProps = {};

const SortByLastName: React.FC<SortByLastNameProps> = () => {
  const { jsonData, setChangedUserData } = useUserDataContext();

  const sortByLastNameHandler = () => {
    // copying data to get rerender
    const dataCopy = [...jsonData];

    const sortedData = dataCopy.sort((a, b) => {
      if (a.profile.last_name < b.profile.last_name) {
        return -1;
      }
      if (a.profile.last_name > b.profile.last_name) {
        return 1;
      }
      return 0;
    });

    setChangedUserData(sortedData);
  };

  return <Button onClick={sortByLastNameHandler}>Sort</Button>;
};

export default SortByLastName;
