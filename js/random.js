(function() {
      var quotes = [
          //Min 49 characters for each line for the person's info (name, job, company). //

        //1 - person: Kerry Durrant,<br> Green Home Energy Solutions//
        {

        img:"/Users/marimultimidia/Documents/marimultimidia/Templates_Sites_Temas/Food/site/portfolio_mariana/images/testimonial1.png",
        text:"‘Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis.’",
        titulo:"Mariana Rodrigues"
        },
        //2 - person: Mark Ryan,<br> Onsite Health Ltd.//
        {
          titulo:"Marta Rodrigues",
          img:"/Users/marimultimidia/Documents/marimultimidia/Templates_Sites_Temas/Food/site/portfolio_mariana/images/testimonial2.png",
          text:"'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean venenatis et lectus nec ullamcorper.'"
        },
        //3 - person: Gareth Chambers,<br> Around Noon Ltd.//
        {
          titulo:"Vitor Andrade",
          text:"'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean venenatis et lectus nec ullamcorper.'",
          img:"/Users/marimultimidia/Documents/marimultimidia/Templates_Sites_Temas/Food/site/portfolio_mariana/images/testimonial3.png"
        }

      ];


      var index = Math.floor(Math.random() * quotes.length);
      var box = quotes[index];
      quotes.splice(index, 1);
      var link = typeof box.link !== "undefined" ? box.link : " ";
      document.getElementById("box").innerHTML =
        '<img class="img-center img-responsive" src="' + box.img + '">' +
        '<p class="testimonial">' + box.text + '</p>'+
        '<h2 class="text-center"><a class="testimonial-link" href="'+link+'" target="_blank">' + box.titulo + '</a></h2>'
        ;

      index = Math.floor(Math.random() * quotes.length);
      box = quotes[index];
      quotes.splice(index, 1);
      link = typeof box.link !== "undefined" ? box.link : " ";
      document.getElementById("box2").innerHTML =
      '<img class="img-center img-responsive" src="' + box.img + '">' +
      '<p class="testimonial">' + box.text + '</p>'+
      '<h2 class="text-center"><a class="testimonial-link" href="'+link+'" target="_blank">' + box.titulo + '</a></h2>'
        ;

      index =   Math.floor(Math.random() * quotes.length);
      box = quotes[index];
      quotes.splice(index,1);
      link = typeof box.link !== "undefined" ? box.link : " ";
      document.getElementById("box3").innerHTML =
      '<img class="img-center img-responsive" src="' + box.img + '">' +
      '<p class="testimonial">' + box.text + '</p>'+
      '<h2 class="text-center"><a class="testimonial-link" href="'+link+'" target="_blank">' + box.titulo + '</a></h2>'
        ;


    })();
