import { Box,Text } from '@mantine/core';
import classes from './UserTable.module.css'

type UserTableItemProps = {};

const UserTableItem: React.FC<UserTableItemProps> = () => {
  return (
    <Box className={classes.card}>
        <Text>first_name</Text>
        <Text>last_name</Text>
        <Text>email</Text>
        <Text>date_of_birth</Text>
        <Text>company</Text>
        <Text>address</Text>
        <Box>Is active</Box>
        <Text>Notes</Text>
    </Box>
  )
}

export default UserTableItem