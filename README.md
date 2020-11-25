# wSizes

Simple plugin for responsive dev. 

The plugin adds a small element with the actual dimensions of the browser window

![img](https://github.com/hqdrone/wSizes/blob/main/dist/img/img.jpg)

For the correct work on mobile devices, plugin adds a meta tag with the necessary parameters to prevent scaling

## Installation and use

**Include dist/js/wSizes.js file before closing body tag for development only**

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title>wSizes</title>
    <link rel="stylesheet" href="css/bootstrap-reboot.min.css"/>
    <link rel="stylesheet" href="css/main.css"/>
  </head>
  <body>
    
    
    <script src="js/wSizes.js"></script>
  </body>
</html>
```

**Window Width** - full window width including the width of the vertical scroll bar

**Window Height** - full window height including the height of the horizontal scroll bar

**Content Width** - window width excluding the width of the vertical scroll bar

**Content Height** - window height excluding the height of the horizontal scroll bar

---

**After dev remove this plugin for production**
