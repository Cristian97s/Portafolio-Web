const navToggle = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector(".collapse");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("collapse");

  if (navMenu.classList.contains("collapse")) {
    navToggle.setAttribute("aria-expanded","false","aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-expanded","false","aria-label", "Abrir menú");
  }
});

function main() {

(function () {
    'use strict';

    $(window).ready(function(){

        // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
        $('.category_list .category_item[category="all"]').addClass('ct_item-active');

        // FILTRANDO PORTAFOLIOS  ============================================

        $('.category_item').click(function(){
            var catProduct = $(this).attr('category');
            console.log(catProduct);

            // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
            $('.category_item').removeClass('ct_item-active');
            $(this).addClass('ct_item-active');

            // OCULTANDO PORTAFOLIOS =========================
            $('.portfolio-item').css('transform', 'scale(0)');
            function hideProduct(){
                $('.portfolio-item').hide();
            } setTimeout(hideProduct,800);

            // MOSTRANDO LOS PORTAFOLIOS =========================
            function showProduct(){
                $('.portfolio-item[category="'+catProduct+'"]').show();
                $('.portfolio-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
            } setTimeout(showProduct,800);
        });

        // MOSTRANDO TODOS LOS PORTAFOLIOS =======================

        $('.category_item[category="all"]').click(function(){
            function showAll(){
                $('.portfolio-item').show();
                $('.portfolio-item').css('transform', 'scale(1)');
            } setTimeout(showAll,800);
        });
    });
    
}());


}
main();