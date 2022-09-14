import React from 'react'

const SearchBar = ({ data, setSearchFilter }) => {
  const handleSearch = (e) => {
    if (!e.target.value) return setSearchFilter(data)

    const result = data.filter(
      (item) =>
        item.origin_port_country.includes(e.target.value) ||
        item.origin_port_code.includes(e.target.value),
    )

    setSearchFilter(result)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search by shipment ID,Destination"
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchBar
