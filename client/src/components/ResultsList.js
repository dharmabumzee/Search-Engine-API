import React from "react";

const ResultsList = ({ results }) => {
  const extractUrl = /.*href="(.*)".*/; // .replace

  const extractContent = /<a[^>]*>.*<\/a>/gm; // .replace , ""

  const extractTitle = /<a [^>]+>([^<]+)<\/a>/; // .match

  return (
    <div className="results">
      {results &&
        results.map((result, index) => {
          return (
            <a
              href={result.replace(extractUrl, "$1")}
              className="search-results"
              key={index}
            >
              <li className="animate__animated animate__fadeIn ui list item">
                {result.match(extractTitle)[1]}
              </li>
            </a>
          );
        })}
    </div>
  );
};

export default ResultsList;
