import { useState } from "react";
import { Card, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <Sidebar />
        <Card className="w-80 p-4">
          <CardTitle className="text-center">
            Welcome to My React Template
          </CardTitle>
          <Button
            className="cursor-pointer"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Home;
