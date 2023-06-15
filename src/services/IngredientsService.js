export default {
  async readAll() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/ingredients`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  async create(payload) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/ingredients`,
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
