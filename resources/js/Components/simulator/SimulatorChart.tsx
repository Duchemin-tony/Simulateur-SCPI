import React from "react";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/Components/ui/chart";

interface InvestmentChartProps {
    data: number[];
}

const InvestmentChart: React.FC<InvestmentChartProps> = ({ data }) => {
    const chartData = data.map((value, index) => ({
        year: index + 1,
        cumulativeRevenue: value,
    }));

    const chartConfig = {
        cumulativeRevenue: {
            label: "Cumulative Revenue (K€)",
            color: "hsl(var(--chart-1))",
        },
    };

    const formatYAxis = (value: number) => {
        if (value >= 1) {
            return `${(value / 1).toFixed(0)}K`;
        }
        return value.toString();
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Simulation des revenus cumulés</CardTitle>
                <CardDescription>Affichage des revenus cumulés sur 20 ans</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        width={500}
                        height={200}
                        data={chartData}
                        margin={{ top: 0, right: 0, left: 0, bottom: 10 }}>
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1D4ED8" stopOpacity={1} />
                                <stop offset="95%" stopColor="#1D4ED8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <XAxis
                            dataKey="year"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12, fill: "#6B7280" }}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12, fill: "#6B7280" }}
                            tickFormatter={formatYAxis}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Area
                            type="monotone"
                            dataKey="cumulativeRevenue"
                            stroke="#1D4ED8"
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Revenus simulés <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            Sur une période de 20 ans
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default InvestmentChart;
