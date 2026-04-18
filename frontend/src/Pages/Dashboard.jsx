import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl">Welcome </h1>

      <button
        onClick={() => navigate("/interview")}
        className="bg-green-500 text-white px-6 py-2 rounded"
      >
        Start Interview
      </button>
        <button
  onClick={() => {
    localStorage.removeItem("token");
    navigate("/login");
  }}
>
  Logout
</button>
    </div>
  );
};

export default Dashboard;