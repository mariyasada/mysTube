import { createContext,useState,useContext,useEffect } from "react";
import axios from "axios";


const CategoryContext =createContext();
const CategoryProvider =({children})=>{
    const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        console.log(data);
        setCategories(data.categories);
      } catch {
        console.error("something went wrong");
      }
    })();
  });
    return <CategoryContext.Provider value={{categories, setCategories}}>{children}</CategoryContext.Provider>
}
const useCategory=()=>useContext(CategoryContext);

export {CategoryProvider,useCategory}