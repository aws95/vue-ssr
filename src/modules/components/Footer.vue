<template>
  <div>
    <footer id="footer">
      <div class="container">
        <div class="footer-wrapper">
          <div class="row">
            <div class="col-sm-3">
              <p class="title">Découvrez nos magasins</p>
              <div class="block">
                <p class="text-uppercase">
                  <b>LEPAPE STORE</b> PARIS
                </p>
                <p>
                  39, rue d´Artois, Paris 8
                  <sup>ème</sup>
                </p>
                <a href="https://www.lepape.com/store/paris" id="store_paris_footer">Voir le magasin</a>
              </div>
              <div class="block">
                <p class="text-uppercase">
                  <b>LEPAPE STORE</b> LYON
                </p>
                <p>
                  9, rue Grolée, Lyon 2
                  <sup>ème</sup>
                </p>
                <a href="https://www.lepape.com/store/lyon" id="store_lyon_footer">Voir le magasin</a>
              </div>
              <div class="block">
                <p class="text-uppercase">
                  <b>EN SELLE MARCEL</b> PARIS LES HALLES - MONTORGUEIL
                </p>
                <p>
                  40, rue Tiquetonne, Paris 2
                  <sup>ème</sup>
                </p>
                <a
                  href="https://www.lepape.com/store/ensellemarcel-montorgueil"
                  id="store_esm_footer"
                >
                  Voir
                  le magasin
                </a>
              </div>
              <div class="block">
                <p class="text-uppercase">
                  <b>EN SELLE MARCEL</b> PARIS CHAMPS-ELYSÉES
                </p>
                <p>
                  29, rue de Berri, Paris 8
                  <sup>ème</sup>
                </p>
                <a
                  href="https://www.lepape.com/store/ensellemarcel-champs-elysees"
                  id="store_esm_footer"
                >
                  Voir
                  le magasin
                </a>
              </div>
              <div class="block">
                <p class="text-uppercase">
                  <b>EN SELLE MARCEL</b> PARIS SAINT-GERMAIN-DES-PRÉS
                </p>
                <p>
                  26, boulevard Raspail, Paris 7
                  <sup>ème</sup>
                </p>
                <a
                  href="https://www.lepape.com/store/ensellemarcel-saint-germain-des-pres"
                  id="store_esm_footer"
                >Voir le magasin</a>
              </div>
              <div class="block">
                <p class="text-uppercase">
                  <b>EN SELLE MARCEL</b> NEUILLY-SUR-SEINE - LA DÉFENSE
                </p>
                <p>6, avenue de Madrid, Neuilly-sur-Seine</p>
                <a
                  href="https://www.lepape.com/store/ensellemarcel-neuilly-sur-seine-la-defense"
                  id="store_esm_footer"
                >Voir le magasin</a>
              </div>
            </div>
            <div class="col-sm-3">
              <p class="title">Restons en contact</p>
              <div class="block">
                <p class="text-uppercase" style="margin-bottom: 5px;">
                  <b>Sur les réseaux sociaux</b>
                </p>
                <div class="social-icons">
                  <a href="https://www.facebook.com/Lepape.info" target="_blank">
                    <i class="ico ico-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/lepape.france/" target="_blank">
                    <i class="ico ico-instagram"></i>
                  </a>
                  <a href="https://twitter.com/lepapeinfo" target="_blank">
                    <i class="ico ico-twitter"></i>
                  </a>
                  <!--<a href=""><i class="ico ico-pinterest" target="_blank"></i></a>-->
                  <a href="https://www.youtube.com/user/lepapeinfovideo" target="_blank">
                    <i class="ico ico-youtube3"></i>
                  </a>
                </div>
                <p class="text-upercase" style="margin-bottom: 0;margin-top: 10px;">
                  <b>PAR TÉLÉPHONE</b>
                </p>
                <p>01 53 75 00 00</p>
                <p class="text-uppercase" style="margin-bottom: 0;margin-top: 10px;">
                  <b>PAR MAIL</b>
                </p>
                <a
                  class
                  data-target=".contact-modal"
                  data-toggle="modal"
                  href="#"
                  id="contact_us_footer"
                >Nous écrire</a>
                <span
                  class="button-newsletter"
                  data-target=".newsletter-modal"
                  data-toggle="modal"
                  style="margin-bottom: 0;margin-top: 10px; width:66%;"
                >
                  <span>S'inscrire à la newsletter</span>
                </span>
                <p style="margin-top: 12px">
                  <a
                    class="text-uppercase"
                    href="https://www.lepape.com/media/wysiwyg/LEPAPE_CATALOGUE.pdf"
                    target="_blank"
                    id="download_catalog"
                  >
                    Télécharger notre
                    catalogue
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-3">
              <p class="title">Profitez de nos services</p>
              <div class="block" id="footer-services">
                <p>
                  <a
                    href="https://www.lepape.com/faq#section-expedition-livraison"
                    data-toggle="collapse"
                    data-target="#block-expedition"
                  >Livraison 24/48h offerte dès 90€ d'achat</a>
                </p>
                <p>
                  <a
                    href="https://www.lepape.com/faq#section-paiement"
                    data-toggle="collapse"
                    data-target="#block-paiement"
                  >Paiement CB sécurisé en 2,3,4 x sans frais</a>
                </p>
                <p>
                  <a
                    href="https://www.lepape.com/faq#section-retours"
                    data-toggle="collapse"
                    data-target="#block-cpr"
                  >Echanges rapides et gratuits</a>
                </p>
                <p>
                  <a
                    href="https://www.lepape.com/faq#section-cgv"
                    data-toggle="collapse"
                    data-target="#block-cgv"
                  >Conditions générales de vente</a>
                </p>
                <p>
                  <a href="https://www.lepape.com/codes-promo">Nos codes promo et avantages fidélité</a>
                </p>
                <p>
                  <a href="https://www.lepape.com/destockage">Déstockage - plus de 40% de remise</a>
                </p>
              </div>
            </div>
            <div class="col-sm-3">
              <p class="title">Découvrir</p>
              <div class="block">
                <p>
                  <a href="https://www.lepape.com/decouverte-entreprise">L'entreprise</a>
                </p>
                <p>
                  <a
                    href="https://pro.lepape.com/"
                    target="_blank"
                    rel="nofollow"
                    id="discover_pro"
                  >
                    <span class="text-uppercase">
                      Lepape
                      <span class="blue">pro</span>
                    </span>
                  </a>
                </p>
                <p>
                  <a href="https://www.lepape.com/travailler-chez-lepape">Nos offres d'emploi</a>
                </p>
                <p>
                  <a href="https://www.lepape.com/partenaires">Partenaires</a>
                </p>
                <p>
                  <a href="https://www.lepape.com/programme-affiliation">Programme d'affiliation</a>
                </p>
                <p>
                  <a href="https://www.lepape.com/equipement-tenue-triathlon-trifonction">
                    Conseils
                    triathlon
                  </a>
                </p>
                <p>
                  <a href="https://www.lepape.com/comment-choisir-home-trainer-velo">
                    Conseils home
                    trainers
                  </a>
                </p>
                <p>
                  <a href="https://www.lepape.com/cadeaux-cyclistes">Idées cadeaux Vélo</a>
                </p>
                <p>
                  <a
                    href="https://www.lepape.com/offres-black-friday-montres-cardio-gps"
                  >Black Friday</a>
                </p>
                <p>
                  <a href="https://www.lepape.com/soldes-baskets-running-trail">
                    Soldes Running &amp;
                    Trail
                  </a>
                </p>
                <p>
                  <a href="https://www.lepape.com/soldes-vtt-electriques-velo-course">Soldes Vélo</a>
                </p>
                <p>
                  <a href="https://www.lepape.com/jeux-concours">Jeux concours</a>
                </p>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-sm-3">
              <p class="title">Découvrez nos autres sites</p>
            </div>
            <div class="col-sm-3 text-uppercase">
              <h4>
                <a href="https://pro.lepape.com/" id="discover_pro">
                  Lepape
                  <span class="blue">Pro</span>
                </a>
              </h4>
              <h6>La préparation physique pour tous</h6>
            </div>
            <div class="col-sm-3 text-uppercase">
              <h4>
                <a href="https://www.lepape-info.com/" rel="follow" id="discover_info">
                  Lepape
                  <span class="gray">Info</span>
                </a>
              </h4>
              <h6>Au coeur de votre sport</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <address>
                © Copyright LEPAPE 1996-2017 | 39, rue d´Artois - 75008 Paris
                <br />Tel. : 01 53 75 00 00 | info@lepape.com
                <br />439 656 976 R.C.S. Paris
                <br />Au capital de 104 246.20 €
                <br />N° TVA intracommunautaire : FR54439656976
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>