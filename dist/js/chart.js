const primary = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary')
  .trim();
const font = getComputedStyle(document.documentElement)
  .getPropertyValue('--font')
  .trim();

const defaultOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    width: '100%',
    height: 240,
    offsetY: 24,
  },
  dataLabels: {
    enabled: false,
  },
};

let barOptions = {
  ...defaultOptions,
  chart: {
    ...defaultOptions.chart,
    type: 'area',
  },
  tooltip: {
    enabled: true,
    style: {
      fontFamily: font,
    },
    y: {
      formatter: (value) => `${value}K`,
    },
  },
  series: [
    {
      name: 'Views',
      data: ['23%', '54%', '18%', '70%', '39%', '75y%'],
    },
  ],
  colors: [primary],
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      opacityFrom: 1,
      opacityTo: 0,
      stops: [0, 100],
      colorStops: [
        {
          offset: 0,
          opacity: 0.2,
          color: '#fff',
        },
        {
          offset: 100,
          opacity: 0.2,
          color: '#fff',
        },
      ],
    },
  },
  stroke: { colors: [primary], lineCap: 'round' },
};

let chart = new ApexCharts(document.querySelector('#chart'), barOptions);

chart.render();
