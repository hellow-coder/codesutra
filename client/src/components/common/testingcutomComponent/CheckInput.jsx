
import React, { useState } from "react";
import { Search, Eye } from "lucide-react";
import Input from "../Input";
import Loader from "../Loader";

const CheckInput = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


 
  return (
    <div className="p-8  flex flex-col gap-6 w-full max-w-sm mx-auto">

      <button onClick={()=>handleClick()} >Show Loader </button>
      
      <Input
        label="Search"
        placeholder="Search something..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        icon={<Search size={18} />}
        variant="filled"
        fullWidth
      />

      <Input
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        rightIcon={
          <Eye size={18} onClick={() => setShowPassword(!showPassword)} />
        }
        helperText="Minimum 8 characters"
        variant="outlined"
        size="md"
        fullWidth
      />

      <Input
        label="Disabled Input"
        placeholder="Can't type here"
        disabled
        variant="standard"
        size="sm"
      />

      <Input
        label="Error Example"
        placeholder="Type something wrong"
        error="Invalid value!"
        fullWidth
        variant="outlined"
      />
      <Input
        label="Error Example"
        placeholder="Type something wrong"
        error="Invalid value!"
        fullWidth
        variant="glass"
      />
    </div>
  );
};

export default CheckInput;
