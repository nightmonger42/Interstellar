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
    let popup = window.open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert(
        "Popup blocked! Please allow popups for this site."
      );
      return;
    }

    setTimeout(() => {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const link = doc.createElement("link");

      // Set custom title and icon (optional)
      doc.title = localStorage.getItem("name") || "My Drive - Google Drive";
      link.rel = "icon";
      link.href =
        localStorage.getItem("icon") ||
        "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";

      // Configure iframe
      iframe.src = location.href;
      iframe.style.position = "fixed";
      iframe.style.top = iframe.style.bottom = iframe.style.left = iframe.style.right = 0;
      iframe.style.border = "none";
      iframe.style.width = iframe.style.height = "100%";

      doc.head.appendChild(link);
      doc.body.appendChild(iframe);
    }, 1000); // Short delay to bypass browser security
  };

  document.body.appendChild(btn);
});

