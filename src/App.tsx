import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

const RemoteCard = React.lazy(() => import("remote/Card"));
const Button = React.lazy(() => import("remote/Button"));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <Suspense fallback={<div>Loading Card...</div>}>
      <div className="flex flex-col gap-4">
        <RemoteCard title="Shared Component">
          This card is being loaded from the remote micro-frontend!
          <br />
          Demonstration of Module Federation working. 🚀
        </RemoteCard>
        <Button>Click me</Button>
      </div>
    </Suspense>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
