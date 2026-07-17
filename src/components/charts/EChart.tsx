import { useEffect, useRef } from "react";
import type { EChartsOption } from "echarts";
import { BarChart, LineChart, PieChart } from "echarts/charts";
import {
	GridComponent,
	LegendComponent,
	TooltipComponent,
} from "echarts/components";
import { init, use, type ECharts } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";

use([
	BarChart,
	LineChart,
	PieChart,
	GridComponent,
	LegendComponent,
	TooltipComponent,
	CanvasRenderer,
]);

interface Props {
	label: string;
	options: EChartsOption;
	height?: number;
}

export default function EChart({ label, options, height = 320 }: Props) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		let disposed = false;
		let resizeObserver: ResizeObserver | undefined;
		let chart: ECharts | undefined;

		if (!disposed) {
			chart = init(container, undefined, { renderer: "canvas" });
			chart.setOption(options);
			resizeObserver = new ResizeObserver(() => chart?.resize());
			resizeObserver.observe(container);
		}

		return () => {
			disposed = true;
			resizeObserver?.disconnect();
			chart?.dispose();
		};
	}, [options]);

	return (
		<div
			ref={containerRef}
			role="img"
			aria-label={label}
			className="w-full"
			style={{ height }}
		/>
	);
}
