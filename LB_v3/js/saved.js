// $(document).ready(function() {
//     $("#save-meal").click(function(){
//         var calories = $('.nf__table #value--calories').text();
//         var totalfat = $('.nf__table #value--total-fat').text();
//         var cholesterol = $('.nf__table #value--cholesterol').text();
//         var sodium = $('.nf__table #value--sodium').text();
//         var fiber = $('.nf__table #value--dietary-fiber').text();
//         var sugar = $('.nf__table #value--sugar').text();
//         var protein = $('.nf__table #value--protein').text();

// 		localStorage.setItem('value--calories', calories);
// 		localStorage.setItem('value--total-fat', totalfat);
// 		localStorage.setItem('value--cholesterol', cholesterol);
// 		localStorage.setItem('value--sodium', sodium);
// 		localStorage.setItem('value--fiber', fiber);
// 		localStorage.setItem('value--sugar', sugar);
// 		localStorage.setItem('value--protein', protein);
//     }); 
// });

// $(document).ready(function() {
//     $("#gotosave").click(function(){
//         localStorage.getItem('value--calories');
//         localStorage.getItem('value--total-fat');
//         localStorage.getItem('value--cholesterol');
//         localStorage.getItem('value--sodium');
//         localStorage.getItem('value--fiber');
//         localStorage.getItem('value--sugar');
//         localStorage.getItem('value--protein');

//     }); 

//     document.getElementById("#saved-items").innerHTML = "Hello World";
// });



$(document).ready(function() {
     
	$("#save-meal").click(function(){
   		var calories = $('.nf__table #value--calories').text();
        var totalfat = $('.nf__table #value--total-fat').text();
        var cholesterol = $('.nf__table #value--cholesterol').text();
        var sodium = $('.nf__table #value--sodium').text();
        var fiber = $('.nf__table #value--dietary-fiber').text();
        var sugar = $('.nf__table #value--sugar').text();
        var protein = $('.nf__table #value--protein').text();

		localStorage.setItem('value--calories', calories);
		localStorage.setItem('value--total-fat', totalfat);
		localStorage.setItem('value--cholesterol', cholesterol);
		localStorage.setItem('value--sodium', sodium);
		localStorage.setItem('value--fiber', fiber);
		localStorage.setItem('value--sugar', sugar);
		localStorage.setItem('value--protein', protein);
    });

    $("#gotosave").click(function(){
   		document.write(localStorage.getItem('value--calories'));
        document.write(localStorage.getItem('value--total-fat'));
        document.write(localStorage.getItem('value--cholesterol'));
        document.write(localStorage.getItem('value--sodium'));
        document.write(localStorage.getItem('value--fiber'));
        document.write(localStorage.getItem('value--sugar'));
        document.write(localStorage.getItem('value--protein'));

    });  


	
});

//document.getElementById("#saved-items").innerHTML = calories;	


// $(function() {

// 	$("#gotosave").click(function(){
//    		document.write(localStorage.getItem('value--calories'));
//         document.write(localStorage.getItem('value--total-fat'));
//         document.write(localStorage.getItem('value--cholesterol'));
//         document.write(localStorage.getItem('value--sodium'));
//         document.write(localStorage.getItem('value--fiber'));
//         document.write(localStorage.getItem('value--sugar'));
//         document.write(localStorage.getItem('value--protein'));

//     }); 
	
// });