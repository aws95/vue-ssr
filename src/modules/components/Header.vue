<template>
  <div>
    <div class="header">
      <div class="header-top">
        <div class="visible-lg oswald">
          <div class="col-xs-6">
            <p class="text-left">
              Commandez au
              <b>
                <span>01 53 75 00 00</span>
              </b>
              du lundi au samedi de 9h à 19h
            </p>
          </div>
          <div class="col-xs-6">
            <p
              class="text-right pull-right"
              data-target=".shop-modal"
              data-toggle="modal"
              style="cursor:pointer"
              id="header-shop"
            >
              Découvrez nos magasins
              <span>PARIS | LYON</span> ouverts du lundi au samedi de 10h à 19h
            </p>
          </div>
        </div>
        <div class="visible-xs visible-sm visible-md oswald">
          <div class="col-xs-6">
            <p class="text-left">
              Commandez au
              <span>01 53 75 00 00</span>
            </p>
          </div>
          <div class="col-xs-6">
            <p
              class="text-right pull-right"
              data-target=".shop-modal"
              data-toggle="modal"
              style="cursor:pointer"
              id="header-shop"
            >
              Découvrez nos magasins
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-4 header-column">
        <div class="visible-xs visible-sm visible-md">
          <div class="country-selector">
            <p class="title visible-lg">Pays</p>
            <div class="country-btn">
              <p class="pull-left" style="padding-right: 5px;">
                <i class="countries-FR"></i>
              </p>
              <p class="pull-left visible-lg oswald">
                <span>France</span>
              </p>
            </div>
          </div>
        </div>
        <span
          class="oswald"
          title="Newsletter"
          href="#"
          data-toggle="modal"
          data-target=".newsletter-modal"
          style="cursor:pointer;"
        >
          <span class="border oswald visible-lg" style="margin-top: 10px"
            >Newsletter offres et codes promo</span
          >
          <span
            class="newsletter oswald visible-xs visible-sm visible-md"
            style="margin-left: 5px"
          >
            <i class="ico ico-news-letter"></i>
          </span>
        </span>
        <div class="clearfix"></div>
        <div id="promoCarousel" class="carousel slide visible-lg">
          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <p>
                <span class="gray" style="color : #e40000;">
                  <b>PE20</b>
                </span>
                <span class="gray">running & trail fitness</span>
                <span class="gray" style="color : #e40000;">
                  <b>nouveautés</b>
                </span>
              </p>
            </div>
            <div class="item">
              <p>
                <span class="gray" style="color : #e40000;">
                  <b>PE20</b>
                </span>
                <span class="gray">cyclisme triathlon randonnée</span>
                <span class="gray" style="color : #e40000;">
                  <b>nouveautés</b>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="visible-lg">
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
            <a
              href="https://www.youtube.com/user/lepapeinfovideo"
              target="_blank"
            >
              <i class="ico ico-youtube3"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-xs-4 header-column text-center">
        <a
          href="https://www.lepape.com/"
          title="Lepape.com - Au cœur de votre sport"
          class="logo"
        >
          <img
            class="img-responsive"
            src="../../assets/images/logo-lepape.png"
            alt="Lepape.com - Au cœur de votre sport"
          />
        </a>
      </div>
      <div class="col-xs-4 header-column text-right">
        <div class="row">
          <div id="cart-summary-container" class="col-md-12 col-lg-12">
            <div class="new-cart-summary">
              <div class="header-cart hide-for-small">
                <a
                  href="#"
                  onclick="jQuery('#header-shop').click();return false;"
                  title="Magasins"
                  class="col-2 col-md-3 link_header header_connexion_100 visible-lg"
                >
                  <div class="stores">
                    <i class="ico ico-store"></i>
                    <span>Magasins</span>
                  </div>
                </a>
                <a
                  href="#"
                  onclick="jQuery('.header-column .country-btn:first').click();return false;"
                >
                  <div class="col-2 col-md-3 country-selector visible-lg">
                    <div class="cursor_map">
                      <img
                        src="https://www.lepape.com/static/frontend/Lepape/default/fr_FR/Lepape_Base/images/flags/fr.svg"
                        height="50px"
                        width="60px"
                      />
                      <div class="link_header">Français</div>
                    </div>
                  </div>
                </a>
                <div
                  title="Connexion"
                  class="col-2 col-md-3 link_header header_connexion_100 visible-lg"
                  id="connexion-ajax-customer"
                >
                  <div class="login_icon">
                    <a href="https://www.lepape.com/customer/account/">
                      <i class="ico ico-connected"></i>
                    </a>
                    <a
                      href="https://www.lepape.com/customer/account/"
                      id="connexion-ajax-links"
                    >
                      <span class="visible-lg">Connexion</span>
                    </a>
                  </div>
                </div>
              </div>
              <div id="ajax-summary-container" class="col-2 col-md-3"></div>
            </div>
          </div>
        </div>
        <div class="visible-lg"></div>
      </div>
      <div
        id="search-bar"
        class="search-bar-except col-xs-7 col-lg-4 col-lg-offset-4"
      >
        <form
          id="search_mini_form"
          action="https://www.lepape.com/catalogsearch/result/"
          method="get"
        >
          <div class="form-search">
            <label for="search">Rechercher :</label>
            <input
              autocomplete="off"
              placeholder="Chercher"
              id="search"
              type="text"
              name="q"
              value
              class="input-text"
              maxlength="128"
            />
            <button
              type="submit"
              title="Chercher"
              class="button pull-right"
              id="search_mini_form_button"
            >
              <i class="ico ico-search"></i>
            </button>
            <div id="search_autocomplete" class="search-autocomplete"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "Header" };
</script>

<style lang="scss" scoped></style>
