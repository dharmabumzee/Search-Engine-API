import React from "react";

const ResultsList = ({ results }) => {
  return (
    <div className="results">
      {results.map((result, index) => {
        if (result.FirstURL)
          return (
            <a href={result.FirstURL} className="search-results">
              <li
                className="animate__animated animate__fadeIn ui list item"
                key={index}
                dangerouslySetInnerHTML={{ __html: result.Result }}
              />
            </a>
          );
      })}
    </div>
  );
};

export default ResultsList;
