<template>
 <v-container grid-list-md text-xs-center >
    <v-layout row wrap mb-3 style="position: fixed; width: 100vw;">

      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline darkgrey lighten-4"
            primary-title
          >
            {{imagePreview.match('flag') ? 'Bandera de' : 'Escudo de' }}  {{stateInfo.name | capitalize}}
          </v-card-title>

          <v-card-text>
                <v-img
                    :src="imagePreview"
                    :lazy-src="imagePreview"
                    class="darkgrey lighten-1"
                  >
                    <v-layout
                      slot="placeholder"
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </v-img>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              @click="dialog = false"
            >
              Continuar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-flex xs2 v-if="stateInfo.flag !== ''" >
        <v-avatar @click="showImagePreview('flag')"
          color="grey lighten-4"
          >
        <img :src="stateInfo.flag" alt="avatar" class="highlightAvatarFlag" >
        </v-avatar>
      </v-flex>
      <v-flex xs2 v-if="stateInfo.shield !== ''">
        <v-avatar @click="showImagePreview('shield')"
          color="grey lighten-4"
          >
        <img :src="stateInfo.shield" alt="avatar" class="highlightAvatarShield">
        </v-avatar>
      </v-flex>
    </v-layout>
    <v-layout row wrap style="margin-top: 62px;">
      <v-flex xs12>
        <p v-html="stateInfo.description" style="margin-bottom: 7rem" class="textdescription" >

        </p>
      </v-flex>
    </v-layout>
      <div class="title-name-state" >
         <span v-html="stateInfo.wikiUrl" ></span>
        <div class="map">
          <svg 
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            viewBox="0 0 533.644 613.573"
            style="padding-top: 5px; padding-left: 5px"
            width="75px"
            height="75px"
            id="svg2"
            version="1.1"
            inkscape:version="0.91 r13725"
            sodipodi:docname="venmap.svg"
            @click="goToMap"
          >
          <transition-group tag="g" name="fade" clip-path="url(#_clipPath_kDev8cf7n3dTsXb7pKy2eUyMwsxk6wUt)" id="g9">
            <g v-for="(path, index) in svgMap" :key="(index + 1) * 200" >
              <path 
              :d="path.SVGOM['d']"
              :fill="path.SVGOM['fill']"
              :vector-effect="path.SVGOM['vector-effect']"
              :stroke-width="path.SVGOM['stroke-width']"
              :stroke="path.SVGOM['stroke']"
              :stroke-linejoin="path.SVGOM['stroke-linejoin']"
              :stroke-linecap="path.SVGOM['stroke-linecap']"
              :stroke-miterlimit="path.SVGOM['stroke-miterlimit']"
              :id="path.SVGOM['id']"
              >
              </path>
            </g>
          </transition-group>
          </svg>
          </div>

      </div>
 </v-container>
</template>

<script>
import { VENEZUELANSTATES } from "../api/mock-data";

export default {
  props: {
    name: String
  },
  filters: {
    capitalize: function(term) {
      return term.charAt(0).toUpperCase() + term.slice(1)
    }
  },
  data: () => ({
    drawer: null,
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    svgMap: [],
    stateInfo: {
      id : '',
      svgId : '',
      name : '',
      description : '',
      flag : '',
      shield : '',
      svg : ''
    },
    imagePreview: '',
    dialog: false
  }),
  mounted () {
      this.$store.dispatch('fetchAllStates')
      setTimeout( () =>{
        this.stateInfo = this.$store.getters.getStateByName(this.name)
        this.$store.getters.loadedStates.map( (state) => {
            let parser = new DOMParser()
            let parseSvg = parser.parseFromString(state.svg, "image/svg+xml")
            let parseAtribute = parseSvg.documentElement.attributes

            const svgElement = {
              'd' : parseAtribute.getNamedItem('d').nodeValue,
              'fill' : parseAtribute.getNamedItem('fill').nodeValue,
              'vector-effect': parseAtribute.getNamedItem('vector-effect').nodeValue,
              'stroke-width': parseAtribute.getNamedItem('stroke-width').nodeValue,
              'stroke': parseAtribute.getNamedItem('stroke').nodeValue,
              'stroke-linejoin': parseAtribute.getNamedItem('stroke-linejoin').nodeValue,
              'stroke-linecap': parseAtribute.getNamedItem('stroke-linecap').nodeValue,
              'stroke-miterlimit': parseAtribute.getNamedItem('stroke-miterlimit').nodeValue,
              'id': parseAtribute.getNamedItem('id').nodeValue,
            }
            this.svgMap.push({ ...state , SVGOM : svgElement })
        })      
      }, 300 )
                           

  },
  methods: {
    goToMap: function () {
      this.svgMap = []

      setTimeout( () => {
        this.$router.push('/')
      }, 750)

    },
    showImagePreview (whichImage) {
      this.dialog = true;
      if (whichImage === 'flag') {
        this.imagePreview = this.stateInfo.flag
      } else {
        this.imagePreview = this.stateInfo.shield
      }
    }
  }
}
</script>

<style scoped>

.container {
  font-family: "Cinzel Decorative" !important;
}

.highlightAvatarFlag {
  box-shadow: 0px 3px 5px -1px rgba(241, 239, 239, 0.2), 0px 5px 8px 0px rgba(228, 220, 220, 0.14), 0px 1px 14px 0px rgba(243, 238, 238, 0.12) !important;
  padding: 3px;
  animation: bounce 3.3s ease-out infinite;
}

.highlightAvatarShield {
  box-shadow: 0px 3px 5px -1px rgba(241, 239, 239, 0.2), 0px 5px 8px 0px rgba(228, 220, 220, 0.14), 0px 1px 14px 0px rgba(243, 238, 238, 0.12) !important;
  padding: 3px;
  animation: bounce 3.4s ease-out infinite;
}

.highlightAvatarFlag:active, .highlightAvatarShield:active {
  padding: 5px;
}

.title-name-state {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1.5rem;
  font-size: 3rem;
  width: 100vw;
  text-align: right;
  background-color: #303030;
  box-shadow: -4px -3px 10px whitesmoke;
  font-weight: bold
}

.map {
  position: absolute;
  bottom: 5px;
  left: 5px;
  cursor: pointer;
}

p {
  font-size: 2rem;
}

@media (min-width: 768px) {
  .map {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
  }

  .textdescription {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1024px) {
  .textdescription {
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 420px) {
  .title-name-state {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 1.5rem;
    font-size: 1.5rem;
    width: 100vw;
    text-align: right;
    background-color: #303030;
    box-shadow: -4px -3px 10px whitesmoke
  }
}

.fade-enter-active {
  animation: fade-in-custom 1s ease-in forwards;
}
.fade-leave-active {
  animation: fade-out-custom .650s ease-out forwards;
}

@keyframes fade-in-custom {
   from {
     fill-opacity: 0;
   }
   to {
     fill-opacity: 1;
   }
 }

 @keyframes fade-out-custom {
   from {
     fill-opacity: 1;
   }
   to {
     fill-opacity: 0;
   }
 }

 @keyframes bounce {
   from {
     padding: 3px
   }
   5% {
     padding: 0px
   }
   9% {
     padding: 3px
   }
   95% {
     padding: 3px
   }
   99% {
     padding: 9px
   }
   100% {
     transform: 3px
   }
 }
</style>
