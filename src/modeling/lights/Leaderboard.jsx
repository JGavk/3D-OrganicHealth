import { useEffect, useState } from "react";
import { getLeaderboard } from "../../services/path";

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getLeaderboard().then(setData).catch(console.error);
  }, []);

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h2>Ranking de Usuarios</h2>
      <table style={{ width: "100%", color: "white", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Correctas</th>
            <th>Totales</th>
            <th>Precisión (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, idx) => (
            <tr key={idx}>
              <td>{user._id}</td>
              <td>{user.correct_answers}</td>
              <td>{user.total_answers}</td>
              <td>{user.accuracy.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;