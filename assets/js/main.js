function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

const ctx = document.getElementById('myChart');

const data = {

    datasets: [{
      label: 'My First Dataset',
      data: [50, 50, 50, 60],
      backgroundColor: [
        '#295FE6',
        '#ED7FB7',
        '#EE7B30',
        '#F1AA3C',
      ],
      hoverOffset: 4
    }]
};

new Chart(ctx, {
  type: 'doughnut',
  data: data,
});