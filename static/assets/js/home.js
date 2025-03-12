document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.innerText = "Stealth Mode";
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
    const newTab = window.open("", "_blank");
    if (!newTab || newTab.closed) {
      alert("Popup blocked! Please allow popups for this site.");
      return;
    }
    newTab.document.write(`
      <script>
        window.location.replace("${location.href}");
      <\/script>
    `);
  };

  document.body.appendChild(btn);
});


