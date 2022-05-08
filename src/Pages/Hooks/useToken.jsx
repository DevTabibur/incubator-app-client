import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log('user', user);
  useEffect(() => {
    const getToken = async () => {
      const email = user?.email;
      console.log('email', email);
      
      if (email) {
        const { data } = await axios.post("http://localhost:5000/signin", {
          email,
        });
        setToken(data.getToken);
        localStorage.setItem("token", data.getToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
