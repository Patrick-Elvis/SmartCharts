import TimeperiodStore from './TimeperiodStore';
import ChartStore from './ChartStore';
import ChartTypeStore from './ChartTypeStore';
import StudyLegendStore from './StudyLegendStore';
import ComparisonStore from './ComparisonStore';
import DrawToolsStore from './DrawToolsStore';
import ChartTitleStore from './ChartTitleStore';
import AssetInformationStore from './AssetInformationStore';
import ComparisonListStore from './ComparisonListStore';
import ViewStore from './ViewStore';
import CrosshairStore from './CrosshairStore';
import ShareStore from './ShareStore';
import ChartSettingStore from './ChartSettingStore';
import LoaderStore from './LoaderStore';
import FavoriteStore from './FavoriteStore';
import ChartSizeStore from './ChartSizeStore';
import RoutingStore from './RoutingStore';
import CurrentSpotStore from './CurrentSpotStore';
import DrawingCursorStore from './DrawingCursorStore';
import ChartState from './ChartState';
import Notifier from './Notifier';
import ChartTableStore from './ChartTableStore';

export default class MainStore {
    notifier = new Notifier();
    favorites = FavoriteStore.getInstance();
    chart = new ChartStore(this);
    state = new ChartState(this);
    chartType = new ChartTypeStore(this);
    studies = new StudyLegendStore(this);
    comparison = new ComparisonStore(this);
    drawTools = new DrawToolsStore(this);
    chartTitle = new ChartTitleStore(this);
    timeperiod = new TimeperiodStore(this);
    assetInformation = new AssetInformationStore(this);
    comparisonList = new ComparisonListStore(this);
    view = new ViewStore(this);
    crosshair = new CrosshairStore(this);
    share = new ShareStore(this);
    chartSetting = new ChartSettingStore(this);
    loader = new LoaderStore();
    chartSize = new ChartSizeStore(this);
    routing = new RoutingStore(this);
    currentSpot = new CurrentSpotStore(this);
    drawingCursor = new DrawingCursorStore(this);
    chartTable = new ChartTableStore(this);
}
