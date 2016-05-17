$(function() {

    //alert("hello");

    $("#slider1").slider();

    $("#button1, #button2, #button3").button();
    $("#button4").button();

    $("#dialog1").dialog({
        autoOpen: false,
        buttons: {
            OK: function() { $(this).dialog("close"); }
        }
    });
    $("#launcher").click(function() {
        $("#dialog1").dialog("open");

    });

    $("#datepicker1").datepicker();

    var searchDBString = [
        "Meat",
        "Chicken",
        "Fish",
        "Pork",
        "Beef",
        "Lamp",
        "Lamb",
    ];
    $("#autocomplete1").autocomplete({
        source: searchDBString,

    });

    $("#accordion1").accordion({
        collapsible: true
    });

    $("#menu1").menu();


    //Justin's part

    var lunchboxReset = $('.lunchbox').html();
    var nfReset = $('.nf').html();

    $("#accordion").accordion({
        disabled: false,
        active: true
    });

    function bindings() {
        $(".lunchbox ol").droppable({
            activeClass: "lunchbox--active",
            hoverClass: "lunchbox--hover",
            accept: ":not(.ui-sortable-helper)",
            drop: function(event, ui) {
                $(this).find(".placeholder").remove();
                var count = $(this).find('li:has(img)').length + 1;
                if (count > 10) {
                    ui.draggable.draggable('option', 'revert', true);
                    $(".diet-plate__container li").disableSelection();
                    alert('You have too much food!\n\n Please behave yourself.');
                    return;
                } else {
                    $("<li></li>").html(ui.draggable.html()).appendTo(this);
                    ui.draggable.draggable('option', 'revert', false);
                    $(".diet-plate__container li").draggable();
                }
                var calories = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('calories');
                    }, 0);
                var totalFat = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('total-fat');
                    }, 0);
                var cholesterol = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('cholesterol');
                    }, 0);
                var sodium = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('sodium');
                    }, 0);
                var dietaryFiber = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('dietary-fiber');
                    }, 0);
                var sugar = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('sugar');
                    }, 0);
                var protein = $(this).find('img').get().reduce(
                    function(a, b) {
                        return a + $(b).data('protein');
                    }, 0);
                console.log("A total of " + calories + " calories.");
                $('#value--calories').empty().append(calories);
                $('#value--total-fat').empty().append(totalFat);
                $('#value--cholesterol').empty().append(cholesterol);
                $('#value--sodium').empty().append(sodium);
                $('#value--dietary-fiber').empty().append(dietaryFiber);
                $('#value--sugar').empty().append(sugar);
                $('#value--protein').empty().append(protein);

            }
        }).sortable({
            items: "li:not(.placeholder)",
            sort: function() {
                $(this).removeClass("lunchbox--active");

            },
        });
        $(this).find(".placeholder").disableSelection();
        $(".diet-plate__container").find('li').draggable({
            appendTo: "body",
            accept: ".lunchbox",
            helper: "clone",
            scroll: false,
            cursor: 'move',
            connectWith: ".placeholder",
        });
    }
    bindings();

    $('#steak-tooltip').tooltipster({
        content: $('<p><strong>Grilled Steak</strong></p><p>serving size: 8oz</p></p><p>Calories: 260<br>Total Fat: 20 <br>Cholesterol: 70<br>Sodium: 55<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 21</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#lamb-tooltip').tooltipster({
        content: $('<p><strong>Rack of Lamb</strong></p><p>serving size: 2 rib chops</p></p><p>Calories: 270<br>Total Fat: 22 <br>Cholesterol: 65<br>Sodium: 350<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 16</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });

    $('#lamb_chop-tooltip').tooltipster({
        content: $('<p><strong>Lamb Steak</strong></p><p>serving size: 7oz</p></p><p>Calories: 401<br>Total Fat: 19<br>Cholesterol: 173<br>Sodium: 131<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 53</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#pork_belly-tooltip').tooltipster({
        content: $('<p><strong>Roast Pork Belly</strong></p><p>serving size: 6oz</p></p><p>Calories: 480<br>Total Fat: 42<br>Cholesterol: 90<br>Sodium: 700<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 26</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#pork_tenderloin-tooltip').tooltipster({
        content: $('<p><strong>Pork Tenderloin</strong></p><p>serving size: 6oz</p></p><p>Calories: 244<br>Total Fat: 6<br>Cholesterol: 124<br>Sodium: 96<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 44</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#roast_beef-tooltip').tooltipster({
        content: $('<p><strong>Roast Beef</strong></p><p>serving size: 8oz</p></p><p>Calories: 424<br>Total Fat: 17<br>Cholesterol: 195<br>Sodium: 83<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 62</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#grilled_chicken_breast-tooltip').tooltipster({
        content: $('<p><strong>Grilled Chicken Breast</strong></p><p>serving size: 6oz</p></p><p>Calories: 275<br>Total Fat: 6<br>Cholesterol: 145<br>Sodium: 193<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 54</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#fried_chicken-tooltip').tooltipster({
        content: $('<p><strong>Chicken Nuggets</strong></p><p>serving size: 6 pieces</p></p><p>Calories: 280<br>Total Fat: 18<br>Cholesterol: 40<br>Sodium: 540<br>Dietary Fiber: 1<br>Sugar: 0<br>Protein: 13</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#roast_chicken_leg_quarter-tooltip').tooltipster({
        content: $('<p><strong>Roast Leg of Chicken</strong></p><p>serving size: 4oz</p></p><p>Calories: 264<br>Total Fat: 15<br>Cholesterol: 105 <br>Sodium: 99<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 30</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#roastDuck-tooltip').tooltipster({
        content: $('<p><strong>Roast Duck</strong></p><p>serving size: 1 leg</p></p><p>Calories: 200<br>Total Fat: 10<br>Cholesterol: 105<br>Sodium: 101<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 25</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#duck_confit-tooltip').tooltipster({
        content: $('<p><strong>Duck Confit</strong></p><p>serving size: 3.5oz</p></p><p>Calories: 310<br>Total Fat: 20<br>Cholesterol: 135<br>Sodium: 1140<br>Dietary Fiber: 0<br>Sugar: 1<br>Protein: 31</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#panseared_salmon-tooltip').tooltipster({
        content: $('<p><strong>Pan-Seared Salmon</strong></p><p>serving size: 132g</p></p><p>Calories: 220<br>Total Fat: 9<br>Cholesterol: 30<br>Sodium: 520<br>Dietary Fiber: 1<br>Sugar: 1<br>Protein: 19</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#baked_salmon-tooltip').tooltipster({
        content: $('<p><strong>Baked Salmon</strong></p><p>serving size: 135g</p></p><p>Calories: 274<br>Total Fat: 19<br>Cholesterol: 67<br>Sodium: 284<br>Dietary Fiber: 0.5<br>Sugar: 0<br>Protein: 24</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#tuna_sashimi-tooltip').tooltipster({
        content: $('<p><strong>Tuna Sashimi</strong></p><p>serving size: 6 pieces</p></p><p>Calories: 186<br>Total Fat: 1.8<br>Cholesterol: 78<br>Sodium: 60<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 40</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#salmon_sashimi-tooltip').tooltipster({
        content: $('<p><strong>Salmon Sashimi</strong></p><p>serving size: 6 pieces</p></p><p>Calories: 238<br>Total Fat: 13<br>Cholesterol: 120<br>Sodium: 60<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 25</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#grilled_mackerel-tooltip').tooltipster({
        content: $('<p><strong>Grilled Mackarel</strong></p><p>serving size: 85g</p></p><p>Calories: 189<br>Total Fat: 12<br>Cholesterol: 64<br>Sodium: 352<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 19</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#calamares-tooltip').tooltipster({
        content: $('<p><strong>Calamares</strong></p><p>serving size: 85g</p></p><p>Calories: 134<br>Total Fat: 1.2<br>Cholesterol: 190<br>Sodium: 632<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 28</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#steamed_shrimp-tooltip').tooltipster({
        content: $('<p><strong>Steamed Shrimp</strong></p><p>serving size: 6 pieces</p></p><p>Calories: 42<br>Total Fat: 0.66<br>Cholesterol: 60<br>Sodium: 174<br>Dietary Fiber: 0<br>Sugar: 0<br>Protein: 8</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#whole_weat_bread-tooltip').tooltipster({
        content: $('<p><strong>Whole Wheat Bread</strong></p><p>serving size: 1 slice</p></p><p>Calories: 69<br>Total Fat: 1<br>Cholesterol: 0<br>Sodium: 132<br>Dietary Fiber: 2<br>Sugar: 1.6<br>Protein: 3.6</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#white_bread-tooltip').tooltipster({
        content: $('<p><strong>Whole Wheat Bread</strong></p><p>serving size: 1 slice</p></p><p>Calories: 67<br>Total Fat: 0.8<br>Cholesterol: 0<br>Sodium: 170<br>Dietary Fiber: 0.6<br>Sugar: 1.1<br>Protein: 2</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#brioche_bun-tooltip').tooltipster({
        content: $('<p><strong>Brioche Bun</strong></p><p>serving size: 1 piece</p></p><p>Calories: 277<br>Total Fat: 7<br>Cholesterol: 24<br>Sodium: 400<br>Dietary Fiber: 1<br>Sugar: 7<br>Protein: 8</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#brown_rice-tooltip').tooltipster({
        content: $('<p><strong>Brown Rice</strong></p><p>serving size: 1 cup</p></p><p>Calories: 200<br>Total Fat: 1.3<br>Cholesterol: 0<br>Sodium: 0<br>Dietary Fiber: 1.3<br>Sugar: 0<br>Protein: 4</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#white_rice-tooltip').tooltipster({
        content: $('<p><strong>White Rice</strong></p><p>serving size: 1 cup</p></p><p>Calories: 182<br>Total Fat: 0.4<br>Cholesterol: 0<br>Sodium: 1<br>Dietary Fiber: 0.6<br>Sugar: 0.1<br>Protein: 4</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#quinoa-tooltip').tooltipster({
        content: $('<p><strong>Quinoa</strong></p><p>serving size: 1 cup</p></p><p>Calories: 160<br>Total Fat: 2.5<br>Cholesterol: 0<br>Sodium: 0<br>Dietary Fiber: 3<br>Sugar: 0<br>Protein: 6</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#pasta-tooltip').tooltipster({
        content: $('<p><strong>Pasta Spaghetti</strong></p><p>serving size: 1 cup</p></p><p>Calories: 220<br>Total Fat: 1.3<br>Cholesterol: 0<br>Sodium: 183<br>Dietary Fiber: 2.5<br>Sugar: 1<br>Protein: 8</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
     $('#egg_noodles-tooltip').tooltipster({
        content: $('<p"><strong>Egg Noodles</strong></p><p>serving size: 1 cup</p></p><p>Calories: 221<br>Total Fat: 3.3<br>Cholesterol: 46<br>Sodium: 8<br>Dietary Fiber: 2<br>Sugar: 0.6<br>Protein: 7.3</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
     $('#rice_noodles-tooltip').tooltipster({
        content: $('<p><strong>Rice Noodles</strong></p><p>serving size: 1 cup</p></p><p>Calories: 192<br>Total Fat: 0.4<br>Cholesterol: 0<br>Sodium: 33<br>Dietary Fiber: 2<br>Sugar: 0<br>Protein: 1.6</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
     $('#wheat_crackers-tooltip').tooltipster({
        content: $('<p><strong>Whole Wheat Crackers</strong></p><p>serving size: 5 crackers</p></p><p>Calories: 70<br>Total Fat: 2.5<br>Cholesterol: 0<br>Sodium: 120<br>Dietary Fiber: 1<br>Sugar: 2<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#wheat_crackers-tooltip').tooltipster({
        content: $('<p><strong>Whole Wheat Crackers</strong></p><p>serving size: 5 crackers</p></p><p>Calories: 70<br>Total Fat: 2.5<br>Cholesterol: 0<br>Sodium: 120<br>Dietary Fiber: 1<br>Sugar: 2<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    }); 
    $('#apple-tooltip').tooltipster({
        content: $('<p><strong>Apple</strong></p><p>serving size: 1 apple</p></p><p>Calories: 116<br>Total Fat: 0.4<br>Cholesterol: 0<br>Sodium: 2<br>Dietary Fiber: 5.4<br>Sugar: 23<br>Protein: 0.6</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#pineapple-tooltip').tooltipster({
        content: $('<p><strong>Pineapple</strong></p><p>serving size: 1 cup, diced</p></p><p>Calories: 80<br>Total Fat: 0.5<br>Cholesterol: 0<br>Sodium: 0<br>Dietary Fiber: 2<br>Sugar: 17<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#banana-tooltip').tooltipster({
        content: $('<p><strong>Banana</strong></p><p>serving size: 1 banana</p></p><p>Calories: 110<br>Total Fat: 0<br>Cholesterol: 0<br>Sodium: 0<br>Dietary Fiber: 3<br>Sugar: 19<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#orange-tooltip').tooltipster({
        content: $('<p><strong>Orange</strong></p><p>serving size: 1 orange, large</p></p><p>Calories: 45<br>Total Fat: 0<br>Cholesterol: 0<br>Sodium: 0<br>Dietary Fiber: 2<br>Sugar: 9<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#strawberry-tooltip').tooltipster({
        content: $('<p><strong>Strawberries</strong></p><p>serving size: 1 cup, halves</p></p><p>Calories: 49<br>Total Fat: 0.5<br>Cholesterol: 0<br>Sodium: 2<br>Dietary Fiber: 3<br>Sugar: 7.4<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#blueberry-tooltip').tooltipster({
        content: $('<p><strong>Blueberries</strong></p><p>serving size: 1 cup</p></p><p>Calories: 80<br>Total Fat: 0.5<br>Cholesterol: 0<br>Sodium: 10<br>Dietary Fiber: 4<br>Sugar: 17<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#pomegranate-tooltip').tooltipster({
        content: $('<p><strong>Pomegranate</strong></p><p>serving size: 1 pomegranate, med</p></p><p>Calories: 100<br>Total Fat: 0<br>Cholesterol: 0<br>Sodium: 0<br>Dietary Fiber: 1<br>Sugar: 21<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#watermelon-tooltip').tooltipster({
        content: $('<p><strong>Watermelon</strong></p><p>serving size: 2 cups, diced</p></p><p>Calories: 80<br>Total Fat: 0<br>Cholesterol: 0<br>Sodium: 0<br>Dietary Fiber: 2<br>Sugar: 25<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#grapes-tooltip').tooltipster({
        content: $('<p><strong>Grapes</strong></p><p>serving size: 1 cup</p></p><p>Calories: 60<br>Total Fat: 0.5<br>Cholesterol: 0<br>Sodium: 10<br>Dietary Fiber: 1<br>Sugar: 15<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#raisins-tooltip').tooltipster({
        content: $('<p><strong>Raisins</strong></p><p>serving size: 1oz</p></p><p>Calories: 90<br>Total Fat: 0<br>Cholesterol: 0<br>Sodium: 5<br>Dietary Fiber: 2<br>Sugar: 20<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#dates-tooltip').tooltipster({
        content: $('<p><strong>Dates</strong></p><p>serving size: 2 dates</p></p><p>Calories: 96<br>Total Fat: 0<br>Cholesterol: 0<br>Sodium: 0<br>Dietary Fiber: 2.4<br>Sugar: 23<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#steamed_brocolli-tooltip').tooltipster({
        content: $('<p><strong>Steamed Brocolli</strong></p><p>serving size: 1 cup</p></p><p>Calories: 52<br>Total Fat: 2<br>Cholesterol: 0<br>Sodium: 113<br>Dietary Fiber: 3<br>Sugar: 2<br>Protein: 3</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#spinach-tooltip').tooltipster({
        content: $('<p><strong>Fresh Spinach</strong></p><p>serving size: 1 cup</p></p><p>Calories: 7<br>Total Fat: 0<br>Cholesterol: 0<br>Sodium: 24<br>Dietary Fiber: 0.7<br>Sugar: 0.1<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#romaine_lettuce-tooltip').tooltipster({
        content: $('<p><strong>Fresh Romaine Lettuce</strong></p><p>serving size: 2 cups</p></p><p>Calories: 16<br>Total Fat: 0.3<br>Cholesterol: 0<br>Sodium: 8<br>Dietary Fiber: 2<br>Sugar: 1<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#brussell_sprouts-tooltip').tooltipster({
        content: $('<p><strong>Roasted Brussell Sprouts</strong></p><p>serving size: 1 cup</p></p><p>Calories: 104<br>Total Fat: 2.2<br>Cholesterol: 7<br>Sodium: 299<br>Dietary Fiber: 5<br>Sugar: 6<br>Protein: 5</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#mushrooms-tooltip').tooltipster({
        content: $('<p><strong>Stir-fried Shiitake Mushrooms</strong></p><p>serving size: 1 cup, pieces</p></p><p>Calories: 78<br>Total Fat: 0.3<br>Cholesterol: 0<br>Sodium: 348<br>Dietary Fiber: 3<br>Sugar: 5<br>Protein: 2</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#baked_potatoes-tooltip').tooltipster({
        content: $('<p><strong>Baked Potato</strong></p><p>serving size: 1 potato, large</p></p><p>Calories: 278<br>Total Fat: 0.4<br>Cholesterol: 0<br>Sodium: 730<br>Dietary Fiber: 6.6<br>Sugar: 3.5<br>Protein: 7.5</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#green_beans-tooltip').tooltipster({
        content: $('<p><strong>Steamed Green Beans</strong></p><p>serving size: 1 cup</p></p><p>Calories: 44<br>Total Fat: 0.3<br>Cholesterol: 0<br>Sodium: 299<br>Dietary Fiber: 4<br>Sugar: 2<br>Protein: 2.4</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#bell_peppers-tooltip').tooltipster({
        content: $('<p><strong>Red Bell Pepper</strong></p><p>serving size: 1 cup, strips</p></p><p>Calories: 38<br>Total Fat: 0.4<br>Cholesterol: 0<br>Sodium: 3<br>Dietary Fiber: 1.6<br>Sugar: 6<br>Protein: 1</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#carrots-tooltip').tooltipster({
        content: $('<p><strong>Raw Carrots</strong></p><p>serving size: 1 carrot, med</p></p><p>Calories: 25<br>Total Fat: 0<br>Cholesterol: 0<br>Sodium: 42<br>Dietary Fiber: 1.5<br>Sugar: 3<br>Protein: 0.5</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#asparagus-tooltip').tooltipster({
        content: $('<p><strong>Steamed Asparagus</strong></p><p>serving size: 1/2 cup</p></p><p>Calories: 20<br>Total Fat: 0.2<br>Cholesterol: 0<br>Sodium: 216<br>Dietary Fiber: 2<br>Sugar: 1<br>Protein: 2</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#tomatoes-tooltip').tooltipster({
        content: $('<p><strong>Fresh Roma Tomatoes</strong></p><p>serving size: 3 tomatoes, med</p></p><p>Calories: 40<br>Total Fat: 0.5<br>Cholesterol: 0<br>Sodium: 15<br>Dietary Fiber: 2<br>Sugar: 5<br>Protein: 2</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });
    $('#kale-tooltip').tooltipster({
        content: $('<p><strong>Fresh Kale</strong></p><p>serving size: 1 cup, chopped</p></p><p>Calories: 33<br>Total Fat: 0<br>Cholesterol: 0<br>Sodium: 29<br>Dietary Fiber: 1<br>Sugar: 0<br>Protein: 2</p>'),
        // setting a same value to minWidth and maxWidth will result in a fixed width
        minWidth: 200,
        maxWidth: 200,
        position: 'top',
        theme: 'tooltipster-noir'
    });




    $('.reset-btn').click(function() {
        $('.lunchbox').html(lunchboxReset);
        $('.nf').html(nfReset);
        bindings();
    });

    $(document).on('click', '.x-close', function() {

        $(this).parent().remove();

        // var calories = $(".ui-droppable").find('img').data('calories').toArray().reduce(
        //   function(prev, curr) {
        //     return prev + curr;
        //   });

        var calories = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('calories');
            }, 0);
        var totalFat = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('total-fat');
            }, 0);
        var cholesterol = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('cholesterol');
            }, 0);
        var sodium = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('sodium');
            }, 0);
        var dietaryFiber = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('dietary-fiber');
            }, 0);
        var sugar = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('sugar');
            }, 0);
        var protein = $(".ui-droppable").find('img').get().reduce(
            function(a, b) {
                return a + $(b).data('protein');
            }, 0);
        console.log("A total of " + calories + " calories.");
        $('#value--calories').empty().append(calories);
        $('#value--total-fat').empty().append(totalFat);
        $('#value--cholesterol').empty().append(cholesterol);
        $('#value--sodium').empty().append(sodium);
        $('#value--dietary-fiber').empty().append(dietaryFiber);
        $('#value--sugar').empty().append(sugar);
        $('#value--protein').empty().append(protein);

    });

});
