var chart;
		var legend;

		var chartData = [{
				country: "Web Dev",
				value: 200
			},
			{
				country: "Electronics",
				value: 340
			},
			{
				country: "Robotics",
				value: 230
			},
			{
				country: "UAV",
				value: 280
			},
			{
				country: "Data Science",
				value: 100
			},
			{
				country: "AR/VR",
				value: 250
			}
		];

		AmCharts.ready(function () {
			// PIE CHART
			chart = new AmCharts.AmPieChart();
			chart.dataProvider = chartData;
			chart.titleField = "country";
			chart.valueField = "value";
			chart.outlineColor = "";
			chart.outlineAlpha = 0.8;
			chart.outlineThickness = 2;
			// this makes the chart 3D
			chart.depth3D = 20;
			chart.angle = 30;

			// WRITE
			chart.write("chartdiv");
		});