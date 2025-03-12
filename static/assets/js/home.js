<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloaking Button</title>
    <style>
        #cloakButton {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        #cloakButton:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <button id="cloakButton">Open Cloaked Page</button>

    <script>
        document.getElementById("cloakButton").addEventListener("click", function() {
            window.location.replace("https://google.com");
            const win = window.open();
            if (win) {
                const iframe = win.document.createElement("iframe");
                win.document.body.setAttribute('style', 'margin: 0; height: 100vh; width: 100%;');
                iframe.setAttribute('style', 'border: none; width: 100%; height: 100%; margin: 0;');
                iframe.src = window.location.href;
                win.document.body.appendChild(iframe);
            } else {
                alert("Popup blocked! Please allow popups for this site.");
            }
        });
    </script>

</body>
</html>
