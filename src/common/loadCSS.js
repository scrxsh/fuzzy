//Funcion para cargar CSS personalizado para cada uno de los componentes

export function loadCSS(path){
    if(!document.querySelector(`link[href="${path}"]`)){
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = path;
        document.head.appendChild(link);
    };
}