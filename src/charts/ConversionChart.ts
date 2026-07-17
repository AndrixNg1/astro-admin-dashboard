import type { EChartsOption } from "echarts";
import { conversionRates } from "../data/analytics";

export const conversionChartOptions: EChartsOption = {
	animationDuration: 800,
	grid: { left: 8, right: 12, top: 24, bottom: 8, containLabel: true },
	tooltip: { trigger: "axis", formatter: "{b}<br/>{a}: {c}%" },
	xAxis: {
		type: "category",
		data: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
		axisLine: { lineStyle: { color: "#e2e8f0" } },
		axisTick: { show: false },
		axisLabel: { color: "#64748b" },
	},
	yAxis: {
		type: "value",
		axisLabel: { color: "#64748b", formatter: "{value}%" },
		splitLine: { lineStyle: { color: "#e2e8f0", type: "dashed" } },
	},
	series: [{
		name: "Conversion",
		type: "bar",
		barMaxWidth: 34,
		data: conversionRates,
		itemStyle: { color: "#4f46e5", borderRadius: [7, 7, 0, 0] },
	}],
};
