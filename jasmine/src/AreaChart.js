function areaChart() {
    let that = {};

    that.render = function () {

        let dataSet = [{x: 10, y: 20}, {x: 20, y: 20}, {x: 88, y: 20}, {x: 33, y: 11}];

        let svg = d3.select("body")
                    .append("svg")
                    .attr("width", 240).attr("height", 200);

        let curveFunc = d3.area()
                          .x(function (d) {
                              return d.x
                          })
                          .y1(function (d) {
                              return d.y
                          })
                          .y0(200);

        svg.append('path')
           .attr('d', curveFunc(dataSet))
           .attr("fill-opacity", 0.3)
           .attr("stroke", "red")
           .attr("stroke-width", 2)
           .attr('fill', "orange").style("opacity", 0.2);

    };

    return that;
}
