import React from "react";
import { Stack } from "@mui/system";
import { categories } from "../utils/constants";





const SideBar = ({selectedCategory,setselectedCategory}) => {
   return (
      <Stack
         direction="row"
         sx={{
            flexDirection: { md: "column" },
            height: { sx: "auto", md: "95%" },
            overflowY: "auto",
         }}
      >
         {categories.map((category) => (
            <button
               className="category-btn"
               onClick={()=>{setselectedCategory(category.name)}}
               style={{
                  background: category.name === selectedCategory && "#fc1503",
                  color: "#fff",
               }}
               key={category.name}
            >
               <span
                  style={{
                     marginRight: "10px",
                     color:
                        category.name === selectedCategory ? "#fff" : "#fc1503",
                  }}
               >
                  {category.icon}
               </span>

               <span
                  style={{
                     opacity: category.name === selectedCategory ? "1" : "0.7",
                  }}
               >
                  {category.name}
               </span>
            </button>
         ))}
      </Stack>
   );
};

export default SideBar;
