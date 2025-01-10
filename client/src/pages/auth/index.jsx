import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

export default function AuthPage() {

  const [activeTab, setActiveTab] = useState("signin");

  const handlechange = (value) => {
    setActiveTab(value);
  }




  return (
    <div className="flex flex-col min-h-screen ">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-black-200">
        <Link to="/" className="flex items-center  justify-center">
          <GraduationCap className="h-8 w-auto" />
          <span className="font-extrabold text-2xl">NOW LMs</span>
        </Link>
      </header>

      <div className="flex items-center justify-center min-w-screen bg-black-200  ">
        <Tabs value={activeTab} defaultValue="signin" onValueChange={handlechange} className="w-full  max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Signin</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
            
          </TabsList>

          <TabsContent value="signin">
            <h1>Signin</h1>
          </TabsContent>
          <TabsContent value="signup">
            <h1>Signup</h1>
          </TabsContent>
        </Tabs>
      </div>

    </div>



  )
}
