(function() {
  'use strict';

  angular
    .module('HacKids')
    .controller('AndaController', AndaController);

  /** @ngInject */
  function AndaController() {
    var vm = this;
    vm.articles = {
        'testimonio-nancy-gomez': {
            'id':'testimonio-nancy-gomez',
            'thumbnail':'assets/anda/images/0.jpg',
            'title':'ANDA - Testimonio Nancy Gomez',
            'description':'La Red de mujeres víctimas y profesionales trabaja para visibilizar a las víctimas de violencia sexual en Colombia y para crear mecanismos efectivos que les permitan a las mujeres acceder a la justicia. <br />ANDA, la acción nace desde adentro.',
            'media':' <iframe src="https://www.youtube.com/embed/Zu9ljCHpS50" frameborder="0" allowfullscreen></iframe>',
            'details':'<p>La Red de mujeres víctimas y profesionales trabaja para visibilizar a las víctimas de violencia sexual en Colombia y para crear mecanismos efectivos que les permitan a las mujeres acceder a la justicia. <br />ANDA, la acción nace desde adentro.</p>'
        },
        'testimonio-angela-escobar':{
            'id':'testimonio-angela-escobar',
            'thumbnail':'assets/anda/images/1.jpg',
            'title':'Anda Testimonio Ángela Escobar',
            'description':'La Red de mujeres víctimas y profesionales trabaja para visibilizar a las víctimas de violencia sexual en Colombia y para crear mecanismos efectivos que les permitan a las mujeres acceder a la justicia. ANDA, la acción nace desde adentro',
            'media':' <iframe src="https://www.youtube.com/embed/2g6NniWZUWQ" frameborder="0" allowfullscreen></iframe>',
            'details':'<p>La Red de mujeres víctimas y profesionales trabaja para visibilizar a las víctimas de violencia sexual en Colombia y para crear mecanismos efectivos que les permitan a las mujeres acceder a la justicia. </p> <p>ANDA, la acción nace desde adentro.</p>'
        },
        'anda-sexual-violence':{
            'id':'anda-sexual-violence',
            'thumbnail':'assets/anda/images/2.jpg',
            'title':'Anda Sexual Violence',
            'description':'Sexual violence is not cultural! Sexual violence is a crime. All together for the right to a life free of violence. ANDA, Action Is Born  From Within.',
            'media':' <iframe src="https://www.youtube.com/embed/Jnx3lr_2lJ4" frameborder="0" allowfullscreen></iframe>',
            'details':'<p>Sexual violence is not cultural! Sexual violence is a crime. All together for the right to a life free of violence.</p><p>ANDA, Action Is Born  From Within.</p>'
        },
        'testimonio-nancy-gomez1':{
            'id':'testimonio-nancy-gomez1',
            'thumbnail':'assets/anda/images/0.jpg',
            'title':'ANDA - Testimonio Nancy Gomez',
            'description':'La Red de mujeres víctimas y profesionales trabaja para visibilizar a las víctimas de violencia sexual en Colombia y para crear mecanismos efectivos que les permitan a las mujeres acceder a la justicia. <br />ANDA, la acción nace desde adentro.'
        },
        'testimonio-angela-escobar1': {
            'id':'testimonio-angela-escobar1',
            'thumbnail':'assets/anda/images/1.jpg',
            'title':'Anda Testimonio Ángela Escobar',
            'description':'La Red de mujeres víctimas y profesionales trabaja para visibilizar a las víctimas de violencia sexual en Colombia y para crear mecanismos efectivos que les permitan a las mujeres acceder a la justicia. ANDA, la acción nace desde adentro'
        },
        'anda-sexual-violence1':{
            'id':'anda-sexual-violence1',
            'thumbnail':'assets/anda/images/2.jpg',
            'title':'Anda Sexual Violence',
            'description':'Sexual violence is not cultural! Sexual violence is a crime. All together for the right to a life free of violence. ANDA, Action Is Born  From Within.'
        }

    }
  }
})();
