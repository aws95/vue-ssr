<template>
  <div>
    <div class="col-main">
      <div class="cart">
        <div class="row page-title">
          <div class="col-sm-12 col-md-6">
            <h1>Panier</h1>
          </div>
          <div class="col-sm-12 col-md-6 text-right">
            <a class="continue-shopping" href="https://www.lepape.com/">
              Continuer vos achats
              <i class="ico ico-arrow-right-dot"></i>
            </a>
          </div>
        </div>
        <form class="the-cart-form" action method="post">
          <input name="form_key" type="hidden" value="Nsd9ub4MPFnc9zaU" />
          <table class="cart-table">
            <thead>
              <th class="col-xs-2">&nbsp;</th>
              <th class="col-xs-5">Nom du produit</th>
              <th class="col-xs-1">&nbsp;</th>
              <th class="col-xs-1 text-center">Prix unitaire</th>
              <th class="col-xs-1 text-center">Quantité</th>
              <th class="col-xs-1 text-center">Sous total</th>
              <th class="col-xs-1">&nbsp;</th>
            </thead>
            <tbody>
              <tr v-for="product in getCart" :key="product._id">
                <td class="column product-image">
                  <a
                    href="https://www.lepape.com/montre-gps-cardio-sans-ceinture-garmin-fenix-5x-sapphire-gray-bracelet-noir"
                    title="Fénix 5X Sapphire Gray Bracelet Noir (version française)"
                    class="product-image"
                  >
                    <img
                      :src="`http://localhost:5000/image/${product.img}`"
                      alt="Fénix 5X Sapphire Gray Bracelet Noir (version française)"
                    />
                  </a>
                </td>
                <td class="column product-name">
                  <span class="cart-category">ÉLECTRONIQUE SPORTIVE > Montres cardio & GPS running</span>
                  <h2>
                    <a>{{product.product}}</a>
                  </h2>
                </td>
                <td class="column text-center edit">
                  <a
                    href="https://www.lepape.com/checkout/cart/configure/id/11454878/"
                    title="Éditer les paramètres de l'article"
                  >Éditer</a>
                </td>
                <td class="column text-center product-price">
                  <p>
                    <span class="cart-price">
                      <span class="price">{{product.price}} €</span>
                    </span>
                  </p>
                </td>
                <td class="column text-center product-qty">
                  <input
                    v-model="value[product._id]"
                    :test="!value[product._id] ? value[product._id] = product.qty : true"
                    :key="product._id"
                    @change="onKeyUp(product._id,value[product._id])"
                    size="1"
                    title="Qté"
                    class="input-text qty"
                    maxlength="12"
                  />
                </td>
                <td class="column text-center product-total">
                  <p>
                    <span class="cart-price">
                      <span class="price">{{product.price * product.qty}} €</span>
                    </span>
                  </p>
                </td>
                <td class="column text-center remove">
                  <a
                    title="Retirer l'article"
                    class="btn-remove"
                    @click="deleteInCart(product._id)"
                  >
                    <i class="ico ico-cross-dot"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="column product-image">
                  <img
                    src="https://www.lepape.com/media/catalog/product/cache/1/image/168x/9df78eab33525d08d6e5fb8d27136e95/c/a/catalogue-168_5.png"
                    alt="Catalogue"
                  />
                </td>
                <td class="column product-name">
                  <h2 class="product-name">
                    <a href="#">
                      Lepape
                      <span class="name">Catalogue</span>
                    </a>
                  </h2>
                </td>
                <td class="column text-center edit"></td>
                <td class="column text-center product-price">
                  <b>Gratuit</b>
                </td>
                <td class="column text-center product-qty"></td>
                <td class="column text-center product-total"></td>
                <td class="column text-center remove">
                  <input
                    class="include-catalog"
                    type="checkbox"
                    name="include_catalog"
                    value="1"
                    onclick="jQuery(this).parents('.the-cart-form').submit()"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row foot">
            <div class="col-xs-12 col-md-6 pull-right text-right">
              <button
                type="submit"
                name="update_cart_action"
                value="update_qty"
                title="Mettre à jour le panier"
                class="button btn-update"
              >
                <span @click="updateCart()">
                  <span>Mettre à jour le panier</span>
                </span>
              </button>
            </div>
            <div class="col-xs-12 col-md-6 pull-left hidden-xs hidden-sm">
              <button
                type="submit"
                name="update_cart_action"
                value="empty_cart"
                title="Vider le panier"
                class="button btn-empty"
                id="empty_cart_button"
              >
                <span @click="emptyCart()">
                  <span>Vider le panier</span>
                </span>
              </button>
            </div>
          </div>
        </form>
        <div class="row cart-collaterals">
          <div class="col-xs-12 col-md-6">
            <div class="discount">
              <h2>Codes de remises</h2>
              <div class="row discount-form">
                <form
                  id="discount-coupon-form"
                  action="https://www.lepape.com/checkout/cart/couponPost/"
                  method="post"
                >
                  <div class="form-group col-md-7">
                    <input class="input-text" id="coupon_code" name="coupon_code" value />
                    <input type="hidden" name="remove" id="remove-coupone" value="0" />
                  </div>
                  <div class="buttons-set">
                    <button
                      type="button"
                      title="Appliquer"
                      class="button"
                      onclick="discountForm.submit(false)"
                      value="Appliquer"
                    >
                      <span>
                        <span>Appliquer</span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="shipping">
              <h2>Estimer la livraison et la TVA</h2>
              <div class="shipping-form">
                <div class="row">
                  <form
                    action="https://www.lepape.com/checkout/cart/estimatePost/"
                    method="post"
                    id="shipping-zip-form"
                  >
                    <ul class="form-list col-md-7">
                      <li>
                        <div class="form-group">
                          <select
                            name="country_id"
                            id="country"
                            class="validate-select selectpicker show-tick form-control"
                            title="Pays"
                          >
                            <option value></option>
                            <option value="DE">Allemagne</option>
                            <option value="AD">Andorre</option>
                            <option value="OP">Armées</option>
                            <option value="AU">Australie</option>
                            <option value="AT">Autriche</option>
                            <option value="BE">Belgique</option>
                            <option value="BG">Bulgarie</option>
                            <option value="CY">Chypre</option>
                            <option value="FC">Corse</option>
                            <option value="HR">Croatie</option>
                            <option value="DK">Danemark</option>
                            <option value="ES">Espagne</option>
                            <option value="EE">Estonie</option>
                            <option value="FI">Finlande</option>
                            <option value="FR" selected="selected">France</option>
                            <option value="GR">Grèce</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GF">Guyane française</option>
                            <option value="HU">Hongrie</option>
                            <option value="IE">Irlande</option>
                            <option value="IS">Islande</option>
                            <option value="IT">Italie</option>
                            <option value="LV">Lettonie</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lituanie</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MT">Malte</option>
                            <option value="MQ">Martinique</option>
                            <option value="YT">Mayotte</option>
                            <option value="MC">Monaco</option>
                            <option value="NO">Norvège</option>
                            <option value="NC">Nouvelle-Calédonie</option>
                            <option value="NL">Pays-Bas</option>
                            <option value="PL">Pologne</option>
                            <option value="PF">Polynésie française</option>
                            <option value="PT">Portugal</option>
                            <option value="CZ">République tchèque</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Roumanie</option>
                            <option value="GB">Royaume-Uni</option>
                            <option value="SM">Saint-Marin</option>
                            <option value="PM">Saint-Pierre-et-Miquelon</option>
                            <option value="SK">Slovaquie</option>
                            <option value="SI">Slovénie</option>
                            <option value="SE">Suède</option>
                            <option value="CH">Suisse</option>
                            <option value="WF">Wallis-et-Futuna</option>
                          </select>
                        </div>
                      </li>
                    </ul>

                    <div class="buttons-set">
                      <button type="button" id="btn-update-quote" title="Appliquer" class="button">
                        <span>
                          <span>Appliquer</span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 totals">
            <table id="shopping-cart-totals-table">
              <tfoot>
                <tr>
                  <td style class="a-right" colspan="1">
                    <strong>Total HT</strong>
                  </td>
                  <td style class="a-right">
                    <strong>
                      <span class="price">{{totalPrice}} €</span>
                    </strong>
                  </td>
                </tr>
                <tr
                  class="summary-details-1 summary-details summary-details-first"
                  style="display: none;"
                >
                  <td class="a-right" style colspan="1">
                    TVA 20% France (20%)
                    <br />
                  </td>
                  <td style class="a-right" rowspan="1">
                    <span class="price">---</span>
                  </td>
                </tr>
                <tr class="summary-total" onclick="expandDetails(this, '.summary-details-1')">
                  <td style class="a-right" colspan="1">
                    <div class="summary-collapse">TVA & autres taxes</div>
                  </td>
                  <td style class="a-right">
                    <span class="price">---</span>
                  </td>
                </tr>
                <tr>
                  <td style class="a-right" colspan="1">
                    <strong>Total TTC</strong>
                  </td>
                  <td style class="a-right">
                    <strong>
                      <span class="price">{{totalPrice}} €</span>
                    </strong>
                  </td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td style class="a-right" colspan="1">Sous-total</td>
                  <td style class="a-right">
                    <span class="price">{{totalPrice}} €</span>
                  </td>
                </tr>
                <tr>
                  <td
                    style
                    class="a-right"
                    colspan="1"
                  >Frais de port (Colissimo Domicile - Livraison à domicile)</td>
                  <td style class="a-right">
                    <span class="price">0,00 €</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul class="checkout-types">
              <li>
                <button
                  type="button"
                  title="Commander"
                  class="button btn-proceed-checkout btn-checkout"
                  onclick="window.location='https://www.lepape.com/onestepcheckout/';"
                >
                  <span>
                    <span>Commander</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="visible-xs visible-sm" style="margin-top: 30px;">
          <button
            type="submit"
            name="update_cart_action"
            value="empty_cart"
            title="Vider le panier"
            class="button btn-empty"
            id="empty_cart_button_mobile"
          >
            <span>
              <span>Vider le panier</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import localForage from "localforage";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cart: [],
      value: [],
      update: [],
      offline: []
    };
  },
  computed: {
    ...mapGetters({
      getCart: "cart/cart",
      totalPrice: "cart/totalPrice",
      totalItems: "cart/totalQuantity"
    }),
    watchIsOffline() {
      return this.$nuxt.isOffline;
    },
    watchIsOnline() {
      return this.$nuxt.isOnline;
    }
  },
  mounted() {
    this.created();
  },
  watch: {
    watchIsOffline(status) {
      localForage.getItem("cart").then(value => {
        this.offline = value;
        return this.offline;
      });
    }
  },
  methods: {
    emptyCart() {
      this.$store.dispatch("cart/emptyCart");
    },
    deleteInCart(data) {
      this.$store.dispatch("cart/deleteInCart", data);
    },
    updateCart() {
      this.$store.dispatch("cart/updateCart", this.update);
    },
    onKeyUp(_id, value) {
      this.update.push({ _id: _id, value: value });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>