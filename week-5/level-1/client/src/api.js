const baseUrl = "http://localhost:3000";

export const signIn = async (credentials) => {
  try {
    const response = await fetch(`${baseUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    alert("Signing in");
    return data;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const signUp = async (userData) => {
  try {
    const response = await fetch(`${baseUrl}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    alert("Signing up");
    return data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await fetch(`${baseUrl}/user/logout`, {
      method: "POST",
      credentials: "include",
    });
    if (response.ok) {
      console.log("Logged out successfully");
    } else {
      throw new Error("Logout failed");
    }
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export const getUserData = async () => {
  try {
    const response = await fetch(`${baseUrl}/user/profile`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting user data:", error);
    throw error;
  }
};
