import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect immediately when the app loads
    window.location.href = "https://boluadetifa.notion.site/Bolu-Software-Engineer-2378e468621e805fb21ecef1037f4db5";
  }, []);

  // Optional: Show a brief loading message before redirect
  return (
    <div className="flex items-center justify-center min-h-screen bg-black App">
      <div className="text-center text-white">
        <p>Redirecting...</p>
      </div>
    </div>
  );
}

export default App;