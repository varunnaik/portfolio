$(document).ready(function() {
    var portfolio = Portfolio();
    portfolio.init();
       
});


function Portfolio() {
 
 
 var init= function() {
    $.scrollify({
		section : "section",
		sectionName : "section-name",
		interstitialSection : "footer",
		easing: "easeOutExpo",
		scrollSpeed: 700,
		offset : 0,
		scrollbars: true,
		standardScrollElements: "",
		setHeights: true,
		overflowScroll: true,
		updateHash: true,
		touchScroll:true,
		before:function() {},
		after:function() {},
		afterResize:function() {},
		afterRender:function() {}
	});
    
    $('#intro').particleground({
    dotColor: '#ff0000',
    lineColor: '#ff0000',
    density: 5000
    });
    $('#gol').particleground({
    dotColor: '#00ff00',
    lineColor: '#00ff00'
    });
    $('#snow').particleground({
    dotColor: '#0000ff',
    lineColor: '#0000ff'
    });
    $('#linksidebar').particleground({
    dotColor: '#f000ff',
    lineColor: '#f000ff'
    });
    $('#aslider').particleground({
    dotColor: '#f0f0ff',
    lineColor: '#f0f0ff'
    });
    $('#other-stuff').particleground({
    dotColor: '#ff00ff',
    lineColor: '#ff00ff'
    });
 };
    
 return {
    init: init,     
 }
}
