const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const tiger = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  console.log(restOptions);

  let response = await fetch(url, restOptions);

  if (response.ok) {
    // console.log(response.json());
    response.data = await response.json();
  }

  // console.log(response);
  return response;
};

//*----------------------------------------------------------------------------

tiger.get = async (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = async (url, body, options) => {
  return tiger({
    method: "GET",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

// tiger.post(
//   "https://www.naver.com",
//   { name: tiger },
//   { mode: "cors", headers: {} }
// );

tiger.put = async (url, body, options) => {
  return tiger({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

tiger.delete = async (url, options) => {
  return tiger({
    method: "GET",
    url,
    ...options,
  });
};
