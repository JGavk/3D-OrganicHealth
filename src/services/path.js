import axios from "axios";

const API_BASE_URL = "https://organichealthbackend-production.up.railway.app"


export const getQuestions = async (limit = 5) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions`, {
      params: { limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};



export const submitAnswer = async ({ userId, questionId, selectedOption }) => {
  console.log("Enviando respuesta:", {
    user_id: userId,
    question_id: questionId,
    selected_option: selectedOption,
  });

  try {
    const res = await axios.post(`${API_BASE_URL}/submit-answer`, {
      user_id: userId,
      question_id: questionId,
      selected_option: selectedOption,
    });
    return res.data;
  } catch (err) {
    console.error("Error submitting answer", err);
    throw err;
  }
};


export const getLeaderboard = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/leaderboard`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el leaderboard:", error);
    throw error;
  }
};