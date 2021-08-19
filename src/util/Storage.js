export const setUsername = (value) => {
  localStorage.setItem("user", JSON.stringify(value));
};

export const getUsername = () => {
  const storedValue = localStorage.getItem("user");

  if (storedValue) {
    return JSON.parse(storedValue);
  }

  return false;
};

export const clearUsername = () => {
  localStorage.removeItem("user");
};

export const addHistory = (value) => {
  const history = getHistory();

  if (history.length >= 10) {
    history.shift();
  }
  history.push(value);

  localStorage.setItem("history", JSON.stringify(history));
};

export const getHistory = () => {
  const storedValue = localStorage.getItem("history");

  if (storedValue) {
    return JSON.parse(storedValue);
  }

  return [];
};

export const clearHistory = () => {
  localStorage.removeItem("history");
};
