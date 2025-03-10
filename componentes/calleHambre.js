document.addEventListener('DOMContentLoaded', () => {
   
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const contesecciones = document.querySelectorAll('.conteseccion');

    contesecciones.forEach(conteseccion => {
        conteseccion.addEventListener('click', () => {
            let seccion = conteseccion.nextElementSibling;
            while (seccion && seccion.tagName !== 'SECTION') {
                seccion = seccion.nextElementSibling;
            }
            if (seccion) {
                seccion.classList.toggle('mostrar');
            }
        });
    });

    const imagenContenedores = document.querySelectorAll('.imagenes-con-texto .imagen-contenedor, .imagenes-con-textoCachapas .imagen-contenedor, .imagenes-con-textoSalchiPapas .imagen-contenedor');

    imagenContenedores.forEach(contenedor => {
        const imagen = contenedor.querySelector('img');
        if (imagen) {
            imagen.addEventListener('click', () => {
                const imagenAmpliada = document.createElement('img');
                imagenAmpliada.src = imagen.src;
                imagenAmpliada.classList.add('imagen-ampliada');
                document.body.appendChild(imagenAmpliada);
                overlay.style.display = 'block';

                overlay.addEventListener('click', () => {
                    imagenAmpliada.remove();
                    overlay.style.display = 'none';
                });

                imagenAmpliada.addEventListener('click', () => {
                    imagenAmpliada.remove();
                    overlay.style.display = 'none';
                });
            });
        }
    });
});