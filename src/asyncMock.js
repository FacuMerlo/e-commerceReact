const productos = [
    // BOTINES
    {
        id: 1,
        nombre: "Botines Nike Mercurial Zoom Vapor 15 Pro Fg Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/19195082-1200-auto?v=638570025710900000&width=1200&height=auto&aspect=true",
        precio: 254.999,
        descripcion: "La cancha es toda tuya cuando te amarras los cordones del Vapor 15 Pro FG. Está cargado de una unidad Zoom Air, para que puedas dominar los últimos minutos del partido, cuando todo importa más: La velocidad está en el Air.",
        categoria: "botines",
        stock: 25
    },
    {
        id: 2,
        nombre: "Botines Nike Zoom Mercurial Superfly 9 Elite Marcus Rashford Fg Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/19174176-1200-auto?v=638567444632970000&width=1200&height=auto&aspect=true",
        precio: 489.999,
        descripcion: "Material exterior: tejido Vaporposite+, combina una malla de rejilla con agarre y un material de primera calidad para un control óptimo.Tejido FlyKnit envuelve el tobillo con una tela suave elástica.Tapones de tres estrellas que proporcionan tracción multidireccional en cada paso.Plantilla acolchada.Unidad Zoom Air de 3/4 de longitud se encuentra en la suela exterior y proporciona un nivel adicional de amortiguación elástica debajo del pie que te ayuda a moverte más rápido en el campo.Tipo de cancha: césped corto y ligeramente húmedos.Tipo de ajuste: cordones.",
        categoria: "botines",
        stock: 40
    },
    {
        id: 3,
        nombre: "Botines Adidas Predator Elite Tf Unisex",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/19085176-1200-auto?v=638543248995100000&width=1200&height=auto&aspect=true",
        precio: 369.999,
        descripcion: "Material exterior: HybridTouch 2.0 con elementos Strikeskin.Ajuste regular.Diseño sin cordones.Cuello en tejido adidas Primeknit.Suela para terreno firme Controlframe 2.0.Contienen al menos un 20% de material reciclado.",
        categoria: "botines",
        stock: 15
    },
    {
        id: 4,
        nombre: "Botines Adidas X Crazyfast+ Fg Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/19026133-1200-auto?v=638526073303600000&width=1200&height=auto&aspect=true",
        precio: 449.999,
        descripcion: "Ajuste clásico.Tipo de ajuste: cordones.Aeropacity Speedskin.Cuello en tejido adidas Primeknit.Refuerzo de talón en carbono.Suela Speedframe liviana.Contienen al menos un 20% de material reciclado.",
        categoria: "botines",
        stock: 10
    },
    {
        id: 5,
        nombre: "Botines Puma Future 7 Ultimate Njr Fg/ag Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/19077368-1200-auto?v=638539919044430000&width=1200&height=auto&aspect=true",
        precio: 319.999,
        descripcion: "Material exterior: malla.FUZIONFIT360: la parte superior que combina doble malla técnica, punto extra elástico, PWRPRINT y dos capas de PWRTAPE, para un ajuste y sujeción perfectos además de una libertad de movimiento absoluta.Tipo de ajuste: cordones.Texturas de agarre 3D en zonas clave de contacto con la pelota para el máximo toque y control.La parte superior contiene al menos un 20 % de material reciclado.Plantilla ligera y extraíble con tecnología NanoGrip que evita que el pie se deslice.Sistema Dynamic Motion con una configuración avanzada de tapones que está diseñado para lograr el equilibrio perfecto entre soporte, tracción y agilidad.FG/AG: Suela para terreno firme/terreno artificial.",
        categoria: "botines",
        stock: 8
    },
    {
        id: 6,
        nombre: "Botines Puma Future 7 Ultimate Fg/ag Unisex",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/18671868-1200-auto?v=638437124944130000&width=1200&height=auto&aspect=true",
        precio: 265.999,
        descripcion: "Material exterior: FUZIONFIT360 combina doble malla técnica, tejido extra elástico PWRPRINT y dos capas de PWRTAPE, para un ajuste y soporte perfecto.Texturas tridimensionales diseñadas en zonas de contacto clave.El acolchado microperforado del talón mantiene el pie cómodo del botín.Plantilla ligera y extraíble con tecnología NanoGrip que evita que el pie se deslice dentro del botín.Sistema Dynamic Motion con una configuración avanzada de tapones está diseñado para lograr el equilibrio perfecto entre soporte, tracción y agilidad.Tipo de ajuste: cordones.Tipo de cancha: mixta.La parte superior de esta zapatilla está fabricada con al menos un 20 % de material reciclado.",
        categoria: "botines",
        stock: 30
    },
    // CAMISETAS
    {
        id: 7,
        nombre: "Camiseta Argentina Adidas Afa Titular 2024 Hombre",
        imagen: "https://templofutbol.vtexassets.com/arquivos/ids/19019661-1200-auto?v=638523278548600000&width=1200&height=auto&aspect=true",
        precio: 99.999,
        descripcion: "Camiseta titular de la selección Argentina, lucí la albiceleste diseñada para el hincha. Con el logo de la marca, FIFA y AFA; las tres estrellas encima del logo de AFA para rememorar el titulo mundial.Tecnología AEROREADY que te brinda absorción.Hecho con materiales reciclados.Material: Poliéster.Hecho en Argentina.",
        categoria: "camisetas",
        stock: 50
    },
    {
        id: 8,
        nombre: "Camiseta Argentina Adidas Afa Alternativa 2024 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/18736061-1200-auto?v=638459628116670000&width=1200&height=auto&aspect=true",
        precio: 99.999,
        descripcion: "Camiseta alternativa de Argentina.La tecnología AEROREADY te ofrece máxima absorción.Hecho con materiales reciclados, Logo de la marca, escudo de AFA y FIFA en el frente de la prenda.Material: Poliéster.Hecho en Argentina.",
        categoria: "camisetas",
        stock: 35
    },
    {
        id: 9,
        nombre: "Camiseta Borussia Dortmund Puma Titular 24/25 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/19118319-1200-auto?v=638554552902130000&width=1200&height=auto&aspect=true",
        precio: 94.999,
        descripcion: "Tecnología dryCELL d e rendimiento diseñada para absorber la humedad del cuerpo y mantenerte libre de sudor durante el ejercicio.Esta prenda está confeccionada con al menos un 95 % de material reciclado.",
        categoria: "camisetas",
        stock: 20
    },
    {
        id: 10,
        nombre: "Camiseta Inter Miami Adidas Titular 24/25 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/19031541-1200-auto?v=638527700505000000&width=1200&height=auto&aspect=true",
        precio: 109.999,
        descripcion: "Material: tejido entrelazado 100 % poliéster reciclado.Freedom to Dream: estampado en la parte trasera del cuello.Nombre y número de Messi en la espalda.Este producto está hecho con materiales 100% reciclados.",
        categoria: "camisetas",
        stock: 45
    },
    {
        id: 11,
        nombre: "Camiseta Talleres Le Coq Alternativa 2 2024 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/18921723-1200-auto?v=638496531699800000&width=1200&height=auto&aspect=true",
        precio: 84.999,
        descripcion: "Camiseta alternativa de Talleres confeccionada con tejidos de alta calidad. Acompaña los movimientos del jugador.Material: Poliéster y mesh.Logo y escudo termotransferido.Ajuste: Regular fit.",
        categoria: "camisetas",
        stock: 25
    },
    {
        id: 12,
        nombre: "Camiseta Talleres Le Coq Titular 2024 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/19019742-1200-auto?v=638523307331530000&width=1200&height=auto&aspect=true",
        precio: 84.999,
        descripcion: "Combinación única de microfibras de poliéster y mesh con elastano.Clásicos bastones verticales azul marino y blanco, se incorporan finos vivos de color azul francia.Mangas blancas con puño azul y una espalda toda blanca de óptima visibilidad.Escudo de Club Atletico Talleres termoaplicado en TPU.",
        categoria: "camisetas",
        stock: 60
    },
    // SHORTS
    {
        id: 13,
        nombre: "Short Argentina Adidas Afa Titular 2024 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/18736048-1200-auto?v=638459628107370000&width=1200&height=auto&aspect=true",
        precio: 59.999,
        descripcion: "Estos shorts de la selección Argentina están creados para mantener cómodo al hincha. Hechos de tejido suave, cuentan con tecnología de absorción AEROREADY.",
        categoria: "shorts",
        stock: 12
    },
    {
        id: 14,
        nombre: "Short Argentina Adidas Originals Alternativo 1994 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/18924499-1200-auto?v=638497532623200000&width=1200&height=auto&aspect=true",
        precio: 84.999,
        descripcion: "Inspirados en la estética icónica de los años 90, el short de la segunda equipación de Argentina 1994 recupera diseño y detalles de un año ganador para elevar tu estilo personal.",
        categoria: "shorts",
        stock: 8
    },
    {
        id: 15,
        nombre: "Short Talleres Le Coq Titular 2024 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/19028766-1200-auto?v=638526850905000000&width=1200&height=auto&aspect=true",
        precio: 53.999,
        descripcion: "Material: 93% poliéster y 7% elastano.Cintura elástica con cordón de ajuste.Logo de la marca y del equipo estampados en el frente de la prenda.",
        categoria: "shorts",
        stock: 20
    },
    {
        id: 16,
        nombre: "Short Talleres Le Coq Alternativo 2024 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/19029284-1200-auto?v=638526865315000000&width=1200&height=auto&aspect=true",
        precio: 53.999,
        descripcion: "Material: 93% poliéster y 7% elastano.Cintura elástica con cordón de ajuste.Logo de la marca y del equipo termotransferidos en el frente de la prenda.",
        categoria: "shorts",
        stock: 15
    },
    {
        id: 17,
        nombre: "Short Barcelona Nike Titular 23/24 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/18599395-1200-auto?v=638422155704800000&width=1200&height=auto&aspect=true",
        precio: 35.750,
        descripcion: "Tecnología Nike Dri-FIT absorbe el sudor de la piel para acelerar la evaporación, lo que ayuda a mantener la transpirabilidad y la comodidad.Escudo del FC Barcelona festoneado.",
        categoria: "shorts",
        stock: 30
    },
    {
        id: 18,
        nombre: "Short Paris Saint Germain Nike Titular 23/24 Hombre",
        imagen: "https://newsport.vtexassets.com/arquivos/ids/18599394-1200-auto?v=638422155704670000&width=1200&height=auto&aspect=true",
        precio: 33.000,
        descripcion: "Tecnología Nike Dri-FIT aleja el sudor de la piel para una evaporación más rápida y te ayuda a mantenerte seco y cómodo.Escudo de Paris Saint Germain festoneado.",
        categoria: "shorts",
        stock: 18
    }
]


const err = "ERROR!"

export const getProdc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(false){
                reject("HUBO UN ERROR")
            }else{
                resolve(productos)
            }
        }, 3000)
    })
}

export const getOneProd = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(productos.find(e => e.id.toString() === id))  
        }, 3000)
    })
}