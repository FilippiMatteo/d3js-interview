describe('Test D3.js Donut Chart with jasmine', function() {
  let c;

  beforeEach(function() {
    c = donutChart();
    c.render();
  });

  afterEach(function() {
    d3.selectAll('svg').remove();
  });

  describe('the donut chart' ,function() {

    it('should have the correct height', function() {
      expect(getPath().attr('x')).toBe('100');
    });

    it('should have the correct width', function() {
      expect(getSvg().attr('width')).toBe('500');
    });
  });

  function getSvg() {
    return d3.select('svg');
  }
  function getPath() {
    return d3.select('path');
  }



});
