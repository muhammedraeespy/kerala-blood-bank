import { useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
export default function App() {
  const [reviewData, setReviewData] = useState<Props[] | []>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://raw.githubusercontent.com/abjs/kerala-blood-bank/main/database.json"
      );
      try {
        const { data } = await response.json();
        setReviewData(data);
      } catch (error: any) {
        console.log(error);
        if (error.message === "Unexpected token < in JSON at position 0") {
          alert("Please check your internet connection and try again");
        }
      }
    }
    fetchData();
  }, []);
  console.log(reviewData);
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <AiOutlineSetting className="w-24 h-24 animate-spin-slow pb-5" />
      <div className="w-30 bg-gray-100 rounded-xl shadow-md ">
        <div className="p-5 text-center lowercase text-lg stroke-1 text-yellow-500">
          Web Site is under construction come back letter........
        </div>
      </div>
    </div>
  );
}

interface Props {
  name: string;
  phone: string;
  blood_group: "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";
  address: string;
  district: string;
  state: string;
  country: string;
}
