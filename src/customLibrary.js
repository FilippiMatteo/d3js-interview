import * as d3 from "d3";


function createDoughnut(json, index) {

    let gt = json.params.device[0];
    let gs = json.params.device[1];

    let svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2;

    let selector = "#svg" + index;
    let svg      = d3.select(selector).attr("height", svgHeight);


    // title  inside the charts
    let g = svg.append("g")
               .attr("transform", "translate(" + radius + "," + radius + ")");
    g.append("text")
     .attr("class", "title-inside")
     .attr("y", -45)
     .text(json.title);

    // value inside the charts
    g.append("text")
     .attr("class", "value-inside")
     .attr("y", -15)
     .text(thousandFormatting(json.params.value) + "€");

    let color = d3.scaleOrdinal([gt.color, gs.color]);

    let pie = d3.pie().value(function (d) {
        return d.percentage;
    });

    let path = d3.arc()
                 .outerRadius(radius)
                 .innerRadius(140);

    let arc = g.selectAll("arc")
               .data(pie([gt, gs]))
               .enter()
               .append("g");

    arc.append("path")
       .attr("d", path)
       .attr("x", 100)
       .attr("fill", function (d) {
           return color(d.data.percentage);
       });


}

function createReport(json, index) {
    let gt = json.params.device[0];
    let gs = json.params.device[1];


    let pt = d3.select('#pt' + index);
    let ps = d3.select('#ps' + index);

    let ptc = d3.select('#ptc' + index);
    let ptv = d3.select('#ptv' + index);
    let psc = d3.select('#psc' + index);
    let psv = d3.select('#psv' + index);

    // create text outside svg : paragraph Smartphone

    // tablet
    pt.style("color", gt.color);
    pt.append("text")
      .text(function () {
          return gt.type;
      });
    // tablet percentage
    ptc.append("text")
       .text(function () {
           return gt.percentage + "%";
       });
    // tablet value
    ptv.style("opacity", 0.5);
    ptv.append("text")
       .text(function () {
           return thousandFormatting(gt.value);
       });
    // end table

    // smartphone
    ps.style("color", gs.color);
    ps.append("text")
      .text(function () {
          return gs.type;
      });

    // smartphone percentage
    psc.append("text")
       .text(function () {
           return gs.percentage + "%";
       });
    // smartphone value
    psv.style("opacity", 0.5);
    psv.append("text")
       .text(function () {
           return thousandFormatting(gs.value);
       });

    // end smartphone

}


function createArea(color, index) {
    let selector = "#svg" + index;

    let svg = d3.select(selector).append("svg")
                .attr("width", 240).attr("height", 200)
                .attr("y", 50)
                .attr("x", 10);

    let curveFunc = d3.area()
                      .x(function (d) {
                          return d.x
                      })
                      .y1(function (d) {
                          return d.y
                      })
                      .y0(200);

    svg.append('path')
       .attr('d', curveFunc(generateDataForAreaCharts()))
       .attr("fill-opacity", .3)
       .attr("stroke", color)
       .attr("stroke-width", 2)
       .attr('fill', color).style("opacity", 0.2);
}

function generateDataForAreaCharts() {
    // create data
    let x = 50;
    let y = 200;

    let dataSet = [{x: x, y: y}];
    for (let i = 0; i < 20; i++) {
        dataSet.push({x: x = x + 20, y: y -= Math.floor(Math.random() * 20)})
    }
    return dataSet;
}


function thousandFormatting(value) {
    const l      = {
        thousands: ".",
        grouping : [3]
    };
    const local  = d3.formatLocale(l);
    const format = local.format(",");
    return format(value);
}


export {createDoughnut, createArea, createReport};
