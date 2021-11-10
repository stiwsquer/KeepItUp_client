export const HTTP_METHODS = {
  POST: 'POST',
  GET: 'GET',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};

export const ENDPOINTS = {
  REGISTER: 'register',
  LOGIN: 'login',
  LOGOUT: 'logout',
  VERIFY: 'verify',
  EXERCISE: 'exercise',
  WORKOUT: 'workout',
};

export const CREDENTIALS = {
  INCLUDE: 'include',
  NONE: null,
};

export const fetchData = async (
  valuesToSave,
  httpMethod,
  endpoint,
  credentials,
  name,
  page,
  limit,
) => {
  try {
    const nameString = name || '';
    const pageString = page ? '?page=' : '';
    const limitString = limit ? '&limit=' : '';
    const pageNumber = page || '';
    const limitNumber = limit || '';

    let res = await fetch(
      `http://localhost:3001/${endpoint}/${nameString}${pageString}${pageNumber}${limitString}${limitNumber}`,
      {
        method: `${httpMethod}`,
        headers: { 'Content-Type': 'application/json' },
        credentials: `${credentials}`,
        body: valuesToSave
          ? JSON.stringify({
              ...valuesToSave,
            })
          : null,
      },
    );

    res = httpMethod === HTTP_METHODS.POST ? res : await res.json();
    return res;
  } catch (err) {
    return console.error(err);
  }
};
