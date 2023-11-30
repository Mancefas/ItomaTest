import { Button } from "@mantine/core";

import { useUserDataContext } from "../../context/UsersDataContext";

type InitialDataButtonProps = {};

const InitialDataButton: React.FC<InitialDataButtonProps> = () => {
  const { jsonData, setChangedUserData } = useUserDataContext();

  return (<Button onClick={() => setChangedUserData(jsonData)}>Initial data</Button>)
};

export default InitialDataButton;
