/*********SIDEBAR************/
$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });
});

//popup
const toggleBlur = () => {
  const blurEl = document.getElementById("blur");
  blurEl.classList.toggle("active");

  const popupEl = document.getElementById("popup");
  popupEl.classList.toggle("active");
};
/*********CHART BAR************/

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Yemeksepeti", "Trendyol", "Getir", "Migros"],
    datasets: [
      {
        data: [152, 90, 48, 82],
        borderWidth: 0,
        backgroundColor: "rgba(254,105,105, 1.99)",
      },
    ],
  },
  options: {
    indexAxis: "y", // Horizontal bar chart
    scales: {
      x: {
        grid: {
          display: false, // Removes grid lines on the x-axis (vertical axis in horizontal bar chart)
        },
        beginAtZero: true,
        ticks: {
          display: false, // Hides the x-axis labels (names)
        },
      },
      y: {
        grid: {
          display: false, // Removes grid lines on the y-axis (horizontal axis in horizontal bar chart)
        },
        ticks: {
          color: "#3c5995", // Label color
          font: {
            size: 14, // Font size
            family: "Poppins, sans-serif", // Font family
            weight: "bold", // Font weight
          },
          padding: 10, // Padding around the labels
        },
      },
    },
    plugins: {
      datalabels: {
        anchor: "end", // Positioning of the label
        align: "start", // Alignment of the label
        color: "white", // Text color
        formatter: function (value) {
          return value + " adet"; // Display the value inside the bars
        },
      },
      legend: {
        display: false, // This hides the legend
      },
    },
  },
  plugins: [ChartDataLabels], // Registering the datalabels plugin
});

/*********LINE CHART************/
const ctxx = document.getElementById("packageChart").getContext("2d");

// Sample data for the daily package statistics
const data = {
  labels: ["Pts", "Sal", "Çar", "Per", "Cum", "Cts", "Paz"],
  datasets: [
    {
      label: "teslim edilen paket",
      data: [120, 150, 180, 130, 170, 210, 160],
      fill: false, // Do not fill under the line
      borderColor: "rgba(75, 192, 192, 1)", // Line color
      tension: 0.1, // Smoothness of the line
    },
  ],
};

// Configuration for the line chart
const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on x-axis
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true, // Optionally show grid lines on y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  },
};

// Create the line chart
const packageChart = new Chart(ctxx, config);
