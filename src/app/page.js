import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn } from 'lucide-react';
// import Login from "./components/common/Login";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Login /> */}
      <div className="flex gap-2">


        <Input placeholder="Enter the Text" />
        <Button variant="outline">
          <LogIn className="mr-2 h-4 w-4" />Login
        </Button>
      </div>


    </main>
  );
}
