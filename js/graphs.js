var getRandom = function(){
  return Math.floor((Math.random() * 100));
}

var chart = new CanvasJS.Chart("statistics", {
		data: [
		{
			type: "column",
			dataPoints: [
				{label: "Jan",  y: getRandom()},
				{label: "Fev", y: getRandom()},
				{label: "Mar", y: getRandom()},
				{label: "Abr",  y: getRandom()},
				{label: "Jun",  y: getRandom()},
        {label: "Jul",  y: getRandom()},
        {label: "Ago",  y: getRandom()},
        {label: "Set",  y: getRandom()},
        {label: "Out",  y: getRandom()},
        {label: "Nov",  y: getRandom()},
        {label: "Dez",  y: getRandom()}
			]
		}
		]
	});
chart.render();
