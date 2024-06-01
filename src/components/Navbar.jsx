import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div class="filter-search">

      <div class="search">
        <div class="search-icon">
          <i class="fa-solid fa-magnifying-glass" />
        </div>
        <input
          id="click"
          type=""
          placeholder="Search for a country..."
        />
      </div>

      <div class="filter">
        <select name="" id="">
          <option selected disabled hidden >Filter by region</option>
          <option >Africa</option>
          <option >Americas</option>
          <option >Asia</option>
          <option >Europe</option>
          <option >Oceania</option>
        </select>
      </div>

    </div>
  )
}

export default Navbar;