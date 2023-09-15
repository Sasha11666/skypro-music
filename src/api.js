class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthenticationError";
  }
}

export async function getTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function getSelectedTracks(id) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/selection/${id}`
  );

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function getFavTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token")).access
        }`,
      },
    }
  );

  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 401) {
    throw new AuthenticationError("bad token");
  }

  const data = await response.json();
  return data;
}

export async function addToFav(id) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token")).access
        }`,
      },
    }
  );
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 401) {
    throw new AuthenticationError("bad token");
  }

  const data = await response.json();
  return data;
}

export async function deleteFromFav(id) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token")).access
        }`,
      },
    }
  );
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 401) {
    throw new AuthenticationError("bad token");
  }

  const data = await response.json();
  return data;
}

export async function registerUser(email, password) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        username: `${email}`,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 400) {
    const data = await response.json();
    if (data.username) {
      throw new Error(`${data.username}`);
    } else {
      throw new Error(`${data.password}`);
    }
  }
  const data = await response.json();
  return data;
}

export async function loginUser(email, password) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/login/",
    {
      method: "POST",
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 401) {
    const data = await response.json();
    throw new Error(`${data.detail}`);
  }

  const data = await response.json();
  return data;
}

export async function getToken(email, password) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/",
    {
      method: "POST",
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );

  if (response.status === 500) {
    throw new Error("Сервер сломался");
  } else if (response.status === 401) {
    throw new AuthenticationError("bad token");
  }

  const data = await response.json();
  return data;
}

export async function updateToken(token) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/refresh/",
    {
      method: "POST",
      body: JSON.stringify({
        refresh: `${token}`,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
}
