const identityUrl = "https://localhost:5001/identity";

export const IdentityProvider = {
  zlogin: async (data) => {
    try {
      await fetch(`${identityUrl}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
};
