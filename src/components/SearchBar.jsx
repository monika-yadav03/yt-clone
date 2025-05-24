import { InputGroup, Form, Button } from "react-bootstrap";
import { useState } from "react";

const SearchBar = ({setFinalSearch}) => {
  const [searchTerm, setSearchTerm]=useState("");
  // console.log(searchTerm,"===N");
  
  return (
    <div>
      <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Search... "
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />

        <Button
          variant="primary"
          onClick={() => {
            setFinalSearch(searchTerm);
            setSearchTerm("");
          }}
        >
          Search
        </Button>
      </InputGroup>
    </div>
  );
};
export default SearchBar;
