import type { EChartsOption } from "echarts";
import { monthlyRevenue } from "../data/analytics";

export const revenueChartOptions: EChartsOption = {
	animationDuration: 800,
	color: ["#4f46e5"],
	grid: { left: 8, right: 12, top: 24, bottom: 8, containLabel: true },
	tooltip: { trigger: "axis", formatter: "{b}<br/>{a}: {c} k$" },
	xAxis: {
		type: "category",
		boundaryGap: false,
		data: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
		axisLine: { lineStyle: { color: "#e2e8f0" } },
		axisTick: { show: false },
		axisLabel: { color: "#64748b" },
	},
	yAxis: {
		type: "value",
		axisLabel: { color: "#64748b", formatter: "{value}k" },
		splitLine: { lineStyle: { color: "#e2e8f0", type: "dashed" } },
	},
	series: [{
		name: "Revenus",
		type: "line",
		smooth: true,
		showSymbol: false,
		data: monthlyRevenue,
		lineStyle: { width: 3 },
		areaStyle: { color: "rgba(79, 70, 229, 0.16)" },
	}],
};
