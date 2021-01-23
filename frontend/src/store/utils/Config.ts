export const config = {
  headers: { "Content-Type": "Application/json" },
};

export const authConfig = (token: string) => {
  return {
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};
