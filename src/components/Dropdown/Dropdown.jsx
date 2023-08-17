const Dropdown = ({ onchange, selectedOption = '' }) => {
  const sortOnChange = e => {
    onchange(e);
  };
  return (
    <select className="sortBy" name="sort" id="sort" onChange={sortOnChange} value={selectedOption}>
      <option value="-1">Sort By</option>
      <option value="name">Name (Ascending)</option>
      <option value="-name">Name (Descending)</option>
      <option value="date">Date</option>
      <option value="rating">Rating</option>
    </select>
  );
};

export default Dropdown;
