import React, { useEffect, useState } from "react";
import { getQuestions, submitAnswer } from "../../services/path";
import Question3D from "../../modeling/lights/3DQuestions";
import { auth } from "../../firebase";
import Leaderboard from "../../modeling/lights/Leaderboard";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getQuestions().then((data) => {
      setQuestions(data);
      setCurrentIndex(0);
    });
  }, []);

  useEffect(() => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    setUserId(currentUser.uid);
  } else {
    console.warn("Usuario no autenticado");
  }
  }, []);

  const handleAnswer = async (selectedOption) => {
    const currentQuestion = questions[currentIndex];
    try {
      await submitAnswer({
        userId,
        questionId: currentQuestion._id,
        selectedOption,
      });

      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 1000);
    } catch (error) {
      console.error("Error al enviar la respuesta:", error);
    }
  };

  const restartQuiz = () => {
    getQuestions().then((data) => {
      setQuestions(data);
      setCurrentIndex(0);
    });
  };

  const currentQuestion = questions[currentIndex];

  return (
   <div style={{ height: "100vh", width: "100vw", backgroundColor: "black", position: "relative" }}>
    {currentQuestion ? (
      <>
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "20px",
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
            zIndex: 1000,
          }}
        >
          Pregunta {currentIndex } / {questions.length}
        </div>

        <Question3D question={currentQuestion} onSelect={handleAnswer} />
      </>
    ) : (
    <div style={{ textAlign: "center", color: "white", marginTop: "40px" }}>
      <h1>Quiz finalizado</h1>

      <div style={{ margin: "2rem auto", width: "80%", backgroundColor: "#222", borderRadius: "12px", padding: "1rem" }}>
        <Leaderboard />
      </div>

      <button
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
        }}
        onClick={restartQuiz}
      >
        Reintentar Quiz
      </button>
    </div>
    )}
  </div>
  );
}

export default Quiz;
