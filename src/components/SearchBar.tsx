import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Handle Submit");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("search");
    console.log(searchTerm);
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 }
      }}>
      <input className="search-bar" placeholder="Search" name="search" />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
