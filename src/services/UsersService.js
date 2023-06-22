export default {
  async login(payload) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};
