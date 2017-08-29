var getRandom = function(){
  return Math.floor((Math.random() * 100));
}

var sales = new CanvasJS.Chart("sales", {
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
  },
  animationEnabled: true,
  animationDuration: 1000
});

var userbase = new CanvasJS.Chart("userbase", {
  data:
  [
    {
      type: "doughnut",
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
  },
  animationEnabled: true,
  animationDuration: 1000
});

var profit = new CanvasJS.Chart("profit", {
  data:
  [
    {
      type: "spline",
      color: "#B36491",
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
  },
  animationEnabled: true,
  animationDuration: 1000
});

var loss = new CanvasJS.Chart("loss", {
  data:
  [
    {
      type: "spline",
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
  },
  animationEnabled: true,
  animationDuration: 1000
});

sales.render();
userbase.render();
profit.render();
loss.render();
