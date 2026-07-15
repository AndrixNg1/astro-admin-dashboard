import type { EChartsOption } from "echarts";
import { monthlyRevenue } from "../data/analytics";

export const revenueChartOptions: EChartsOption = {
	tooltip: { trigger: "axis" },
	xAxis: { type: "category", data: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"] },
	yAxis: { type: "value", axisLabel: { formatter: "{value}k" } },
	series: [{ name: "Revenus", type: "line", smooth: true, data: monthlyRevenue, areaStyle: { opacity: 0.12 }, itemStyle: { color: "#4f46e5" } }],
};
