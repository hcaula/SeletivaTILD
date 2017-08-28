var getRandom = function(){
  return Math.floor((Math.random() * 100));
}

var chart = new CanvasJS.Chart("statistics", {
		data: [
		{
			type: "column",
			dataPoints: [
				{label: "Janeiro",  y: getRandom()},
				{label: "Fevereiro", y: getRandom()},
				{label: "Março", y: getRandom()},
				{label: "Abril",  y: getRandom()},
				{label: "Junho",  y: getRandom()},
        {label: "Julho",  y: getRandom()},
        {label: "Agosto",  y: getRandom()},
        {label: "Setembro",  y: getRandom()},
        {label: "Outubro",  y: getRandom()},
        {label: "Novembro",  y: getRandom()},
        {label: "Dezembro",  y: getRandom()}
			]
		}
		]
	});
chart.render();
