import React from "react";

function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {data[0] &&
            columns.map((heading) => {
              if (
                heading !== "id" &&
                heading !== "userInfo" &&
                heading !== "createdAt" &&
                heading !== "updatedAt"
              ) {
                return <th>{heading}</th>;
              }
            })}
        </tr>
      </thead>
      <tbody>
        {console.log(data)}
        {data.map((row) => (
          <tr>
            {columns.map((column) => {
              if (
                column !== "id" &&
                column !== "userInfo" &&
                column !== "createdAt" &&
                column !== "updatedAt"
              ) {
                return <td>{row[column]}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Datatable;
