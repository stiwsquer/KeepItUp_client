export const fetchRegister = async (values) => {
  try {
    let res = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
      }),
    });
    res = await res.json();
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const register = async (values) => {
  const respone = await fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...values,
    }),
  });
  const content = await respone.json();
  console.log(content);
};
