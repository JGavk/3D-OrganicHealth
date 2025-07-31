import React, { useEffect, useState } from "react";
import { getQuestions, submitAnswer } from "../../services/path";
import Question3D from "../../modeling/lights/3DQuestions";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const userId = "mock-user-123";

  useEffect(() => {
    getQuestions().then((data) => {
      setQuestions(data);
      setCurrentIndex(0);
    });
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
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "black" }}>
      {currentQuestion ? (
        <Question3D question={currentQuestion} onSelect={handleAnswer} />
      ) : (
        <div style={{ textAlign: "center", color: "white", marginTop: "40vh" }}>
          <h1>Quiz finalizados</h1>
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
