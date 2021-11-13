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
  CLIENT: 'client',
  CALENDAR: 'calendar',
};

export const CREDENTIALS = {
  INCLUDE: 'include',
  SAME_ORIGIN: 'same-origin',
  OMIT: 'omit',
};

const fetchRefreshToken = async () => {
  try {
    const res = await fetch(`http://localhost:3001/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    console.log('REFRESHING THE ACCESS TOKEN');
    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchData = async (
  valuesToSave,
  httpMethod,
  endpoint,
  credentials,
  name,
  page,
  limit,
  deleteCoach,
) => {
  if (endpoint !== ENDPOINTS.LOGIN && endpoint !== ENDPOINTS.REGISTER)
    fetchRefreshToken();

  try {
    const nameString = name || '';
    const pageString = page ? '?page=' : '';
    const limitString = limit ? '&limit=' : '';
    const pageValue = page || '';
    const limitValue = limit || '';
    const deleteCoachString = deleteCoach ? '?deleteCoach=' : '';
    const deleteCoachValue = deleteCoach || '';

    let res = await fetch(
      `http://localhost:3001/${endpoint}/${nameString}${pageString}${pageValue}${limitString}${limitValue}${deleteCoachString}${deleteCoachValue}`,
      {
        method: `${httpMethod}`,
        headers: { 'Content-Type': 'application/json' },
        credentials: credentials ? `${credentials}` : CREDENTIALS.OMIT,
        body: valuesToSave
          ? JSON.stringify({
              ...valuesToSave,
            })
          : null,
      },
    );
    if (
      httpMethod === HTTP_METHODS.POST ||
      httpMethod === HTTP_METHODS.PATCH ||
      httpMethod === HTTP_METHODS.PUT
    ) {
      return res;
    }
    res = await res.json();
    return res;
  } catch (err) {
    return console.error(err);
  }
};
