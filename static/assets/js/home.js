document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.innerText = "About Blank";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px 15px";
  btn.style.fontSize = "16px";
  btn.style.background = "#007bff";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  btn.style.zIndex = "1000";

  btn.onclick = () => {
    // Open popup immediately within user interaction
    const win = window.open("about:blank", "_blank");

    if (win) {
      win.document.body.setAttribute("style", "margin: 0; height: 100vh; width: 100%;");

      const iframe = win.document.createElement("iframe");
      iframe.setAttribute("style", "border: none; width: 100%; height: 100%; margin: 0;");
      iframe.src = window.location.href;
      
      win.document.body.appendChild(iframe);
    } else {
      alert("Popup blocked! Please allow popups for this site.");
    }

    // Redirect the main page after the popup is opened
    setTimeout(() => {
      window.location.replace("https://google.com");
    }, 500); // Slight delay to ensure popup opens first
  };

  document.body.appendChild(btn);
});
