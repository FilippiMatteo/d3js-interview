let WIDTH        = 500,
    HEIGHT       = 500,
    OUTER_MARGIN = 13,
    INNER_MARGIN = 107,
    RADIUS       = Math.min(WIDTH, HEIGHT) / 2;

let data = [
    {
        "type"   : "tablet",
        "percent": 60,
        "value"  : 120000,
        "color"  : "#003F00"
    },
    {
        "type"   : "smartphone",
        "percent": 40,
        "value"  : 80000,
        "color"  : "#009d00"
    }
];
let gt   = data[0];
let gs   = data[1];


function donutChart() {
    let that = {};

    that.render = function () {

        let svg = d3.select("svg").attr("height", HEIGHT);


        // title  inside the charts
        let g = svg.append("g")
                   .attr("transform", "translate(" + RADIUS + "," + RADIUS + ")");


        let color = d3.scaleOrdinal([gt.color, gs.color]);

        let pie = d3.pie().value(function (d) {
            return d.value;
        });

        let path = d3.arc()
                     .outerRadius(RADIUS)
                     .innerRadius(140);

        let arc = g.selectAll("arc")
                   .data(pie([gt, gs]))
                   .enter()
                   .append("g");

        arc.append("path")
           .attr("d", path)


    };

    return that;
}
