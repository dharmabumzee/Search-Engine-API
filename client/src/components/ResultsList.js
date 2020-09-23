import "./ResultList.css";
import React from "react";

const ResultsList = ({ results = [] }) => {
  const extractUrl = /.*href="(.*)".*/; // .replace

  const extractContent = /<a[^>]*>.*<\/a>/gm; // .replace , ""

  const extractTitle = /<a [^>]+>([^<]+)<\/a>/; // .match

  return (
    <div className="results result-list">
      {results &&
        results.map((result, index) => {
          return (
            <a
              href={result.replace(extractUrl, "$1")}
              className="animate__animated animate__fadeIn search-results"
              key={index}
            >
              <li
                className="ui list item" // animate__animated animate__fadeIn
                dangerouslySetInnerHTML={{
                  __html: result,
                }}
              />
              {/* {result.match(extractTitle)[1]}
                <p className="content-content">
                  {result.replace(extractContent, "")}
                </p>
              </li> */}
            </a>
          );
        })}
    </div>
  );
};

export default ResultsList;
