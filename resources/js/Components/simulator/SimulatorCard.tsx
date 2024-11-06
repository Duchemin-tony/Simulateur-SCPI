import React, { useState, useEffect } from "react";
import SimulatorForm from "./SimulatorForm";
import SimulatorChart from "./SimulatorChart";
import axios from "axios";
import SimulatorResults from "./SimulatorResults";

interface InvestmentSimulatorProps {
    investmentMin: number;
    investmentMax: number;
    rateMin: number;
    rateMax: number;
}

const SimulatorCard: React.FC<InvestmentSimulatorProps> = ({ investmentMin, investmentMax, rateMin, rateMax }) => {
    const [investment, setInvestment] = useState<number>(investmentMin);
    const [returnRate, setReturnRate] = useState<number>(0.5);
    const [chartData, setChartData] = useState<number[]>([]);

    const [totalPotentialInvestment, setTotalPotentialInvestment] = useState<number>(0);

    const fetchChartData = async () => {
        try {
            const response = await axios.post("/simulation", {
                initial_investment: investment,
                monthly_return_rate: returnRate,
            });

            setChartData(response.data.cumulativeRevenues);
            setTotalPotentialInvestment(response.data.totalPotentialInvestment);
        } catch (error) {
            console.error("Erreur lors de la récupération des données de simulation :", error);
        }
    };

    useEffect(() => {
        fetchChartData();
    }, [investment, returnRate]);

    return (
        <div className="flex gap-4 items-stretch w-10/12 m-auto">
            <div className="w-1/2">
                <SimulatorForm
                    investmentMin={investmentMin}
                    investmentMax={investmentMax}
                    rateMin={rateMin}
                    rateMax={rateMax}
                    investment={investment}
                    setInvestment={setInvestment}
                    returnRate={returnRate}
                    setReturnRate={setReturnRate}
                />
            </div>
            <div className="w-1/2 space-y-4">
                <SimulatorResults totalInvestment={totalPotentialInvestment} />
                <SimulatorChart data={chartData} />
            </div>
        </div>
    );
};

export default SimulatorCard;
