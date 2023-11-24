import { SimpleGrid } from '@mantine/core';
import UserTableItem from './UserTableItem';
import classes from './UserTable.module.css';

type UserTableItemProps = {};

const UserTable: React.FC<UserTableItemProps> = () => {

  return (
    <SimpleGrid cols={5} spacing='md' className={classes.table}>    
        <UserTableItem />
    </SimpleGrid>
  )
}

export default UserTable