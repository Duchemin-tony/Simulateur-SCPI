<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SimulatorController extends Controller
{
    public function index(): Response
    {
        $defaultValues = [
            'investment_min' => 6100,
            'investment_max' => 10370,
            'rate_min' => 0,
            'rate_max' => 8,
        ];

        return Inertia::render('Simulator', $defaultValues);
    }

    public function calculateSimulation(Request $request)
    {
        $validated = $request->validate([
            'initial_investment' => 'required|numeric|min:6100|max:10370',
            'monthly_return_rate' => 'required|numeric|min:0|max:8',
        ]);

        $investment = $validated['initial_investment'];
        $monthlyRate = $validated['monthly_return_rate'] / 100;
        $annualRate = pow(1 + $monthlyRate, 12) - 1;

        $cumulativeRevenues = [];

        for ($year = 1; $year <= 20; $year++) {
            $cumulativeRevenue = $investment * pow(1 + $annualRate, $year);
            $cumulativeRevenues[] = round($cumulativeRevenue / 1000, 2);
        }

        $totalPotentialInvestment = $investment * pow(1 + $annualRate, 20);

        return response()->json([
            'cumulativeRevenues' => $cumulativeRevenues,
            'totalPotentialInvestment' => round($totalPotentialInvestment),
        ]);
    }
}
