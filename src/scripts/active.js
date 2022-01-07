var tabs = document.querySelectorAll(".tabsInformation");


tabs.forEach(tab => {
    tab.addEventListener('click', function(){
        tabs.forEach(tbs => tbs.classList.remove('active'));
        this.classList.add('active');
    })
})