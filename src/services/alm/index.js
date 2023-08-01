/**
 * getToken - get access token for alm
 */
const {
  ALM_CLIENT_ID, ALM_CLIENT_SECRET, ALM_TOKEN_URL, ALM_API_URL,
} = process.env;

export const getToken = async () => {
  const body = {
    client_id: ALM_CLIENT_ID,
    client_secret: ALM_CLIENT_SECRET,
    code: '',
  };
  const res = await fetch(`${ALM_TOKEN_URL}oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

export const getCatalogList = async (param) => {
  try {
    const res = await fetch(`${ALM_API_URL}catalogs?${new URLSearchParams({ ...param })}`, {
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: 'oauth db9129afdb6c4b870a24f2f68daee989',
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error({ err })
  }
};

export const getCoursesList = async (param) => {
  try {
    const res = await fetch(`${ALM_API_URL}learningObjects?${new URLSearchParams({ ...param })}`, {
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: 'oauth db9129afdb6c4b870a24f2f68daee989',
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error({ err })
  }
};
