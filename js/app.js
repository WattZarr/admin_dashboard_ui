$(".show-sidebar-btn").click(function(){
    $(".side-bar").animate({marginLeft:0});
});

$(".hide-sidebar-btn").click(function(){
    $(".side-bar").animate({marginLeft:"-100%"});
});

$(".full-screen-btn").click(function(){
    $(".full-screen-btn").closest(".card").toggleClass("full-screen-card");
    if($(".full-screen-btn").closest(".card").hasClass("full-screen-card")){
        $(".full-screen-btn").html("<i class='feather-minimize-2 full-screen-btn btn btn-outline-primary'></i>");
    }
    else{
        $(".full-screen-btn").html("<i class='feather-maximize-2 full-screen-btn btn btn-outline-primary'></i>");
    };
    
    
});

let displayHeight = $(window).height();

let active_nav = $(".nav-active").offset().top;

if(active_nav > displayHeight*0.8){
    $(".side-bar").animate({
        scrollTop:active_nav
    },1000);
}


function go(url){
    setTimeout(() => {
        location.href = url
    }, 1500);
};


const ctx = document.getElementById('ov').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Aug 1','Aug 2','Aug 3','Aug 4','Aug 5','Aug 6','Aug 7','Aug 8','Aug 9'],
        datasets: [
            {
                label: 'Orders',
                data: [12, 19, 3, 5, 2, 3,0,21,7],
                backgroundColor: [
                    '#0d6efd30',
                ],
                borderColor: [
                    '#0d6efd',
                ],
                borderWidth: 1,
                fill : true,
            },
            {
                label: 'Viewers',
                data: [30, 23, 65, 7, 22, 31,9,2,4],
                backgroundColor: [
                    '#19875430',
                ],
                borderColor: [
                    '#198754',
                ],
                borderWidth: 1,
                fill : true,
            }
        ],

    },
    options: {
        scales: {
            x:{
                grid: {
                    display : false,
                }
            },
            y: {
                beginAtZero: true,
                grid:{
                    display : false,
                }
            }
        }
    }
});


const op = document.getElementById('op').getContext('2d');
const opchart = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: ['MDY','YGN','NPT','SGN','MGK'],
        datasets: [{
            label: 'Orders And Places',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                display:false,
                beginAtZero: true
            }
        }
    }
});



