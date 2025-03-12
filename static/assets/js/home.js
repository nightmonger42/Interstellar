document.addEventListener("DOMContentLoaded", () => {
  // Create "Open About Blank" Button
  const openBtn = document.createElement("button");
  openBtn.innerText = "Open About Blank";
  openBtn.style.position = "fixed";
  openBtn.style.bottom = "20px";
  openBtn.style.right = "140px";
  openBtn.style.padding = "10px 15px";
  openBtn.style.fontSize = "16px";
  openBtn.style.background = "#28a745";
  openBtn.style.color = "#fff";
  openBtn.style.border = "none";
  openBtn.style.borderRadius = "5px";
  openBtn.style.cursor = "pointer";
  openBtn.style.zIndex = "1000";

  // Create "Redirect to Google" Button
  const redirectBtn = document.createElement("button");
  redirectBtn.innerText = "Redirect to Google";
  redirectBtn.style.position = "fixed";
  redirectBtn.style.bottom = "20px";
  redirectBtn.style.right = "20px";
  redirectBtn.style.padding = "10px 15px";
  redirectBtn.style.fontSize = "16px";
  redirectBtn.style.background = "#007bff";
  redirectBtn.style.color = "#fff";
  redirectBtn.style.border = "none";
  redirectBtn.style.borderRadius = "5px";
  redirectBtn.style.cursor = "pointer";
  redirectBtn.style.zIndex = "1000";

  // Function to open about:blank with iframe
  openBtn.onclick = () => {
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
  };

  // Function to redirect the main page
  redirectBtn.onclick = () => {
    window.location.replace("https://google.com");
  };

  // Append buttons to the document body
  document.body.appendChild(openBtn);
  document.body.appendChild(redirectBtn);
});

