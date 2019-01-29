function go(url) {
  ga("send", "pageview", { page: url });
  window.open(url);
}
$(document).ready(function() {
  var storage = $.localStorage;
  var theme = window.location.pathname.split("/")[1];
  console.log("theme : ", theme);

  var changed_theme = storage.get("changed_theme");
  var original_theme = theme;
  console.log("original_theme : ", original_theme);

  if (!original_theme) {
    original_theme = "default";
    console.log("original_theme is set : ", original_theme);
  }
  if (changed_theme) {
    theme = changed_theme;
    history.replaceState("", "", theme + window.location.search);
  } else if (!theme && !changed_theme) {
    theme = "default";
  }
  $.urlParam = function(name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
      window.location.href
    );
    if (results == null) {
      return null;
    } else {
      return results[1] || 0;
    }
  };
  ga("create", "UA-104538446-3", "auto");
  ga("send", "pageview");
  console.log("Build: 6.1.4");
  //   $("#searchInput").googleSuggest();
  //   $('[data-toggle="tooltip"]').tooltip();
  $("#searchbox").focusout(function() {
    $(this).css("opacity", "0.7");
  });
  $("#searchbox").focusin(function() {
    $(this).css("opacity", "1");
  });
  // $(".test").perfectScrollbar();
  $.ajaxSetup({ cache: true });
  Date.prototype.getDayOfWeek = function() {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ][this.getDay()];
  };
  Date.prototype.getMonthString = function() {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ][this.getMonth()];
  };
  if (storage.isEmpty(theme)) {
    console.log("No theme need set new theme");

    var data = {
      default: {
        images: ["image28.jpg", "image29.jpg"],
        units: "fahrenheit",
        mode: "random",
        selected: "image29.jpg",
        favorites: [],
        install_date : Date.now()
      }
    };
    console.log(theme, data);
    storage.set("default", data);

    // $.ajax({
    //   url: "themes/" + theme + "/settings.json",
    //   dataType: "json",
    //   async: false,
    //   success: function(data) {
    //

    //     //storage.set(theme, data);
    //   },
    //   error: function() {
    //    // window.location = window.location.origin;
    //   }
    // });
  }
  var config = storage.get(theme);
  console.log("config :", config);
  console.log("storage.isEmpty(userid) :", storage.isEmpty("userid"));

    if (storage.isEmpty("userid")) {
      var userid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
      storage.set("userid", userid);
      console.log("storage.set(userid) :", storage.get("userid"));
    }
  //   if (config[theme]["alert"] || changed_theme) {
  //     load_onesignal();
  //   }
  //   if (
  //     config[theme]["install_date"] &&
  //     !config[theme]["alert"] &&
  //     $.urlParam("page") !== "welcome" &&
  //     $.urlParam("page") !== "theme"
  //   ) {
  //     ga("send", "event", "install", "install_" + theme);
  //     $.getScript("js/save.js?cb=" + new Date().getTime());
  //     config[theme]["alert"] = "true";
  //     storage.set(theme, config);
  //   }
  //   if ($.urlParam("page") == "welcome") {
  //     config[theme]["extid"] = $.urlParam("extid");
  //     config[theme]["install_date"] = Date.now();
  //     document.cookie =
  //       "installDate=" +
  //       config[theme]["install_date"] +
  //       "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  //     document.cookie =
  //       "theme=" + theme + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  //     storage.set("changed_theme", "");
  //     storage.set(theme, config);
  //     $.getScript("js/welcome.js?cb=" + new Date().getTime());
  //     open_images_menu();
  //   } else if ($.urlParam("page") == "theme") {
  //     history.replaceState("", "", window.location.pathname);
  //     open_images_menu();
  //   } else {
      switch (config[theme]["mode"]) {
        case "random":
          var num =
            Math.floor(Math.random() * config[theme]["images"].length) + 0;
          $("#background-image").css(
            "backgroundImage",
            'url("http://' +
              window.location.host +
              "/" +
              theme +
              "/" +
              config[theme]["images"][num] +
              '")'
          );
          console.log('random : ', num)
          if (config[theme]["type"] == "video") {
            //append_video(config[theme]["images"][num]);
          }
          break;
        case "favorites":
          var num =
            Math.floor(Math.random() * config[theme]["favorites"].length) + 0;
            $("#background-image").css(
              "backgroundImage",
              'url("http://' +
                window.location.host +
                "/" +
                theme +
                "/" +
                config[theme]["images"][num] +
                '")'
            );
            console.log('random fav: ', num)
          if (config[theme]["type"] == "video") {
          //  append_video(config[theme]["favorites"][num]);
          }
          break;
        case "selected":
          $("#background-image").css(
            "backgroundImage",
            'url("http://' +
              window.location.host +
              "/" +
              theme +
              "/" +
              config[theme]["selected"] +
              '")'
          );
          if (config[theme]["type"] == "video") {
          //  append_video(config[theme]["selected"]);
          }
          break;
      }
    // }
    var install_cookie = ("; " + document.cookie)
      .split("; installDate=")
      .pop()
      .split(";")
      .shift();
      console.log('install_cookie :  ', install_cookie , !install_cookie || install_cookie == "undefined")
    if (!install_cookie || install_cookie == "undefined") {
      var original_config = storage.get(original_theme);
      console.log('original_config 1 :  ',  original_config )
      console.log('original_config 2:  ',  original_config[original_theme] )
      console.log('original_config 3 :  ',  original_config[original_theme]["install_date"])
      console.log('original_config :  ',  original_config && original_config[original_theme] && original_config[original_theme]["install_date"])
      if (
        original_config &&
        original_config[original_theme] &&
        original_config[original_theme]["install_date"]
      ) {
        install_date = original_config[original_theme]["install_date"];
        document.cookie =
          "installDate=" +
          install_date +
          "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        document.cookie =
          "theme=" + original_theme + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      }
    }
  show_time();
  //   function append_video(file) {
  //     $("#video").remove();
  //     var video = $("<video />", {
  //       id: "video",
  //       src:
  //         "https://cdn." +
  //         window.location.host +
  //         "/" +
  //         theme +
  //         "/" +
  //         file.split(".")[0] +
  //         ".webm",
  //       type: "video/webm",
  //       controls: false,
  //       autoplay: true,
  //       loop: true,
  //       muted: true
  //     });
  //     video.appendTo($("#background-image"));
  //     video.get(0).muted = true;
  //     video.get(0).play();
  //   }
  //   function search(query) {
  //     if (!storage.get("searched")) {
  //       storage.set("searched", true);
  //     }
  //     ga("send", "pageview", {
  //       page: "/" + theme + "/?search_query=" + query,
  //       hitCallback: function() {
  //         window.location =
  //           "https://" +
  //           window.location.host +
  //           "/api/search.php?q=" +
  //           encodeURIComponent(query) +
  //           "&theme=" +
  //           theme.substr(0, 4);
  //       }
  //     });
  //   }
  //   $("#searchInput").keypress(function(key) {
  //     if (key.which == 13) {
  //       if ($("#searchInput").val()) {
  //         search($("#searchInput").val());
  //       }
  //     }
  //   });
  //   $(".ui-autocomplete").on("click", ".ui-menu-item", function() {
  //     search($(this).text());
  //   });
  //   $(".glyphicon-search").on("click", function() {
  //     if ($("#searchInput").val()) {
  //       search($("#searchInput").val());
  //     }
  //   });
  if (!localStorage.getItem("links")) {
    localStorage.setItem("links", "hide");
  }
  if (!localStorage.getItem("clock")) {
    localStorage.setItem("clock", "12");
  }
  $("#time").on("click", function() {
    if (localStorage.getItem("clock") == "12") {
      localStorage.setItem("clock", "24");
    } else {
      localStorage.setItem("clock", "12");
    }
  });
  if (localStorage.getItem("links") == "show") {
    $("#links").show();
    $(".link").attr("data-original-title", "Hide recomended links");
  }
  $(".close").on("click", function() {
    $("#sidebar").hide();
    $("#sidebarApp").hide();
    // $("#bottom").show();
  });
  //   $(".fa-chrome").on("click", function() {
  //     $.getScript("js/sweetalert.min.js", function(data, textStatus, jqxhr) {
  //       if (textStatus == "success") {
  //         $("<link>")
  //           .appendTo("head")
  //           .attr({
  //             type: "text/css",
  //             rel: "stylesheet",
  //             href: "css/sweetalert.css"
  //           })
  //           .ready(
  //             swal(
  //               {
  //                 title: "Does this extension deserve 5/5 stars rating ?",
  //                 showCancelButton: true,
  //                 confirmButtonColor: "#3ccd4e",
  //                 confirmButtonText: "Yes, give it 5 stars",
  //                 cancelButtonText: "No, I have feedbacks",
  //                 closeOnConfirm: true,
  //                 closeOnCancel: true
  //               },
  //               function(isConfirm) {
  //                 if (isConfirm) {
  //                   window.open(
  //                     "https://chrome.google.com/webstore/detail/" +
  //                       config[theme]["extid"] +
  //                       "/reviews"
  //                   );
  //                 } else {
  //                   window.open("mailto:support@" + window.location.host);
  //                 }
  //               }
  //             )
  //           );
  //       }
  //     });
  //   });
  // function pulseIn() {
  //   $(".glyphicon-picture").animate(
  //     { color: "red" },
  //     1000,
  //     "swing",
  //     function() {
  //       $(".glyphicon-picture").animate(
  //         { color: "white" },
  //         1000,
  //         "swing",
  //         function() {
  //           $(".glyphicon-qrcode").animate(
  //             { color: "red" },
  //             1000,
  //             "swing",
  //             function() {
  //               $(".glyphicon-qrcode").animate(
  //                 { color: "white" },
  //                 1000,
  //                 "swing",
  //                 function() {
  //                   $(".fa-facebook-official").animate(
  //                     { color: "red" },
  //                     1000,
  //                     "swing",
  //                     function() {
  //                       $(".fa-facebook-official").animate(
  //                         { color: "white" },
  //                         1000,
  //                         "swing",
  //                         function() {
  //                           $(".fa-chrome").animate(
  //                             { color: "red" },
  //                             1000,
  //                             "swing",
  //                             function() {
  //                               $(".fa-chrome").animate(
  //                                 { color: "white" },
  //                                 1000,
  //                                 "swing",
  //                                 function() {
  //                                   pulseIn();
  //                                 }
  //                               );
  //                             }
  //                           );
  //                         }
  //                       );
  //                     }
  //                   );
  //                 }
  //               );
  //             }
  //           );
  //         }
  //       );
  //     }
  //   );
  // }
  //   function pulseGames() {
  //     $(".games-box").animate({ color: "red" }, 2000, "swing", function() {
  //       $(".games-box").animate({ color: "white" }, 2000, "swing", function() {
  //         $(".top-games-box").animate(
  //           { color: "red" },
  //           2000,
  //           "swing",
  //           function() {
  //             $(".top-games-box").animate(
  //               { color: "white" },
  //               2000,
  //               "swing",
  //               function() {
  //                 pulseGames();
  //               }
  //             );
  //           }
  //         );
  //       });
  //     });
  //   }
  //   $(".glyphicon-qrcode").on("click", function() {
  //     show_theme_picker();
  //   });
  //   $(".games-box").on("click", function() {
  //     $.getScript("js/games.js");
  //   });
  //   $(".top-games-box").on("click", function() {
  //     $.getScript("js/top_games.js");
  //   });
  //   $(".fa-facebook-official").on("click", function() {});
  //   $("#bottom").ready(function() {
  //     pulseIn();
  //     pulseGames();
  //   });
  $(".app").on("click", function() {
    console.log("app click");

    // $("#bottom").hide();
    $("#sidebarApp").show();
    $("#galery").css("left", "0%");
    $("#favorites").css("left", "100%");
    $("#settings").css("left", "200%");
    $("#wallpaper").addClass("current");
    $("#favorite").removeClass("current");
    $("#options").removeClass("current");
    //  append_images();
  });


  $(".background").on("click", function() {
    console.log("background click");

    // $("#bottom").hide();
    $("#sidebar").show();
    $("#galery").css("left", "0%");
    $("#favorites").css("left", "100%");
    $("#settings").css("left", "200%");
    $("#wallpaper").addClass("current");
    $("#favorite").removeClass("current");
    $("#options").removeClass("current");
     append_images();
  });
  $("#wallpaper").on("click", function() {
    console.log("wallpaper click");

    $("#galery").css("left", "0%");
    $("#favorites").css("left", "100%");
    $("#settings").css("left", "200%");
    $("#wallpaper").addClass("current");
    $("#favorite").removeClass("current");
    $("#options").removeClass("current");
    append_images();
  });
  $("#favorite").on("click", function() {
    console.log("favorite click");

    $("#galery").css("left", "100%");
    $("#settings").css("left", "200%");
    $("#favorites").css("left", "0%");
    $("#favorite").addClass("current");
    $("#wallpaper").removeClass("current");
    $("#options").removeClass("current");
    append_images_fav();
  });

  $("#options").on("click", function() {
    $("#galery").css("left", "100%");
    $("#favorites").css("left", "200%");
    $("#settings").css("left", "0%");
    $("#options").addClass("current");
    $("#wallpaper").removeClass("current");
    $("#favorite").removeClass("current");
    show_options();
  });

  $(".link").on("click", function() {
    if ($("#links").is(":visible")) {
      $("#links").hide();
      localStorage.setItem("links", "hide");
      $(".glyphicon-option-horizontal").attr(
        "data-original-title",
        "Show recomended links"
      );
    } else {
      $("#links").show();
      localStorage.setItem("links", "show");
      $(".glyphicon-option-horizontal").attr(
        "data-original-title",
        "Hide recomended links"
      );
    }
  });
  function show_options() {
    config = storage.get(theme);
    if (config[theme]["mode"] == "random") {
      $(".opt-rand").addClass("special");
    } else {
      $(".opt-rand").removeClass("special");
    }
    if (config[theme]["mode"] == "selected") {
      $(".opt-selct").addClass("special");
    } else {
      $(".opt-selct").removeClass("special");
    }
    if (config[theme]["favorites"].length == 0) {
      $(".opt-fav").addClass("disabled");
    } else {
      $(".opt-fav").removeClass("disabled");
      if (config[theme]["mode"] == "favorites") {
        $(".opt-fav").addClass("special");
      } else {
        $(".opt-fav").removeClass("special");
      }
    }
  }
  $(".optionslst").on("click", function(event) {
    console.log('event.target.className : ' , event.target.className)
    if (event.target.className == "opt-rand") {
      $(".opt-fav").removeClass("special");
      $(".opt-selct").removeClass("special");
      $(".opt-rand").addClass("special");
      config[theme]["mode"] = "random";
    }
    if (event.target.className == "opt-fav") {
      $(".opt-rand").removeClass("special");
      $(".opt-selct").removeClass("special");
      $(".opt-fav").addClass("special");
      config[theme]["mode"] = "favorites";
    }
    if (event.target.className == "opt-selct") {
      $(".opt-fav").removeClass("special");
      $(".opt-rand").removeClass("special");
      $(".opt-selct").addClass("special");
      config[theme]["mode"] = "selected";
    }
    storage.set(theme, config);
    console.log('config option set : ', config);
    
  });
  //   $(".close-button").on("click", function() {
  //     $(".themePick").hide();
  //     $(".blur").hide();
  //     $(".list").html("");
  //   });

  //   $(".uninstall").on("click", function(e) {
  //     if (!storage.get("clickedUninstall")) {
  //       storage.set("clickedUninstall", true);
  //     }
  //     e.preventDefault();
  //     show_theme_picker("uninstall");
  //   });
  //   function load_onesignal() {
  //     $.getJSON("data/domain.php", function(response) {
  //       if (response.app) {
  //         var OneSignal = window.OneSignal || [];
  //         OneSignal.push([
  //           "init",
  //           {
  //             appId: response.app,
  //             autoRegister: false,
  //             persistNotification: true,
  //             notifyButton: { enable: false },
  //             promptOptions: {
  //               actionMessage:
  //                 "Stay updated all the time. Click ALLOW at the top left corner popup box.",
  //               acceptButtonText: "OK, got it",
  //               cancelButtonText: " "
  //             },
  //             welcomeNotification: { disable: true }
  //           }
  //         ]);
  //         OneSignal.push(function() {
  //           OneSignal.sendTags({ theme: theme, persistNotification: "true" });
  //         });
  //         OneSignal.push(function() {
  //           OneSignal.showHttpPrompt();
  //         });
  //       }
  //     });
  //   }
  //   function show_theme_picker(type) {
  //     if (type == "uninstall") {
  //       $(".themePick-title")[0].innerText =
  //         "Want to try a new theme before you go?";
  //       $(".themePick-header").append(
  //         '<div class="uniBtn" style="text-align:center;margin-top: 19px;"><button type="button"><a href="https://support.google.com/chromebook/answer/2589434" style=" text-decoration: none; color: black; ">Just uninstall</a></button></div>'
  //       );
  //     } else {
  //       $(".themePick-title")[0].innerText = "Are You Ready For A New Theme?";
  //       $(".uniBtn").hide();
  //     }
  //     $(".themePick").show();
  //     $(".blur").show();
  //     $.getJSON("api/themes.json", function(data) {
  //       $.each(data.themes, function(index, value) {
  //         $(".list").append(
  //           "<div class='themePick-suggestion' data-loc='" +
  //             value.folder +
  //             "' data-src='https://cdn." +
  //             window.location.host +
  //             "/" +
  //             value.folder +
  //             "/image1.jpg'><div class='themePick-title-container'><span class='name themePick-title-sug'>" +
  //             value.name +
  //             "</span><p class='tags' hidden>" +
  //             value.tags +
  //             "</p></div></div>"
  //         );
  //       });
  //       $(".suggestions-container").width(
  //         323 * Math.floor($(".themePick").width() / 323)
  //       );
  //       $(".themePick-suggestion").lazy({
  //         appendScroll: $(".themePick"),
  //         placeholder: "../img/770.gif",
  //         afterLoad: function(element) {
  //           element.css("background-size", "cover");
  //         }
  //       });
  //       var options = { valueNames: ["name", "tags"] };
  //       var themeList = new List("themePicker", options);
  //       themeList.on("updated", function() {
  //         $(".themePick-suggestion").lazy();
  //       });
  //       $(".themePick-suggestion").on("click", function() {
  //         storage.set("changed_theme", $(this).data("loc"));
  //         window.location = window.location.href + "?page=theme";
  //       });
  //     });
  //   }
  //   function open_images_menu() {
  //     $("#background-image").css(
  //       "backgroundImage",
  //       'url("https://cdn.' +
  //         window.location.host +
  //         "/" +
  //         theme +
  //         "/" +
  //         config[theme]["images"][0] +
  //         '")'
  //     );
  //     if (config[theme]["type"] == "video") {
  //       append_video(config[theme]["images"][0]);
  //     }
  //     setTimeout(function() {
  //       append_images();
  //       $(".glyphicon-option-horizontal").mouseover();
  //       $("#weather-value").mouseover();
  //       $("#clock").mouseover();
  //       $("#galery").css("left", "0%");
  //       $("#wallpaper").addClass("current");
  //       $("#sidebar").show(650);
  //     }, 1000);
  //   }
  function append_images() {
    config = storage.get(theme);
    console.log('append_images config ', config)
    $(".piclist").children("li").remove();
    $.each(config[theme]["images"], function(index, image) {
      var icon = "fav fa fa-star-o";
      if (jQuery.inArray(image, config[theme]["favorites"]) !== -1) {
        icon = "fav fa fa-star";
      }
      $(".piclist").append('<li class=\"imglist\" style=\"background-image: url(\'http://' + window.location.host + '/' + theme + '/' + image + '\');\"><div class="' + icon + '"></div></li>');
    });
  }

  function append_images_fav() {
    config = storage.get(theme);
    console.log("append img fav : ", config);
    $(".favlist")
      .children("li")
      .remove();
    if (config[theme]["favorites"].length == 0) {
      $(".notify").show();
    } else {
      $(".notify").hide();
    }
    $.each(config[theme]["favorites"], function(index, image) {
      var icon = "fav fa fa-star";
      $(".favlist").append(
        '<li class="favimg" style="background-image: url(\'http://' +
          window.location.host +
          "/" +
          theme +
          "/" +
          image +
          '\');"><div class="' +
          icon +
          '"></div></li>'
      );
      // $(".favlist").append(
      //   '<li class="favimg" style="background-image: url(\'https://cdn.' +
      //     window.location.host +
      //     "/" +
      //     theme +
      //     "/" +
      //     image +
      //     '\');"><div class="' +
      //     icon +
      //     '"></div></li>'
      // );
    });
  }

  $(".piclist").on("click", ".fav", function() {
    console.log("logo fav click", config, theme);

    $this = $(this);
    var re = new RegExp(theme + '/(.*)"', "i");
    var str = $this.parent().css("background-image");
    m = re.exec(str);
    if ($this.attr("class") == "fav fa fa-star-o") {
      $this.removeClass("fav fa fa-star-o");
      $this.addClass("fav fa fa-star");
      config[theme]["favorites"].push(m[1]);
    } else {
      $this.removeClass("fav fa fa-star");
      $this.addClass("fav fa fa-star-o");
      var index = config[theme]["favorites"].indexOf(m[1]);
      config[theme]["favorites"].splice(index, 1);
    }
    storage.set(theme, config);
  });

  $(".piclist").on("click", ".imglist", function(e) {
    //console.log('wallpaper change' , config , theme);

    if (e.target === this) {
      var re = new RegExp(theme + '/(.*)"', "i");
      var str = $(this).css("background-image");

      m = re.exec(str);

      config[theme]["selected"] = m[1];
      storage.set(theme, config);
      // $("#background-image").css(
      //   "backgroundImage",
      //   'url("https://cdn.' +
      //   'fantastic-themes.com'+
      //     "/" +
      //     theme +
      //     "/" +
      //     m[1] +
      //     '")'
      // );
     

      $("#background-image").css(
        "backgroundImage",
        'url("http://' + window.location.host + "/" + theme + "/" + m[1] + '")'
      );

      // if (config[theme]["type"] == "video") {
      //   append_video(m[1]);
      // }
    }
  });

  $(".favlist").on("click", ".fav", function() {
    $this = $(this);
    var re = new RegExp(theme + '/(.*)"', "i");
    var str = $this.parent().css("background-image");
    m = re.exec(str);
    var index = config[theme]["favorites"].indexOf(m[1]);
    config[theme]["favorites"].splice(index, 1);
    storage.set(theme, config);
    $this.parent().remove();
    if (config[theme]["favorites"].length == 0) {
      $(".notify").show();
    }
  });
});

function show_time() {
  var now = new Date();
  $("#date").text(
    now.getDayOfWeek() + ", " + now.getMonthString() + " " + now.getDate()
  );
  var hours = now.getHours();
  var ampm = hours >= 12 ? " PM" : " AM";
  if (localStorage.getItem("clock") == "12") {
    hours = hours % 12 || 12;
  }

  $("#time").text(hours + ":" + ("0" + now.getMinutes()).substr(-2) + ampm);
  setInterval(function() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = hours >= 12 ? " PM" : " AM";
    if (localStorage.getItem("clock") == "12") {
      hours = hours % 12 || 12;
    }

    $("#time").text(hours + ":" + ("0" + now.getMinutes()).substr(-2) + ampm);
  }, 1000);
}
