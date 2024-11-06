import React from "react";
import { usePage } from "@inertiajs/react";
import SimulatorCard from "@/Components/simulator/SimulatorCard";

interface PageProps {
    investment_min: number;
    investment_max: number;
    rate_min: number;
    rate_max: number;
}

const Simulator = () => {
    const { investment_min, investment_max, rate_min, rate_max } = usePage().props as unknown as PageProps;

    return (
        <div className="p-6 bg-[#f1fdff] min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8">Mon simulateur SCPI</h1>
            <SimulatorCard
                investmentMin={investment_min}
                investmentMax={investment_max}
                rateMin={rate_min}
                rateMax={rate_max}
            />
        </div>
    );
};

export default Simulator;
