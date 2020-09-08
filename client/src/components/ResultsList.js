import React from "react";

const ResultsList = ({ results }) => {
  return (
    <div className="results">
      {results.map((result, index) => {
        return (
          <li className="animate__animated animate__fadeIn ui list" key={index}>
            <a
              className="item"
              dangerouslySetInnerHTML={{ __html: result.Result }}
            />
          </li>
        );
      })}
    </div>
  );
};

export default ResultsList;
