import * as d3 from 'd3'
import * as cl from './customLibrary'

(async function () {

    const dataset = await d3.json('/data/data.json');

    dataset.chart.forEach((item, i) => {
        cl.createDoughnut(item, i + 1);
        cl.createArea(item.params.device[0].color, i + 1);
        cl.createReport(item, i + 1)
    })


})();// chiusura async function






