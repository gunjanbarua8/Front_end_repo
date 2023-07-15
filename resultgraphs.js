document.addEventListener("DOMContentLoaded", function() {
  // Line Graph Data
  const lineGraphData = [
    {
      name: 'Fertility of Soil',
      data: [5, 7, 6, 8, 6]
    },
    {
      name: 'Rare Plants',
      data: [3, 4, 5, 6, 4]
    },
    {
      name: 'Fruit Bearing Crops',
      data: [6, 5, 7, 4, 6]
    }
  ];

  // Line Graph Options
  const lineGraphOptions = {
    chart: {
      type: 'line',
      height: 400,
    },
    series: lineGraphData,
    xaxis: {
      categories: ['Bengaluru', 'Mysuru', 'Hubli', 'Mangaluru', 'Belagavi'], // Replace with actual place names
    },
    yaxis: {
      title: {
        text: 'Value',
      },
    },
    colors: ['#2980B9', '#FF9F00', '#4CAF50'], // Customize the colors as needed
    title: {
      text: ' ',
      align: 'center',
    },
  };

  const lineGraph = new ApexCharts(document.querySelector("#line-graph"), lineGraphOptions);
  lineGraph.render();

  // Bar Graph Data
  const barGraphData = [15, 20, 18, 12, 10];

  // Bar Graph Options
  const barGraphOptions = {
    chart: {
      type: 'bar',
      height: 400,
    },
    series: [{
      name: 'Number of Ponds',
      data: barGraphData,
    }],
    xaxis: {
      categories: ['Bengaluru', 'Mysuru', 'Hubli', 'Mangaluru', 'Belagavi'], // Replace with actual place names
    },
    yaxis: {
      title: {
        text: 'Number of Ponds',
      },
    },
    colors: ['#FF6384'], // Customize the color as needed
    title: {
      text: 'Ponds in Each Region',
      align: 'center',
    },
  };

  const barGraph = new ApexCharts(document.querySelector("#bar-graph"), barGraphOptions);
  barGraph.render();

  // Species Graph Data
  const speciesGraphData = [
    {
      name: 'Species',
      data: ['Species A', 'Species B', 'Species C', 'Species D', 'Species E'] // Replace with actual species data
    }
  ];

  // Species Graph Options
  const speciesGraphOptions = {
    chart: {
      type: 'line',
      height: 400,
    },
    series: speciesGraphData,
    xaxis: {
      categories: ['Bengaluru', 'Mysuru', 'Hubli', 'Mangaluru', 'Belagavi'], // Replace with actual place names
    },
    yaxis: {
      title: {
        text: 'Species',
      },
    },
    colors: ['#4CAF50'], // Customize the color as needed
    title: {
      text: 'Species of Plants in Each Region',
      align: 'center',
    },
  };

  const speciesGraph = new ApexCharts(document.querySelector("#species-graph"), speciesGraphOptions);
  speciesGraph.render();
});
