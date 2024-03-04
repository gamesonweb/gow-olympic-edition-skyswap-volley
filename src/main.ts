


window.addEventListener("DOMContentLoaded", async () => {
    let canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

    const module = await import('./AppOne'); // Cela permet de faire une arbre de chargement

    let App = module.AppOne;
    let app = new App(canvas);
});