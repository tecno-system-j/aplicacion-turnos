
export const login = async (username, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.role);
    return data;
  } else {
    throw new Error(data.message);
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};

export const isAuthenticated = () => !!localStorage.getItem('token');
export const isAdmin = () => localStorage.getItem('role') === 'admin';
