import { Button } from "@mantine/core";

type FilterByLastNameProps = {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const RemoveButton: React.FC<FilterByLastNameProps> = ({ setState }) => {
  return (
    <Button onClick={() => setState(false)} variant="transparent">
      ⛔
    </Button>
  );
};

export default RemoveButton;
