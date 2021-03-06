export default {
    name: "chart.brush.polygon.core",
    extend: "chart.brush.core",
    component: function () {
        var PolygonCoreBrush = function() {
            this.createPolygon = function(polygon, callback) {
                this.calculate3d(polygon);

                var element = callback.call(this, polygon);
                if(element) {
                    element.order = this.axis.depth - polygon.max().z;
                    return element;
                }
            }
        }

        PolygonCoreBrush.setup = function() {
            return {
                id: null,
                clip: false
            }
        }

        return PolygonCoreBrush;
    }
};