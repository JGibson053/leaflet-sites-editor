// config.js JRG 15-AUG-2016
// Lists base strings to create URLs for all map service layers used by web map apps for H & S sites edit application.
//
// Leaflet Draw toolbar options
// Define which draw tools are available by predefined option groups
// Note no options with lines yet
var myPointDrawOptions = {
      circle: false, // disable circles
      marker: true, // enable points
      polyline: false, // disable polylines
      polygon: false, // disable polygons
	  rectangle: false // disable rectangles
};
var myPointPolyDrawOptions = {
      circle: false, // disable circles
      marker: true, // enable points
      polyline: false, // disable polylines
      polygon: {
        allowIntersection: false, // polygons cannot intersect themselves
        drawError: {
          color: 'red', // color the shape will turn when intersects
          message: '<strong>Oh snap!<strong> you can\'t draw that!' // message that will show when intersect
        },
      }
};
  
// Define buttons to be used for each site object type & subtype
// e.g. site "Job" object has subtypes "Job Location", "Spot Comms" etc
// icon - see icons.js
// title - used in mouseover message for buttons
// drawControlOptions - refer to draw setup options above
// bottomMargin, leftMargin - offsets from bottomleft setting for Draw toolbar position (fixed because map window size is fixed)
// n.b. if map window size was dynamic, would have to listen for window resize events & recalculate button offsets accordingly.
// pointIcon - names from Leaflet.awesome-markers for point icons on map
var eventButton = {
    icon: fireExtingUri,
	title: "Event",
	drawControlOptions : myPointPolyDrawOptions,
	bottomMargin : "405px",
	leftMargin : "38px",
	pointIcon: "star"
  };
var hazardButton = {
    icon: fireExtingUri,
	title: "Hazard",
	drawControlOptions : myPointPolyDrawOptions,
	bottomMargin : "405px",
	leftMargin : "38px",
	pointIcon: "flag"
  };
var jobLocationButton = {
    icon: manAtWorkUri,
	title: "Job Location",
	drawControlOptions : myPointPolyDrawOptions,
	bottomMargin : "403px",
	leftMargin : "38px",
	pointIcon: "construction"
  };
var fireExtingButton = {
    icon: fireExtingUri,
	title: "Fire Extinguisher",
	drawControlOptions : myPointDrawOptions,
	bottomMargin : "376px",
	leftMargin : "38px",
	pointIcon: "hospital"
  };
var spotCommsButton = {
    icon: spotCommsUri,
	title: "Spot Comms",
	drawControlOptions : myPointDrawOptions,
	bottomMargin : "350px",
	leftMargin : "38px",
	pointIcon: "telephone"
  };
// Sets of buttons to display for each main site object type
var eventButtons = [eventButton];
var hazardButtons = [hazardButton];
var jobButtons = [jobLocationButton,fireExtingButton,spotCommsButton];
// Key-value pairs for site object type names & matching sets of buttons
var objButtons = {
    "Events": eventButtons,
    "Hazards": hazardButtons,
	"Jobs": jobButtons
};
// serviceNames are concatenated with serviceURL_root & serviceURL_suffix to define map service URLs
var serviceNames = ["Hazards","Events","Jobs"];
var serviceColours = ["#ff0000","#ff8040","#35ca4b"];
var serviceURL_root = 'http://services2.arcgis.com/RS7BXJAO6ksvblJm/arcgis/rest/services/';
var serviceURL_suffix = '_Demo/FeatureServer/';
