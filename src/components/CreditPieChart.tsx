// Recharts
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface CreditPieChartProps {
    totalCredits: number;
    usedCredits: number;
}

export default function CreditPieChart({ totalCredits, usedCredits }: CreditPieChartProps) {

    // Calcola i crediti disponibili
    const availableCredits = totalCredits - usedCredits;

    // Dati per il pie chart
    const data = [
        { name: 'Used', value: usedCredits },
        { name: 'Available', value: availableCredits }
    ];

    // Colori per le sezioni del grafico
    const COLORS = ['#CAC1FF', '#8E64FF'];

    return (
        <div className="w-full h-64">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value" >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    {/* Testo all'interno del grafico */}
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill='white'
                        className="text-xl font-bold">
                        {availableCredits} crediti
                    </text>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}