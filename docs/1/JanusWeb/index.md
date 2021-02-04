# 1- Hello World (JanusWeb)

<iframe src="../src/JanusWeb/index.html" width="800" height="600"></iframe>

## Source Code

### index.html

```html
<html>

<head>
    <title>Hello World (JanusWeb)</title>
    <meta charset="utf-8">
</head>

<body>
    <!--
        <FireBoxRoom>
            <Assets>
            </Assets>
            <Room>
                <Object id="plane" pos="0 0 0" rotation="-90 0 0" col="green" scale="10 10 1" collision_id="plane" lighting="false" />
            </Room>
        </FireBoxRoom>
    -->
    <script src="https://web.janusvr.com/janusweb.js"></script>
    <script>elation.janusweb.init({ url: document.location.href })</script>
</body>

</html>
```

### Alternate implementation of index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello World (JanusWeb)</title>
        <script src="https://web.janusxr.org/janusweb.js"></script>
    </head>
    <body>
        <janus-viewer>
            <FireBoxRoom>
                <Assets>
                </Assets>
                <Room>
                    <Object id="plane" pos="0 0 0" rotation="-90 0 0" col="green" scale="10 10 1" collision_id="plane" lighting="false" />
                </Room>
            </FireBoxRoom>
        </janus-viewer>
    </body>
</html>
```
