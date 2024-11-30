/* eslint-disable react/prop-types */
import {  Stack } from "@mui/material";
import { categories } from "../utils/constants";



const Sidebar = (props) => {
  const {selectedCategory, setSelectedCategory} = props;

  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { xs: 'row',sm:'row',md:'column'}
      }}
    >
      {categories.map((category) => (
        <button
          onClick={()=>{setSelectedCategory(category.name)}}
          className="category-btn"
          key={category.name}
          style={{ color: "white", margin: '6px 2px',
            background: category.name === selectedCategory && '#FC1503'
          }}
        >
          <span style={{ paddingRight: 10, color: category.name === selectedCategory ? 'white' : 'red',
            opacity: category.name === selectedCategory ? 1 : 0.8
          }}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
