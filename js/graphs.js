var getRandom = function(){
  return Math.floor((Math.random() * 100));
}

var chart = new CanvasJS.Chart("statistics", {
  data:
  [
    {
      type: "column",
      dataPoints: [
        {label: "1°",  y: getRandom()},
        {label: "2°", y: getRandom()},
        {label: "3°", y: getRandom()},
        {label: "4°",  y: getRandom()}
      ]
    },
  ],
  axisX: {
    title: "Trimestre"
  }
});
chart.render();
