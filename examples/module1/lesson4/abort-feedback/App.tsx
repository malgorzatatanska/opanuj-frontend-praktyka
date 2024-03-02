import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);

  const fetchWithTimeout = (url: string, timeout: number) => {
    return Promise.race([
      fetch(url),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), timeout)
      )
    ]);
  };

  const fetchData = (timeout: number) => {

    fetchWithTimeout(API_URL, timeout)
      .then((res: any) => res.json() as Promise<{ users: User[] }>)
      .then(({ users }) => {
        setUsers(users);
        setError(false);
      })
      .catch((err: unknown) => {
        console.log(err)
        if(err instanceof Error && err.message === 'Timeout'){
          console.log('Timeout error');
        }
        setError(true);
      })
  }

  useEffect(() => {
    fetchData(5000);
  }, []);

  const handleRefreshData = () => {
    setError(false);
    fetchData(15000);
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          {error && (  <p className="mr-2">
            Sorry, there seems to be connectivity issues...
            <button onClick={handleRefreshData} className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4">
            Try again
          </button>
          </p>)}
      
        </div>
      </div>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
