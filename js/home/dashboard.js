var areaChartOptions = {
    series: [{
        name: 'Sercise',
        data: [31, 40, 28, 51, 42, 109, 100]
    },],
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};
var areaChart = new ApexCharts(document.querySelector("#areaChart"), areaChartOptions);
areaChart.render();



var columnChartOptions = {
    colors: ['#66DA26'],

    series: [{
        name: 'Services',
        data: [44, 55, 41, 67, 22, 43, 21]
    }],
    annotations: {
        //points: [{
        //    x: 'Bananas',
        //    seriesIndex: 0,
        //    label: {
        //        borderColor: '#775DD0',
        //        offsetY: 0,
        //        style: {
        //            color: '#fff',
        //            background: '#775DD0',
        //        },
        //        text: 'Bananas are good',
        //    }
        //}]
    },
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            columnWidth: '70%',
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2
    },

    grid: {
        row: {
            colors: ['#fff', '#f2f2f2']
        }
    },
    xaxis: {
        labels: {
            rotate: -45
        },
        categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI','SAT'],
        tickPlacement: 'on'
    },
    yaxis: {

    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
        },
    }
};

var columnChart = new ApexCharts(document.querySelector("#columnChart"), columnChartOptions);
columnChart.render();



var pieChartOptions = {
    colors: ['#0075A4','#F3BC00'],
    series: [55, 13],
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['Satisfied', 'Nonconformists'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};
var pieChart = new ApexCharts(document.querySelector("#pieChart"), pieChartOptions);
pieChart.render();