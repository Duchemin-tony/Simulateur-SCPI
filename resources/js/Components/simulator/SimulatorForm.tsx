import React from "react";
import { Input } from "@/Components/ui/input";
import { Slider } from "@/Components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Euro, Percent } from "lucide-react";

interface SimulatorFormProps {
    investmentMin: number;
    investmentMax: number;
    rateMin: number;
    rateMax: number;
    investment: number;
    setInvestment: (value: number) => void;
    returnRate: number;
    setReturnRate: (value: number) => void;
}

const SimulatorForm: React.FC<SimulatorFormProps> = ({
    investmentMin,
    investmentMax,
    rateMin,
    rateMax,
    investment,
    setInvestment,
    returnRate,
    setReturnRate,
}) => {
    const adjustWithinRange = (value: number, min: number, max: number) => {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    };

    const handleInvestmentBlur = () => {
        setInvestment(adjustWithinRange(investment, investmentMin, investmentMax));
    };

    const handleReturnRateBlur = () => {
        setReturnRate(adjustWithinRange(returnRate, rateMin, rateMax));
    };

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">Mon projet</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-6">
                    <div>
                        <div className="flex items-center">
                            <label
                                htmlFor="investment"
                                className="block text-sm text-gray-700 uppercase font-bold w-full">
                                Montant d'investissement (€)
                            </label>
                            <Input
                                type="number"
                                id="investment"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                onBlur={handleInvestmentBlur}
                                min={investmentMin}
                                max={investmentMax}
                                step={10}
                                icon={<Euro />}
                            />
                        </div>

                        <Slider
                            min={investmentMin}
                            max={investmentMax}
                            step={10}
                            value={[investment]}
                            onValueChange={(values) => setInvestment(values[0])}
                            className="mt-6"
                        />
                    </div>

                    <div>
                        <div className="flex items-center">
                            <label
                                htmlFor="returnRate"
                                className="block text-sm  text-gray-700 uppercase font-bold w-full">
                                Taux de rendement mensuel (%)
                            </label>
                            <Input
                                type="number"
                                id="returnRate"
                                value={returnRate}
                                onChange={(e) => setReturnRate(Number(e.target.value))}
                                onBlur={handleReturnRateBlur}
                                min={rateMin}
                                max={rateMax}
                                step={0.1}
                                icon={<Percent />}
                            />
                        </div>

                        <Slider
                            min={rateMin}
                            max={rateMax}
                            step={0.1}
                            value={[returnRate]}
                            onValueChange={(values) => setReturnRate(values[0])}
                            className="mt-6"
                        />
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default SimulatorForm;
