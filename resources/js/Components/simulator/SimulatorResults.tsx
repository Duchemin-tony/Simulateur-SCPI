import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

interface SimulatorResultsProps {
    totalInvestment: number;
}

const SimulatorResults: React.FC<SimulatorResultsProps> = ({ totalInvestment }) => {
    return (
        <Card className="bg-blue-600 text-white text-center rounded-lg shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">Mes résultats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <p className="text-sm font-medium">Mon investissement total potentiel à terme</p>
                    <p className="text-3xl font-bold">{totalInvestment.toLocaleString()} €</p>
                </div>
                <div className="mt-4">
                    <button className="w-full px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
                        Parler avec un conseiller
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default SimulatorResults;
