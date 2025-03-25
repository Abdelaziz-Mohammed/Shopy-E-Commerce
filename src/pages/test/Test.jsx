
import { useEffect, useState } from 'react';
import supabase from '../../supabaseclient';

function Test() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      let { data, error } = await supabase.from('users').select('*'); // Replace 'users' with your table name
      if (error) {console.error(error);}
      else {
        console.log(data);
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
        <h1>Test For Supabase</h1>
        <ul>
            {
                users.map(
                    user =>
                        <li key={user.id}>{user.name}</li>
                )
            }
        </ul>
    </div>
  )
}

export default Test
