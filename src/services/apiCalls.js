export const fetchRegister = async (values) => {
  try {
    const res = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
      }),
    });
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchLogin = async (values) => {
  try {
    const res = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        ...values,
      }),
    });

    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchLogout = async () => {
  try {
    let res = await fetch('http://localhost:3001/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    res = await res.json();
    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchVerify = async () => {
  try {
    const res = await fetch('http://localhost:3001/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchExercises = async (name, page, limit) => {
  try {
    let res = await fetch(
      `http://localhost:3001/exercise/${name}?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      },
    );

    res = await res.json();
    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchSaveWorkout = async (values) => {
  try {
    const res = await fetch('http://localhost:3001/workout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        ...values,
      }),
    });
    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};
