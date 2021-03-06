let urlJSON = "https://raw.githubusercontent.com/EdithOrt/db/master/db.json";

// const getData = async (url) =>{
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         await data.footPrint.map((item) =>{
//             console.log(item.data)
//             config.categories.push(item.data)
//         })
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

/* function getData(url) {
  const database = fetch(url);
  const data = database.then((res) => res.json());
  let value = data.then((res) => {
    return res;
  });
  value.then((resp) => {
    if (resp != null) {
      resp.footPrint.map((item) => {
        config.xAxis.categories.push(item.categories);
        config.series[0].data.push(parseInt(item.data));
        console.log(item.data);
      });
    }
  });
} */

/* getData(urlJSON); */

const config = {
  chart: {
    type: "areaspline",
  },
  title: {
    text: undefined,
  },
  legend: {
    enabled: true,
  },
  xAxis: {
    categories: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
    ],
  },
  yAxis: {
    title: {
      text: "Toneladas de carbono",
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: " toneladas",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series:
    /* {
      name: "Metas de la empresa",
      data: [],
      color: "#AB0954",
    }, */
    [
      {
        name: "Huella de carbono de mis compañeros",
        data: [53, 51, 52, 48, 35, 37, 31, 23, 15],
        color: "#ffbc15",
      },
      {
        name: "Metas de la empresa",
        data: [19, 24, 18, 15, 17, 27, 25, 15, 5],
        color: "#AB0954",
      },
    ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 300,
          minWidth: 300,
        },
        chartOptions: {
          chart: {
            className: "small-chart",
          },
        },
      },
    ],
  },
};

console.log(config);

export default config;
