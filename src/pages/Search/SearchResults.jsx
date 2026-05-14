import React from "react";

function SearchResults() {
    const [searchResults, setSearchResults] = React.useState([]);


    return(
        <>
        <input type="text" placeholder="Search for products..." value={searchResults} onChange={(e) => setSearchResults(e.target.value)} />
        <div className="search-results">
            {searchResults.length > 0 ? (
                searchResults.map((result) => (
                    <div key={result.id}>{result.name}</div>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
        </>
    )
}


export default SearchResults;