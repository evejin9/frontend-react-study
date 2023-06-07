import { useNavigate } from "react-router-dom";

function NoMathchPage(props) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 64
      }}
    >
      <h1>404 Not Found</h1>
      <button onClick={() => { navigate('/'); }}>메인으로</button>
    </div>
  );
};

export default NoMathchPage;