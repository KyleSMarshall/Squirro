return Widgets.Base.extend({
afterRender() {
    const react = this.customResources['react.js'];
    this.setReactChartView(react);
}
});
