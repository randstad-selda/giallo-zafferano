export default {
  async sendMessage(message) {
    try {
      const response = await fetch(process.env.REACT_APP_API_OPEN_AI_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        }),
      });
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      throw new Error("Qualcosa è andato storto");
    }
  },
};
