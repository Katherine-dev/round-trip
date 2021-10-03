import { Component, Prop, Vue } from 'vue-property-decorator';
import { map as LeafletMap, Map, tileLayer as LeafletTileLayer } from 'leaflet';
import mapConfig from '@/assets/map.json';

@Component
export default class MapComponents extends Vue {
  @Prop({ type: Number, default: mapConfig.default.lat })
  protected lat!: number;

  @Prop({ type: Number, default: mapConfig.default.lng })
  protected lng!: number;

  @Prop({ type: Number, default: mapConfig.default.zoom })
  protected zoom!: number;

  protected map: Map | null = null;

  mounted() {
    // init leaflet map
    this.map = LeafletMap('main-map');
    this.map.setView({
      lat: this.lat,
      lng: this.lng,
    }, this.zoom);
    // set tiles
    const tileLayer = LeafletTileLayer(process.env.VUE_APP_MAP_TILE_LAYER, {
      attribution: process.env.VUE_APP_MAP_COPYRIGHT,
    });
    // add tiles to map
    tileLayer.addTo(this.map);
  }
}
