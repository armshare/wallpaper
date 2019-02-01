<!DOCTYPE html>
<html>
<head>
<title>New Tab</title>
<meta name="description" content="Custom themed new tab. Get the best free chrome extension and theme your browser with your favorite heros.">
<meta name="keywords" content="Chrome new tab, custom tab,">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- <link rel="stlyesheet" href="css/font-awesome.min.css" type="text/css"> -->
<link 
  href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" 
  rel="stylesheet"  type='text/css'>

<link rel="stylesheet" href="css/perfect-scrollbar.min.css" type="text/css">
<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
<link rel="stylesheet" href="css/style.css" type="text/css">

<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>
<script src="js/tippy.all.min.js" type="text/javascript"></script>
<script src="js/jquery.lazy.min.js" type="text/javascript"></script>
<script src="js/analytics.js"type="text/javascript"></script>
<script src="js/jquery.storageapi.min.js" type="text/javascript"></script>
</head>

<body class="maincontent">
<!-- <div id="background-image" style="background-image: url(&quot;./default/image28.jpg&quot;);"></div> -->
<div id="background-image" ></div>

<nav>
        <div class="background" data-tippy="<small>Click to change <br/> background</small>" data-tippy-arrow="true">
            <a id="lnk_topsites">Backgrounds</a>
        </div>

        <div class="themes" data-toggle="modal" data-target="#myModal" >
            <a id="lnk_tool">Themes</a>
        </div>
        <div class="app">
            <a id="lnk_tool">Apps</a>
        </div>
      
        <a id="click-Rate" href="#">Most Visited</a>

		<div id="searchbox" style="opacity: 0.7;">
				<input type="text" name="search" id="searchInput" placeholder="Search here..." autocomplete="off" autofocus="" class="ui-autocomplete-input">
				<div id="btn-search" class="glyphicon glyphicon-search"></div>
		</div>
</nav>

<div id="sidebar" style="display: none;">
        <div id="head">
            <span class="close"></span>
        </div>
        <div id="headnav">
            <ul id="nav">
                <li class="listitem current" id="wallpaper">Wallpapers</li>
                <li class="listitem" id="favorite">Favorites</li>
                <li class="listitemoptions" id="options"><span class="fa fa-cog" style="margin: 0 2px;"></span>Options</li>
            </ul>
        </div>
        <div id="headslider">
            <div id="slider">
                <div id="galery" class="test ps-container ps-theme-default ps-active-y" data-ps-id="4cfdf703-707b-7109-a9e1-33249dbde235" style="left: 0%;">
                    <ul class="piclist">
                        <!-- <li class="imglist" style="background-image: url('https://cdn.fantastic-themes.com/unicorn/image1.jpg');"> -->
                        <li class="imglist" style="background-image: url('/default/image28.jpg');">
                            <div class="fav fa fa-star-o"></div>
                        </li>
                        <li class="imglist" style="background-image: url('/default/image29.jpg');">
                            <div class="fav fa fa-star-o"></div>
                        </li>
                    </ul>
                    <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: -258px;">
                        <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                    </div>
                    <div class="ps-scrollbar-y-rail" style="top: 258px; right: 0px; height: 143px;">
                        <div class="ps-scrollbar-y" tabindex="0" style="top: 4px; height: 2px;"></div>
                    </div>
                </div>
                <div id="favorites" class="test ps-container ps-theme-default" data-ps-id="2e73f020-fc70-b298-a539-cb95dd0c2c7a" style="left: 100%;">
                    <div class="notify" style="display: block;">
                    <h2>You don't have any favorites!</h2>
                    <p>Click STAR icon to add picture to favorites.</p>
                </div>
                <ul class="favlist"></ul>
                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                    <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                </div>
                <div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px;">
                    <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                </div>
            </div>
        </div>
        
        <div id="settings" style="left: 200%;">
            <div class="box">
                <h3>Open New Tab with:</h3>
                    <ul class="optionslst">
                        <li class="opt-rand">Random image</li>
                        <li class="opt-selct">Selected image</li>
                        <li class="opt-fav">Random image from favorites</li>
                    </ul>
            </div>
        </div>
        </div>
</div>
<div id="sidebarApp" style="display: none;">
    <div id="head">
        <span class="close"></span>
    </div>
                <!-- <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Apps </a> -->
                <ul class="list-group">
                    <li class="list-group-item" onclick="go('https://facebook.com')">
                <button class="linkbtn"><img class="linkimg" src="img/facebook.png"></button>
                <span class="linklabel">Facebook</span>
                </li>
                
                <li class="list-group-item" onclick="go('https://youtube.com')">
                <button class="linkbtn"><img class="linkimg" src="img/youtube.png"></button>
                <span class="linklabel">Youtube</span>
                </li>
                
                <li class="list-group-item" onclick="go('https://www.instagram.com/')">
                <button class="linkbtn"><img class="linkimg" src="img/instagram.png"></button>
                <span class="linklabel">Instagram</span>
                </li>
                
                <li class="list-group-item" onclick="go('https://mail.google.com')">
                <button class="linkbtn"><img class="linkimg" src="img/gmail_bak.png"></button>
                <span class="linklabel">Gmail</span>
                </li>
                
                <li class="list-group-item" onclick="go('http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=1&amp;pub=5575157943&amp;toolid=10001&amp;campid=5338387540&amp;customid=&amp;ipn=psmain&amp;icep_vectorid=229466&amp;kwid=902099&amp;mtid=824&amp;kw=lg')">
                <button class="linkbtn"><img class="linkimg" src="img/ebay.png"></button>
                    <span class="linklabel">eBay</span>
                </li>
                
                <li class="list-group-item" onclick="go('https://amazon.com')">
                <button class="linkbtn"><img class="linkimg" src="img/amazon.png"></button>
                <span class="linklabel">Amazon</span>
                </li>
                
                <li class="list-group-item" onclick="go('http://s.click.aliexpress.com/e/vbamiyJYj')">
                <button class="linkbtn"><img class="linkimg" src="img/aliexpress.png"></button>
                <span class="linklabel">Aliexpress</span>
                </li>
                
                <li class="list-group-item" onclick="go('http://www.booking.com/resorts/index.html?aid=1169103')">
                <button class="linkbtn"><img class="linkimg" src="img/booking.png"></button>
                <span class="linklabel">Booking</span>
                </li>
        </ul>
        
</div>

<div id="support_menu" style="display:none;">
    <div id="head">
        <span class="close"></span>
    </div>
    <ul class="list-group">
        <li class="list-group-item" >
            <a class="lnk_update_0_1_8" href="http://freeaddon.com/update-0-1-8/" target="_blank">Update 0.1.8</a>
    </li>
    
    <li class="list-group-item" >
        <a class="lnk_faq" href="http://freeaddon.com/faq/" target="_blank">FAQ / How-to</a>
    </li>
    
    <li class="list-group-item" >
        <a class="click-Feedback" href="#">Feedback</a>
    </li>
    
    <li class="list-group-item" >
        <a class="click-Donate" href="#">Donate</a>
    </li>
    
    <li class="list-group-item" >
            <a class="click-Fanpage" href="#">Fan Page</a>
    </li>
    
    <li class="list-group-item" >
            <a class="lnk_eula" href="http://freeaddon.com/eula/" target="_blank">EULA</a>
    </li>
    
    <li class="list-group-item" >
            <a class="lnk_privacy" href="http://freeaddon.com/privacy/" target="_blank">Privacy Policy</a>
    </li>
    
    <li class="list-group-item">
            <a class="uninstallSelf">Uninstall</a>
    </li>
</ul>

</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
          <h4 class="modal-title" id="myModalLabel">Please Select Theme</h4>
        </div>
        <div class="modal-body">
            <div class="row form-group">
                <div class="col-md-4">
                    <a href="#"><img class="img-responsive img-thumbnail" src="../../wallpaper/default/image29.jpg"/></a>
                </div>
                <div class="col-md-4">
                    <a href="#"><img class="img-responsive img-thumbnail" src="
                        /image28.jpg"/></a>
                </div> 
                <div class="col-md-4">
                    <a href="#"><img class="img-responsive img-thumbnail" src="
                        /image28.jpg"/></a>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-md-4">
                    <a href="#"><img class="img-responsive img-thumbnail" src="
                        /image28.jpg"/></a>
                </div>
                <div class="col-md-4">
                    <a href="#"><img class="img-responsive img-thumbnail" src="
                        /image29.jpg"/></a>
                </div> 
                <div class="col-md-4">
                    <a href="#"><img class="img-responsive img-thumbnail" src="
                        /image28.jpg"/></a>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-md-4">
                    <a href="#"><img class="img-responsive img-thumbnail" src="
                        /image28.jpg"/></a>
                </div>
                <div class="col-md-4">
                    <a href="#"><img class="img-responsive img-thumbnail" src="
                        /image28.jpg"/></a>
                </div> 
                <div class="col-md-4">
                    <a href="#"><img class="img-responsive img-thumbnail" src="
                        /image29.jpg"/></a>
                </div>
            </div>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
</div>

<div class="widget">
    <span href="#" id="weather" class="temp"><img src="./img/clock.png"></span>
    <div class="time" data-tippy="<small>Click to change between 24 and 12 hours</small>" data-tippy-arrow="true" style="display: inline-block;">
        
        <h1 class="hour" id="time"></h1>
        <!-- <div class="ampm" style="display: none;">AM</div> -->
        <div class="date" id="date"></div>
    </div>
</div>
	
	<footer>
	<div id="bottom">

        <div class="support">
			<a id="lnk_support_Share">Share</a>
			<a id="lnk_support_Rate">Rate</a>
            <a id="lnk_support" data-toggle="popover" data-placement="top"  data-trigger="focus" tabindex="0">Support</a>
        </div>
    </div>
    </footer>
   
  
</body>
</html>
<script type="text/javascript" src="/js/analytics.js"></script>