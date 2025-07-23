new TradingView.widget({
    "autosize": true,
    "symbol": "BINANCE:BTCUSDT",
    "interval": "1",
    "timezone": "Etc/UTC",
    "theme": "light", // Для прозрачности
    "style": "1",
    "container_id": "tradingview-chart",
    "hide_top_toolbar": true,
    "hide_side_toolbar": true,
    "hide_legend": true, // Скрыть легенду
    "studies_overrides": {
        "volume.volume.color.0": "rgba(0,0,0,0)",
        "volume.volume.color.1": "rgba(0,0,0,0)"
    },
    "overrides": {
        "paneProperties.background": "rgba(0,0,0,0)", // Прозрачный фон
        "paneProperties.vertGridProperties.color": "rgba(0,0,0,0)",
        "paneProperties.horzGridProperties.color": "rgba(0,0,0,0)",
        "scalesProperties.textColor": "rgba(0,0,0,0)",
        "mainSeriesProperties.candleStyle.upColor": "#089981",
        "mainSeriesProperties.candleStyle.downColor": "#f23645",
        "mainSeriesProperties.candleStyle.borderUpColor": "#089981",
        "mainSeriesProperties.candleStyle.borderDownColor": "#f23645",
        "mainSeriesProperties.candleStyle.wickUpColor": "#089981",
        "mainSeriesProperties.candleStyle.wickDownColor": "#f23645"
    }
});
