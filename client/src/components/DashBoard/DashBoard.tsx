import React from "react";
import MainPanel from "../MainPanel/MainPanel";
import classes from "./DashBoard.module.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import List from "../List/List";
ChartJS.register(...registerables);
const DashBoard = () => {
  const data = {
    labels: ["New Books", " Books Issued", "New Members", "Not Returned"],
    datasets: [
      {
        label: "Reports",
        data: [16, 5, 12, 6],
        fill: true,
        backgroundColor: "rgba(255,255,255,0.4)",
        borderColor: "#742774",
        responsive: true,
      },
    ],
  };
  return (
   <>
      <MainPanel />
      <div className={classes.main__report}>
        <Line
          data={data}
          height={250}
          width={250}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className={classes.main__list}>
        <List title="New Members" />
        <List title="New Books" />
      </div>
    </>
  );
};

export default DashBoard;
