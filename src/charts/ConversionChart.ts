import type { EChartsOption } from "echarts";
import { conversionRates } from "../data/analytics";

export const conversionChartOptions: EChartsOption = {
	tooltip: { trigger: "axis" },
	xAxis: { type: "category", data: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"] },
	yAxis: { type: "value", axisLabel: { formatter: "{value}%" } },
	series: [{ name: "Conversion", type: "bar", data: conversionRates, itemStyle: { color: "#4f46e5", borderRadius: [4, 4, 0, 0] } }],
};
