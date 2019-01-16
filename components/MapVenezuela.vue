<template>
<div>


  <h1 v-if="showInitialLoadling" class="initialtitle">VENEZUELA</h1>

  <svg v-if="!showInitialLoadling" :class="{'displayMap': !showInitialLoadling }"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    viewBox="0 0 533.644 613.573"
    style="padding-top: 5px; padding-left: 5px"
    :width="width"
    :height="height"
    id="svg2"
    version="1.1"
    inkscape:version="0.91 r13725"
    sodipodi:docname="venmap.svg"
  >
    <metadata id="metadata363">
      <rdf:RDF>
        <cc:Work rdf:about>
          <dc:format>image/svg+xml</dc:format>
          <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
          <dc:title></dc:title>
        </cc:Work>
      </rdf:RDF>
    </metadata>
    <sodipodi:namedview
      pagecolor="#ffffff"
      borderColor="#666666"
      borderopacity="1"
      objecttolerance="10"
      gridtolerance="10"
      guidetolerance="10"
      inkscape:pageopacity="0"
      inkscape:pageshadow="2"
      inkscape:window-width="1360"
      inkscape:window-height="705"
      id="namedview361"
      showgrid="false"
      inkscape:zoom="12.308234"
      inkscape:cx="237.6962"
      inkscape:cy="369.18152"
      inkscape:window-x="0"
      inkscape:window-y="30"
      inkscape:window-maximized="1"
      inkscape:current-layer="g9"
    ></sodipodi:namedview>
    <defs id="defs4">
      <clipPath id="_clipPath_kDev8cf7n3dTsXb7pKy2eUyMwsxk6wUt">
        <rect width="533.644" height="613.573" id="rect7"></rect>
      </clipPath>
    </defs>
    <g opacity="0.88321198" id="g7" >
      <transition name="fadeaftermap" id="10">
        <path v-if="fadeAfterMap"
          d=" M 0.696 1.854 L 0.696 599.434 L 533.26 599.434 L 533.26 1.706 L 0.696 1.854 Z "
          fill-rule="evenodd"
          fill="rgb(198,227,255)"
          vector-effect="non-scaling-stroke"
          stroke-width="1"
          stroke="rgb(208,192,160)"
          stroke-linejoin="miter"
          stroke-linecap="butt"
          stroke-miterlimit="4"
          id="1path11"
          key="path11"
          fill-opacity="0.5"
        ></path>
      </transition>
    </g>
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
            class="state"
            @click="goToDetail(path)"
          >
          </path>
        </g>
      </transition-group>
      <transition-group tag="g" name="fadeaftermap" opacity="0.88321198" id="g21" >
        
        <g v-for="(pathElem, index) in islands" :key="(index + 1) * 100" v-html="pathElem" ></g>
        
      </transition-group>

      <transition-group tag="g" name="fadeaftermap" opacity="0.88321198" id="g931" >
        
        <g v-for="(pathElem, index) in others" :key="(index + 1) * 200" v-html="pathElem" ></g>

      </transition-group>

          <svg fill-opacity=".7" @click="dialog = true" id="help" viewBox="0 0 395.94667 395.94667" width="35px" height="35px" x="10px" y="15px" xmlns="http://www.w3.org/2000/svg"><path d="m389.121094 197.972656c0 105.566406-85.582032 191.148438-191.148438 191.148438s-191.144531-85.582032-191.144531-191.148438 85.578125-191.144531 191.144531-191.144531 191.148438 85.578125 191.148438 191.144531zm0 0" fill="#94c1ff"/>
            <path d="m197.972656 395.945312c-109.164062 0-197.972656-88.8125-197.972656-197.972656s88.808594-197.972656 197.972656-197.972656c109.164063 0 197.972656 88.8125 197.972656 197.972656s-88.808593 197.972656-197.972656 197.972656zm0-382.292968c-101.632812 0-184.320312 82.6875-184.320312 184.320312 0 101.632813 82.6875 184.320313 184.320312 184.320313 101.632813 0 184.320313-82.6875 184.320313-184.320313 0-101.632812-82.6875-184.320312-184.320313-184.320312zm0 0" fill="#0e65e5"/><path d="m197.972656 368.640625c-102.132812 0-185.542968-80.101563-190.867187-180.90625-.179688 3.390625-.277344 6.800781-.277344 10.238281 0 105.566406 85.578125 191.148438 191.144531 191.148438s191.148438-85.582032 191.148438-191.148438c0-3.4375-.101563-6.847656-.28125-10.238281-5.320313 100.804687-88.734375 180.90625-190.867188 180.90625zm0 0" fill="#0f65e5"/>
            <path d="m197.972656 395.945312c-109.164062 0-197.972656-88.8125-197.972656-197.972656 0-3.558594.105469-7.085937.289062-10.597656.195313-3.628906 3.1875-6.46875 6.816407-6.46875 3.632812 0 6.628906 2.839844 6.816406 6.46875 5.164063 97.816406 86.007813 174.4375 184.050781 174.4375 98.042969 0 178.886719-76.621094 184.050782-174.4375.191406-3.628906 3.1875-6.46875 6.816406-6.46875s6.625 2.839844 6.816406 6.46875c.1875 3.511719.289062 7.039062.289062 10.597656 0 109.160156-88.808593 197.972656-197.972656 197.972656zm-141.199218-79.617187c33.835937 40.304687 84.574218 65.964844 141.199218 65.964844s107.363282-25.660157 141.199219-65.964844c-35.988281 36.570313-86.066406 59.136719-141.199219 59.136719-55.132812 0-105.207031-22.566406-141.199218-59.136719zm0 0" fill="#0e65e5"/>
            <path d="m40.960938 204.800781c-3.769532 0-6.828126-3.054687-6.828126-6.828125 0-90.339844 73.5-163.839844 163.839844-163.839844 3.769532 0 6.828125 3.054688 6.828125 6.828126 0 3.773437-3.058593 6.824218-6.828125 6.824218-82.8125 0-150.1875 67.375-150.1875 150.1875 0 3.773438-3.054687 6.828125-6.824218 6.828125zm0 0" fill="#fff"/>
            <path d="m189.898438 273.953125c-2.03125-2.105469-3.019532-4.679687-2.957032-7.707031l1.988282-102.492188c.058593-3.027344 1.144531-5.59375 3.253906-7.707031 2.113281-2.113281 4.679687-3.140625 7.707031-3.082031 3.1875.058594 5.796875 1.152344 7.828125 3.261718 2.027344 2.109376 3.015625 4.757813 2.953125 7.945313l-1.988281 102.492187c-.058594 3.027344-1.183594 5.5625-3.375 7.585938-2.191406 2.035156-4.800782 3.015625-7.828125 2.953125-3.027344-.0625-5.554688-1.136719-7.582031-3.25zm1.445312-148.394531c-2.34375-2.441406-3.484375-5.332032-3.417969-8.679688l.015625-.953125c.070313-3.347656 1.316406-6.1875 3.75-8.519531 2.4375-2.347656 5.324219-3.488281 8.671875-3.421875l1.433594.027344c3.347656.066406 6.191406 1.316406 8.53125 3.753906 2.34375 2.425781 3.480469 5.3125 3.414063 8.660156l-.015626.953125c-.066406 3.347656-1.3125 6.195313-3.746093 8.539063-2.4375 2.339843-5.328125 3.488281-8.675781 3.421875l-1.433594-.027344c-3.34375-.066406-6.183594-1.320312-8.527344-3.753906zm0 0" fill="#0e65e5"/><path d="m307.199219 395.945312h-95.574219c-3.769531 0-6.824219-3.050781-6.824219-6.824218 0-3.773438 3.054688-6.828125 6.824219-6.828125h95.574219c3.769531 0 6.828125 3.054687 6.828125 6.828125 0 3.773437-3.058594 6.824218-6.828125 6.824218zm0 0" fill="#0e65e5"/><g fill="#fff">
            <path d="m293.546875 354.988281c-3.769531 0-6.828125-3.054687-6.828125-6.828125v-27.308594c0-3.773437 3.058594-6.824218 6.828125-6.824218s6.828125 3.050781 6.828125 6.824218v27.308594c0 3.773438-3.058594 6.828125-6.828125 6.828125zm0 0"/><path d="m307.199219 341.332031h-27.304688c-3.769531 0-6.828125-3.050781-6.828125-6.824219 0-3.773437 3.058594-6.828124 6.828125-6.828124h27.304688c3.769531 0 6.828125 3.054687 6.828125 6.828124 0 3.773438-3.058594 6.824219-6.828125 6.824219zm0 0"/></g>
          </svg>

  </svg>

      <v-dialog
        v-model="dialog"
        width="500"
        >
        <v-card class="textModalInfo">
          <v-card-title
            class="headline blue-grey darken-4 textModalInfo"
            primary-title
          >
            ENEV (Etimología de los Nombres de los Estados de Venezuela)
          </v-card-title>

          <v-card-text class="teal darken-1">
            <h2>Agradecimientos</h2>
            <h3>- A mis padres y hermana sin ellos no estuviera aquí ni realizando esto.</h3>
            <h3>- Al Internet, <a href="https://developer.mozilla.org/en-US/">MDN</a> .</h3>
            <h3>- <a href="https://developer.mozilla.org/en-US/">Wikipedia</a> por las imagenes y svg's.</h3>
            <h3>- Icono de ayuda hecho por <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> </h3>
            <h3>- <a href="https://www.elblogderubencho.com/2013/07/el-significado-de-los-nombres-de-los.html">El Blog de Rubencho</a>, <a href="https://plus.google.com/114363379807731088864">Argenis Méndez</a> es donde proviene el contenido. </h3>
            <h3>- Creador <span><a  href="https://twitter.com/arthard101">Eulier González</a></span> . Mi <a href="https://github.com/reilue/">Github</a>, Mi <a href="https://stackoverflow.com/users/story/5692051">StackOverflow</a>. Mi <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">Linkeind</a>   </h3> 
          </v-card-text>

        </v-card>
      </v-dialog>
</div>
</template>


<script>
import { parseSVG } from "../mixins/parsesvg";
import { Observable } from 'rxjs'
import { pipe, from, of } from 'rxjs'
import { mergeMap, concatMap, delay } from 'rxjs/operators'


export default {
  mixins: [parseSVG],
  data() {
    return {
      svgMap: [],
      islands:[],
      others: [],
      width: 0,
      height: 0,
      animation: 'fadeOut-animation',
      fadeAfterMap: false,
      dialog: false
    };
  },
  computed: {
    showInitialLoadling : function() {
      return this.$store.getters.getInitialLoading
    }
  },
  mounted() {
    this.$store.dispatch('fetchAllStates')
    this.$store.dispatch('fetchIslandsSVG')
    this.$store.dispatch('fetchOthersSVG')

    this.width = window.innerWidth
    this.height = window.innerHeight

    let stateClass
    let delayAnimation = 750
    let states

    if ( this.showInitialLoadling ) {
      delayAnimation = 5500
    }

    setTimeout( () => {

      states = this.$store.getters.loadedStates
      /** Using Observable to Animate svg map with <transition-group> 
       * by pushing into an array  */
      new Observable( obs => {
        obs.next(states)
        obs.complete()
      }).pipe(
        // make observable to emit each element of the array (not the whole array)
        mergeMap((x) => from(x)),
        // delay each element by n milisec
        concatMap(x => { 
          console.log("concatMap",this.showInitialLoadling)
          let 
          delayEmit = ((Math.random() * 3) + (Math.random() * 7) ) + 10 ; 
          return of(x).pipe(delay(delayEmit))}
        ),
      )
      .subscribe( (state) => {
        stateClass = this.addAtributeToStringSVGElement(state.svg, {key: 'class', value: 'state'})
        let parser = new DOMParser()
        let parseSvg = parser.parseFromString(stateClass, "image/svg+xml")
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
        //console.log('svgMap',this.svgMap[0])
      })
      /** Animate others svg elements */
      setTimeout( () => {
        this.islands = this.parseStringSVGElements(this.$store.getters.getSVGIslands)
        this.others = this.parseStringSVGElements(this.$store.getters.getSVGOthers)
        this.fadeAfterMap = true
      }, 500)

      this.$store.dispatch('setInitialLoading', false)

    }, delayAnimation)

  },
  methods: {
    goToDetail: function(state) {
      //console.log('goToDetail', state.name)

      let islandLen = this.islands.length
      let otherLen = this.others.length
      let svgMapLen = this.svgMap.length

      if (state.id !== 23) {
        this.fadeAfterMap = false
        let index = 0
        for (let i = 0; i < islandLen; i++) {
          this.islands.pop()
        }
        for (let j = 0; j < otherLen; j++) {
          this.others.pop()
        }

        this.svgMap = [{name:state.name , id: state.id , SVGOM: state.SVGOM}]

        setTimeout( () => {
          this.svgMap = []
          console.log(state)
          this.$router.push({path: `/stateInfo/${state.name}` })
        }, 1550)
      }

    },
  }
};
</script>

<style scoped>

h1 {
  font-family: "Rock Salt", sans-serif !important;
    text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
}


.textModalInfo {
  font-family: "Trykker", sans-serif !important;
}

.state:hover {
  animation: translate .35s ease-in forwards;
}

a {
  text-decoration: none;
  opacity: .7;
}

span {
  	font: 900 1.2rem "Rock Salt", sans-serif !important;
  	letter-spacing: 0;
  	padding: .25em 0 .325em;
	  display: inline-block;
	  margin: 0 auto;
}

span a {
  color: black
}

@keyframes aitf {
	0% { background-position: 0% 50%; }
	100% { background-position: 100% 50%; }
}

.displayMap{
  opacity: 0;
  fill-opacity: 0;
  animation: showMap 1s ease-in forwards;
}

.initialtitle {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

.initialtitle::before {
  position:absolute;
  width: 100vw;
  padding-bottom: 5.5rem;
  margin-bottom: 5.5rem;
  background-color: #303030;

  content:"";
  animation: slide-up 3.7s ease-in 1.5s forwards;
}

.initialtitle::after {
  position:absolute;
  width: 100vw;
  padding-bottom: 5.5rem;
  margin-top: 5.5rem;
  background-color: #303030;

  content:"";
  animation: slide-down 3.7s ease-in 1.5s forwards;
}

.fade-enter-active {
  animation: fade-in-custom 4s ease-in forwards;
}

.fadeaftermap-enter {
  visibility: hidden;
  fill-opacity: 0;
}

.fadeaftermap-enter-active {
  transition: all 1s ease-in 5s;
}

.fadeaftermap-enter-to {
  visibility: visible;
  fill-opacity: 1;
}

.fade-leave-active {
  animation: fade-out-custom .5s ease-in forwards;
}

.fadeaftermap-leave {
  fill-opacity: 1;
}

.fadeaftermap-leave-active {
  transition: all .5s ease-in ;
}

.fadeaftermap-leave-to {
  fill-opacity: 0;
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
     90% {
    opacity: 1;
  }
   to {
     fill-opacity: 0;
   }
 }

@keyframes slide-up {
  from {
    opacity: 1;
    transform: translateY(0)
  }
  90% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-150px);
    display: none
  }
}

@keyframes slide-down {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  30% {
    transform: translateY(20px);
    opacity: 0.1;
  }
  to {
    opacity: 0;
    transform: translateY(20px);
    display: none;
  }
}

@keyframes slide-down-desktop {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(150px);
    display: none
  }
}

@keyframes showMap {
  from {
    opacity: 0;
    fill-opacity: 0;
  }
  to {
    opacity: 1;
    fill-opacity: 1;
  }
}

@media (min-width: 767px) {
  .initialtitle {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
  }

  .initialtitle:before {
    position:absolute;
    width: 100vw;
    height: 8rem;
    background-color: #303030;
    content:"";
    animation: slide-up 2.3s ease-in 1.5s forwards;
  }

  .initialtitle:after {
    position:absolute;
    width: 100vw;
    margin-top: 3rem;
    height: 3rem;
    background-color: #303030;
    content:"";
    animation: slide-down-desktop 2.3s ease-in 1.5s forwards;
  }
}

@keyframes translate {
  from {
    fill-opacity: .7;
    transform: translate(0px);
  }
  to {
    fill-opacity: 1;
    transform: translate(2px);
  }
}

</style>
