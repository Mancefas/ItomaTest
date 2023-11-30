import { useState } from "react";
import { Table, Stack } from "@mantine/core";
import { User } from "../../types/types";
import FilterByName from "../FilterByNameButton/FilterByNameButton";
import FilterByActiveButton from "../FilterByActiveButton/FilterByActiveButton";
import SortButton from "../SortButton/SortButton";
import RemoveButton from "../RemoveButton/RemoveButton";

import classes from "./TableOfData.module.css";

type UserTableItemProps = {
  elementFromOurData: User[];
};

export const TableOfData: React.FC<UserTableItemProps> = ({
  elementFromOurData,
}) => {

  const rows = elementFromOurData.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.profile.first_name}</Table.Td>
      <Table.Td>{element.profile.last_name}</Table.Td>
        <Table.Td>
          <a href={`mailto:${element.email}`}>{element.email}</a>
        </Table.Td>
      <Table.Td>{element.profile.date_of_birth}</Table.Td>
      <Table.Td>{element.profile.company}</Table.Td>
      <Table.Td>{element.profile.address}</Table.Td>
      <Table.Td>{element.is_active ? "✅" : "❌"}</Table.Td>
      <Table.Td>{element.note}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr className={classes.tableHead}>
          <Table.Th>
            <Stack>
              First name
              <SortButton sortBy="first_name" />
            </Stack>
          </Table.Th>

          <Table.Th>
            <Stack>
              Last name
              <SortButton sortBy="last_name" />
            </Stack>
          </Table.Th>

          <Table.Th>
              Email
          </Table.Th>
      
          <Table.Th>
            <Stack>
              Birthday
              <SortButton sortBy="birthday" />
            </Stack>
          </Table.Th>

          <Table.Th>
            Company
          </Table.Th>

          <Table.Th>
            Address
          </Table.Th>

          <Table.Th>
            <Stack>
              Active
              <FilterByActiveButton />
            </Stack>
          </Table.Th>

          <Table.Th>
              Notes
          </Table.Th>

        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
