const URL = "https://pay-up-api-fjwf.vercel.app/api/v1";
const DEV_URL = "http://localhost:3001/api/v1";
DEV_URL;

export async function login(email, password) {
  const res = await fetch(`${URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
}

export async function signUp(formData) {
  const res = await fetch(
    "https://pay-up-api-fjwf.vercel.app/api/v1/users/signUp",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
}

export async function verifyOtp(email, otp) {
  const res = await fetch(`${URL}/users/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otp }),
  });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
}

// To check if a user is successfully authenticated
export async function verifyToken(token) {
  console.log("token", token);
  const res = await fetch(`${URL}/users/verify-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
}

export async function authorise() {}
