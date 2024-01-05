const tokenize = (token) => `Bearer ${token}`;

export const typ = {
  setAll: "setAll",
  setAccessToken: "setAccessToken",
  clearAccessToken: "clearAccessToken",
  clearAll: "clearAll",
  setRefreshToken: "setRefreshToken",
  setUser: "setUser",
  updateUser: "updateUser",
};
export const emptyState = {
  access_token: null,
  refresh_token: null,
  user: null,
};
export const initialState = {
  access_token: globalThis?.localStorage?.getItem("access_token") || null,
  refresh_token: globalThis?.localStorage?.getItem("refresh_token") || null,

  user: globalThis?.localStorage?.getItem("user")
    ? JSON.parse(globalThis?.localStorage?.getItem("user"))
    : null,
};

function setLocalAccessToken(set = true, accessToken = null) {
  if (set) {
    return localStorage.setItem("access_token", tokenize(accessToken));
  }
  return localStorage.removeItem("access_token");
}

function setLocalRefreshToken(set = true, refreshToken = null) {
  if (set) {
    return localStorage.setItem("refresh_token", refreshToken);
  }
  return localStorage.removeItem("refresh_token");
}

function setLocalUser(set, userDict = null) {
  if (set) {
    return localStorage.setItem("user", JSON.stringify(userDict));
  }
  return localStorage.removeItem("user");
}

export const authReducer = (state, action) => {
  const newData = action.payload;

  switch (action.type) {
    case typ.clearTokens:
      console.log("removing token from clearAccessToken");
      setLocalAccessToken(false);
      setLocalRefreshToken(false);
      return { ...state, access_token: null, refresh_token: null };

    case typ.clearAll:
      console.log("removing tokens from clearAll");
      setLocalAccessToken(false);
      setLocalUser(false);
      setLocalRefreshToken(false);
      return { ...emptyState };

    case typ.setAccessToken:
      setLocalAccessToken(true, newData?.access);
      return { ...state, access_token: tokenize(newData?.access) };

    case typ.setAll:
      setLocalAccessToken(true, newData?.access);
      setLocalRefreshToken(true, newData?.refresh);
      setLocalUser(true, newData?.user);
      return {
        ...state,
        access_token: tokenize(newData?.access),
        refresh_token: newData?.refresh,
      };

    case typ.setUser:
      setLocalUser(true, newData?.user);
      return { ...state, user: newData?.user };

    case typ.updateUser:
      return { ...state, user: { ...state.user, ...newData?.user } };

    case typ.setRefreshToken:
      return { ...state, refresh_token: newData?.refresh };
    default:
      return state;
  }
};
