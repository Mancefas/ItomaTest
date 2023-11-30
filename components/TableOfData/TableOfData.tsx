import { useState } from "react";
import { Table, Stack, Flex } from "@mantine/core";

import FilterByActiveButton from "../FilterByActiveButton/FilterByActiveButton";
import SortButton from "../SortButton/SortButton";
import RemoveButton from "../RemoveButton/RemoveButton";

import classes from "./TableOfData.module.css";
import { User } from "../../types/types";

type UserTableItemProps = {
  elementFromOurData: User[];
};

export const TableOfData: React.FC<UserTableItemProps> = ({
  elementFromOurData,
}) => {
  const [showFNameColumn, setShowFNameColumn] = useState<boolean>(true);
  const [showLNameColumn, setShowLNameColumn] = useState<boolean>(true);
  const [showBDayColumn, setShowBDayColumn] = useState<boolean>(true);
  const [showActiveColumn, setShowActiveColumn] = useState<boolean>(true);


  const rows = elementFromOurData.map((element) => (
    <Table.Tr key={element.id}>
      {showFNameColumn && <Table.Td>{element.profile.first_name}</Table.Td>}
      {showLNameColumn && <Table.Td>{element.profile.last_name}</Table.Td>}
      <Table.Td>
        <a href={`mailto:${element.email}`}>{element.email}</a>
      </Table.Td>
      {showBDayColumn && <Table.Td>{element.profile.date_of_birth}</Table.Td>}
      <Table.Td>{element.profile.company}</Table.Td>
      <Table.Td>{element.profile.address}</Table.Td>
      {showActiveColumn && <Table.Td ta='center'>{element.is_active ? "✅" : "❌"}</Table.Td>}
      <Table.Td>{element.note}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr className={classes.tableHead}>

          { showFNameColumn && <Table.Th>
            <Stack>
              First name
              <Flex>
                <SortButton sortBy="first_name" />
                <RemoveButton setState={setShowFNameColumn} />
              </Flex>
            </Stack>
          </Table.Th>}

         {showLNameColumn && <Table.Th>
            <Stack>
              Last name
              <Flex>
                <SortButton sortBy="last_name" />
                <RemoveButton setState={setShowLNameColumn} />
              </Flex>
            </Stack>
          </Table.Th>}

          <Table.Th>
              Email
          </Table.Th>
      
          {showBDayColumn && <Table.Th>
            <Stack>
              Birthday
              <Flex>
                <SortButton sortBy="birthday" />
                <RemoveButton setState={setShowBDayColumn} />
              </Flex>
            </Stack>
          </Table.Th>}

          <Table.Th>
            Company
          </Table.Th>

          <Table.Th>
            Address
          </Table.Th>

          {showActiveColumn && <Table.Th>
            <Stack>
              Active
              <Flex>
                <FilterByActiveButton />
                <RemoveButton setState={setShowActiveColumn} />
              </Flex>
            </Stack>
          </Table.Th>}

          <Table.Th>
              Notes
          </Table.Th>

        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
