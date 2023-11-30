import { Button } from "@mantine/core";

import { useUserDataContext } from "../../context/UsersDataContext";

type InitialDataButtonProps = {};

const InitialDataButton: React.FC<InitialDataButtonProps> = () => {
  const { jsonData, setChangedUserData, setChecked } = useUserDataContext();
  
  const checkHandler = () => {
    setChecked(false)
    setChangedUserData(jsonData)
  };

  return (<Button color="violet" onClick={checkHandler}>Initial data</Button>)
};

export default InitialDataButton;
