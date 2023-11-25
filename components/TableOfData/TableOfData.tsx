import { useState } from "react";
import { Table, Stack } from "@mantine/core";
import { User } from "../../types/types";
import FilterByActiveButton from "../FilterByActiveButton/FilterByActiveButton";
import SortByBirthDate from "../SortByBirthDate/SortByBirthDate";
import SortByFirstName from "../SortByFirstName/SortByFirstName";
import SortByLastName from "../SortByLastName/SortByLastName";
import FilterByFirstName from "../FilterByFirstName/FilterByFirstName";
import FilterByLastName from "../FilterByLastName/FilterByLastName";

import classes from "./TableOfData.module.css";
import RemoveButton from "../RemoveButton/RemoveButton";

type UserTableItemProps = {
  elementFromOurData: User[];
};

export const TableOfData: React.FC<UserTableItemProps> = ({
  elementFromOurData,
}) => {
  const [showingEmail, setShowingEmail] = useState<boolean>(true);
  const [showingCompany, setShowingCompany] = useState<boolean>(true);
  const [showingAddress, setShowingAddress] = useState<boolean>(true);
  const [showingNotes, setShowingNotes] = useState<boolean>(true);

  const rows = elementFromOurData.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.profile.first_name}</Table.Td>
      <Table.Td>{element.profile.last_name}</Table.Td>
      {showingEmail && (
        <Table.Td>
          <a href="mailto: {element.email }">{element.email}</a>
        </Table.Td>
      )}
      <Table.Td>{element.profile.date_of_birth}</Table.Td>
      {showingCompany && <Table.Td>{element.profile.company}</Table.Td>}
      {showingAddress && <Table.Td>{element.profile.address}</Table.Td>}
      <Table.Td>{element.is_active ? "✅" : "❌"}</Table.Td>
      {showingNotes && <Table.Td>{element.note}</Table.Td>}
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr className={classes.tableHead}>
          <Table.Th>
            <Stack>
              First name
              <SortByFirstName />
              <FilterByFirstName />
            </Stack>
          </Table.Th>

          <Table.Th>
            <Stack>
              Last name
              <SortByLastName />
              <FilterByLastName />
            </Stack>
          </Table.Th>

          {showingEmail && (
            <Table.Th>
              <Stack>
                Email
                <RemoveButton setState={setShowingEmail} />
              </Stack>
            </Table.Th>
          )}

          <Table.Th>
            <Stack>
              Birthday
              <SortByBirthDate />
            </Stack>
          </Table.Th>

          {showingCompany && (
            <Table.Th>
              <Stack>
                Company
                <RemoveButton setState={setShowingCompany} />
              </Stack>
            </Table.Th>
          )}

          {showingAddress && (
            <Table.Th>
              <Stack>
                Address
                <RemoveButton setState={setShowingAddress} />
              </Stack>
            </Table.Th>
          )}

          <Table.Th>
            <Stack>
              Active
              <FilterByActiveButton />
            </Stack>
          </Table.Th>

          {showingNotes && (
            <Table.Th>
              <Stack>
                Notes
                <RemoveButton setState={setShowingNotes} />
              </Stack>
            </Table.Th>
          )}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
