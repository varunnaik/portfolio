var portfolio = Portfolio();
$(document).ready(function() {    
    portfolio.init();
       
});


function Portfolio() {

var hypnos = function() {
     // get the canvas
     var canvas = document.createElement('canvas');
     canvas.style = "display: block; height: " + window.innerHeight + "px; width: " + window.innerWidth + "px; z-index: 5; position: absolute; top: 0; left: 0;";
     $('#contact div')[0].append(canvas);

     (function() {
				
					context = canvas.getContext( '2d' ),

					width = window.innerWidth * 0.7,
					height = window.innerHeight * 0.7,

					radius = Math.min( width, height ) * 0.4,

					// Number of layers
					quality = 180,

					// Layer instances
					layers = [],

					// Width/height of layers
					layerSize = radius * 0.25,

					// Layers that overlap to create the infinity illusion
					layerOverlap = Math.round( quality * 0.1 );

				function initialize() {

					for( var i = 0; i < quality; i++ ) {
						layers.push({
							x: width/2 + Math.sin( i / quality * 2 * Math.PI ) * ( radius - layerSize ),
							y: height/2 + Math.cos( i / quality * 2 * Math.PI ) * ( radius - layerSize )-30,
							r: ( i / quality ) * Math.PI
						});
					}

					resize();
					update();

				}

				function resize() {

					canvas.width = width;
					canvas.height = height;

				}

				function update() {

					requestAnimationFrame( update );

					step();
					clear();
					paint();

				}

				// Takes a step in the simulation
				function step () {

					for( var i = 0, len = layers.length; i < len; i++ ) {

						layers[i].r += 0.01;

					}

				}

				// Clears the painting
				function clear() {

					context.clearRect( 0, 0, canvas.width, canvas.height );

				}

				// Paints the current state
				function paint() {

					// Number of layers in total
					var layersLength = layers.length;

					// Draw the overlap layers
					for( var i = layersLength - layerOverlap, len = layersLength; i < len; i++ ) {

						context.save();
						context.globalCompositeOperation = 'destination-over';
						paintLayer( layers[i] );
						context.restore();

					}

					// Cut out the overflow layers using the first layer as a mask
					context.save();
					context.globalCompositeOperation = 'destination-in';
					paintLayer( layers[0], true );
					context.restore();

					// // Draw the normal layers underneath the overlap
					for( var i = 0, len = layersLength; i < len; i++ ) {

						context.save();
						context.globalCompositeOperation = 'destination-over';
						paintLayer( layers[i] );
						context.restore();

					}

				}

				// Pains one layer
				function paintLayer( layer, mask ) {
					size = layerSize + ( mask ? 10 : 0 );
					size2 = size / 2;

					context.translate( layer.x, layer.y );
					context.rotate( layer.r );

					// No stroke if this is a mask
					if( !mask ) {
						context.strokeStyle = '#000';
						context.lineWidth = 1;
						context.strokeRect( -size2, -size2, size, size );
					}

					context.fillStyle = '#f0f0f0';
					context.fillRect( -size2, -size2, size, size );

				}

				/**
				 * rAF polyfill.
				 */
				(function() {
					var lastTime = 0;
					var vendors = ['ms', 'moz', 'webkit', 'o'];
					for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
						window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
						window.cancelAnimationFrame = 
						  window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
					}

					if (!window.requestAnimationFrame)
						window.requestAnimationFrame = function(callback, element) {
							var currTime = new Date().getTime();
							var timeToCall = Math.max(0, 16 - (currTime - lastTime));
							var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
							  timeToCall);
							lastTime = currTime + timeToCall;
							return id;
						};

					if (!window.cancelAnimationFrame)
						window.cancelAnimationFrame = function(id) {
							clearTimeout(id);
						};
				}());

				initialize();

			})();

}
 
 var init= function() {

    $('#c').fullpage({
        sectionSelector: 'section',
        scrollBar: true,
        onLeave: function() {
            portfolio.closeAllSlides();
        }
    });

        
	particlesJS.load('particle-bg', 'js/particlesjs-config.json', function() {
		console.log('callback - particles.js config loaded');
	});

	hypnos();

 };
 
 var openSlide = function(slideId) {
    $('#'+slideId).addClass('open');     
 }
 var closeSlide = function(slideId) {
    $('#'+slideId).removeClass('open');    
 }
 var closeAllSlides = function() {
    $('aside').removeClass('open');
 }
    
 return {
    init: init,
    openSlide: openSlide,
    closeSlide: closeSlide,
    closeAllSlides: closeAllSlides     
 }
}
