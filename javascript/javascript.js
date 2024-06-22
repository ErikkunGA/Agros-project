var header= document.getElementById('header');
var navigation_header= document.getElementById('navigation_header');
var content= document.getElementById('content');
var showSidebar= false;
    
        function toggleSidebar()
        {
            showSidebar = !showSidebar;
            if(showSidebar)
            {
                navigation_header.style.marginLeft = '-10vw';
                navigation_header.style.animation = 'showSidebar';
                content.style.filter = 'blur(2px)';
            }
            else
            {
                navigation_header.style.marginLeft = '-100vw';
                navigation_header.style.animation = '';
                content.style.filter = '';
            }
        }
        function closeSidebar()
        {
            if(showSidebar)
            {
                toggleSidebar();
            }
        }
        window.addEventListener('resize', function(event){
            if (window.innerWidth > 768 && showSidebar)
            {
                toggleSidebar();
            }
});