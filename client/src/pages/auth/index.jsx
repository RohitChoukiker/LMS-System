import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import { motion } from "framer-motion";
export default function AuthPage() {

  const [activeTab, setActiveTab] = useState("signin");

  const handlechange = (value) => {
    setActiveTab(value);
  }




  return (
    <div className="flex flex-col min-h-screen ">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-black-200">
        <Link to="/" className="flex items-center  justify-center">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <GraduationCap className="h-8 w-auto" />
          </motion.div>
          <span className="font-extrabold text-2xl">NOW LMs</span>
        </Link>
      </header>

      <div className="flex justify-center items-center flex-1 bg-gradient-to-r from-blue-50 to-indigo-50">
        <Tabs value={activeTab} defaultValue="signin" onValueChange={handlechange} className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="signin">Signin</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>

          <TabsContent className=" pt-2 " value="signin">
            <Signin />
          </TabsContent>
          <TabsContent className="w-full p-4" value="signup">
            <Signup />
          </TabsContent>
        </Tabs>
      </div>

    </div>



  )
}
