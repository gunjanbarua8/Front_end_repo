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
      },
      // Add more data for other lines if needed
    ];
  
    // Line Graph Options
    const lineGraphOptions = {
      chart: {
        type: 'line',
        height: 400,
      },
      series: lineGraphData,
      xaxis: {
        categories: ['Bengaluru', 'Mysuru', 'Hubli', 'Mangaluru', 'Belagavi'], // Replace with popular districts of Karnataka
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
  
    const barGraphData = [15, 20, 18, 12, 10];

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
        categories: ['Bengaluru', 'Mysuru', 'Hubli', 'Mangaluru', 'Belagavi'],
      },
      yaxis: {
        title: {
          text: 'Number of Ponds',
        },
      },
      colors: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F00', '#4CAF50'],
      title: {
        text: 'Ponds in Each Region',
        align: 'center',
      },
    };
    
    const barGraph = new ApexCharts(document.querySelector("#bar-graph"), barGraphOptions);
    barGraph.render();
    
});