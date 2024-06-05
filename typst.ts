export function widget(
    bodyText: string,
): { html: string; script: string } {
    return {
        html: `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/wypst@0.0.8/dist/wypst.min.css" crossorigin="anonymous">
        <div id="typst"></div>
        <div id="formula" style="display: none;">${bodyText.replaceAll("<", "&lt;")}</div>`,
        script: `
        loadJsByUrl("https://cdn.jsdelivr.net/npm/wypst@0.0.8/dist/wypst.min.js").then(() => {
            wypst.initialize().then(() => {
                wypst.render(document.getElementById("formula").innerText, document.getElementById("typst"));
                updateHeight();
            });
        });
        document.addEventListener("click", () => {
            api({type: "blur"});
        });
        `,
    };
  }