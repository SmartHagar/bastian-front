/** @format */

import moment from "moment";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import useBukuKas from "../../store/api/buku-kas";

const BukuKasPerBulan = () => {
  // apexcharts
  const [options, setOptions] = useState("");
  const [series, setSeries] = useState("");
  const [dataSeries, setDataSeries] = useState([]);
  const [dataChart, setDataChart] = useState([]);

  // store
  const { setApiBukuKas } = useBukuKas();
  // state
  const [bulan, setBulan] = useState("");
  const [tahun, setTahun] = useState("");
  // effect
  useEffect(() => {
    const fetch = async () => {
      if (bulan && tahun) {
        const { data } = await setApiBukuKas({ bulan, tahun });
        console.log(bulan, tahun);
        setDataChart(data);
      }
    };
    fetch();
    return () => {};
  }, [bulan, tahun]);

  function groupBy(items) {
    console.log(items);
    const sumByTgl = Object.values(
      items.reduce((obj, item) => {
        const key = item.jenis + item.tgl_transaksi;
        if (!obj[key]) {
          obj[key] = Object.assign(item);
        } else {
          obj[key].jumlah += item.jumlah;
        }
        return obj;
      }, {})
    );
    const groups = sumByTgl.reduce((groups, row) => {
      const date = row.tgl_transaksi;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(row);
      return groups;
    }, {});

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
      return {
        tgl_transaksi: date,
        data: groups[date],
      };
    });

    function compare(a, b) {
      if (a.tgl_transaksi < b.tgl_transaksi) {
        return -1;
      }
      if (a.tgl_transaksi > b.tgl_transaksi) {
        return 1;
      }
      return 0;
    }

    groupArrays.sort(compare);

    return groupArrays;
    // console.log(sumByTgl);
  }

  const showGrafik = async () => {
    const dataGroup = groupBy(dataChart);
    // return;
    const categories = [];
    const pemasukan = [];
    const pengeluaran = [];

    dataGroup.forEach((el) => {
      categories.push(moment(el.tgl_transaksi).format("DD"));
      el.data.forEach((row) => {
        const { jenis, jumlah } = row;
        if (jenis === "Pemasukan") {
          pemasukan.push(jumlah);
        }
        if (jenis === "Pengeluaran") {
          pengeluaran.push(jumlah);
        }
      });
      if (pemasukan.length < pengeluaran.length) {
        pemasukan.push(0);
      }
      if (pengeluaran.length < pemasukan.length) {
        pengeluaran.push(0);
      }
    });

    setDataSeries(categories);
    // return;
    setOptions({
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories,
      },
      yaxis: {
        title: {
          text: "Rp (Jumlah)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "Rp. " + val;
          },
        },
      },
    });
    setSeries([
      {
        name: "Pemasukan",
        data: pemasukan,
      },
      {
        name: "Pengeluaran",
        data: pengeluaran,
      },
    ]);
  };

  // effect
  useEffect(() => {
    dataChart && showGrafik();
  }, [dataChart]);

  // show kosong
  const showEmpty = () => {
    if (!tahun || !bulan) {
      return (
        <h1 className="text-center text-lg mt-10 text-merah">
          Silahkan pilih tahun dan bulan untuk melihat grafik
        </h1>
      );
    }
    if (tahun && bulan) {
      return (
        <>
          {dataSeries.length < 1 && (
            <h1 className="text-center text-lg mt-10 text-merah">
              Data yang dipilih kosong
            </h1>
          )}
          {dataSeries.length > 0 && (
            <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
              height="500"
            />
          )}
        </>
      );
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center text-bold">
          Grafik Keuangan Perbulan
        </h2>
      </div>
      {/* pilih bulan dan tahun */}
      <div className="flex gap-2 my-4 items-center">
        <select
          onChange={(e) => setTahun(e.target.value)}
          defaultValue=""
          className="w-full px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
        >
          <option value="">Pilih Tahun</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <select
          onChange={(e) => setBulan(e.target.value)}
          defaultValue=""
          className="w-full px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
        >
          <option value="">Pilih Bulan</option>
          <option value={1}>Januari</option>
          <option value={2}>Februari</option>
          <option value={3}>Maret</option>
          <option value={4}>April</option>
          <option value={5}>Mei</option>
          <option value={6}>Juni</option>
          <option value={7}>Juli</option>
          <option value={8}>Agustus</option>
          <option value={9}>September</option>
          <option value={10}>Oktober</option>
          <option value={11}>November</option>
          <option value={12}>Desember</option>
        </select>
      </div>
      <div>{showEmpty()}</div>
    </div>
  );
};

export default BukuKasPerBulan;
