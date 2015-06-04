

var s = Snap("#svgout"); 

var path = "M 100 200 C 200 100 300   0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100";

path = "M22.2919,90.7869c0,0 29.2376,-58.9698 59.5705,-80.3096c30.333,-21.3398 126.152,-9.8872 113.851,-10.4773c-12.3007,-0.590122 81.7196,0.508846 125.007,19.6436c43.2874,19.1348 38.782,49.4501 38.782,49.4501c0,0 12.7353,-2.79513 24.5272,28.9372c11.7918,31.7323 -15.5693,49.5243 -14.8025,102.561c0.766805,53.0368 4.67151,73.7017 -2.5195,85.8292c-7.19101,12.1275 -37.3438,33.3401 -78.7442,26.1385c-41.4004,-7.20161 -67.6096,-15.3856 -92.1651,-25.5484c-24.5554,-10.1628 -75.6805,-29.8877 -90.9884,-40.3615c-15.3078,-10.4738 -27.5697,-16.7107 -45.3157,-34.0645c-17.7461,-17.3538 -1.73503,-23.3717 -34.5663,-51.8c-32.8313,-28.4283 -2.63611,-69.9984 -2.63611,-69.9984Z";

var text = s.text(50,50,'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.')
        .attr({ 'textpath': path });
        //.textPath.animate({ 'startOffset': 2000 }, 5000 );



   