import type { EChartsOption } from "echarts";
import { trafficSources } from "../data/analytics";

export const trafficChartOptions: EChartsOption = {
	tooltip: { trigger: "item", formatter: "{b}: {c}%" },
	legend: { bottom: 0 },
	series: [{ name: "Trafic", type: "pie", radius: ["45%", "70%"], data: trafficSources }],
};
