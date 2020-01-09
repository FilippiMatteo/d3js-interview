describe('Test D3.js Area Chart with jasmine', function () {
    let a;

    beforeEach(function () {
        a = areaChart();
        a.render();
    });

    afterEach(function () {
        d3.selectAll('svg').remove();
    });

    describe('the area chart', function () {
        it('should be created', function () {
            expect(getSvg()).not.toBeNull();
        });

        it('should have the correct height', function () {
            expect(getSvg().attr('height')).toBe('200');
        });

        it('should have the correct width', function () {
            expect(getSvg().attr('width')).toBe('240');
        });
        it('should have the correct stroke color', function () {
            expect(getPath().attr('fill')).toBe("orange");
        });

        it('should have the correct stroke-width', function () {
            expect(getPath().attr('stroke-width')).toBe("2");
        });
    });

    function getSvg() {
        return d3.select('svg');
    }

    function getPath() {
        return d3.select('path');
    }

});
