import { useEffect, useRef } from 'react';
//Apex-chart
import ApexCharts from 'apexcharts'

const options = {
    chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        enabled: true,
        x: {
            show: false,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#C1121F",
            gradientToColors: ["#C1121F"],
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 6,
    },
    grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
            left: 2,
            right: 2,
            top: 0
        },
    },
    series: [
        {
            name: "New users",
            data: [6500, 6418, 6456, 6526, 6356, 6456],
            color: "#C1121F",
        },
    ],
    xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
};

export default function Chart() {

    const chartRef = useRef(null);

    useEffect(() => {
        const chartElement = document.getElementById("area-chart");
        if (chartElement && typeof ApexCharts !== 'undefined') {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
            chartRef.current = new ApexCharts(chartElement, options);
            chartRef.current.render();
        }

        // Cleanup function to destroy the chart when the component unmounts
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        };
    }, []);


    return (
        <div className="max-w-sm w-full bg-custom-elevation dark:bg-dark-elevation3 rounded-lg shadow p-4 md:p-6">
            <div className="flex justify-between">
                <div>
                    <h5 className="leading-none text-3xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray pb-2">
                        Le tue spese mensili
                    </h5>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
                </div>
            </div>
            <div id="area-chart"></div>
            <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                <div className="flex justify-between items-center pt-5">
                    <a
                        href="#"
                        className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                        Report completo
                        <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    )
}
