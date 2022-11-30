/** @format */

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import useAlumniAPI from "../../store/api/alumni";

const AlumniGrafik = () => {
  // store
  const { setChartAlumni } = useAlumniAPI();
  // apexcharts
  const [options, setOptions] = useState("");
  const [series, setSeries] = useState("");
  const [dataSeries, setDataSeries] = useState([]);

  const showGrafik = async () => {
    const categories = [];
    const data = [];
    const dtAlumni = await setChartAlumni();
    dtAlumni.data.forEach((el) => {
      categories.push(el.nama);
      data.push(el.jmlh);
    });
    setDataSeries(categories);
    // return;
    setOptions({
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: ["#eb4034", "#bfde12", "#3bde12", "#12dec6"],
      plotOptions: {
        bar: {
          columnWidth: "90%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories,
        labels: {
          style: {
            colors: [""],
            fontSize: "12px",
          },
        },
      },
    });
    setSeries([
      {
        name: "Jumlah",
        data,
      },
    ]);
  };

  // effect
  useEffect(() => {
    showGrafik();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center text-bold">
          Grafik Berdasarkan Program Studi
        </h2>
      </div>
      <div>
        {dataSeries.length > 0 && (
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="500"
          />
        )}
      </div>
    </div>
  );
};

export default AlumniGrafik;
